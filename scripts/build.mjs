/**
 * Build the site: content/ + public/ → dist/
 *
 *   content/pages/<lang>/<name>.html   hand-written pages, wrapped in the layout
 *   content/blog/<lang>/<slug>.md       posts, rendered from markdown
 *   public/                             static assets, copied verbatim
 *
 * Every page knows its counterpart in the other language, so the language
 * switcher is a straight path swap: /spec ↔ /zh/spec.
 */

import { readFile, writeFile, mkdir, rm, readdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');
const STATIC = path.join(ROOT, 'public');
const DIST = path.join(ROOT, 'dist');

const LANGS = {
  en: { label: 'English', other: 'zh', htmlLang: 'en', ogLocale: 'en_US' },
  zh: { label: '中文', other: 'en', htmlLang: 'zh-Hans', ogLocale: 'zh_CN' },
};

const SITE = {
  origin: 'https://datalink.ac',
  repo: 'https://github.com/datalink-ac/datalink-ac',
  skill: 'https://clawhub.ai/edwinjhlee/skills/x-cmd-draw',
};

const TODAY = new Date().toISOString().slice(0, 10);

const jsonLdBlock = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

const ORG = { '@type': 'Organization', name: 'datalink.ac', url: SITE.origin };

const NAV = {
  en: [
    { href: '/', label: 'Concept', key: 'home' },
    { href: '/spec', label: 'Spec', key: 'spec' },
    { href: '/blog', label: 'Blog', key: 'blog' },
  ],
  zh: [
    { href: '/zh', label: '理念', key: 'home' },
    { href: '/zh/spec', label: '规范', key: 'spec' },
    { href: '/zh/blog', label: '博客', key: 'blog' },
  ],
};

/* ------------------------------------------------------------------ utils */

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i < 1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
        .join(', ');
    }
    meta[key] = value;
  }
  return { meta, body: m[2] };
}

const slugFrom = (file) => file.replace(/\.md$/, '');

/** /spec ↔ /zh/spec — the same page in the other language. */
function altPath(lang, p) {
  if (lang === 'zh') return p.replace(/^\/zh/, '') || '/';
  return p === '/' ? '/zh' : '/zh' + p;
}

function outPath(urlPath) {
  // flat files: /spec → dist/spec.html — no trailing-slash redirect hop
  if (urlPath === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, urlPath.replace(/^\//, '') + '.html');
}

async function write(out, content) {
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, content);
  return out;
}

/* ------------------------------------------------------------------ pages */

const layout = await readFile(path.join(ROOT, 'src', 'layout.html'), 'utf8');

/** Templates may branch on the language: {{lang === 'zh' ? 'a' : 'b'}} */
function applyTernaries(text, lang) {
  return text.replace(/\{\{lang === 'zh' \? '([^']*)' : '([^']*)'\}\}/g, (_, a, b) => (lang === 'zh' ? a : b));
}

function render({ lang, urlPath, title, desc, content, navKey, extraHead = '', bodyClass = '', jsonLd = '' }) {
  const L = LANGS[lang];
  const nav = NAV[lang]
    .map(
      (n) =>
        `<a class="nav-link${n.key === navKey ? ' is-current' : ''}" href="${n.href}"${
          n.key === navKey ? ' aria-current="page"' : ''
        }>${esc(n.label)}</a>`,
    )
    .join('\n        ');

  const otherLabel = LANGS[L.other].label;
  const alt = altPath(lang, urlPath);

  return applyTernaries(
    layout
    .replaceAll('{{lang}}', lang)
    .replaceAll('{{htmlLang}}', L.htmlLang)
    .replaceAll('{{ogLocale}}', L.ogLocale)
    .replaceAll('{{title}}', esc(title))
    .replaceAll('{{desc}}', esc(desc))
    .replaceAll('{{canonical}}', SITE.origin + urlPath)
    .replaceAll('{{altCanonical}}', SITE.origin + alt)
    .replaceAll('{{altLabel}}', otherLabel)
    .replaceAll('{{altHtmlLang}}', LANGS[L.other].htmlLang)
    .replaceAll('{{altPath}}', alt)
    .replaceAll('{{nav}}', nav)
    .replaceAll('{{bodyClass}}', bodyClass)
    .replaceAll('{{content}}', content)
    .replaceAll('{{extraHead}}', extraHead + jsonLd)
    .replaceAll('{{origin}}', SITE.origin)
    .replaceAll('{{repo}}', SITE.repo)
    .replaceAll('{{skill}}', SITE.skill)
    .replaceAll('{{year}}', String(new Date().getFullYear())),
    lang,
  );
}

/* ------------------------------------------------------------------- build */

const built = []; // { urlPath, lang, title, desc, date }

await rm(DIST, { recursive: true, force: true });

// 1. posts --------------------------------------------------------------
const posts = { en: [], zh: [] };
for (const lang of Object.keys(LANGS)) {
  const dir = path.join(CONTENT, 'blog', lang);
  if (!existsSync(dir)) continue;
  for (const file of await readdir(dir)) {
    if (!file.endsWith('.md')) continue;
    const raw = await readFile(path.join(dir, file), 'utf8');
    const { meta, body } = parseFrontmatter(raw);
    posts[lang].push({
      slug: slugFrom(file),
      title: meta.title || slugFrom(file),
      date: meta.date || '',
      desc: meta.desc || '',
      tags: meta.tags || '',
      html: marked.parse(body),
    });
  }
  posts[lang].sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 2. static assets -------------------------------------------------------
async function copyTree(from, to) {
  if (!existsSync(from)) return;
  for (const entry of await readdir(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dst = path.join(to, entry.name);
    if (entry.isDirectory()) await copyTree(src, dst);
    else {
      await mkdir(path.dirname(dst), { recursive: true });
      await copyFile(src, dst);
    }
  }
}
await copyTree(STATIC, DIST);

// 3. hand-written pages --------------------------------------------------
const pageFiles = [];
for (const lang of Object.keys(LANGS)) {
  const dir = path.join(CONTENT, 'pages', lang);
  if (!existsSync(dir)) continue;
  for (const file of await readdir(dir)) {
    if (!file.endsWith('.html')) continue;
    pageFiles.push({ lang, file, full: path.join(dir, file) });
  }
}

for (const { lang, file, full } of pageFiles) {
  const raw = await readFile(full, 'utf8');
  const { meta, body } = parseFrontmatter(raw);

  let urlPath;
  if (file === 'index.html') urlPath = lang === 'zh' ? '/zh' : '/';
  else if (file === 'blog.html') urlPath = lang === 'zh' ? '/zh/blog' : '/blog';
  else urlPath = (lang === 'zh' ? '/zh/' : '/') + file.replace(/\.html$/, '');

  let content = body;

  // the blog index is generated from the posts
  if (file === 'blog.html') {
    const items = posts[lang]
      .map(
        (p) => `        <article class="post-card">
          <p class="post-meta"><time datetime="${esc(p.date)}">${esc(p.date)}</time>${
            p.tags ? ` · ${esc(p.tags)}` : ''
          }</p>
          <h3><a href="${lang === 'zh' ? '/zh/blog' : '/blog'}/${p.slug}">${esc(p.title)}</a></h3>
          <p class="post-desc">${esc(p.desc)}</p>
        </article>`,
      )
      .join('\n');
    content = content.replace('{{posts}}', items);
  }

  const title = meta.title || 'datalink';
  const desc = meta.desc || 'data in the link';
  const isHome = urlPath === '/' || urlPath === '/zh';
  const jsonLd = jsonLdBlock(
    isHome
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'datalink.ac',
          url: SITE.origin + urlPath,
          description: desc,
          inLanguage: LANGS[lang].htmlLang,
          publisher: ORG,
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          url: SITE.origin + urlPath,
          description: desc,
          inLanguage: LANGS[lang].htmlLang,
          isPartOf: { '@type': 'WebSite', name: 'datalink.ac', url: SITE.origin },
        },
  );
  const html = render({
    lang,
    urlPath,
    title,
    desc,
    content,
    navKey: meta.nav || (urlPath.endsWith('/blog') ? 'blog' : urlPath.includes('spec') ? 'spec' : 'home'),
    bodyClass: meta.bodyClass || '',
    extraHead: meta.extraHead || '',
    jsonLd,
  });

  await write(outPath(urlPath), html);
  built.push({ urlPath, lang, title, desc, date: meta.date || '' });
}

// 4. posts ---------------------------------------------------------------
for (const lang of Object.keys(LANGS)) {
  for (const p of posts[lang]) {
    const urlPath = (lang === 'zh' ? '/zh/blog/' : '/blog/') + p.slug;
    const html = render({
      lang,
      urlPath,
      title: p.title,
      desc: p.desc,
      content: `<article class="post">
        <p class="post-meta"><time datetime="${esc(p.date)}">${esc(p.date)}</time>${p.tags ? ` · ${esc(p.tags)}` : ''}</p>
        <h1 class="post-title">${esc(p.title)}</h1>
        ${p.desc ? `<p class="post-lede">${esc(p.desc)}</p>` : ''}
        <div class="post-body">
${p.html}
        </div>
        <p class="post-back"><a href="${lang === 'zh' ? '/zh/blog' : '/blog'}">← ${lang === 'zh' ? '回到博客' : 'Back to the blog'}</a></p>
      </article>`,
      navKey: 'blog',
      bodyClass: 'is-post',
      jsonLd: jsonLdBlock({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.desc,
        datePublished: p.date,
        dateModified: p.date,
        inLanguage: LANGS[lang].htmlLang,
        url: SITE.origin + urlPath,
        mainEntityOfPage: SITE.origin + urlPath,
        image: SITE.origin + '/assets/og.png',
        author: ORG,
        publisher: ORG,
      }),
    });
    await write(outPath(urlPath), html);
    built.push({ urlPath, lang, title: p.title, desc: p.desc, date: p.date });
  }
}

// 5. 404 + robots + sitemap ---------------------------------------------
const notFound = render({
  lang: 'en',
  urlPath: '/404',
  title: '404 — datalink',
  desc: 'No such link.',
  content: `<section class="section center">
        <h1 class="display-sm">404</h1>
        <p class="lede">No such link. <a href="/">Back to the concept</a> · <a href="/zh">中文</a></p>
      </section>`,
  navKey: '',
});
await write(path.join(DIST, '404.html'), notFound);

await write(
  path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE.origin}/sitemap.xml\n`,
);

const urls = built
  .map((b) => {
    const alts = built
      .filter((o) => altPath(o.lang, o.urlPath) === b.urlPath)
      .map((o) => `    <xhtml:link rel="alternate" hreflang="${LANGS[o.lang].htmlLang}" href="${SITE.origin}${o.urlPath}"/>`)
      .join('\n');
    const lastmod = b.date || TODAY;
    return `  <url>\n    <loc>${SITE.origin}${b.urlPath}</loc>\n    <lastmod>${lastmod}</lastmod>${alts ? '\n' + alts : ''}\n  </url>`;
  })
  .join('\n');
await write(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
);

console.log(`built ${built.length} pages → dist/`);
for (const b of built.sort((a, b2) => a.urlPath.localeCompare(b2.urlPath))) {
  console.log(`  ${b.lang}  ${b.urlPath}`);
}
