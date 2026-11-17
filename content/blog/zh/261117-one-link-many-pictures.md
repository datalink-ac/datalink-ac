---
title: 一条链接，很多张图。
date: 2026-11-17
order: 3
desc: 同一种地址，能是架构图、日历、幻灯片、地图、分子结构。
tags: 概念
---

让 agent 画一张图，它给你一张图。让它给出发布日历，或者那份讲稿，
或者上一季度的销售地图，它交给你的还是同一类东西：一条链接。

```
/draw/archmap?n=web;fe;浏览器;r0c0&…        一张架构图
/draw?type=calendar&start=2026-11-02&ev=…     一本日历
/ppt?data=…                                    一份讲稿
/draw/echarts?d=…                              一张地图
/draw/chem?smiles=…                            一个分子
```

渲染器不同，出来的形状不同 —— 但地址是同一种形状：路径说明这是哪一类东西，
参数装着它由什么数据做成。

<div class="post-figs"><figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" target="_blank" rel="noopener"><img src="/draw/archmap?n=web;fe;Browser;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20Gateway;r0c2&amp;n=auth;be;Auth%20Service;r1c1&amp;n=render;be;Chart%20Render;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=Data%20Layer;pg%20cache" alt="架构图" width="436" height="270" loading="lazy"></a><figcaption>一张架构图。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" target="_blank" rel="noopener"><img src="/draw/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" alt="分子结构" width="560" height="420" loading="lazy"></a><figcaption>一个分子。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6" target="_blank" rel="noopener"><img src="/draw?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" alt="双翼图" width="480" height="340" loading="lazy"></a><figcaption>一张图表。</figcaption></figure>
</div>

一份对数据的描述，说的是「测了什么」，不说「该怎么画」——
恰恰是这样，同一份数据才可以是图、是表、是日历、也可以是幻灯片。

## 渲染器是细节

链接说明数据是什么，渲染器决定它长什么样。

所以渲染器是链接的细节，不是链接的属性。将来多出一种图 —— 一个分子、
一张甘特图、一种还没人想到的东西 —— 格式不变，它只是同一种地址的另一个读者。
