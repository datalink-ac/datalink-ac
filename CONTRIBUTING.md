# Contributing

Thanks for looking at datalink.ac. This repository holds the site, the
specification draft and the notes that go with them.

**The short version:** open an issue before you open a pull request, keep the
site's voice, and send the change with the build passing.

## What lives where

| Path | What it is |
|---|---|
| `content/pages/<lang>/*.html` | The hand-written pages — the home page, the spec draft, privacy, the blog index |
| `content/blog/<lang>/*.md` | Blog posts, as markdown with frontmatter |
| `src/layout.html` | The page skeleton: head, navigation, footer, language switch |
| `public/` | Static assets — CSS, JS, favicon, the OG image, the manifest |
| `scripts/build.mjs` | `content/` + `public/` → `dist/` |
| `worker/index.ts` | The forwarding edge: `datalink.ac/d*` → x-cmd.com, plus the data view |
| `mneme/` | The project's memory: notes, decisions, open questions |

The pages are plain HTML with a small set of `{{placeholders}}` the build fills
in. There is no framework, and there is not going to be one.

## How it is hosted

- **The site** is static and lives on **GitHub Pages**: `scripts/build.mjs`
  turns `content/` + `public/` into `dist/`, and the `pages` workflow publishes
  it on every push to `main`. The build also writes `CNAME` (the custom
  domain) and `.nojekyll`.
- **The forwarding edge** is one small **Cloudflare Worker**
  (`worker/index.ts`) on the routes `datalink.ac/d*`, `/ppt*` and `/explore*`:
  it forwards `/draw`, `/explore` and `/ppt` to x-cmd.com, serves the data
  view, and 301s the old aliases (`/d`, `/d.json`, `/deck`) to their new
  paths. **Every path the Worker must answer needs its own route** — `/ppt` and
  `/explore` do not start with `d`, and when they were missing they fell
  through to GitHub Pages and 404'd.
- **On the zone** there are two rules that are configuration rather than code:
  the security headers (CSP, Referrer-Policy, X-Content-Type-Options) and the
  `www.datalink.ac` → `datalink.ac` 301.

The domain is on Cloudflare (Free plan) and points at GitHub Pages, so the
Worker route and the zone rules still apply in front of it.

## Running it locally

```sh
npm install
npm run build      # content/ + public/ → dist/
npm run dev        # build + wrangler dev (the Worker and the static site)
```

The site is static; `dist/` is exactly what gets published.

## Deploying

The site is published by **GitHub Pages**: push to `main` and the `pages`
workflow builds and publishes it. `CNAME` (in the build output) tells GitHub
which domain the site belongs to.

The forwarding edge is a separate small **Cloudflare Worker**:

```sh
npm run deploy     # build + wrangler deploy + IndexNow push
```

Do not deploy the Worker and the site separately without checking both: the
pages are static, but every picture on them comes through the Worker.

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

## Writing for the site

The site is a concept site, and it is read by people who write with AI, not by
engineers. Two things matter more than anything else:

- **Say the thing.** One sentence per idea, in the reader's words. If a
  heading needs a second sentence to explain it, the heading is wrong.
- **Show the artifact, not the description of it.** Every claim on the site is
  a real link that renders something.

The house style is the writing skill in
[edwinjhlee/ai#61](https://github.com/edwinjhlee/ai/issues/61): know who the
reader is and what they came for; state the value point from the title down;
do not sell the ending before you deliver it; be exact, and shorten the
argument so the reader gets there inside their attention.

Keep it in English and Chinese, with the same meaning on both sides: the
home page, the spec draft and every blog post exist in both languages under
the same slug.

### Adding a blog post

The blog is one story per post, and the stories follow the home page: what a
datalink is, the six-language case, what else a link can be, where a datalink
belongs in GitHub, how to get your agent to use them, and why it is called
datalink.

- **The title is the conclusion.** "The harder question" and "that rule" are
  not titles — they are a promise to pay off later, and nobody waits. Say the
  thing: *A picture is not the data.*
- **One story per post.** If a post is carrying two, split it.
- **Do not tell the reader what to do.** No "you should", no "always".
- **Do not write in parallel bullet points to reach for a conclusion.**
  "It caches. It versions. It diffs." is the tell of a machine-written
  paragraph; say it once, in prose.
- **Write about datalink, not about x-cmd draw.** The renderer is an
  implementation; the link is the idea.
- **The link is the thing; a picture is one rendering of it.** Do not write
  "the renderer is a detail of the link" — the opposite is true: what changes
  is the renderer, what stays is the link. To show one set of data drawn
  several ways, give the *same parameters* to several renderers
  (`/draw/archmap`, `/draw/cloud`, `/draw/seq`, `/draw/arch3d` take the same
  `n=`). Unrelated pictures are not a demonstration of anything.

```sh
$EDITOR content/blog/en/261112-your-topic.md    # frontmatter: title/date/order/desc/tags
$EDITOR content/blog/zh/261112-your-topic.md    # the same slug
npm run build
```

`order` is the reading order on the blog index — the order of the stories on
the home page. A post without one falls back to newest first.

The build renders the markdown, writes `dist/blog/<slug>.html` and
`dist/zh/blog/<slug>.html`, and adds both to `sitemap.xml`.

## Before you push

```sh
npm run build     # must pass
npm run dev       # look at it: the home page, the spec, one blog post
```

Check the page in both colour schemes and at a phone width. The site has no
web fonts and no analytics, and it should stay that way.

## Reporting a problem

Open an issue. If it is about the *idea* rather than the code, the concept
issue ([#1](https://github.com/datalink-ac/datalink-ac/issues/1)) is the right
place to argue.

## License

Apache-2.0 — see [LICENSE](LICENSE). Contributions are accepted under the
same license.
