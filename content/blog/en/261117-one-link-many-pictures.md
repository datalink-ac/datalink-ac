---
title: Not just charts: diagrams, calendars, maps and molecules are the same kind of link.
date: 2026-11-17
order: 3
desc: The parameters differ, the form does not — every kind of data goes through the same datalink.
tags: concept
---

Not only data charts. An architecture diagram, a release calendar, a map of
last quarter's sales, a molecule — each of them is data in a link, and each of
them is a link of its own.

The parameters differ, because the data differs: a calendar takes events, a
diagram takes nodes and edges, a chart takes labels and values. One link
renders one picture.

What does not change is the form. It is a URL, its parameters carry the data,
and a renderer sits behind it and keeps the same promises — whether it is
drawing a chart or a calendar.

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" target="_blank" rel="noopener"><img src="/draw/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" alt="Architecture diagram" width="436" height="270" loading="lazy"></a><figcaption>A structure.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" target="_blank" rel="noopener"><img src="/draw/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" alt="Molecular structure" width="560" height="420" loading="lazy"></a><figcaption>A molecule.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=area&amp;labels=Q1,Q2,Q3,Q4&amp;values=12,19,15,24&amp;title=Latency%20budget&amp;scheme=auto" target="_blank" rel="noopener"><img src="/draw?type=area&amp;labels=Q1,Q2,Q3,Q4&amp;values=12,19,15,24&amp;title=Latency%20budget&amp;scheme=auto" alt="Area chart" width="560" height="340" loading="lazy"></a><figcaption>A chart.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" target="_blank" rel="noopener"><img src="/draw?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" alt="Butterfly chart" width="480" height="340" loading="lazy"></a><figcaption>A chart with two sides.</figcaption></figure>
</div>

Four links, four pictures. Same form, different data.

A description of data says what was measured. It does not say how it should
be drawn. That is what lets the same data be a chart, a table, a calendar or
a slide.

## A new kind is not a new format

Renderers are an open list: charts, structure diagrams, calendars, decks. A
new one — a molecule, a Gantt chart, something nobody has thought of yet —
does not change the format. It is another renderer, and it has to keep the
same promises: the link carries the data, the output is a pure function of
the parameters, and the picture can always be taken back apart into the
numbers it was drawn from.

Those promises are written down in the [specification](/spec).
