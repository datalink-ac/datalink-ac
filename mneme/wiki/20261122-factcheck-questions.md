# 全站通读对账（2026-11-21）

## 做了什么

通读 datalink.ac 全部 9 篇中文博客 + 首页 + 规范，对照 x-cmd/draw（参考实现）
与 x-cmd-hub/draw（线上服务文档）源码逐条核对事实。产出两类清单：
AI 味残留（发在 issue #7 评论）与事实/逻辑存疑（开成 4 个问题集 issue）。

## 修复的功能 bug（已发布）

首页 hero 轮播三个 `data-url` 断链（中英同病）：`type=piet=revenue`、
`r0c0n=build`、`type=butterflytitle=`。这个属性喂给 chip 展示和 copy 按钮——
用户复制到的是坏链接。已修（commit 见 git log）。

## 核对到的事实（证据）

- `datalink.ac/draw` 与 `/draw.json` 都 200 —— 本站自己是一台渲染器 host
  （issue #1 的说法属实）；`www.x-cmd.com/draw.json` 404 —— 数据视图在参考
  host 上不存在，但全站图的 host 都是它。
- 短链实现（x-cmd/draw `src/store.ts`）：canonical JSON 排序 key → 16 位十六进制
  指纹，存**公开 Git 仓** `charts/<指纹>.json`，内容寻址、永不过期；
  「相同数据 → 相同短链」与规范 §7 一致；注释写明私有方案规划中、将收费。
- `CHART_TEMPLATES` 18 种（含 qr/quadrant/compass/ladder/butterfly-ladder/calendar/
  table），规范 §5 列 11 种且 table 标「尚未能渲染」——表已漂移。
- 两个 skill 渠道（`.x-cmd/clawhub/SKILL.md` 与 `skills/x-cmd-draw/SKILL.md`）
  diff 186 行，frontmatter 与示例都不一样。
- `npx clawhub@latest install edwinjhlee/x-cmd-draw` 在 draw 仓库 md 里找不到出处。
- SVG 内嵌 `<metadata>` 保存原始 spec（I5 无损的实现方式）。

## 开的 issue

- #11 事实对账：规范 vs 实现（.json、种类表、可撤销短链、v 语义）
- #12 datalink.ac 自己是一台 host——定位与用法
- #13 agent skill 三个渠道漂移
- #14 下一批文章 6 个候选选题

## 待站主回答后

1. 按 #11-#13 的答案修订规范/博客 #6/#8/#9。
2. 按 #14 挑的选题写文章（写作标准 = issue #7 正文红线）。
3. AI 味清单 6 条在下一轮改稿时处理。
