---
title: 6 links, and no images to regenerate.
date: 2026-11-17
order: 2
desc: Six versions of one README: the repository keeps the data, and every diagram is drawn from it on the spot.
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

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" target="_blank" rel="noopener"><img src="/draw/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" alt="Architecture diagram, English labels" width="436" height="270" loading="lazy"></a><figcaption>In English.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;%E8%AE%A4%E8%AF%81;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache" target="_blank" rel="noopener"><img src="/draw/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;%E8%AE%A4%E8%AF%81;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache" alt="架构图，中文标签" width="400" height="286" loading="lazy"></a><figcaption>In 中文.</figcaption></figure>
<figcaption>One diagram, two languages. Only the labels changed — and labels are parameters.</figcaption>
</div>

The labels are still per language — that is what the six links are for. But the
diagram is no longer a file. It is a view of the link, drawn whenever somebody
opens it. There is nothing to redraw and nothing to commit, and a picture can
no longer fall behind its own link: it is drawn from the link, every time.

What the repository keeps is the data — which is the part that was true in
every version.

Storing a drawing costs space and buys nothing, because a drawing can be
recomputed. Storing the numbers is the opposite: it is cheap, and it is the
thing people will end up arguing about.
