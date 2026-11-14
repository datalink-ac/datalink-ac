---
name: 20261112-datalink-issue
date: 2026-11-12
tags: datalink, concept, issue
---

# 讲法：Datalink as Context（issue #1 的出处）

> 原始 issue：https://github.com/datalink-ac/datalink-ac/issues/1
> 抓到这里的原文副本：`mneme/inbox/20261112-issue-datalink-as-context.md`
>
> 这一篇记的是**现在这版**的说法。首页重做过好几轮，
> 下面写的是活下来的那一版。

## 一句话

**Datalink as Context** ——

> **Agent gets true data. Human gets big picture.**
> 都靠同一件事：把数据放进链接里。

D-A-C 三个字母对应 datalink.ac —— 首页的大标题就是按这个做的。

## 谁在用

**AI 写稿的年代，人不写链接。** 人只复制一段 prompt，
agent 写稿（README、issue、PR、博文、聊天），需要图就拼一条链接。
所以首页从头到尾都在讲 agent 怎么用，而不是人怎么用。

这也是为什么首页的主语是 agent，而不是「你」。

## 现在的骨架（首页七节）

| | 那一节要说的 |
|---|---|
| **A picture is not the data.** | 图给你看的是形状，不是数值；agent 只能把像素读回来；过后谁也核对不了 |
| **The link is the data.** | 链接里装着数据 —— 大 URL 框，可以直接改，改完回车，图和数字一起变 |
| **The repo stops growing. The documents stop drifting.** | 两个案例：README 里改数字（不用重渲染重上传，diff 里就是那个数字）；六种语言（六条 URL，不是三十六个文件） |
| **Datalink gives more than pictures.** | 架构图、日历、幻灯片、地图、分子、图表 —— 大号 label 排开 |
| **Datalink is designed for GitHub.** | release / issue / PR 三张真图 |
| **Make your agent use datalinks.** | 左 prompt（带 skill 说明书地址）、右 clawhub 安装，都能 copy |

## 两条不能丢的

**一、两种读法是同一串字符。**
人读到图（insight and vision），agent 读到数（exact, quotable）。
同一串数字，一个给人看，一个给机器读 —— 这才是「Context」这个词的意思。

**二、链接就是存档。**
数字在链接里，所以：仓库不再堆二进制、diff 里看得见数字、
六个月后 agent 还能从那条链接里读出当时的意图和数据。

## 被砍掉的（别再加回来）

- 小节标签（「怎么跑」「两个读者」「另一半」那一套）—— 节标题自己就是观点
- 导语 —— 节标题已经说完了，导语是重复
- 「我们为眼睛造了图片」这类辩解 —— 那是解释，不是宣传
- draw 自己的设计宣传（统一视觉、最省事、压得紧）——
  那些搬到 **x-cmd-hub/draw#87** 去了，datalink.ac 不替 draw 讲它

## 踩过的坑

- **一开始整页是密密麻麻的文字**（英文 1,345 词）→ 砍到 449 词。
  「要讲价值，不要写日记」。
- **标题写成没有营养的断言**（「不只是图表」）→ 那种句子读者一眼就滑过去。
- **把人写成要手写 URL 的人** → 人只复制 prompt。
- **拿 vision token 跟 token 比** → 图片不能只按 token 算，
  现在比的是「SVG 标记约 1,100 vs 链接约 25」，两边都是文本。

## 相关

- 台账（现在什么状态）：issue #2
- SEO 怎么想：[[20261112-datalink-seo]]
- 隐私那条线：[[20261112-datalink-privacy]]
- draw 的宣传素材：x-cmd-hub/draw#87
- 渲染器要一个 table：x-cmd/draw#24
- 架构图标题乱跑：x-cmd/draw#22
