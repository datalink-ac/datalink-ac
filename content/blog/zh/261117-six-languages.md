---
title: 语言只是一个参数。
date: 2026-11-17
order: 2
desc: 一张架构图，六种语言 —— 六条链接，仓库里不用留图。
tags: 案例
---

同一个项目，你发六种语言。每份 README 里都有一张架构图，标签是那种语言的说法。

今天这是六张 PNG，提交进仓库，一份 README 一张。刚开始没问题。

然后数字变了。有人在英文 README 里改了一张表，六张图就得重画一遍、
再提交一遍 —— 六个文件，六次渲染，一次提交。一年以后，仓库里堆着一整年
没人看的图，意大利语 README 里那张架构图比韩语那张旧了一个季度。
谁也说不清哪张是现在的。

用数据链接，README 里放的是一条链接，语言是链接里的一个参数：

```
/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navigateur;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;ブラウザ;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;Navegador;r0c0&n=cdn;cloud;CDN;r0c1&…
/draw/archmap?n=web;fe;브라우저;r0c0&n=cdn;cloud;CDN;r0c1&…
```

六条链接。每条只有一个标签不一样；节点、连线、数字，六条里都一样。
这也正是这里好翻译的原因：图里的词是参数，翻译一个图就是改参数，不是重画。

图不在仓库里。它是打开 README 的时候从链接画出来的 —— 所以它不会落后于
自己那条链接；数字变了，也没有东西要重画。仓库里留下的是数据 ——
而数据是每个版本里都对的那部分。

仓库存一张画，钱花出去了，什么也没换到：画是能重算的。存数字正相反：便宜，
而且数字恰恰是以后会被拿出来吵的东西。
