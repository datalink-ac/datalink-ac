---
title: 6 条链接，没有图要重画。
date: 2026-11-17
order: 2
desc: 同一个项目的六份 README：仓库里留下的是数据，每张图都是当场画出来的。
tags: 案例
---

同一个项目，你发六种语言。每份 README 里都有一张架构图，标签是那种语言的说法。
六张 PNG，提交进仓库，一份 README 一张。

刚开始没问题。

然后数字变了。有人在英文 README 里改了一张表，六张图就得重画一遍、
再提交一遍 —— 六个文件，六次渲染，一次提交。一年以后，仓库里堆着一整年
没人看的图，意大利语 README 里那张架构图比韩语那张旧了一个季度。
谁也说不清哪张是现在的。

用数据链接，README 里放的是一条链接：

```
/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…
```

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" target="_blank" rel="noopener"><img src="/draw/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" alt="Architecture diagram, English labels" width="436" height="270" loading="lazy"></a><figcaption>In English.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;%E8%AE%A4%E8%AF%81;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache" target="_blank" rel="noopener"><img src="/draw/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;%E8%AE%A4%E8%AF%81;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache" alt="架构图，中文标签" width="400" height="286" loading="lazy"></a><figcaption>In 中文.</figcaption></figure>
<figcaption>One diagram, two languages. Only the labels changed — and labels are parameters.</figcaption>
</div>

标签还是各说各话 —— 这正是要六条链接的原因。但架构图不再是文件了，
它是这条链接的一个视图，谁打开谁画。没有东西要重画，也没有东西要提交；
图也不会再落后于自己那条链接 —— 每次都是从链接里画的。

仓库里留下来的是数据 —— 而数据是每个版本里都对的那部分。

仓库存一张画，钱花出去了，什么也没换到：画是能重算的。存数字正相反：便宜，
而且数字恰恰是以后会被拿出来吵的东西。
