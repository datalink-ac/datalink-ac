---
title: mermaid 把图写成代码；datalink 把图写成链接。
date: 2026-11-22
order: 11
desc: 画法没有分歧——/draw/mermaid 照样渲染 mermaid。真正的分歧是载体：图以代码块住进文档，还是以 URL 住进文档。
tags: 概念
keywords: 数据链接, mermaid, datalink, markdown, agent, chart, graph, 时序图, SVG
---

mermaid 是今天最流行的「图即文本」：一段代码块贴进文档，支持的平台把它
渲染成图。datalink 听起来像是要做它的对手。先把事实摆正：

**画法没有分歧。** x-cmd/draw 自己就提供 `/draw/mermaid` ——同一段
mermaid 代码，编码进 URL 的 `m=` 参数，返回渲染好的 SVG：

```mermaid
graph LR; A[需求]-->B[设计]; B-->C[开发]; C-->D[评审]; D-->|改|C; D-->E[发布]
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/mermaid?m=graph%20LR%3BA%5B%E9%9C%80%E6%B1%82%5D--%3EB%5B%E8%AE%BE%E8%AE%A1%5D%3BB--%3EC%5B%E5%BC%80%E5%8F%91%5D%3BC--%3ED%5B%E8%AF%84%E5%AE%A1%5D%3BD--%3E%7C%E6%94%B9%7C%20C%3BD--%3EE%5B%E5%8F%91%E5%B8%83%5D" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/mermaid?m=graph%20LR%3BA%5B%E9%9C%80%E6%B1%82%5D--%3EB%5B%E8%AE%BE%E8%AE%A1%5D%3BB--%3EC%5B%E5%BC%80%E5%8F%91%5D%3BC--%3ED%5B%E8%AF%84%E5%AE%A1%5D%3BD--%3E%7C%E6%94%B9%7C%20C%3BD--%3EE%5B%E5%8F%91%E5%B8%83%5D&amp;w=560&amp;h=300&amp;scheme=auto" alt="mermaid 流程图，经 /draw/mermaid 渲染" width="560" height="300" loading="lazy"></a><figcaption>上面那段代码，以 URL 为载体渲染出来的样子。画法还是 mermaid 的画法。</figcaption></figure>

datalink 不反对 mermaid 的画法，分歧在另一个地方。

**真正的分歧是载体：图以什么形态住进文档。** 代码块的思路是图随文档走——
图是一段文本，读源的人看得见它怎么画的，diff、grep、blame 都好使。
URL 的思路是文档只放图的地址——读源的人看见一行链接，图的样子要打开
才知道。只看到这里，代码块显然更优。

分歧的底层是另一个问题的答案：**图将来靠什么被修改？**

代码块的答案是：被人手改。每一次修改都发生在代码上，源的可读性是
硬需求。URL 的答案是：被 agent 改。人查看图、在图上做小的调整——
explore 里改一个参数，看图跟着变；复杂的重构只说意图（「把评审拆成
安全和性能两轮」），剩下的交给 agent。agent 写代码块和写 URL 一样快，
对它来说两者都是文本——可读性从人的需求里消失了，转移给了不需要
可读性的东西。

这时 URL 换来一堆代码块给不了的东西：

- **不依赖插件。** 代码块需要渲染方才成为图：GitHub 支持 mermaid，
  邮件、PDF、聊天工具、打印纸都不。URL 是图片——而图片是三十年的
  基础设施，markdown 渲染得了图片的地方，图就到得了。
- **图是 asset。** URL 为单位的图是一个个可跟踪的物件：标注
  （`/draw/annotate`，画一笔，看图的人都看得见）、重编（explore 里
  改参数再复制）、分享（就是复制）、协作（改完把新链接贴回去）。
  代码块是文档的一部分；URL 是独立的物件，文档只是引用它。

**诚实的边界**：今天的 `/draw/mermaid` 只接 graph 和 gantt，时序图
这些 mermaid 的主场画法还没接上（[x-cmd/draw#44](https://github.com/x-cmd/draw/issues/44)）；实测 80 步的流程图 URL 约 3.3k 字符、还在 comfort zone 内，120 步约 4.9k、就顶到 GitHub 代抓的长度墙了——那种尺寸该换短链。纯文本仓库、需要行级 blame 的场景，代码块仍然更合适。

两条路线不是胜负，是分工：画法是 mermaid 的强项，载体是 URL 的强项。
datalink 站在后者——因为读者在哪，比源长什么样重要；因为修改图的人，
越来越是 agent。
