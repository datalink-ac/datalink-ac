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

<div class="post-figs"><figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" target="_blank" rel="noopener"><img src="/draw/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" alt="Architecture diagram" width="436" height="270" loading="lazy"></a><figcaption>A structure.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" target="_blank" rel="noopener"><img src="/draw/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" alt="Molecular structure" width="560" height="420" loading="lazy"></a><figcaption>A molecule.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6" target="_blank" rel="noopener"><img src="/draw?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" alt="Butterfly chart" width="560" height="340" loading="lazy"></a><figcaption>A chart.</figcaption></figure>
<figcaption>Three different pictures, three different addresses — and the same shape of address.</figcaption>
</div>

Different renderer, different shape of output — but the same shape of address:
a path that says what kind of thing this is, and parameters that carry the
data it is made of.

A description of data says what was measured. It does not say how it should
be drawn — and that is exactly what lets the same data be a chart, a table, a
calendar or a slide.

## The renderer is a detail

The link says what the data is. The renderer decides what it looks like.

That is why the renderer is a detail of the link rather than a property of it.
When a new kind of picture appears — a molecule, a Gantt chart, a thing
nobody has thought of yet — it does not change the format. It is another
reader of the same kind of address.
