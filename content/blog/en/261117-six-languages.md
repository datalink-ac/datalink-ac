---
title: The language is just a parameter.
date: 2026-11-17
order: 2
desc: One diagram in six languages — six links, and no image files to keep in sync.
tags: case
---

You publish one project in six languages. Each README carries the same
architecture diagram, drawn in that language's labels.

Today that is six PNG files, checked into the repository, one per README. It
is fine on the first day.

Then the numbers move. Somebody updates the table in the English README, and
the six images have to be redrawn and committed again — six files, six renders,
one commit. A year later the repository is carrying a year of pictures nobody
looks at, and the diagram in the Italian README is from a quarter before the
diagram in the Korean one. There is no way to tell which one is current.

With a datalink, the README holds a link, and the language is a parameter in
it:

```
/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navigateur;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;ブラウザ;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navegador;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;브라우저;r0c0&n=cdn;cloud;CDN;r0c1&…
```

Six links. One label each is different; the nodes, the edges and the numbers
are the same in all six. That is also why translating is easy here: the words
in the picture are parameters, so a translation is a parameter edit and not a
redraw.

The picture is not in the repository. It is drawn from the link whenever
somebody opens the README — so it cannot fall behind its own link, and when
the numbers change there is nothing to redraw. The repository keeps the data,
which is the part that was true in every version.

A drawing costs space and buys nothing, because a drawing can be recomputed.
The numbers are the opposite: cheap, and the thing people will end up arguing
about.
