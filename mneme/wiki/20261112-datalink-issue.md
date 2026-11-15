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

## 现在的骨架（首页六节）

| | 那一节要说的 |
|---|---|
| **The link is the data.** | 链接里装着数据 —— 大 URL 框，可以直接改，改完回车，图和数字一起变 |
| **The repo stops growing. The documents stop drifting.** | 两个案例：README 里改数字（不用重渲染重上传，diff 里就是那个数字）；六种语言（六条 URL，不是三十六个文件） |
| **Datalink gives more than pictures.** | 架构图、日历、PPT、地图、分子、图表 —— 大号 label 排开，点一个换一张图 |
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

- **「A picture is not the data.」那一节** —— 首屏已经说了
  「Agent gets true data. Human gets big picture.」，
  再用一节把同一句话说三遍，是重复
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

### 渲染器给的东西，不一定是你要的

- **日历只会说中文。** draw 的日历图面文字（月份、星期、图例、页脚）是写死的中文，
  代码里的英文串够不着（`en` 挂在皮肤的 `title` 上，日历两个家族都不是）。
  英文页那一格因此只能挂着一张中文日历 —— 开了 **x-cmd/draw#28** 等它会说英文。
- **PPT 那一格是活的 iframe**，直接指 `www.x-cmd.com/ppt?url=…`，
  引的是 x-cmd/office 里那份 datalink 讲稿（11 页）。
  裸的 `x-cmd.com` 不在本站 CSP 的 `frame-src` 里（白名单写的是 `www.x-cmd.com`），
  用的是同一个服务的规范主机名。
- **分子式默认画一块深色卡片**，浅色页面上像一个洞 —— 钉 `scheme=light`。
- **`scheme=auto` 是两套配色 + 媒体查询**，跟着读者的系统走，不是跟着页面走；
  手动切主题时得由 JS 把 `scheme=` 换掉。
- **内联的 SVG 会把 `:root{color-scheme:light}` 漏到页面上** —— 内联时改成 `svg{`，
  不然整页的 color-scheme 被图带走。
- **幻灯片那一格原本嵌的是 ppt 编辑器**（一个深色的 app），跟旁边一排图片不像一类。
  改成 `/ppt/cover.svg`：一张幻灯片，本身就是一张图。

### 自己家的 bug（自己家才查得出）

- 标签页的「architecture」是**白的** —— 亮色模式里有一条
  `.tab[aria-selected=true]{color:#fff}`，浅底白字，等于没有标签。
- 标签区多了一个 `</div>`，五个面板被挤出 `.panel-body`。
- `.chart-holder` 是 grid + `place-items:center`，里面的 `<a>` 收缩包裹，
  SVG 的 `width:100%` 落在收缩宽度上 —— 图一直按原尺寸待着，框里一大片空。
- 规范草案里的路径全是旧的（`/d?…`、`/deck`、`/d/arch2`），
  而站上早就换成 `/draw?…`、`/ppt` 了。**页面说自己有什么，就是有什么。**

## 相关

- 台账（现在什么状态）：issue #2
- SEO 怎么想：[[20261112-datalink-seo]]
- 隐私那条线：[[20261112-datalink-privacy]]
- draw 的宣传素材：x-cmd-hub/draw#87
- 渲染器要一个 table：x-cmd/draw#24
- 架构图标题乱跑：x-cmd/draw#22
- 日历要会说英文：x-cmd/draw#28
