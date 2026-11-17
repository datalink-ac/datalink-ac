---
title: 6种语言的图表，不需要每次加6个图，6个链接即可。
date: 2026-11-17
order: 2
desc: 同一张架构图出六种语言 —— 六条链接，每条只换一个标签。
tags: 案例
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
/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navigateur;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;ブラウザ;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navegador;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;브라우저;r0c0&n=cdn;cloud;CDN;r0c1&…
```

六条链接。每条只有一个标签不一样；节点、连线、数字，六条都一样。
标签是参数，所以翻译在这里很省事：换一种语言，改一个参数就行，不用重画。

图不在仓库里。打开 README 的时候，图是从链接里画出来的 —— 所以它不会
落后于自己那条链接；数字变了，也没有东西要重画。仓库里留下的是数据，
而数据是每个版本里都对的那部分。

仓库存一张画，白占地方，什么也换不到：画是可以重算的。数字正相反：
它便宜，而且以后会被人拿出来吵。
