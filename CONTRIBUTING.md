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

## Running it locally

```sh
npm install
npm run build      # content/ + public/ → dist/
npm run dev        # build + wrangler dev (the Worker and the static site)
```

The site is static; `dist/` is exactly what gets published.

## Deploying

The site is published by **GitHub Pages**: push to `main` and the
`pages` workflow builds and publishes it. `CNAME` (in the build output)
tells GitHub which domain the site belongs to.

The forwarding edge is a separate small **Cloudflare Worker**
(`worker/index.ts`) — it only answers for `datalink.ac/d*`:

```sh
npm run deploy     # build + wrangler deploy + IndexNow push
```

Do not deploy the Worker and the site separately without checking both:
the pages are static, but every picture on them comes through the Worker.

## Writing for the site

The site is a concept site, and it is read by people who write with AI, not by
engineers. Two things matter more than anything else:

- **Say the thing.** One sentence per idea, in the reader's words. If a
  heading needs a second sentence to explain it, the heading is wrong.
- **Show the artifact, not the description of it.** Every claim on the site is
  a real link that renders something.

Keep it in English and Chinese, with the same meaning on both sides: the
home page, the spec draft and every blog post exist in both languages under
the same slug.

### Adding a blog post

```sh
$EDITOR content/blog/en/261112-your-topic.md    # frontmatter: title/date/desc/tags
$EDITOR content/blog/zh/261112-your-topic.md    # the same slug
npm run build
```

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
