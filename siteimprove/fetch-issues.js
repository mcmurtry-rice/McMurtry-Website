#!/usr/bin/env node
/*
 * Siteimprove issue fetcher.
 *
 * Pulls every accessibility, QA, PDF, and SEO issue for the configured site
 * and writes them as JSON files under siteimprove/data/ for offline review.
 *
 * Usage:
 *   1. Copy siteimprove/.env.example to siteimprove/.env and fill in values.
 *   2. node siteimprove/fetch-issues.js
 *
 * The script is read-only against the Siteimprove API. Output is gitignored.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname);
const DATA_DIR = path.join(ROOT, 'data');
const ENV_PATH = path.join(ROOT, '.env');

loadDotEnv(ENV_PATH);

const USERNAME = process.env.SITEIMPROVE_USERNAME;
const API_KEY = process.env.SITEIMPROVE_API_KEY;
const SITE_HOST = process.env.SITEIMPROVE_SITE_HOST || 'mcmurtry.rice.edu';
const SITE_ID_OVERRIDE = process.env.SITEIMPROVE_SITE_ID || '';
const REGION = (process.env.SITEIMPROVE_REGION || 'us').toLowerCase();
const PAGE_SIZE = Number(process.env.SITEIMPROVE_PAGE_SIZE || 1000);
const MAX_DETAIL_ISSUES = Number(process.env.SITEIMPROVE_MAX_DETAIL_ISSUES || 200);

const BASE_URL =
  REGION === 'eu'
    ? 'https://api.eu.siteimprove.com/v2'
    : 'https://api.siteimprove.com/v2';

if (!USERNAME || !API_KEY) {
  console.error(
    'Missing SITEIMPROVE_USERNAME or SITEIMPROVE_API_KEY. ' +
      'Create siteimprove/.env from siteimprove/.env.example.'
  );
  process.exit(1);
}

const AUTH_HEADER =
  'Basic ' + Buffer.from(`${USERNAME}:${API_KEY}`).toString('base64');

async function main() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const summary = {
    fetched_at: new Date().toISOString(),
    site_host: SITE_HOST,
    region: REGION,
    base_url: BASE_URL,
    counts: {},
    errors: [],
  };

  const siteId = SITE_ID_OVERRIDE || (await resolveSiteId(SITE_HOST));
  summary.site_id = siteId;
  console.log(`Site: ${SITE_HOST} -> id ${siteId}`);

  const tasks = [
    // Accessibility
    { name: 'accessibility-summary', path: `/sites/${siteId}/accessibility/overview/summary` },
    { name: 'accessibility-issues', path: `/sites/${siteId}/accessibility/issues`, paginated: true },
    { name: 'accessibility-pages', path: `/sites/${siteId}/accessibility/pages`, paginated: true },
    { name: 'accessibility-pdf-validation', path: `/sites/${siteId}/accessibility/validation/pdf`, paginated: true },
    { name: 'accessibility-html-validation', path: `/sites/${siteId}/accessibility/validation/html`, paginated: true },
    { name: 'accessibility-css-validation', path: `/sites/${siteId}/accessibility/validation/css`, paginated: true },

    // QA - broken links
    { name: 'qa-broken-links', path: `/sites/${siteId}/quality_assurance/links/broken_links`, paginated: true },
    { name: 'qa-broken-links-in-documents', path: `/sites/${siteId}/quality_assurance/links/broken_links_in_documents`, paginated: true },
    { name: 'qa-pages-with-broken-links', path: `/sites/${siteId}/quality_assurance/links/pages_with_broken_links`, paginated: true },
    { name: 'qa-documents-with-broken-links', path: `/sites/${siteId}/quality_assurance/links/documents_with_broken_links`, paginated: true },

    // QA - spelling
    { name: 'qa-misspellings', path: `/sites/${siteId}/quality_assurance/spelling/misspellings`, paginated: true },
    { name: 'qa-potential-misspellings', path: `/sites/${siteId}/quality_assurance/spelling/potential_misspellings`, paginated: true },
    { name: 'qa-words-to-review', path: `/sites/${siteId}/quality_assurance/spelling/words_to_review`, paginated: true },

    // SEO
    { name: 'seo-summary', path: `/sites/${siteId}/seo/overview/summary` },
    { name: 'seo-issues', path: `/sites/${siteId}/seo/issues`, paginated: true },
    { name: 'seo-pages', path: `/sites/${siteId}/seo/pages`, paginated: true },
  ];

  for (const task of tasks) {
    try {
      const items = task.paginated
        ? await fetchAllPages(task.path)
        : await fetchJson(task.path);
      writeJson(task.name, items);
      const count = Array.isArray(items) ? items.length : countItems(items);
      summary.counts[task.name] = count;
      console.log(`  ${task.name}: ${count}`);
    } catch (err) {
      console.error(`  ${task.name}: FAILED — ${err.message}`);
      summary.errors.push({ task: task.name, message: err.message });
    }
  }

  // Drill into each accessibility issue to capture the affected-pages list.
  await fetchAccessibilityIssueDetails(siteId, summary);

  fs.writeFileSync(
    path.join(DATA_DIR, '_summary.json'),
    JSON.stringify(summary, null, 2)
  );
  console.log('\nDone. See siteimprove/data/_summary.json');
}

async function resolveSiteId(host) {
  const sites = await fetchAllPages('/sites');
  const normalized = (h) => String(h || '').replace(/^https?:\/\//, '').replace(/\/$/, '').toLowerCase();
  const target = normalized(host);
  const match = sites.find((s) => normalized(s.url).includes(target) || normalized(s.site_name) === target);
  if (!match) {
    const available = sites.map((s) => `  - ${s.id}: ${s.url || s.site_name}`).join('\n');
    throw new Error(
      `Could not resolve site for host "${host}". Sites available:\n${available}\n` +
        'Set SITEIMPROVE_SITE_ID in .env to pick one explicitly.'
    );
  }
  return match.id;
}

async function fetchAccessibilityIssueDetails(siteId, summary) {
  const issuesPath = path.join(DATA_DIR, 'accessibility-issues.json');
  if (!fs.existsSync(issuesPath)) return;
  const issues = JSON.parse(fs.readFileSync(issuesPath, 'utf8'));
  if (!Array.isArray(issues) || issues.length === 0) return;

  const detailsDir = path.join(DATA_DIR, 'accessibility-issue-pages');
  fs.mkdirSync(detailsDir, { recursive: true });

  const subset = issues.slice(0, MAX_DETAIL_ISSUES);
  console.log(`\nFetching affected pages for ${subset.length} accessibility issues...`);
  let done = 0;
  for (const issue of subset) {
    const sc = issue.success_criterion;
    const checkId = issue.check_id;
    if (!sc || !checkId) continue;
    const fileSlug = `${sc}__${checkId}`.replace(/[^a-z0-9._-]/gi, '_');
    const outPath = path.join(detailsDir, `${fileSlug}.json`);
    try {
      const pages = await fetchAllPages(
        `/sites/${siteId}/accessibility/issues/${encodeURIComponent(sc)}/${encodeURIComponent(checkId)}/pages`
      );
      fs.writeFileSync(outPath, JSON.stringify({ issue, pages }, null, 2));
      done += 1;
    } catch (err) {
      summary.errors.push({
        task: `accessibility-issue-pages/${fileSlug}`,
        message: err.message,
      });
    }
  }
  summary.counts['accessibility-issue-pages'] = done;
  console.log(`  accessibility-issue-pages: ${done}`);
}

async function fetchAllPages(apiPath) {
  let page = 1;
  const all = [];
  while (true) {
    const url = appendQuery(apiPath, { page, page_size: PAGE_SIZE });
    const body = await fetchJson(url);
    const items = body && body.items ? body.items : [];
    all.push(...items);
    const total = body && body.total_pages ? body.total_pages : 1;
    if (page >= total || items.length === 0) break;
    page += 1;
  }
  return all;
}

async function fetchJson(apiPath) {
  const url = apiPath.startsWith('http') ? apiPath : `${BASE_URL}${apiPath}`;
  const res = await fetch(url, {
    headers: {
      Authorization: AUTH_HEADER,
      Accept: 'application/hal+json',
      'User-Agent': 'mcmurtry-siteimprove-fetcher/1.0',
    },
  });
  if (res.status === 429) {
    const retry = Number(res.headers.get('retry-after') || 5);
    console.warn(`  rate limited, sleeping ${retry}s`);
    await sleep(retry * 1000);
    return fetchJson(apiPath);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${res.statusText} for ${url} :: ${text.slice(0, 200)}`);
  }
  return res.json();
}

function appendQuery(apiPath, params) {
  const separator = apiPath.includes('?') ? '&' : '?';
  const qs = Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  return qs ? `${apiPath}${separator}${qs}` : apiPath;
}

function writeJson(name, data) {
  fs.writeFileSync(
    path.join(DATA_DIR, `${name}.json`),
    JSON.stringify(data, null, 2)
  );
}

function countItems(body) {
  if (!body || typeof body !== 'object') return 0;
  if (Array.isArray(body)) return body.length;
  if (Array.isArray(body.items)) return body.items.length;
  return Object.keys(body).length;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
