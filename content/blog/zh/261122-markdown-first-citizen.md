---
title: 以前图是文档的客人；现在图是文档的公民。
date: 2026-11-22
order: 10
desc: vibe coding 之后，交接发生在 issue 和 PR——全是 markdown。图想进这个现场，得先是文本。
tags: 概念
keywords: 数据链接, markdown, agent, vibe coding, chart, graph, diff, 图表, GitHub, datalink
---

issue 是 markdown，pull request 是 markdown，README 和 release note 也是。
vibe coding 之后更是如此：需求在 issue 里交给 agent，成果在 PR 里交回来，
它读和写的现场全是 markdown。markdown 成了人和 agent 共同的工作面。

图在这个工作面里一直是客人。

**客人什么待遇。** `![]()` 引的是一个二进制文件：它出现在文档里，却不属于
文档。diff 里它只写「图片变了」，审阅的人看不出改了什么；agent 读到一个
引用，数字不在里面，得另开一次「看图识数」；改一个数字，要把整张图重画、
重传、再提交一次二进制。图表托管服务的嵌入码是 iframe 和 script——
在 issue 和 README 里根本不让跑。

**公民什么待遇。** 一行标准的 markdown 图片语法，图就住进来了：

```
![CI minutes per day](https://www.x-cmd.com/draw?type=bar&labels=lint,test,build,deploy&values=42,180,95,60&title=CI%20minutes%20per%20day)
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=bar&amp;labels=lint,test,build,deploy&amp;values=42,180,95,60&amp;title=CI%20minutes%20per%20day" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=bar&amp;labels=lint,test,build,deploy&amp;values=42,180,95,60&amp;title=CI%20minutes%20per%20day&amp;w=480&amp;h=300&amp;scheme=auto" alt="每天各环节消耗的 CI 分钟数" width="480" height="300" loading="lazy"></a><figcaption>上面那行字符渲染出来的样子。图就是文本，文本就是图。</figcaption></figure>

图的定义就是这一行文本，所以文本有的它都有。改一个数字，diff 里就是
那一行，审阅的人同时看见数字的改动和图的改动。「这个指标在哪些文档里
出现过」对图也成立——链接能 grep。把项目翻成六种语言，重画的是六条
链接，每条只差几个 label 参数，不是六张图（[那件事有专篇](/zh/blog/261117-six-languages)）。

**一等公民的意思是不需要特殊待遇。** 不需要上传、不需要账号、不需要
嵌入协议——唯一需要的是图本身是文本。markdown 给一切文本的待遇，
图全拿到了。

datalink 做的事就这么点：把图从文件变回文本。图先在文本里，才进得了
agent 的现场。四个具体的地方怎么放这些链接，在[这篇](/zh/blog/261117-datalinks-in-github)；
怎么让 agent 默认写出链接而不是截图，在[这篇](/zh/blog/261117-tell-your-agent)。
