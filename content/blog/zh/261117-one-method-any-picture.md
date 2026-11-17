---
title: agent 不用再猜格式：查一下注册表，填上参数，链接就成了。
date: 2026-11-17
order: 5
desc: 种类变了、参数也变了，办法没变 —— 换的是渲染器，不变的是承诺。
tags: agent
---

让 agent 画一张图。再让它画一本发布日历，或者一张架构图，或者一张甘特图。

种类变了，参数也跟着变：日历要日程，结构图要节点和连线，图表要标签和数值。
办法没变：找到种类，把数据放进参数，链接就成了。

所以这些种类是列出来的，不是靠 agent 猜。注册表上写着每一种要什么：

```
/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980      一张图表
/draw/archmap?n=web;fe;浏览器;r0c0&n=cdn;cloud;CDN;r0c1&…   一张结构图
/draw?type=calendar&start=2026-11-02&ev=2026-11-03;…     一本日历
/draw/erd?n=users;table;users;id:uuid (pk);…               一张 ER 图
```

有这张表的 agent，不用为第二种图再学一套 API。所有种类的链接都是同一个形状：
一条 URL，路径说明种类，参数装着数据。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=calendar&amp;layout=month&amp;start=2026-11-02&amp;ev=2026-11-03;meeting;%E9%9C%80%E6%B1%82%E8%AF%84%E5%AE%A1;14:00&amp;ev=2026-11-11;review;%E8%A7%84%E8%8C%83%E8%B5%B0%E6%9F%A5;10:30" target="_blank" rel="noopener"><img src="/draw?type=calendar&amp;layout=month&amp;start=2026-11-02&amp;ev=2026-11-03;meeting;%E9%9C%80%E6%B1%82%E8%AF%84%E5%AE%A1;14:00&amp;ev=2026-11-11;review;%E8%A7%84%E8%8C%83%E8%B5%B0%E6%9F%A5;10:30&amp;w=480&amp;h=340&amp;scheme=auto" alt="一本日历" width="480" height="340" loading="lazy"></a><figcaption>一本日历 —— 注册表里再普通不过的一种。</figcaption></figure>

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/erd?n=users%3Btable%3Busers%3Bid%3Auuid%20%28pk%29%0Aemail%3Atext%20%28uk%29%0Aname%3Atext&n=orders%3Btable%3BOrders%3Bid%3Auuid%20%28pk%29%0Auser_id%3Auuid%0Atotal%3Anumeric&n=products%3Btable%3Bproducts%3Bsku%3Atext%20%28pk%29%0Aname%3Atext%0Aprice%3Anumeric" target="_blank" rel="noopener"><img src="/draw/erd?n=users%3Btable%3Busers%3Bid%3Auuid%20%28pk%29%0Aemail%3Atext%20%28uk%29%0Aname%3Atext&n=orders%3Btable%3BOrders%3Bid%3Auuid%20%28pk%29%0Auser_id%3Auuid%0Atotal%3Anumeric&n=products%3Btable%3Bproducts%3Bsku%3Atext%20%28pk%29%0Aname%3Atext%0Aprice%3Anumeric&amp;w=560&amp;h=400&amp;scheme=auto" alt="一个小商店的实体关系图" width="560" height="548" loading="lazy"></a><figcaption>一张 ER 图 —— 品种会多，画法不变。</figcaption></figure>

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/gantt?m=dateFormat%20YYYY-MM-DD%0A%20%20section%20Dev%0A%20%20Design%20%3Adone%2C%20a1%2C%202026-11-01%2C%203d%0A%20%20Build%20%3Aactive%2C%20a2%2C%20after%20a1%2C%205d%0A%20%20Ship%20%3Amilestone%2C%20m1%2C%202026-11-10%2C%200d%0A%20%20section%20QA%0A%20%20Regression%20%3Acrit%2C%20b1%2C%20after%20a2%2C%203d&amp;title=Sprint%20plan" target="_blank" rel="noopener"><img src="/draw/gantt?m=dateFormat%20YYYY-MM-DD%0A%20%20section%20Dev%0A%20%20Design%20%3Adone%2C%20a1%2C%202026-11-01%2C%203d%0A%20%20Build%20%3Aactive%2C%20a2%2C%20after%20a1%2C%205d%0A%20%20Ship%20%3Amilestone%2C%20m1%2C%202026-11-10%2C%200d%0A%20%20section%20QA%0A%20%20Regression%20%3Acrit%2C%20b1%2C%20after%20a2%2C%203d&amp;title=Sprint%20plan&amp;w=480" alt="一张甘特图" width="480" height="304" loading="lazy"></a><figcaption>一张甘特图 —— 注册表上的又一种。</figcaption></figure>

昨天还不存在的种类，也是这样画出来的：注册表是开放的，承诺不是。

## 承诺不随种类变

agent 挑哪一种，拿到的是同一份契约：链接里装着全部数据，画的时候不用去查任何东西；
输出是参数和版本的纯函数，同一条链接今天和明天给出同一张图；
图能还原回当初那批数字，所以拿到链接的 agent 既能看图，也能拿数。

这就是让 agent 自己挑是安全的：它不是在几种承诺不一样的格式里挑，
而是在几个必须守同样承诺的渲染器里挑。

## 种类在链接里，所以你也能自己换

种类是地址里的路径。改一改，就换一张图 —— 而且这件事不需要 agent：
把 README 里那条链接改一下，或者在地址栏里改，图就跟着变。

agent 写链接，你读链接。两边动的是同一串字符。
