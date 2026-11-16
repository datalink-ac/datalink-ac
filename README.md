# datalink.ac

> **data in the link** — the data lives in the link, not in a picture of it.

A URL can carry the data itself. A person opens the link and sees the render;
an agent reads the same link and gets the numbers. One string of characters,
two readers, nothing to export and nothing to keep in sync.

- **Live:** https://datalink.ac · 中文：https://datalink.ac/zh
- **Spec draft:** https://datalink.ac/spec
- **Concept issue:** [#1 — datalink as context](https://github.com/datalink-ac/datalink-ac/issues/1)

## What a datalink can do

All of these are live on this domain.

| | |
|---|---|
| **Be a chart** | [`/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980`](https://datalink.ac/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980) — a picture, with the numbers still in the link |
| **Be read as data** | [`/draw.json?type=pie&labels=TS,Py,Go&values=4821,2312,980`](https://datalink.ac/draw.json?type=pie&labels=TS,Py,Go&values=4821,2312,980) — the same link, as JSON an agent can use |
| **Be a deck** | `/ppt?data=…` — markdown in, slides out |
| **Be a diagram** | `/draw/archmap?n=…`, `/draw/seq?…`, `/draw/erd?…`, `/draw/mindmap?…` — structure, not just numbers |
| **Be edited** | change one number in the URL and the picture changes with it |
| **Be a language** | the language is a parameter: six languages, six links, one source |
| **Be reviewable** | the diff shows the number, not "image changed" |
| **Be the archive** | the parameters say what was measured and how — a year later the history still reads |

## What is here

- The **specification draft** — what a datalink is, and what a renderer has to
  promise.
- The **concept issue** — where the idea is argued out in the open.
- The **blog** — four posts on data in links, two audiences, URLs as APIs, and
  what a URL gives away.

The site is its own host: the renderers are
[x-cmd/draw](https://github.com/x-cmd/draw) and
[x-cmd/ppt](https://github.com/x-cmd/ppt), forwarded — datalink.ac is a door,
not a second implementation.

## Related

- [x-cmd/draw](https://github.com/x-cmd/draw) — the chart and diagram renderer
- [x-cmd/ppt](https://github.com/x-cmd/ppt) — the slide deck renderer
- [ClawHub: x-cmd-draw](https://clawhub.ai/edwinjhlee/skills/x-cmd-draw) — the skill for agents

## Contributing

The repository, the build, the deploy and the house style are in
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

Apache-2.0 — see [LICENSE](LICENSE).
