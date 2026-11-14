---
title: Data in the link
date: 2026-11-12
desc: Why the URL is the right place to keep the data — and what changes when it is there.
tags: concept
---

Your AI writes the piece. Where it needs a chart, it makes one. What it leaves behind
is a picture — and the data went into the image and did not come back out of it.

The piece ships. The context that made it does not. Whoever reads it next — a person,
an agent, you next year — has the picture and nothing else.

## The picture is not the data

A chart can show you the shape of a hundred numbers. It cannot hand you the hundred
numbers. So the piece needs a number in the prose as well — and where did that number
come from? From whoever read the picture back.

That read-back is lossy, and quietly so. The bar might say 4.18; the sentence says
4.2, or 4.3, or 42%. Nobody can tell which, because the numbers were never in the
picture to begin with.

The gap is not the model. The gap is the format. A picture has no room for the
precision, the units, the caveats, or the second series.

## The web already solved this for documents

A URL can be a document. Not a pointer to a document — the document.
`https://example.com/notes.md` *is* the note; the server is just a place to keep it
and hand it over. That is a settled, boring, decades-old idea, and it is the reason
the web can be quoted, diffed, cached and argued with.

We have been slow to extend it to data. The chart is the last place where the
substance of a thing is deliberately kept away from the address of the thing.

## What changes when the data is in the link

**The link becomes the whole context.** Not a pointer to context — the context. An
agent that receives `datalink.ac/d?type=pie&labels=TS,Py,Go&values=4821,2312,980`
has the numbers, the labels and the shape of the question. Nothing to fetch, nothing
to look at, no paragraph describing what the picture showed.

**The link becomes diffable.** Two links that differ in one parameter differ in one
character. `values=4821` → `values=5120` is a reviewable change: a pull request that
edits a chart is a pull request that edits a URL. This is why a chart belongs in a
GitHub issue, a release note or a pull request — not because it looks good there,
but because it can be *changed* there, and because the history then says what you
meant.

**The link becomes a function call.** Parameters in, picture out. No session, no
login, no dashboard state. An agent that wants a different cut of the same data
rewrites the parameters; a person who wants to explore it edits the same string.
Neither of them needs a special tool to do it.

**The link is what survives.** A picture in a chat log is a dead end. A link is a
report whose numbers are still inside it — so six months later an agent with memory
can read the intent and the data back out of it, and index them.

## The uncomfortable part

A link is public. A link is copied, forwarded, cached, logged, screenshotted. If the
data behind it is private, then a datalink is the wrong shape for that data, and no
amount of cleverness changes it. (We wrote about this separately — see *What a URL
reveals*.)

But look at what we already do with URLs. We paste query strings into issues. We put
customer identifiers in ticket links. We keep dashboards behind logins and then spend
real money on the login. The URL is already the place where data lives in practice;
it is the *content* of the link that has been thinned out, not the link itself.

## Where this goes

A datalink is a small idea with a long tail. Today it draws charts, structure
diagrams, tables, calendars, decks, a map, a molecule. Those are renderers, and a
renderer is a detail of the link, not a property of it.

What we want to write down next is the part that makes it a standard rather than a
convention: the invariants a renderer has to keep, and what an agent is allowed to
assume. That is the [datalink specification](/spec), and it is a draft, and it is
open for argument.
