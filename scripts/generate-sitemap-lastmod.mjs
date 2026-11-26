#!/usr/bin/env node
/**
 * Writes src/data/sitemapLastmod.json: for every app route (directory with page.tsx under src/app),
 * the date of the last commit that touched that route's own files ("modified") and the date its
 * page.tsx was first committed ("created"). The XML sitemap uses these as honest <lastmod> values
 * instead of hard-coded constants.
 *
 * Run before deploying when pages change:  npm run sitemap:lastmod   (needs full git history)
 * Commit the regenerated JSON. Routes missing from the JSON get no <lastmod> (better than a fake one).
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const APP = join(ROOT, 'src', 'app');
const OUT = join(ROOT, 'src', 'data', 'sitemapLastmod.json');

// 1. One pass over history: newest-first commits with the files they touched.
const log = execFileSync('git', ['log', '--format=@@%cs', '--name-only', '--', 'src/app'], {
  cwd: ROOT,
  encoding: 'utf8',
  maxBuffer: 1024 * 1024 * 512,
});
const lastTouched = new Map(); // file -> newest commit date
const firstAdded = new Map(); // file -> oldest commit date
let date = '';
for (const line of log.split('\n')) {
  if (line.startsWith('@@')) {
    date = line.slice(2);
  } else if (line.trim()) {
    if (!lastTouched.has(line)) lastTouched.set(line, date);
    firstAdded.set(line, date); // keeps overwriting with older dates
  }
}

// 2. Walk src/app for route directories (those containing page.tsx).
const routes = {};
function walk(dir) {
  const entries = readdirSync(dir);
  if (entries.includes('page.tsx')) {
    const rel = relative(APP, dir).split(sep).filter((s) => s && !(s.startsWith('(') && s.endsWith(')')));
    const route = '/' + rel.join('/');
    // The route's own files: everything directly in this directory (nested routes have their own entry).
    let modified = '';
    for (const name of entries) {
      const full = join(dir, name);
      if (statSync(full).isFile()) {
        const key = relative(ROOT, full).split(sep).join('/');
        const d = lastTouched.get(key);
        if (d && d > modified) modified = d;
      }
    }
    const pageKey = relative(ROOT, join(dir, 'page.tsx')).split(sep).join('/');
    const created = firstAdded.get(pageKey) || '';
    if (modified) routes[route === '/' ? '/' : route] = { modified, created };
  }
  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory() && !name.startsWith('_') && name !== 'api') walk(full);
  }
}
walk(APP);

const sorted = Object.fromEntries(Object.entries(routes).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(OUT, JSON.stringify(sorted, null, 1) + '\n');
console.log(`wrote ${Object.keys(sorted).length} routes to ${relative(ROOT, OUT)}`);
