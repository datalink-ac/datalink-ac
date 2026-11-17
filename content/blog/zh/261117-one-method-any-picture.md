---
title: 一套办法，画任何一种图。
date: 2026-11-17
order: 5
desc: agent 挑种类、把数据填进参数。别的都一样。
tags: agent
---

让 agent 画一张图。再让它给出发布日历，或者架构图，或者上季度的销售地图。

种类变了，参数也跟着变：日历要日程，结构图要节点和连线，图表要标签和数值。
办法没变：找到种类，把数据放进参数，链接就成了。

所以这些种类是列出来的，不是靠猜的。注册表写着每一种要什么：

```
/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980      一张图表
/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…   一张结构图
/draw?type=calendar&start=2026-11-02&ev=2026-11-03;…     一本日历
/draw/erd?n=users;table;users;id:uuid (pk);…               一张 ER 图
```

拿着这张表的 agent，不需要为第二种图再学一套 API。
所有种类的链接都是同一个形状：一条 URL，路径说明种类，参数装着数据。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/erd?n=users%3Btable%3Busers%3Bid%3Auuid%20%28pk%29%0Aemail%3Atext%20%28uk%29%0Aname%3Atext&n=orders%3Btable%3Borders%3Bid%3Auuid%20%28pk%29%0Auser_id%3Auuid%0Atotal%3Anumeric&n=products%3Btable%3Bproducts%3Bsku%3Atext%20%28pk%29%0Aname%3Atext%0Aprice%3Anumeric" target="_blank" rel="noopener"><img src="/draw/erd?n=users%3Btable%3Busers%3Bid%3Auuid%20%28pk%29%0Aemail%3Atext%20%28uk%29%0Aname%3Atext&n=orders%3Btable%3Borders%3Bid%3Auuid%20%28pk%29%0Auser_id%3Auuid%0Atotal%3Anumeric&n=products%3Btable%3Bproducts%3Bsku%3Atext%20%28pk%29%0Aname%3Atext%0Aprice%3Anumeric&amp;w=560&amp;h=400&amp;scheme=auto" alt="一个小商店的实体关系图" width="560" height="548" loading="lazy"></a><figcaption>一张 ER 图 —— 昨天还没人听说过的种类，也是这样画出来的。</figcaption></figure>

昨天还不存在的种类，也是这样画出来的。注册表是开放的，承诺不是。

## 承诺不随种类变

agent 挑哪一种，拿到的是同一份契约：链接里装着全部数据，画它的时候不用去查任何东西；
输出是参数和版本的纯函数，同一条链接今天和明天给出同一张图；
图能还原回当初那批数字，所以拿到链接的 agent 既能看图，也能拿数。

这就是让 agent 挑是安全的：它不是在几种承诺不一样的格式里挑，
而是在几个必须守同样承诺的渲染器里挑。

## 种类在链接里，所以你也能自己换

种类是地址里的路径。把它改一改，就换一张图 —— 而且这件事不需要 agent：
把 README 里那条链接改一下，或者在地址栏里改，图就跟着变。

agent 写链接，你看链接。两个人动的是同一串字符。
