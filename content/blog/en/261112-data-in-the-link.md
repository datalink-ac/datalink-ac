---
title: The link is the data.
date: 2026-11-12
order: 1
desc: A picture shows; it does not hold. What changes when the numbers stay in the address.
tags: concept
---

Your AI writes the piece. Where it needs a chart, it makes one. What it leaves
behind is a picture — and the numbers went into the image and did not come back
out of it.

The piece ships. The context that made it does not. Whoever reads it next — a
person, an agent, you next year — has the picture and nothing else.

## A picture shows; it does not hold

A chart can show you the shape of a hundred numbers. It cannot hand you the
hundred numbers. So the prose needs a number too — and where did that one come
from? From whoever read the picture back.

That read-back is lossy, and quietly so. The bar might say 4.18; the sentence
says 4.2, or 4.3, or 42%. Nobody can tell which, because the numbers were never
in the picture to begin with.

This is not the model's fault. It is the format's. A picture has no room for
the precision, the units, the caveats, or the second series.

## The web settled this for documents a long time ago

A URL can be a document. Not a pointer to a document — the document.
`https://example.com/notes.md` *is* the note; the server is just somewhere to
keep it and hand it over. That idea is old and boring, and it is the reason
the web can be quoted, diffed, cached and argued with.

We were slow to apply it to data. The chart is the last place where the
substance of a thing is deliberately kept away from the address of the thing.

Put the data in the link and the link stops being a pointer. It becomes the
context.

## The agent gets the numbers

An agent that receives

```
datalink.ac/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980
```

has the numbers, the labels and the shape of the question. Nothing to fetch,
nothing to look at, no paragraph describing what the picture showed.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=pie&amp;t=revenue&amp;title=Stars%20by%20language&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520" target="_blank" rel="noopener"><img src="/draw?type=pie&amp;t=revenue&amp;title=Stars%20by%20language&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520&amp;w=720&amp;h=510&amp;scheme=auto" alt="Pie chart of stars by language" width="720" height="510" loading="lazy"></a><figcaption>The link above, rendered. The same string also hands an agent the numbers behind it.</figcaption></figure>

The same chart as SVG markup is about 1,100 tokens. The link that holds the
same numbers is about 25. Both are text, so the comparison is fair — and the
cheaper one is also the exact one.

## A chart in a pull request becomes reviewable

Two links that differ in one parameter differ in one character.
`values=4821` → `values=5120` is a change a reviewer can read in a diff.

That is why a chart belongs in an issue, a release note or a pull request — not
because it looks good there, but because it can be changed there, and because
the history then says what you meant.

## The link outlives the picture

A picture in a chat log is a dead end. A link is a report whose numbers are
still inside it, so six months later an agent with memory can read the intent
and the data back out of it.

## Links are public

A link gets copied, forwarded, cached, logged, screenshotted. If the data
behind it is private, a datalink is the wrong shape for it, and no cleverness
changes that.

But look at what we already do with URLs. We paste query strings into issues.
We put customer identifiers in ticket links. We keep dashboards behind logins
and then spend real money on the login. The data already lives in the URL —
what has been thinned out is the content of the link, not the link itself.

Charts, structure diagrams, calendars, decks, a map, a molecule: those are
renderers, and a renderer is a detail of the link rather than a property of it.
The promises a renderer has to keep are written down in the
[specification](/spec) — a draft, open for argument.
