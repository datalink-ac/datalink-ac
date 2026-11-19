---
title: Not just charts: diagrams, calendars, maps and molecules are the same kind of link.
date: 2026-11-17
order: 3
desc: The parameters differ, the form does not — every kind of data goes through the same datalink.
tags: concept
keywords: datalink, data link, SVG chart, diagram, calendar, map, molecule, data visualization, agent
---

Not only data charts. An architecture diagram, a release calendar, a map, a
molecule — each of them is data in a link, and each of them is a link of its
own. And a kind of data nobody has thought of yet will only be one more link.
Nearly every picture a development document asks for is on this list.

What does not change is the form. It is a URL, its parameters carry the data,
and a renderer sits behind it and keeps the same promises — whether it is
drawing a chart or a calendar.

## 1. Six pictures, one form

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" alt="Architecture diagram" width="436" height="270" loading="lazy"></a><figcaption>A structure.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=calendar&amp;layout=month&amp;start=2026-11-02&amp;ev=2026-11-03;meeting;Requirement%20review;14:00&amp;ev=2026-11-11;review;Spec%20walkthrough;10:30" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=calendar&amp;layout=month&amp;start=2026-11-02&amp;ev=2026-11-03;meeting;Requirement%20review;14:00&amp;ev=2026-11-11;review;Spec%20walkthrough;10:30&amp;w=480&amp;h=340&amp;scheme=auto" alt="Calendar" width="480" height="340" loading="lazy"></a><figcaption>A calendar.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A70%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A6%2C%22itemWidth%22%3A10%2C%22itemHeight%22%3A120%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%7D%5D%7D%5D%7D&amp;w=480&amp;h=340&amp;scheme=light" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A70%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A6%2C%22itemWidth%22%3A10%2C%22itemHeight%22%3A120%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%7D%5D%7D%5D%7D&amp;w=480&amp;h=340&amp;scheme=light" alt="Map" width="480" height="340" loading="lazy"></a><figcaption>A map — one number per state.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" alt="Molecular structure" width="560" height="420" loading="lazy"></a><figcaption>A molecule.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=area&amp;labels=Q1,Q2,Q3,Q4&amp;values=12,19,15,24&amp;title=Latency%20budget&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=area&amp;labels=Q1,Q2,Q3,Q4&amp;values=12,19,15,24&amp;title=Latency%20budget&amp;scheme=auto" alt="Area chart" width="560" height="340" loading="lazy"></a><figcaption>A chart.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" alt="Butterfly chart" width="480" height="340" loading="lazy"></a><figcaption>A chart with two sides.</figcaption></figure>
</div>

Six links, six pictures. Same form, different data.

## 2. The parameters differ, because the data differs

| picture | what the link looks like | where the data sits |
| --- | --- | --- |
| structure diagram | `/draw/archmap?n=…&e=…&b=…` | nodes, edges, groups |
| calendar | `/draw?type=calendar&ev=…` | events: date, title, time |
| map | `/draw/echarts?d={…}` | an ECharts option |
| molecule | `/draw/chem?smiles=…` | a SMILES string |
| chart | `/draw?type=area&labels=…&values=…` | labels and values |
| butterfly | `/draw?type=butterfly&left=…&right=…` | two series, side by side |

A description of data says what was measured. It does not say how it should
be drawn. That is what lets the same data be a chart, a table, a calendar or
a slide.

## 3. A new kind is not a new format

Renderers are an open list: charts, structure diagrams, calendars, maps,
decks. A new one — a kind nobody has thought of yet — does not change the
format. It is another renderer, and it has to keep the same promises: the link
carries the data, the output is a pure function of the parameters, and the
picture can always be taken back apart into the numbers it was drawn from.

Those promises are written down in the [specification](/spec).
