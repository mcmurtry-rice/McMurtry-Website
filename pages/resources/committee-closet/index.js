import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import './index.css';
import { mailHref, MAIL_TARGET } from '../../../tools/emailLink';

// Live source: the Inventory tab of the "McMurtry Committee Closet Storage"
// sheet, which is shared "anyone with the link can view". The CSV export
// endpoint returns the tab's displayed values and sends CORS headers, so
// sheet edits show up on the next page load with no redeploy. (gviz/tq is
// avoided on purpose: it guesses a type per column and blanks out cells that
// don't match it.)
const SHEET_ID = '1GYQ_-UCTlZG4FN2wvIzDueyJhKUCUCAyLbgYcexPmzk';
const INVENTORY_GID = '2123946879';
const csvUrl = (gid) => `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;

// Mirrors the sheet's conditional format on Last Inventoried.
const STALE_AFTER_DAYS = 180;

// Inventory columns shown on the page, matched to the sheet by header text so
// reordering columns there doesn't break anything.
const COLUMNS = [
    { key: 'name', label: 'Item Name' },
    { key: 'description', label: 'Description' },
    { key: 'category', label: 'Category' },
    { key: 'qty', label: 'Qty' },
    { key: 'unit', label: 'Unit' },
    { key: 'committee', label: 'Committee' },
    { key: 'lastInventoried', label: 'Last Inventoried' },
    { key: 'notes', label: 'Notes' },
];

// Sheet dates display as M/D/YYYY.
const isStale = (display) => {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(display || '');
    if (!m) return false;
    const t = new Date(+m[3], m[1] - 1, +m[2]).getTime();
    return Date.now() - t > STALE_AFTER_DAYS * 24 * 60 * 60 * 1000;
};

// RFC 4180 CSV -> array of rows (handles quoted commas, quotes, newlines).
const parseCsv = (text) => {
    const rows = [];
    let row = [];
    let field = '';
    let quoted = false;
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (quoted) {
            if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
            else if (ch === '"') quoted = false;
            else field += ch;
        } else if (ch === '"') quoted = true;
        else if (ch === ',') { row.push(field); field = ''; }
        else if (ch === '\n' || ch === '\r') {
            if (ch === '\r' && text[i + 1] === '\n') i++;
            row.push(field); rows.push(row); row = []; field = '';
        } else field += ch;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    return rows;
};

const parseInventory = (rows) => {
    const header = (rows[0] || []).map((h) => h.trim());
    const index = {};
    COLUMNS.forEach(({ key, label }) => {
        const i = header.indexOf(label);
        if (i !== -1) index[key] = i;
    });
    if (index.name === undefined) return [];
    return rows.slice(1)
        .map((row) => {
            const item = {};
            Object.keys(index).forEach((key) => { item[key] = (row[index[key]] || '').trim(); });
            return item;
        })
        .filter((item) => item.name);
};

const fetchTab = (gid) => fetch(csvUrl(gid)).then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.text();
}).then(parseCsv);

const uniqueSorted = (items, key) =>
    Array.from(new Set(items.map((i) => i[key]).filter(Boolean))).sort((a, b) => a.localeCompare(b));

// Dropdown-style columns (Category, Unit, Committee) render as pastel chips.
// Colors are picked automatically: each value hashes to a slot in this list,
// so a value keeps its color between visits and new values need no setup.
const PASTELS = [
    '#fde2e4', '#fad2e1', '#f8d7e8', '#f3d9f4', '#ead9f7', '#e2dcf9', '#dbe0fb', '#d6e6fc',
    '#d2ecfb', '#cfeff5', '#cdf2ec', '#cff3e0', '#d5f3d4', '#dff3c9', '#eaf2c3', '#f4f0c0',
    '#fbecc1', '#fde5c5', '#fddccb', '#fdd5d0', '#f9c9cf', '#f5c6dc', '#edc8ea', '#e0caf2',
    '#d3cdf6', '#c8d3f8', '#c0dbf8', '#bbe3f5', '#b9eaee', '#b9eee2', '#beefd3', '#c8efc3',
    '#d6eeb6', '#e4ecae', '#f1e8ab', '#f9e1ad', '#fcd8b3', '#fccebb', '#fbc6c4', '#f1d4d4',
    '#ecd9cf', '#e8dfcb', '#e3e5cc', '#dbe8d3', '#d3e8dc', '#d0e6e6', '#d3e1ee', '#dbdcf0',
    '#e4d9ee', '#ecd7e7', '#e9e2f4', '#e0eef6', '#e1f4ee', '#eaf5e0', '#f6f3dc', '#f9eadf',
];

const hashText = (text) => {
    let h = 0;
    for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
    return h;
};

// value -> pastel. On a hash clash the later value (alphabetically) moves to
// the next free slot, so two values only share a color once the list runs out.
const assignPastels = (values) => {
    const used = new Set();
    const colors = {};
    values.forEach((value) => {
        let slot = hashText(value) % PASTELS.length;
        for (let n = 0; used.has(slot) && n < PASTELS.length; n++) slot = (slot + 1) % PASTELS.length;
        used.add(slot);
        colors[value] = PASTELS[slot];
    });
    return colors;
};

const CHIP_KEYS = ['category', 'unit', 'committee'];

const CommitteeClosetPage = () => {
    const [inventory, setInventory] = useState([]);
    const [status, setStatus] = useState('loading'); // loading | ready | error
    const [query, setQuery] = useState('');
    const [committee, setCommittee] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        let cancelled = false;
        fetchTab(INVENTORY_GID)
            .then((rows) => {
                if (cancelled) return;
                setInventory(parseInventory(rows));
                setStatus('ready');
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.warn('Committee closet sheet fetch failed:', err.message);
                if (!cancelled) setStatus('error');
            });
        return () => { cancelled = true; };
    }, []);

    const committees = useMemo(() => uniqueSorted(inventory, 'committee'), [inventory]);
    const categories = useMemo(() => uniqueSorted(inventory, 'category'), [inventory]);
    const chipColors = useMemo(() => {
        const byKey = {};
        CHIP_KEYS.forEach((key) => { byKey[key] = assignPastels(uniqueSorted(inventory, key)); });
        return byKey;
    }, [inventory]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return inventory.filter((item) => {
            if (committee && item.committee !== committee) return false;
            if (category && item.category !== category) return false;
            if (!q) return true;
            return COLUMNS.some(({ key }) => (item[key] || '').toLowerCase().includes(q));
        });
    }, [inventory, query, committee, category]);

    return (
        <div className='page page-light'>
            <Header />
            <SiteNavbar />
            <div className='closet-page'>

                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Committee Closet</h1>
                    <p className='ev-hero-lede'>Everything stored in the McMurtry committee closet, live from the committee inventory sheet.</p>
                </header>

                {status === 'loading' && (
                    <p className='cc-status' role='status'>Loading the latest inventory&hellip;</p>
                )}

                {status === 'error' && (
                    <p className='cc-status cc-status-error' role='alert'>
                        The inventory couldn&rsquo;t be loaded right now. Please try again later.
                    </p>
                )}

                {status === 'ready' && (
                    <section className='cc-section' aria-labelledby='cc-inventory-heading'>
                        <div className='cc-section-head'>
                            <h2 id='cc-inventory-heading' className='cc-heading'>Inventory</h2>
                            <span className='cc-updated'>
                                {filtered.length} of {inventory.length} item{inventory.length === 1 ? '' : 's'}
                            </span>
                        </div>

                        <div className='cc-filters'>
                            <label className='cc-filter cc-filter-search'>
                                <span>Search</span>
                                <input
                                    type='search'
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder='Item, description, notes&hellip;'
                                />
                            </label>
                            <label className='cc-filter'>
                                <span>Committee</span>
                                <select
                                    value={committee}
                                    onChange={(e) => setCommittee(e.target.value)}
                                    style={{ backgroundColor: chipColors.committee[committee] }}
                                >
                                    <option value=''>All committees</option>
                                    {committees.map((c) => (
                                        <option key={c} value={c} style={{ backgroundColor: chipColors.committee[c] }}>{c}</option>
                                    ))}
                                </select>
                            </label>
                            <label className='cc-filter'>
                                <span>Category</span>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    style={{ backgroundColor: chipColors.category[category] }}
                                >
                                    <option value=''>All categories</option>
                                    {categories.map((c) => (
                                        <option key={c} value={c} style={{ backgroundColor: chipColors.category[c] }}>{c}</option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        {filtered.length === 0 ? (
                            <p className='cc-empty'>
                                {inventory.length === 0 ? 'No items have been logged yet.' : 'No items match those filters.'}
                            </p>
                        ) : (
                            <div className='cc-table-wrap'>
                                <table className='cc-table'>
                                    <thead>
                                        <tr>{COLUMNS.map(({ key, label }) => <th key={key} scope='col' className={`cc-th-${key}`}>{label}</th>)}</tr>
                                    </thead>
                                    <tbody>
                                        {filtered.map((item, i) => (
                                            <tr key={`${item.name}-${i}`}>
                                                {COLUMNS.map(({ key, label }) => {
                                                    const value = item[key] || '';
                                                    let content = value;
                                                    let cls = `cc-col-${key}`;
                                                    if (CHIP_KEYS.includes(key) && value) {
                                                        content = <span className='cc-chip' style={{ backgroundColor: chipColors[key][value] }}>{value}</span>;
                                                    }
                                                    if (key === 'lastInventoried' && isStale(item.lastInventoried)) {
                                                        cls += ' cc-stale';
                                                        content = <span title={`Not counted in ${STALE_AFTER_DAYS}+ days`}>{value}</span>;
                                                    }
                                                    return (
                                                        <td key={key} className={cls} data-label={label}>
                                                            {content || <span className='cc-blank'>&ndash;</span>}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            )}
                        </section>
                )}

                <div className='cc-contact-row'>
                    <p>Want to borrow something? Use <Link href='/resources/mcitems-checkout'><a className='cc-inline-link'>McItems Checkout</a></Link>, or reach out with questions.</p>
                    <a href={mailHref('mcmsecretary@gmail.com')} {...MAIL_TARGET} className='cc-contact-email'>mcmsecretary@gmail.com</a>
                </div>

            </div>
            <SiteFooter />
        </div>
    );
};

export default CommitteeClosetPage;
