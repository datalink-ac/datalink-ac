---
title: 6种语言的图表，不需要每次加6个图，6个链接即可。
date: 2026-11-17
order: 2
desc: 同一张架构图出六种语言 —— 六条链接，每条只换一个标签。
tags: 案例
keywords: 数据链接, 多语言 README, 架构图, 国际化文档, SVG, datalink
---

同一个项目，你出六种语言的版本。每份 README 里都有一张架构图，
图上的标签是那种语言的说法。

今天这六张图是 PNG，提交进仓库，一份 README 一张。刚开始没问题。

后来一个数字变了。英文 README 里那张图跟着改，其余五张也得重画一遍、
再提交一遍 —— 六个文件，六次渲染。过一年，仓库里堆着一整年
没人看的图，意大利语 README 里那张架构图比韩语那张旧了一个季度。
谁也说不清哪张是现在的。

用数据链接，README 里放的是一条链接。六种语言就是六条链接，
因为图上的标签不一样了：

```
x-cmd.com/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;Navigateur;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;ブラウザ;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;Navegador;r0c0&n=cdn;cloud;CDN;r0c1&…
x-cmd.com/draw/archmap?n=web;fe;브라우저;r0c0&n=cdn;cloud;CDN;r0c1&…
```

六条链接。每条只有一个标签不一样；节点、连线、数字，六条都一样。
标签是参数，所以翻译在这里很省事：换一种语言，改一个参数就行，不用重画。

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache&amp;title=Web%20%E5%BA%94%E7%94%A8" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache&amp;title=Web%20%E5%BA%94%E7%94%A8&amp;w=436&amp;h=270&amp;scheme=auto" alt="架构图中文版" width="436" height="270" loading="lazy"></a><figcaption>中文版。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E3%82%B2%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A4;r0c2&amp;n=auth;be;%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9;r1c1&amp;n=render;be;%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E6%8F%8F%E7%94%BB;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E3%83%87%E3%83%BC%E3%82%BF%E5%B1%A4;pg%20cache&amp;title=Web%20%E3%82%A2%E3%83%97%E3%83%AA" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E3%82%B2%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A4;r0c2&amp;n=auth;be;%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9;r1c1&amp;n=render;be;%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E6%8F%8F%E7%94%BB;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E3%83%87%E3%83%BC%E3%82%BF%E5%B1%A4;pg%20cache&amp;title=Web%20%E3%82%A2%E3%83%97%E3%83%AA&amp;w=436&amp;h=270&amp;scheme=auto" alt="架构图日本語版" width="436" height="270" loading="lazy"></a><figcaption>日本語版。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Navigateur;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;Passerelle%20API;r0c2&amp;n=auth;be;Service%20d%27auth;r1c1&amp;n=render;be;Rendu%20graphique;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Couche%20de%20donn%C3%A9es;pg%20cache&amp;title=Application%20web" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;Navigateur;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;Passerelle%20API;r0c2&amp;n=auth;be;Service%20d%27auth;r1c1&amp;n=render;be;Rendu%20graphique;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Couche%20de%20donn%C3%A9es;pg%20cache&amp;title=Application%20web&amp;w=436&amp;h=270&amp;scheme=auto" alt="架构图法文版" width="436" height="270" loading="lazy"></a><figcaption>Version française.</figcaption></figure>
</div>

同一张图，三个版本。节点、连线、数字一条没变，变的只有标签。

这已经有项目在做了。[x-cmd/draw](https://github.com/x-cmd/draw) 的 README
有 18 种语言 —— 同一组图，每种语言一个版本，图上的字换成那种语言的说法。
能做到这一点，是因为每张图都是一条数据链接：翻译图不是重画，
是改几个标签参数。

图不在仓库里。打开 README 的时候，图是从链接里画出来的 —— 所以它不会
落后于自己那条链接；数字变了，也没有东西要重画。仓库里留下的是数据，
而数据是每个版本里都对的那部分。

仓库存一张画，白占地方，什么也换不到：画是可以重算的。数字正相反：
它便宜，而且以后会被人拿出来吵。
