#!/usr/bin/env node
/*
 * Siteimprove dashboard scraper (CDP edition).
 *
 * Connects to an existing Chrome instance that's already authenticated against
 * Siteimprove (e.g. via Rice SSO), finds the dashboard tab, bumps every table
 * to the maximum page size, paginates if needed, and writes one JSON file per
 * section under siteimprove/data/dashboard/.
 *
 * Prerequisites:
 *   - Chrome launched with --remote-debugging-port=9222
 *   - The Siteimprove dashboard already loaded in a tab
 *
 * Usage:
 *   node siteimprove/scrape-dashboard.js
 *
 * Environment:
 *   SITEIMPROVE_CDP_URL   default http://localhost:9222
 *   SITEIMPROVE_TAB_URL   optional substring used to pick the Siteimprove tab.
 *                         Defaults to "siteimprove.com".
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = __dirname;
const ENV_PATH = path.join(ROOT, '.env');
const OUT_DIR = path.join(ROOT, 'data', 'dashboard');

loadDotEnv(ENV_PATH);

const CDP_URL = process.env.SITEIMPROVE_CDP_URL || 'http://localhost:9222';
const TAB_MATCH = (process.env.SITEIMPROVE_TAB_URL || 'siteimprove.com').toLowerCase();
const TARGET_PAGE_SIZE = Number(process.env.SITEIMPROVE_TABLE_PAGE_SIZE || 200);

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Connecting to Chrome at ${CDP_URL} ...`);
  const browser = await chromium.connectOverCDP(CDP_URL);
  const contexts = browser.contexts();
  if (contexts.length === 0) throw new Error('No browser contexts found.');

  let page = null;
  for (const ctx of contexts) {
    page = ctx.pages().find((p) => p.url().toLowerCase().includes(TAB_MATCH));
    if (page) break;
  }
  if (!page) {
    const all = contexts.flatMap((c) => c.pages().map((p) => p.url()));
    throw new Error(
      `Could not find a Siteimprove tab (looking for "${TAB_MATCH}").\nOpen tabs:\n  ${all.join('\n  ')}`
    );
  }
  console.log(`Found tab: ${await page.title()}\n  ${page.url()}`);

  // Wait for tables to be present.
  await page.waitForSelector('table', { timeout: 15_000 });
  await page.waitForLoadState('networkidle').catch(() => {});

  const dashboardUrl = page.url();
  const pageTitle = await page.title();

  // Bump every table's page size to the maximum (200) where the control exists.
  const bumped = await bumpAllPageSizes(page, TARGET_PAGE_SIZE);
  console.log(`Bumped page size on ${bumped} table(s) to ${TARGET_PAGE_SIZE}.`);

  // Allow tables to repaint after page-size changes.
  await page.waitForTimeout(1500);
  await page.waitForLoadState('networkidle').catch(() => {});

  // Now scrape every table on the page, walking pagination if necessary.
  const sections = await scrapeAllTables(page);

  // Write per-section JSON files.
  const summary = {
    scraped_at: new Date().toISOString(),
    dashboard_url: dashboardUrl,
    page_title: pageTitle,
    requested_page_size: TARGET_PAGE_SIZE,
    section_count: sections.length,
    sections: [],
  };

  for (const sec of sections) {
    const slug = slugify(sec.heading || `section-${sec.index}`);
    const fileName = `${String(sec.index).padStart(2, '0')}_${slug}.json`;
    fs.writeFileSync(path.join(OUT_DIR, fileName), JSON.stringify(sec, null, 2));
    summary.sections.push({
      file: fileName,
      heading: sec.heading,
      row_count: sec.rows.length,
      counter: sec.counter,
    });
    console.log(`  [${sec.index}] ${sec.heading || '(unknown)'} -> ${sec.rows.length} rows`);
  }

  fs.writeFileSync(
    path.join(OUT_DIR, '_summary.json'),
    JSON.stringify(summary, null, 2)
  );

  console.log(`\nWrote ${sections.length} section file(s) to siteimprove/data/dashboard/`);
  await browser.close();
}

async function bumpAllPageSizes(page, target) {
  let bumped = 0;
  // Re-query fresh each iteration; after a successful bump the table repaints
  // and old handles may become stale.
  let safety = 30;
  while (safety-- > 0) {
    const buttons = await page.locator('button:has-text("items per page")').all();
    let nextBtn = null;
    for (const b of buttons) {
      const label = ((await b.innerText().catch(() => '')) || '').replace(/\s+/g, ' ');
      const m = label.match(/Show\s+(\d+)\s+items per page/i);
      const currentSize = m ? Number(m[1]) : NaN;
      if (currentSize !== target) {
        nextBtn = { handle: b, currentSize };
        break;
      }
    }
    if (!nextBtn) break;

    const ok = await bumpOne(page, nextBtn.handle, nextBtn.currentSize, target);
    if (!ok) {
      // Couldn't bump this one — skip it forever by leaving the rest alone.
      break;
    }
    bumped += 1;
  }
  return bumped;
}

async function bumpOne(page, button, currentSize, target) {
  try {
    await button.scrollIntoViewIfNeeded();
    await button.click({ timeout: 3000 });
  } catch {
    return false;
  }

  let rg;
  try {
    rg = page.locator('div[role="radiogroup"]:visible').last();
    await rg.waitFor({ state: 'visible', timeout: 3000 });
  } catch {
    await page.keyboard.press('Escape').catch(() => {});
    return false;
  }

  // Pick the largest option <= target.
  const labels = await rg.locator('label').all();
  let bestLabel = null;
  let bestValue = -1;
  for (const lab of labels) {
    const text = ((await lab.innerText().catch(() => '')) || '').trim();
    const m = text.match(/(\d+)\s+items?/i);
    if (!m) continue;
    const v = Number(m[1]);
    if (v <= target && v > bestValue) {
      bestLabel = lab;
      bestValue = v;
    }
  }
  if (!bestLabel) {
    await page.keyboard.press('Escape').catch(() => {});
    return false;
  }
  try {
    await bestLabel.click({ timeout: 3000 });
  } catch {
    await page.keyboard.press('Escape').catch(() => {});
    return false;
  }
  await page.waitForTimeout(150);

  // The popover has a "Confirm" button that commits the change. Click any
  // visible button whose exact label is Confirm / Apply (Siteimprove uses
  // "Confirm" today, but accept either to be safe across UI tweaks).
  const applied = await page.evaluate(() => {
    const target = [...document.querySelectorAll('button')].find((b) => {
      if (b.offsetParent === null) return false;
      const t = (b.textContent || '').trim().toLowerCase();
      return t === 'confirm' || t === 'apply';
    });
    if (!target) return false;
    target.click();
    return true;
  });
  if (!applied) {
    await page.keyboard.press('Escape').catch(() => {});
    return false;
  }

  // Wait for the source button's label to update to the new value (proves the
  // table actually re-rendered with the new page size).
  try {
    await page.waitForFunction(
      ({ prev, want }) => {
        const btns = [...document.querySelectorAll('button')].filter((b) =>
          /items per page/i.test(b.textContent || '')
        );
        return btns.some((b) => {
          const t = (b.textContent || '').replace(/\s+/g, ' ');
          const m = t.match(/Show\s+(\d+)\s+items per page/i);
          if (!m) return false;
          const cur = Number(m[1]);
          return cur !== prev && cur === want;
        });
      },
      { prev: currentSize, want: bestValue },
      { timeout: 5000 }
    );
  } catch {
    // Even if we couldn't observe the change, treat as success and move on.
  }
  await page.waitForTimeout(300);
  return true;
}

async function scrapeAllTables(page) {
  // First, capture a stable identifier for each table so we can re-find it
  // after pagination clicks possibly reorder DOM.
  const tableHandles = await page.locator('table').elementHandles();
  const sections = [];

  for (let i = 0; i < tableHandles.length; i++) {
    const handle = tableHandles[i];
    try {
      const meta = await page.evaluate(extractTableMeta, handle);
      const allRows = [...meta.rows];

      // Walk pagination if there's a "Next page" control associated with this table.
      let safety = 50;
      while (safety-- > 0) {
        const nextClicked = await page.evaluate(clickNextPage, handle);
        if (!nextClicked) break;
        await page.waitForTimeout(600);
        const more = await page.evaluate(extractTableMeta, handle);
        if (!more.rows.length) break;
        allRows.push(...more.rows);
      }

      sections.push({
        index: i,
        heading: meta.heading,
        caption: meta.caption,
        counter: meta.counter,
        headers: meta.headers,
        rows: allRows,
      });
    } catch (err) {
      sections.push({
        index: i,
        heading: null,
        error: err.message,
      });
    }
  }

  return sections;
}

// Runs in browser context. Reads the table's heading, caption, headers, row counter, and current rows.
function extractTableMeta(table) {
  function nearestHeading(t) {
    let el = t;
    while (el && el !== document.body) {
      let prev = el.previousElementSibling;
      while (prev) {
        if (/^H[2-4]$/.test(prev.tagName)) return prev.textContent.trim();
        const h = prev.querySelector && prev.querySelector('h2,h3,h4');
        if (h) return h.textContent.trim();
        prev = prev.previousElementSibling;
      }
      el = el.parentElement;
    }
    return '';
  }

  function findCounter(t) {
    let region =
      t.closest(
        'section, [role="region"], [class*="widget"], [class*="Widget"], [class*="Card"], [class*="card"]'
      ) || t.parentElement;
    for (let i = 0; i < 6 && region; i++) {
      const node = [...region.querySelectorAll('*')].find(
        (e) =>
          /\d+\s*-\s*\d+\s+of\s+\d+/.test(e.textContent || '') &&
          e.children.length < 6
      );
      if (node) {
        const m = (node.textContent || '').match(/(\d+)\s*-\s*(\d+)\s+of\s+(\d+)/);
        if (m) return { from: +m[1], to: +m[2], total: +m[3] };
      }
      region = region.parentElement;
    }
    return null;
  }

  const headers = [...table.querySelectorAll('thead th')].map((th) =>
    (th.textContent || '').replace(/\s+/g, ' ').trim()
  );
  const rows = [...table.querySelectorAll('tbody tr')]
    .map((tr) => {
      const cells = [...tr.querySelectorAll('th,td')];
      // Skip "No data" rows.
      const text = cells.map((c) => (c.textContent || '').replace(/\s+/g, ' ').trim());
      if (text.length === 1 && /no data|nothing|no items|empty|no misspellings/i.test(text[0])) {
        return null;
      }
      // Capture cell text + any hrefs.
      return cells.map((c) => {
        const txt = (c.textContent || '').replace(/\s+/g, ' ').trim();
        const links = [...c.querySelectorAll('a[href]')].map((a) => a.href);
        return { text: txt, links };
      });
    })
    .filter(Boolean);

  return {
    heading: nearestHeading(table),
    caption: (table.querySelector('caption')?.textContent || '').trim(),
    counter: findCounter(table),
    headers,
    rows,
  };
}

// Runs in browser context. Finds a "Next page" control associated with this table; clicks it if enabled.
function clickNextPage(table) {
  let region =
    table.closest(
      'section, [role="region"], [class*="widget"], [class*="Widget"], [class*="Card"], [class*="card"]'
    ) || table.parentElement;
  for (let i = 0; i < 6 && region; i++) {
    const btn = [...region.querySelectorAll('button, a')].find((b) => {
      const lab = (b.getAttribute('aria-label') || '').toLowerCase();
      const txt = (b.textContent || '').toLowerCase();
      return (
        /next page|go to next page|next \\d+ items/.test(lab) ||
        /^next$/.test(txt.trim()) ||
        /^›$/.test(txt.trim())
      );
    });
    if (btn) {
      const disabled =
        btn.disabled ||
        btn.getAttribute('aria-disabled') === 'true' ||
        btn.classList.contains('disabled');
      if (disabled) return false;
      btn.click();
      return true;
    }
    region = region.parentElement;
  }
  return false;
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'section';
}

function loadDotEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
