---
title: Data in the link
date: 2026-11-12
desc: Why the URL is the right place to keep the data — and what changes when it is there.
tags: concept
---

Every chart is a picture of something, and we have spent twenty years pretending the
picture is the data.

It is convenient for a person and hostile to a machine: we build the picture, we host
it, and then — when a model or a script needs the numbers — we ask somebody to go and
read them off it.

That reading step is where accuracy goes to die.

## The picture is the bottleneck

A chart is a lossy compression of a table, produced for the benefit of a pair of eyes.
The table still exists — in a database, in a query, in a CSV file — but that somewhere
is not the thing you pasted. What you pasted is a pointer. It resolves to a page; the
page renders a picture; the picture has to be read.

If a machine reads it, the machine is now doing OCR on a layout it was never designed
to parse, and it will do it approximately. Then someone writes “Q3 revenue was 4.2M” in
a summary, and nobody notices that the bar was 4.18 and the label was rounded.

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

Put the data in the link and several things happen at once.

**The link becomes the whole context.** Not a pointer to context — the context. An
agent that receives `datalink.ac/d?type=pie&labels=TS,Py,Go&values=4821,2312,980`
has the numbers, the labels and the shape of the question. There is no fetch, no
screenshot, no paragraph describing what the picture showed.

**The link becomes diffable.** Two links that differ in one parameter differ in one
character. `values=4821` → `values=5120` is a reviewable change: a pull request that
edits a chart is a pull request that edits a URL. This is the reason a chart belongs
in a GitHub issue, a release note or a pull request — not because it looks good
there, but because it can be *changed* there.

**The link becomes a function call.** Parameters in, picture out. No session, no
login, no dashboard state. An agent that wants a different cut of the same data
rewrites the parameters; a human who wants to explore it edits the same string.
Neither of them needs a special tool to do it.

**The picture stops being the only reading.** The same link can serve a rendered SVG
to a browser and a JSON spec to an agent. One artefact, two readers, no translation
step in between — so nothing is lost in translation.

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

A datalink is a small idea with a long tail. Today it draws charts. The same flat
parameters already describe a structure diagram, a table, a calendar and a slide
deck — because those are renderers, and a renderer is a detail of the link, not a
property of it.

What we want to write down next is the part that makes it a standard rather than a
convention: the invariants a renderer has to keep, and what an agent is allowed to
assume. That is the [datalink specification](/spec), and it is a draft, and it is
open for argument.
