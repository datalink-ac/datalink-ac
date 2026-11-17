---
title: One link, many pictures.
date: 2026-11-17
order: 3
desc: The same kind of address gives you a diagram, a calendar, a deck, a map, a molecule.
tags: concept
---

Ask an agent for a chart and you get a chart. Ask it for the release calendar,
or the slide deck, or the map of last quarter's sales, and it hands you the
same kind of thing: a link.

```
/draw/archmap?n=web;fe;Browser;r0c0&…        a diagram
/draw?type=calendar&start=2026-11-02&ev=…     a calendar
/ppt?data=…                                    a deck
/draw/echarts?d=…                              a map
/draw/chem?smiles=…                            a molecule
```

Different renderer, different shape of output — but the same shape of address:
a path that says what kind of thing this is, and parameters that carry the
data it is made of.

This is worth spelling out, because it is easy to miss. A description of data
says what was measured. It does not say how it should be drawn. That is not an
oversight in the description — it is exactly what lets the same data be a
chart, a table, a calendar or a slide.

## The renderer is a detail

The link says what the data is. The renderer decides what it looks like.

That is why the renderer is a detail of the link rather than a property of it.
When a new kind of picture appears — a molecule, a Gantt chart, a thing
nobody has thought of yet — it does not change the format. It is another
reader of the same kind of address.
