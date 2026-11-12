---
name: 20261112-datalink-issue
date: 2026-11-12
tags: datalink, concept, issue
---

# 讲法：datalink as context（issue #1 的出处）

> 原始 issue：https://github.com/datalink-ac/datalink-ac/issues/1
> 抓到这里的原文副本：`mneme/inbox/20261112-issue-datalink-as-context.md`

## 这条 issue 定了什么

**一句话：把数据放进链接里（data in the link）。**

不是数据的截图，不是仪表盘的入口——是数据本身，在 URL 里。
人打开链接看到图，agent 取到链接拿到数，操作的是同一串字符。

两种读法（这是整个理念的骨架，issue 的标题就是它）：

- **datalink as context** — 链接本身就是上下文，不是指向上下文的指针。
  拿到链接的一方不需要「抓取 → 截图 → 转述」这一轮往返。
- **datalink as agent context** — 对 agent 来说链接就是接口：
  它读链接、写链接、在链接上做计算。

## 三个主张（issue 的正文结构）

| | 主张 | 一句话 |
|---|---|---|
| 01 | 别再给模型喂截图 | 图表是「为眼睛做的表的有损压缩」；模型靠 OCR 还原数值，靠估算收尾。数据链接同时给出渲染和数据，中间没有翻译步骤。 |
| 02 | URL 就是 API | 数据链接是从参数到「真相的一张图」的纯函数。白拿三样：缓存、版本化（`v=1`）、可 diff。 |
| 03 | 图只是一种渲染 | 同一套扁平参数已经能描述结构图、表格、日历、幻灯片。换的是渲染器，不变的是链接。 |

## 第一个场景：GitHub（用户明确要求的重点）

issue 里把 GitHub 列为第一场景，理由是：**那里的一切本来都是文本**——
一个 diff、一条评论、一份 release note。数据链接不用任何人改习惯就能落进去。

- **release note** —「新增 2400 行，主要是 TypeScript」这句话本来就是一张表。
  做成链接，它同时是一张图，而且依然可 grep、可 diff。
- **issue** — 三段话比一张图老得快；因为是链接，下一个人能直接挪一个框，而不是要求重画。
- **pull request** — reviewer 真正会要的那张图。作为链接它是**可以审的**：
  在 PR 里改一个参数，图跟着变。截图没法被审。

补充理由（写 issue 时补上的）：读 issue 的 bot 拿到的是数字，不是数字的照片。
这让「agent context」在最日常的地方成立，而不是只在一个 demo 里成立。

## 这条 issue 留了什么

规范里还没定的六件事，直接搬到 issue 里当讨论题：

1. 规格要不要单独版本化（钉住渲染器 ≠ 钉住语法）
2. 规格要不要签名（怎么让 agent 分得出真图和伪造图）
3. URL 装不下的数据怎么办，以及存到服务器上的隐私代价
4. 要不要有公开的渲染器注册表
5. 要不要按 `Accept` 协商输出（浏览器 SVG / agent JSON），而不是另开一条路径
6. 怎么表达不确定性（估算出来的图和事实的图不是一回事）

外加一条更硬的：**隐私的线划在哪里**。见 [[20261112-datalink-privacy]]。

## 相关

- 站点：https://datalink.ac
- 规范草案：https://datalink.ac/spec
- 参考实现：x-cmd/draw
- SEO 台账：issue #2 —— 想法记在 [[20261112-datalink-seo]]
- 博客：《数据在链接里》《同一串字符，两个读者》《URL 就是 API》
