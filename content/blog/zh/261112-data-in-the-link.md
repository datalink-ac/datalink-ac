---
title: 发出去一张图，数字就没了；发出去一条 Datalink，数字还在。
date: 2026-11-12
order: 1
desc: 稿子发出去了，写它的上下文没有 —— 除非数据在链接里。
tags: 概念
---

稿子是 AI 写的，需要图的地方，它画一张。可它留下的是一张图 ——
数字进了图，就没再出来。

这件事在开发里天天发生：vibe coding 成了日常，人出意图，agent 写代码，
README、issue、pull request 都是它写的 markdown。正文它读得懂，
唯独图 —— 它画得出，读不回。

稿子发出去了，写它的上下文没有。下一个人来读 —— 一个人、一个 agent、
或者一年后的你 —— 手里只有那张图。

## 图里没有地方放数字

一张图能让你看出一百个数字的形状，但它没法把那一百个数字交给你。
而正文里引用的那个数字，只能从一处来：有人把图读了回去。

读回去这一步是有损的，而且损得很安静。那根柱子可能是 4.18，
句子里写的是 4.2，或者 4.3，或者 42%。没人能分辨，
因为数字从来就不在图里。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=bar&amp;labels=Q1,Q2,Q3,Q4&amp;values=4.18,3.92,4.05,4.21&amp;title=p99%20latency%20(s)" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=bar&amp;labels=Q1,Q2,Q3,Q4&amp;values=4.18,3.92,4.05,4.21&amp;title=p99%20latency%20(s)&amp;w=480&amp;h=300&amp;scheme=auto" alt="季度 p99 延迟柱状图" width="480" height="300" loading="lazy"></a><figcaption>链接里写着 4.18。把图读回去的人写 4.2 还是 4.3，图自己不知道。</figcaption></figure>

图里也没有地方放精度、单位、注意事项，更没有地方放第二条序列。
问题不在模型。问题在格式。

## URL 可以是一份文档

网页在文档上早就把这件事解决了。一个 URL 命名的是一份文档，不只是指向一个程序 ——
`https://example.com/notes.md` 这串字符后面就是那份笔记，谁去取，
拿到的都是同样的字节。

这是个用了几十年、无聊的想法。正因如此，网页才能被引用、被 diff、
被缓存、被争论。

轮到数据，我们却慢了。图是最后一个还守着老规矩的地方：一份东西的实质，
被故意放在它的地址之外。

数据放进链接，链接就不再是一个指针了 —— 它成了上下文。
这样的链接有个名字：数据链接，datalink。

## agent 直接拿到数字

拿到这条链接的 agent：

```
x-cmd.com/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980
```

手里就有数字、标签，还有这份数据在回答什么问题。不用取，不用看，
也用不着一段描述图片内容的话。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=pie&amp;t=revenue&amp;title=Stars%20by%20language&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=pie&amp;t=revenue&amp;title=Stars%20by%20language&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520&amp;w=720&amp;h=510&amp;scheme=auto" alt="各语言 star 数量的饼图" width="720" height="510" loading="lazy"></a><figcaption>一条这样的链接渲染出来的样子。同一串字符，agent 也能直接读到背后的数字。</figcaption></figure>

同一张图写成 SVG 标记，大概 1,100 个 token；装着同样数字的那条链接，大概 25 个。
两边都是文本 —— 而且短的那一份，恰好也是准的那一份。

## URL 就是 API

数据链接是个纯函数：参数进，图出。没有会话，没有登录，没有仪表盘，
没有刷新按钮 —— 要说的都在参数里了。

它能缓存，因为 URL 就是键。它能版本化，因为 `v=1` 把字节钉住了，
贴进 release note 的链接就不会变。它能 diff：两条链接只差一个参数，
diff 里看到的就是那个参数。

最后这一条，是图表该出现在 issue、release note 和 PR 里的原因 ——
不是在那里好看，而是在那里可以改，而且历史会记下你当时的意思。

## 链接比图活得久

聊天记录里的一张图是条死路。链接是一份数字还在里面的报告，
半年以后，agent 还能从里面把意图和数字读回来。

## 链接没有门

链接会被复制、转发、缓存、记录、截图。这串字符走到哪里，数据就走到哪里 ——
拿到字符串的人就拿到了数据，中间没有登录，没有权限，没有任何一道门。
「公不公开」不是链接上的一个开关，是它的构造。

所以私密的数据从一开始就不该进链接 —— 这不是缺陷，是性质。
[这一条有整篇在讲](/zh/blog/261112-what-a-url-reveals)。

但看看我们已经在怎么用 URL。查询串贴进 issue，客户标识躺在工单链接里，
仪表盘加了登录，我们再为这个登录花掉真金白银。数据住在 URL 里，
这事不新鲜 —— 那些链接有门，数据链接没有。新鲜的是链接装的东西：
以前装的是门牌，现在装得下内容本身。

渲染器可以换 —— 换成另一个守住同样承诺的 host。承诺本身写在
[数据链接规范](/zh/spec)里 —— 一份草案，欢迎争论。
