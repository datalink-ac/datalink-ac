---
title: Send a picture and the numbers are gone; send a datalink and they are still there.
date: 2026-11-12
order: 1
desc: The piece ships; the context that made it does not — unless the data is in the link.
tags: concept
keywords: datalink, data in the link, AI chart, agent-readable chart, data visualization, SVG chart
---

Your AI writes the piece. Where it needs a chart, it makes one. What it leaves
behind is a picture — and the numbers went into the image and did not come back
out of it.

Development is becoming the same story: you state the intent, the agent does
the work, and the READMEs and issues it leaves behind are markdown. It can
read the prose. The picture alone it cannot read back.

The piece ships. The context that made it does not. Whoever reads it next — a
person, an agent, you next year — has the picture and nothing else.

## 1. A picture has no room for the numbers

A chart can show you the shape of a hundred numbers. It cannot hand you the
hundred numbers. And the number quoted in the prose had to come from somewhere:
somebody read the picture back.

That read-back is lossy, and quietly so. The bar might say 4.18; the sentence
says 4.2, or 4.3, or 42%. Nobody can tell which, because the numbers were never
in the picture to begin with.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=bar&amp;labels=Q1,Q2,Q3,Q4&amp;values=4.18,3.92,4.05,4.21&amp;title=p99%20latency%20(s)" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=bar&amp;labels=Q1,Q2,Q3,Q4&amp;values=4.18,3.92,4.05,4.21&amp;title=p99%20latency%20(s)&amp;w=480&amp;h=300&amp;scheme=auto" alt="Quarterly p99 latency as a bar chart" width="480" height="300" loading="lazy"></a><figcaption>The link says 4.18. Someone reading the picture back writes 4.2, or 4.3 — the picture itself cannot tell.</figcaption></figure>

A picture has no room for the precision, the units, the caveats, or the second
series. This is not the model's fault. It is the format's.

## 2. A URL can be a document

The web settled this for documents long ago. A URL names a document, not just a
program on a server: `https://example.com/notes.md` *is* the note, and whoever
fetches that address gets the same bytes. That old, boring idea is why the web
can be quoted, diffed, cached and argued with.

We were slow to apply it to data. The chart is the last holdout: the one place
where a thing's substance is still deliberately kept away from its address.

Put the data in the link and the link stops being a pointer. It becomes the
context. Such a link has a name: a datalink.

## 3. The agent gets the numbers

An agent that receives

```
x-cmd.com/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980
```

has the numbers, the labels and the shape of the question. Nothing to fetch,
nothing to look at, no paragraph describing what the picture showed.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=pie&amp;t=revenue&amp;title=Stars%20by%20language&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=pie&amp;t=revenue&amp;title=Stars%20by%20language&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520&amp;w=720&amp;h=510&amp;scheme=auto" alt="Pie chart of stars by language" width="720" height="510" loading="lazy"></a><figcaption>Such a link, rendered — the same string hands an agent the numbers behind it.</figcaption></figure>

The same chart as SVG markup is about 1,100 tokens. The link that holds the
same numbers is about 25. Both are text — and the cheaper one is also the
exact one.

## 4. The URL is the API

A datalink is a pure function: parameters in, picture out. No session, no
login, no dashboard, no refresh button — because the parameters already say
everything there is to say.

It caches, because the URL is the key. It versions, because `v=1` pins the
bytes and a link pasted into a release note stays correct. And it diffs: when
two links differ by one parameter, the diff shows exactly that parameter.

That last one is why a chart belongs in an issue, a release note or a pull
request — not because it looks good there, but because it can be changed
there, and because the history then says what you meant.

## 5. The link outlives the picture

A picture in a chat log is a dead end. A link is a report whose numbers are
still inside it, so six months later an agent can read the intent and the data
back out of it.

## 6. A link has no gate

A link gets copied, forwarded, cached, logged, screenshotted. Wherever the
string travels, the data travels — whoever holds the string holds the data.
No login, no permission, no gate of any kind. "Public" is not a setting on a
datalink; it is how a datalink is built.

So private data should never go into a link in the first place — that is not
a flaw but the nature of the thing. [An entire post is about exactly
this.](/blog/261112-what-a-url-reveals)

But look at what we already do with URLs. Query strings go into issues,
customer identifiers sit in ticket links, dashboards get logins and we spend
real money on them. Data has lived in URLs all along — those links have
gates; a datalink has none. What is new is the load: a link used to carry an
address, and now it can carry the thing itself.

A renderer can be replaced by another host that keeps the same promises.
Those promises are written down in the [specification](/spec) — a draft, open
for argument.
