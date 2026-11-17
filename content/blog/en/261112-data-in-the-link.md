---
title: Send a picture and the numbers are gone; send a link and they are still there.
date: 2026-11-12
order: 1
desc: The piece ships; the context that made it does not — unless the data is in the link.
tags: concept
---

Your AI writes the piece. Where it needs a chart, it makes one. What it leaves
behind is a picture — and the numbers went into the image and did not come back
out of it.

The piece ships. The context that made it does not. Whoever reads it next — a
person, an agent, you next year — has the picture and nothing else.

## A picture has no room for the numbers

A chart can show you the shape of a hundred numbers. It cannot hand you the
hundred numbers. So the prose needs a number too — and where did that one come
from? From whoever read the picture back.

That read-back is lossy, and quietly so. The bar might say 4.18; the sentence
says 4.2, or 4.3, or 42%. Nobody can tell which, because the numbers were never
in the picture to begin with.

A picture has no room for the precision, the units, the caveats, or the second
series. This is not the model's fault. It is the format's.

## A URL can be a document

The web settled this for documents long ago. A URL can be a document, not a
pointer to one: `https://example.com/notes.md` *is* the note; the server is
just somewhere to keep it and hand it over. That old, boring idea is why the
web can be quoted, diffed, cached and argued with.

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

## The URL is the API

A datalink is a pure function: parameters in, picture out. No session, no
login, no dashboard, no refresh button — because the parameters already say
everything there is to say.

It caches, because the URL is the key. It versions, because `v=1` pins the
bytes and a link pasted into a release note stays correct. And it diffs: two
links that differ in one parameter differ in one character.

That last one is why a chart belongs in an issue, a release note or a pull
request — not because it looks good there, but because it can be changed
there, and because the history then says what you meant.

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

A renderer can be replaced by another host that keeps the same promises.
Those promises are written down in the [specification](/spec) — a draft, open
for argument.
