---
title: 不止图表：架构图、日历、地图、分子结构，用的也是同一种链接。
date: 2026-11-17
order: 3
desc: 参数不一样，形态一样 —— 每一种数据都走同一套 datalink。
tags: 概念
---

不只是数据图表。一张架构图、一本发布日历、一张地图、一个分子结构 ——
它们都是数据放在链接里，各是各的一条链接。将来再有新的数据要画 ——
一种还没人想到的东西 —— 也只是多一种链接。开发文档里要用的图，
差不多都在这几样里。

参数不一样，因为数据不一样：日历要日程，结构图要节点和连线，
图表要标签和数值。一条链接，画出一张图。

不变的是形态。它是一条 URL，参数里装着数据，后面有一个渲染器，
守着同样的承诺 —— 画图表还是画日历，都是如此。

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;%E8%AE%A4%E8%AF%81;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&amp;n=cdn;cloud;CDN;r0c1&amp;n=gw;be;API%20%E7%BD%91%E5%85%B3;%E8%AE%A4%E8%AF%81;r0c2&amp;n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&amp;n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&amp;n=pg;db;Postgres;r2c1&amp;n=cache;db;Redis;r2c2&amp;e=web;cdn&amp;e=cdn;gw&amp;e=gw;auth&amp;e=gw;render&amp;e=auth;pg&amp;e=render;pg&amp;e=render;cache&amp;b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache" alt="架构图" width="436" height="270" loading="lazy"></a><figcaption>一张结构图。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=calendar&amp;layout=month&amp;start=2026-11-02&amp;ev=2026-11-03;meeting;%E9%9C%80%E6%B1%82%E8%AF%84%E5%AE%A1;14:00&amp;ev=2026-11-11;review;%E8%A7%84%E8%8C%83%E8%B5%B0%E6%9F%A5;10:30" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=calendar&amp;layout=month&amp;start=2026-11-02&amp;ev=2026-11-03;meeting;%E9%9C%80%E6%B1%82%E8%AF%84%E5%AE%A1;14:00&amp;ev=2026-11-11;review;%E8%A7%84%E8%8C%83%E8%B5%B0%E6%9F%A5;10:30&amp;w=480&amp;h=340&amp;scheme=auto" alt="日历" width="480" height="340" loading="lazy"></a><figcaption>一本日历。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A70%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A6%2C%22itemWidth%22%3A10%2C%22itemHeight%22%3A120%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%7D%5D%7D%5D%7D&amp;w=480&amp;h=340&amp;scheme=light" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A70%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A6%2C%22itemWidth%22%3A10%2C%22itemHeight%22%3A120%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%7D%5D%7D%5D%7D&amp;w=480&amp;h=340&amp;scheme=light" alt="地图" width="480" height="340" loading="lazy"></a><figcaption>一张地图，每个州一个数字。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/chem?smiles=CN1C%3DNC2%3DC1C%28%3DO%29N%28C%28%3DO%29N2C%29C&amp;scheme=light" alt="分子结构" width="560" height="420" loading="lazy"></a><figcaption>一个分子。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=area&amp;labels=Q1,Q2,Q3,Q4&amp;values=12,19,15,24&amp;title=Latency%20budget&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=area&amp;labels=Q1,Q2,Q3,Q4&amp;values=12,19,15,24&amp;title=Latency%20budget&amp;scheme=auto" alt="面积图" width="560" height="340" loading="lazy"></a><figcaption>一张图表。</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" alt="双翼图" width="480" height="340" loading="lazy"></a><figcaption>一张两边的图。</figcaption></figure>
</div>

六条链接，六张图。同一种形态，不同的数据。

一份对数据的描述，说的是「测了什么」，不说「该怎么画」。
所以同一份数据才可以是图、是表、是日历、也可以是幻灯片。

## 多一种图，不是多一种格式

渲染器是一个开放的清单：图表、结构图、日历、地图、幻灯片。
将来多一种 —— 一种还没人想到的东西 ——
不是多了一种格式，而是多了一个渲染器。它必须守同样的承诺：
链接里装着数据，输出是参数的纯函数，图永远能还原回那批数字。

这些承诺写在[规范](/zh/spec)里。
