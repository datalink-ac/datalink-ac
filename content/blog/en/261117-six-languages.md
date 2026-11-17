---
title: 6 languages, 6 links.
date: 2026-11-17
order: 2
desc: Six versions of one README — six PNG files, or six links and a repository that stays small.
tags: case
---

You publish one project in six languages. Each README carries the same
architecture diagram, drawn in that language's labels. Six PNG files, checked
into the repository, one per README.

That is fine on the first day.

Then the numbers move. Somebody updates the table in the English README, and
the six images have to be redrawn and committed again — six files, six renders,
one commit. A year later the repository is carrying a year of pictures nobody
looks at, and the diagram in the Italian README is from a quarter before the
diagram in the Korean one. There is no way to tell which one is current.

With a datalink, the README holds a link:

```
/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…
```

The labels are still per language — that is what the six links are for. But the
diagram is no longer a file. It is a view of the link, drawn whenever somebody
opens it. There is nothing to redraw and nothing to commit, so the six
versions cannot drift apart: they are the same picture with different words in
it.

What the repository keeps is the data — which is the part that was true in
every version.

Storing a drawing costs space and buys nothing, because a drawing can be
recomputed. Storing the numbers is the opposite: it is cheap, and it is the
thing people will end up arguing about.
