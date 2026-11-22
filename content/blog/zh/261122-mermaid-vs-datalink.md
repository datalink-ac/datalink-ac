---
title: mermaid 把图写成代码；datalink 把图写成链接。
date: 2026-11-22
order: 11
desc: 画法没有分歧——/draw/mermaid 照样渲染 mermaid。真正的分歧是载体：图以代码块住进文档，还是以 URL 住进文档——以及两个体系各自画得出什么。
tags: 概念
keywords: 数据链接, mermaid, sequence diagram, flowchart, gantt, datalink, chart, graph, agent, markdown, SVG
---

## 理念先行：图即文本，但文本写给谁

「图即文本」这个想法，mermaid 和 datalink 是同一边的。两边都反对把图
存成二进制，都赞成把图写成可以 diff、可以 grep、可以进版本库的字符。
走到这里，它们握过手。

分歧发生在下一步：**这段文本写给谁。**

mermaid 的答案是：写给人。图是一段代码块，读文档的人顺手读懂图的
结构，改图就是改代码。这是程序员式的思路——源即真相，可读性是
硬需求。

datalink 的答案是：写给基础设施。图是一条 URL，读文档的人看到的
是地址，图的样子要渲染出来才知道。文本在这里不是给人读的源，而是
给缓存、给代理、给邮件客户端、给 agent 的传输格式。

哪个对，取决于三个问题。

**图将来靠什么被修改？** 靠人手，源必须可读——每一次修改都发生在
代码上。靠 agent，可读性就不重要了：你说「把评审拆成安全和性能
两轮」，agent 写出新的代码块和写出新的 URL 一样快，两者对它都是
文本。可读性从人的需求里消失，转移给了不需要可读性的东西。

**图住在哪？** 代码块是文档的一部分，文档在哪图在哪，图死了文档
也少一块。URL 是独立的物件，文档只是引用它——图是一个个可以跟踪的
asset：标注、重编、分享、协作，都发生在图上，不发生在文档上。

**读者在哪？** 代码块需要渲染方才成为图：GitHub 支持 mermaid，
邮件、PDF、聊天工具、打印纸都不。URL 是图片——图片是三十年的
基础设施。读者在哪，比源长什么样重要。

这三个问题没有 universal 答案，所以这篇文章不做胜负，做清点：
两个体系各自画得出什么，载体的账怎么算。

## 一、先对齐事实：画法没有分歧

x-cmd/draw 自己就提供 `/draw/mermaid`——同一段 mermaid 代码，编码进
URL 的 `m=` 参数，返回渲染好的 SVG：

```mermaid
graph LR; A[需求]-->B[设计]; B-->C[开发]; C-->D[评审]; D-->|改|C; D-->E[发布]
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/mermaid?m=graph%20LR%3BA%5B%E9%9C%80%E6%B1%82%5D--%3EB%5B%E8%AE%BE%E8%AE%A1%5D%3BB--%3EC%5B%E5%BC%80%E5%8F%91%5D%3BC--%3ED%5B%E8%AF%84%E5%AE%A1%5D%3BD--%3E%7C%E6%94%B9%7C%20C%3BD--%3EE%5B%E5%8F%91%E5%B8%83%5D" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/mermaid?m=graph%20LR%3BA%5B%E9%9C%80%E6%B1%82%5D--%3EB%5B%E8%AE%BE%E8%AE%A1%5D%3BB--%3EC%5B%E5%BC%80%E5%8F%91%5D%3BC--%3ED%5B%E8%AF%84%E5%AE%A1%5D%3BD--%3E%7C%E6%94%B9%7C%20C%3BD--%3EE%5B%E5%8F%91%E5%B8%83%5D&amp;w=560&amp;h=300&amp;scheme=auto" alt="mermaid 流程图，经 /draw/mermaid 渲染" width="560" height="300" loading="lazy"></a><figcaption>上面那段代码，以 URL 为载体渲染出来的样子。画法还是 mermaid 的画法。</figcaption></figure>

datalink 不反对 mermaid 的画法。mermaid 社区十几年攒下的 DSL 是
好东西，值得一个座位。

## 二、mermaid 能画什么

mermaid.js 是一个语法覆盖极宽的 DSL：流程图（含 subgraph 分组）、
时序图、类图、状态图、ER 图、甘特图、饼图、git 图、思维导图、
时间线、象限图、需求图，外加新版不断添进来的桑基、XY、C4、块图、
包结构图一族。十几个图类，共用一套文本语法。

一种语法通吃是 mermaid 最大的实力：学会一套写法，什么图都能画。
这也是它普及的原因——一个 fenced code block，图就进文档了。

## 三、/draw/mermaid 今天接了多少

实测（2026-11-22，x-cmd.com 线上）：

| mermaid 图类 | `/draw/mermaid` | 备注 |
| --- | --- | --- |
| 流程图 graph / flowchart | ✓ | 基础语法可渲染；subgraph 分组未接（实测报语法错） |
| 甘特图 gantt | ✓ | |
| 时序图 sequenceDiagram | ✗ | 报错原文：只支持 graph/flowchart 与 gantt（[x-cmd/draw#44](https://github.com/x-cmd/draw/issues/44)） |
| 类图、状态图、ER、思维导图、饼图等 | ✗ | 同上 |

故事如果只到这里，datalink 只是 mermaid 的残血版。但 `/draw/mermaid`
只是入口之一——mermaid 的每个图类，datalink 世界里几乎都有另一套
原生画法。

## 四、按图类清点：mermaid vs datalink 原生

| 图类 | mermaid（代码块路线） | `/draw/mermaid` | datalink 原生画法 | 实测 |
| --- | --- | --- | --- | --- |
| 流程图 | ✓ 含 subgraph | ✓ 基础 | archmap · arch2 · cloud（`b=` 分组） | ✓ |
| 时序图 | ✓ | ✗ | seq（`n=` 参与者 · `e=` 消息） | ✓ |
| 甘特图 | ✓ | ✓ | gantt · gantt2 | ✓ |
| 类图 | ✓ | ✗ | class | ✓ |
| 状态图 | ✓ | ✗ | lifecycle | ✓ |
| ER 图 | ✓ | ✗ | erd | ✓ |
| 思维导图 | ✓ | ✗ | mindmap | ✓ |
| 饼图 | ✓ | ✗ | pie（`type=` 图表族共 15 种） | ✓ |
| 桑基图 | ✓（新版） | ✗ | sankey | ✓ |
| 象限图 | ✓ | ✗ | quadrant | ✓ |
| 时间线 | ✓ | ✗ | ✗ | 两边都缺 |
| git 图 | ✓ | ✗ | ✗ | 两边都缺 |
| 需求图 | ✓ | ✗ | ✗ | 两边都缺 |
| mermaid 没有的 | — | — | chem 分子 · tokei 代码构成 · calendar 日历 · qr · gauge · echarts · tty · abcjs/wavedrom/jianpu 记谱 · annotate 标注 · explore 交互 | ✓ |

这张表有三层读法。

第一，交集里的画法，两边各有一套语法。mermaid 是一种 DSL 通吃；
datalink 是每类一套结构化参数——时序图用 `n=` 声明参与者、`e=` 声明
消息，结构图用 `n=`/`e=`/`b=` 家族语法，饼图就是 `type=pie` 加
labels 和 values。

第二，右边多出来的那栏不是凑数。分子结构、代码构成、日历、二维码、
仪表盘、记谱法这些画法，mermaid 没有——它的语法是围绕软件工程图
长出来的，这些不在它的地里。datalink 的种类表是开放的注册表，
边界完全不同。

第三，两边都缺的（时间线、git 图、需求图）诚实记下。注册表开放，
缺什么是公开的问题，不是不好意思的问题。

时序图值得单独看一眼——它是 mermaid 使用最重的图类，也是
`/draw/mermaid` 唯一没接的主场。在 datalink 里它长这样：

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/seq?n=u;ext;%E7%94%A8%E6%88%B7&n=s;svc;%E6%9C%8D%E5%8A%A1&e=u;s;%E8%AF%B7%E6%B1%82&e=s;u;%E8%BF%94%E5%9B%9E" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/seq?n=u;ext;%E7%94%A8%E6%88%B7&amp;n=s;svc;%E6%9C%8D%E5%8A%A1&amp;e=u;s;%E8%AF%B7%E6%B1%82&amp;e=s;u;%E8%BF%94%E5%9B%9E&amp;w=520&amp;scheme=auto" alt="时序图：用户请求服务并收到返回" loading="lazy"></a><figcaption>同一件事，datalink 原生的时序图。参与者和消息是结构化参数，不是 DSL。</figcaption></figure>

agent 改这张图不用解析语法：把 `e=s;u;返回` 换成 `e=s;u;202`，或者
加一行 `n=q;bus;队列` 再补一条 `e=s;q;事件`——改键值而已。

## 五、语法的分野：一套 DSL vs 每类一套参数

mermaid 的选择是抽象：一个语法引擎吃下所有图类，学习者一次投资。
代价是——agent 要可靠地生成或修改 mermaid，得解析一套有 subgraph、
有激活条、有 alt/loop 块的文本语法。能办到，但它是可选格式里
最费模型的那个。

datalink 的选择是结构化：每种图类的参数是扁平键值，没有 DSL 要
解析，改图就是改键值。代价是学习面分散——每个图类要单独认一遍
参数表。

对人，DSL 顺手：手写时序图，mermaid 比 `n=`/`e=` 自然。对 agent，
键值顺手：没有语法要懂，参数就是数据。而修改图的人正在从人换成
agent——天平在往键值那边斜。

## 六、实测：长度与平台的账

数字全部实测（2026-11-22，x-cmd.com）：

- 五步流程图走 `/draw/mermaid`：URL 约 **256** 字符。
- 80 步流程图：约 **3.3k** 字符，comfort zone（3.8k）以内，GitHub 正常代抓。
- 120 步：约 **4.9k** 字符，顶到 GitHub 代抓约 4096 的长度墙——该换短链（POST 提交换 `/draw/c/<hash>`）。

代码块路线：长度从不是问题（图是文档的一部分），但渲染方说了算——
GitHub、GitLab 渲染 mermaid；邮件、PDF、聊天工具、打印纸都不渲染，
读者看到的是一段代码。URL 路线反过来的账：任何渲染图片的地方都
能到，但图大到一定程度要管长度。

## 七、怎么选

- 纯文本仓库、行级 blame 是硬需求、读者确定在渲染 mermaid 的平台
 上（比如GitHub 的 markdown）→ 代码块路线合理，mermaid 语法直接用。
- 读者分布在邮件、PDF、聊天、网页之间，或者图需要被标注、被
  explore 改参数、被 agent 直接读写 → URL 路线。
- 两边都想要的图类 → graph 和 gantt 可以走 `/draw/mermaid`，其余的
  走 datalink 原生语法；mermaid 语法在 URL 载体上的座位会越来越多
  （[#44](https://github.com/x-cmd/draw/issues/44) 在推进）。

## 收尾：不是胜负，是分工

画法是 mermaid 的强项，载体是 URL 的强项。datalink 站在 URL 这边，
不是否定代码块，而是赌一个问题：修改图的人，越来越是 agent。
而对 agent 来说，代码块和链接都是文本——它没有偏好，只有你给它的
上下文。
