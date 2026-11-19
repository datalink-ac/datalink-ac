---
title: Six languages: no six images to add every time — six links are enough.
date: 2026-11-17
order: 2
desc: The same diagram in six languages — six links, each with one label changed.
tags: case
keywords: datalink, multilingual README, architecture diagram, i18n docs, SVG
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
x-cmd.com/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;Navigateur;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;ブラウザ;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;Navegador;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;브라우저;r0c0&n=cdn;cloud;CDN;r0c1&…
```

Six links. One label each is different; the nodes, the edges and the numbers
are the same in all six. The labels are parameters, so translating is easy
here: another language is one parameter to change, not a picture to redraw.

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache&amp;title=Web%20App" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache&amp;title=Web%20App&amp;w=436&amp;h=270&amp;scheme=auto" alt="Architecture diagram in English" width="436" height="270" loading="lazy"></a><figcaption>In English.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache&amp;title=Web%20%E5%BA%94%E7%94%A8" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache&amp;title=Web%20%E5%BA%94%E7%94%A8&amp;w=436&amp;h=270&amp;scheme=auto" alt="架构图中文版" width="436" height="270" loading="lazy"></a><figcaption>中文版。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E3%82%B2%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A4;r0c2&amp;n=auth;be;%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9;r1c1&amp;n=render;be;%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E6%8F%8F%E7%94%BB;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E3%83%87%E3%83%BC%E3%82%BF%E5%B1%A4;pg%20cache&amp;title=Web%20%E3%82%A2%E3%83%97%E3%83%AA" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E3%82%B2%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A4;r0c2&amp;n=auth;be;%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9;r1c1&amp;n=render;be;%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E6%8F%8F%E7%94%BB;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E3%83%87%E3%83%BC%E3%82%BF%E5%B1%A4;pg%20cache&amp;title=Web%20%E3%82%A2%E3%83%97%E3%83%AA&amp;w=436&amp;h=270&amp;scheme=auto" alt="アーキテクチャ図・日本語版" width="436" height="270" loading="lazy"></a><figcaption>日本語版。</figcaption></figure>
</div>

The same diagram, three versions. The nodes, the edges and the numbers never
changed — only the labels.

A project is already doing this. [x-cmd/draw](https://github.com/x-cmd/draw)
ships its README in 18 languages — the same figures in each, with the labels
in that language. It can do that because every figure is a datalink:
translating the picture is changing a few label parameters, not redrawing it.

The picture is not in the repository. It is drawn from the link whenever
somebody opens the README — so it cannot fall behind its own link, and when
the numbers change there is nothing to redraw. The repository keeps the data,
which is the part that was true in every version.

A drawing costs space and buys nothing, because a drawing can be recomputed.
The numbers are the opposite: cheap, and the thing people will end up arguing
about.
