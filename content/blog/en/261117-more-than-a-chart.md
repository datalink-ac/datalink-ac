---
title: A link can be more than a chart
date: 2026-11-17
desc: The parameters change; the address stays a link. A diagram, a calendar, a deck, a map.
tags: concept
---

A chart is what comes to mind first when you put data in a URL. It is also the
least interesting thing the link can be.

A link does not know what it points at. It carries parameters, and whatever
reads those parameters decides what to draw. Change the kind and you get
something else — from the same kind of address.

- A **diagram** — `/draw/archmap?n=web;fe;Browser;r0c0&…` — the boxes and the
  arrows are parameters too.
- A **calendar** — `/draw?type=calendar&layout=month&start=2026-11-02&ev=…` —
  events with their kinds and times.
- A **deck** — `/ppt?data=…` — markdown in, slides out.
- A **map** — `/draw/echarts?d=…` — a choropleth, with every state in the
  option.
- A **molecule** — `/draw/chem?smiles=…` — a structure, from one SMILES string.
- The same diagram in **six languages** — the labels are parameters, so nothing
  but the labels changes.

They are all live on [datalink.ac](https://datalink.ac). Open one, change a
parameter, and watch it move.

## The renderer is a detail

What the link carries is the content, and content does not have to be a table
of numbers in a bar chart. That is also the reason the format is worth
writing down: if any renderer can sit behind the same address, then the
address is the thing that gets standardised — and the picture is just today's
renderer.
