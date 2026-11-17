---
title: Six languages: no six images to add every time — six links are enough.
date: 2026-11-17
order: 2
desc: The same diagram in six languages — six links, each with one label changed.
tags: case
---

You publish one project in six languages. Each README carries the same
architecture diagram, drawn in that language's labels.

Today that is six PNG files, checked into the repository, one per README. It
is fine on the first day.

Then a number moves. Somebody updates it in the English README, and the six
images have to be redrawn and committed again — six files, six renders,
one commit. A year later the repository is carrying a year of pictures nobody
looks at, and the diagram in the Italian README is from a quarter before the
diagram in the Korean one. There is no way to tell which one is current.

With a datalink, the README holds a link. Six languages means six links,
because the labels in the picture are different:

```
/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navigateur;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;ブラウザ;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navegador;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;브라우저;r0c0&n=cdn;cloud;CDN;r0c1&…
```

Six links. One label each is different; the nodes, the edges and the numbers
are the same in all six. The labels are parameters, so translating is easy
here: another language is one parameter to change, not a picture to redraw.

The picture is not in the repository. It is drawn from the link whenever
somebody opens the README — so it cannot fall behind its own link, and when
the numbers change there is nothing to redraw. The repository keeps the data,
which is the part that was true in every version.

A drawing costs space and buys nothing, because a drawing can be recomputed.
The numbers are the opposite: cheap, and the thing people will end up arguing
about.
