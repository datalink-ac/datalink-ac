# datalink.ac

> **data in the link** — the data lives in the link, not in a picture of it.

- **Live:** https://datalink.ac · 中文：https://datalink.ac/zh
- **Spec draft:** https://datalink.ac/spec
- **Concept issue:** [#1 — datalink as context](https://github.com/datalink-ac/datalink-ac/issues/1)

## What a datalink is

A URL that carries the data itself — not a pointer to data, and not a picture
of it.

```
https://datalink.ac/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980
```

One string of characters, two readers: a person opens it and sees the picture,
an agent reads the same link and gets the numbers. Nothing to export, nothing
to keep in sync, and nothing that has to stay running.

The same link can be a chart, a diagram, a calendar, a slide deck, a map, a
molecule — the parameters change, the address stays a link.

## Why a link and not a picture

**A picture shows; it does not hold.** A chart can show you the shape of a
hundred numbers; it cannot hand you the hundred numbers. A model handed the
picture reconstructs the values by looking — good at that, still a reading, and
it cannot tell which parts it read and which it filled in.

**The piece ships; the context that made it does not.** Whoever reads it next —
a person, an agent, you next year — has the picture, and nothing to check it
against.

**With the data in the link, the numbers travel.** The other side gets the
exact context, not a picture of one. They can change it, add a comment, share
it again. Put it in a README, in a blog post, and it still means something when
the service behind it is down: stateless, no account, no cloud, nothing that
has to stay running.

**And the agent stops guessing.** It reads the numbers themselves — never
reconstructing a value from pixels, never rounding one, never spending a
vision token on a picture of the data. It quotes the number, and it can do
arithmetic on it. The link is about 25 tokens; the same chart as SVG markup is
about 1,100 — so the context window stays free for the work.

**A report becomes memory.** The parameters say what was measured and how it
was framed, so six months on an agent with memory can read the link and find
the intent and the numbers — not a picture of them.

## The case: six languages, one source

Six languages mean six chart files, six renders, six commits — and every change
to the data means doing it six times. The repository fills with pictures whose
history nobody can read.

With a datalink the language is a parameter: six charts, six URLs, one line of
text each, generated from the same source by the same agent — and the numbers
stay exact in all of them.

The same thing happens with one language and one README. Today a new number
means a re-render, a re-upload and a binary in the diff that says only
"image changed". With a datalink the agent changes one number in the URL and
commits: the diff shows the number, the picture follows it, and a year later
the history still says what you meant.

## How to use it

Give your agent the links. Fetch one directly —

```sh
curl 'https://datalink.ac/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980'
```

— or install the skill, and it knows the shape:

```sh
npx clawhub@latest install edwinjhlee/x-cmd-draw
```

Either way, this prompt is the whole thing:

> Use the draw skill — read
> https://github.com/x-cmd/draw/blob/main/.x-cmd/clawhub/SKILL.md and follow it.
> From now on, when you write a README, an issue, a pull request, a blog post or
> a chat message that needs a chart, embed the chart as a link — not an image.

## Why it is called datalink

Not **infolink**: `info` is vaguer than `data`. Every link carries
information; the point here is that the *actual data* sits on the URL, and the
service stays stateless.

Not **linkdata**: the head of that phrase would be `data`, with `link` as the
modifier — the data attached to a link. But the subject is the link itself: a
kind of link, one that happens to carry the data.

Not **dataurl**: it reads like the place where data is downloaded from. And
`url` is a term of art; `link` is the word everyone already has.

So: a **datalink** — a link that carries the data.

## Where to go next

- The **specification draft** — what a datalink is, and what a renderer has to
  promise: the anatomy, the invariants, the agent contract, and the questions
  we have not settled.
- The **concept issue** — where the idea is argued out in the open.
- The **blog** — notes on the idea as we go: how datalink works and why it
  works that way, two audiences, URLs as APIs, what a URL gives away, and why
  it is called datalink.

## Related

- [x-cmd/draw](https://github.com/x-cmd/draw) — the chart and diagram renderer
- [x-cmd/ppt](https://github.com/x-cmd/ppt) — the slide deck renderer
- [ClawHub: x-cmd-draw](https://clawhub.ai/edwinjhlee/skills/x-cmd-draw) — the skill for agents

## Contributing

The repository, the build, the deploy and the house style are in
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

Apache-2.0 — see [LICENSE](LICENSE).
