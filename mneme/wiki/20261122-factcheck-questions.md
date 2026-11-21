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

## 开的 issue（在 datalink-ac/mneme，拆细后）

- mneme#1 数据视图 /draw.json：x-cmd.com 缺货，契约怎么改口
- mneme#2 规范 §5 种类表和实现漂移
- mneme#3 v=N 钉版本的确切语义
- mneme#4 短链现状（公开仓/永不过期）与「可撤销」的张力
- mneme#5 datalink.ac host 定位：养不养、写不写进规范
- mneme#6 文章图混用两个 host + 可靠性承诺
- mneme#7 agent skill canonical 渠道 + 安装命令
- mneme#8 两份 SKILL.md 要不要合并
- mneme#9 下一批文章选题（6 选 3）

原先开在 datalink-ac/datalink-ac 的 #11-#14 已关闭并指向 mneme。
datalink-ac#7 评论里保留了 AI 味残留清单。

## 待站主回答后

1. 按 #11-#13 的答案修订规范/博客 #6/#8/#9。
2. 按 #14 挑的选题写文章（写作标准 = issue #7 正文红线）。
3. AI 味清单 6 条在下一轮改稿时处理。
