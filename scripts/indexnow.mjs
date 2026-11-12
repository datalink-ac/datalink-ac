/**
 * Tell the search engines that the site changed.
 *
 * IndexNow (https://www.indexnow.org) is the push protocol Microsoft, Yandex
 * and others support: POST the URLs that changed, they re-crawl. The key has to
 * be verifiable, so it is also served from the site's own root —
 * https://datalink.ac/<key>.txt — which is what the build copies there.
 *
 *   node scripts/indexnow.mjs            # ping every URL in the sitemap
 *   node scripts/indexnow.mjs /spec /zh  # ping only these paths
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://datalink.ac';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const key = (await readFile(path.join(ROOT, 'scripts', 'indexnow.key'), 'utf8')).trim();
if (!key) {
  console.error('no key in scripts/indexnow.key');
  process.exit(1);
}

const args = process.argv.slice(2);
let urls;
if (args.length) {
  urls = args.map((a) => (a.startsWith('http') ? a : ORIGIN + (a.startsWith('/') ? a : '/' + a)));
} else {
  const sitemap = await readFile(path.join(ROOT, 'dist', 'sitemap.xml'), 'utf8');
  urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

if (!urls.length) {
  console.error('nothing to ping — run the build first');
  process.exit(1);
}

console.log(`pinging ${urls.length} url(s) with IndexNow…`);

const res = await fetch(`${ENDPOINT}?key=${encodeURIComponent(key)}`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ host: 'datalink.ac', key, urlList: urls }),
});

const body = (await res.text()).trim();
if (res.ok) {
  console.log(`accepted (${res.status}) ${body || ''}`);
} else {
  console.error(`rejected (${res.status}) ${body}`);
  process.exit(1);
}
