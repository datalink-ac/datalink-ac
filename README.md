# datalink.ac

> **data in the link** — the data lives in the link, not in a picture of it.
>
> A concept site for one idea: a URL can carry the data itself. A person opens
> the link and sees the render; an agent reads the same link and gets the
> numbers. Both work on the same string of characters.

**Live:** https://datalink.ac · 中文：https://datalink.ac/zh
**Spec draft:** https://datalink.ac/spec
**Concept issue:** [#1 — datalink as context](https://github.com/datalink-ac/datalink-ac/issues/1)

## What this is

A concept site, and at the same time a **datalink host**:

| Path | What it is |
|---|---|
| `/`, `/zh`, `/spec`, `/blog`, `/privacy` | The site itself — static pages |
| `/draw?<params>` | A render: a person opens it and sees the picture (SVG) |
| `/draw/<kind>?<params>` | The other renderers: `/draw/arch2`, `/draw/seq`, `/draw/erd`, `/draw/mindmap`, `/draw/echarts`, `/draw/chem`, `/draw/gantt`… |
| `/draw.json?<params>` | The data view: the same link, read as JSON |
| `/explore?<params>` | The interactive editor |
| `/ppt?<params>` | A slide deck (markdown in, deck out) |

Every renderer path is **forwarded to the matching endpoint on x-cmd.com** —
datalink.ac is a door, not a second implementation. The one exception is
`/draw.json`: the renderer has no JSON view of a render yet (see
[x-cmd/draw#24](https://github.com/x-cmd/draw/issues/24)), so the Worker pulls
the render and takes the spec out of the `<metadata>` the renderer embeds in
every output.

The reference implementations are [x-cmd/draw](https://github.com/x-cmd/draw)
(charts and structure diagrams) and [x-cmd/ppt](https://github.com/x-cmd/ppt)
(slide decks). draw is one implementation of datalink.

## How it is hosted

- **The site** is static and lives on **GitHub Pages**. `scripts/build.mjs`
  turns `content/` + `public/` into `dist/`, and the `pages` workflow publishes
  it on every push to `main`. The build also writes `CNAME` (the custom
  domain) and `.nojekyll`.
- **The forwarding edge** is one small **Cloudflare Worker**
  (`worker/index.ts`) on the route `datalink.ac/d*`: it forwards `/draw`,
  `/explore` and `/ppt` to x-cmd.com, serves the data view, and 301s the old
  aliases (`/d`, `/d.json`, `/deck`) to their new paths.
- **On the zone** there are two rules that are configuration rather than code:
  the security headers (CSP, Referrer-Policy, X-Content-Type-Options) and the
  `www.datalink.ac` → `datalink.ac` 301.

The domain is on Cloudflare (Free plan) and points at GitHub Pages, so the
Worker route and the zone rules still apply in front of it.

## Layout

```
content/
  pages/<lang>/*.html     the hand-written pages
  blog/<lang>/*.md        the blog posts (markdown)
src/
  layout.html             the page skeleton
public/                   static assets (css, js, favicon, og.png, manifest)
scripts/
  build.mjs               content/ + public/ → dist/
  indexnow.mjs            pushes the sitemap's URLs (IndexNow)
  make-og.py              regenerates the social preview image (needs Pillow)
worker/
  index.ts                the forwarding edge
mneme/                    the project's memory: notes, decisions, open questions
```

## Working on it

```sh
npm install
npm run build      # content/ + public/ → dist/
npm run dev        # build + wrangler dev
```

## Deploying

```sh
npm run deploy     # build + wrangler deploy (the Worker) + IndexNow push
npm run indexnow   # push only (all the URLs in the sitemap by default)
```

The site itself is published by GitHub Pages on push — there is no deploy step.

IndexNow's key is in `scripts/indexnow.key`; the build publishes it at the
site root (`https://datalink.ac/<key>.txt`), which is how the search engines
verify the push.

## Notes on the design

- **No web fonts.** The system font stack only — Chinese falls through to
  PingFang / Microsoft YaHei / Noto. Nothing to download, so it opens fast
  everywhere.
- **Light and dark** follow `prefers-color-scheme`; the toggle in the header
  overrides it and the choice is remembered locally.
- **Motion** is a scroll fade. Without JavaScript the content is still there
  — only `.js .reveal` is hidden.
- **SEO**: canonical, two-way `hreflang`, JSON-LD (WebSite / Blog /
  BlogPosting / TechArticle / BreadcrumbList), a sitemap with `lastmod` and
  the language pair, robots, an OG image, one `<h1>` per page, explicit image
  sizes (nothing shifts), and a `noindex` 404.
- **The pages are hand-written.** The build is a template fill, not a site
  generator; the HTML in `content/` is the HTML that ships.

## Related repositories

- [x-cmd/draw](https://github.com/x-cmd/draw) — the chart and diagram renderer
- [x-cmd/ppt](https://github.com/x-cmd/ppt) — the slide deck renderer
- [ClawHub: x-cmd-draw](https://clawhub.ai/edwinjhlee/skills/x-cmd-draw) — the skill for agents

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Apache-2.0 — see [LICENSE](LICENSE).
