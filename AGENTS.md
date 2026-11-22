# AGENTS.md — datalink.ac

## 这是什么站

datalink.ac 是 datalink 的 **spec + 理念站 + 文章库**。它不是产品，不是渲染服务。
对外唯一渲染入口是 **x-cmd.com/draw**——不推 datalink.ac/draw，不在文章和规范里
把 datalink.ac 当渲染 host（两个 host 是宣传伤害）。
渲染器实现的问题去 x-cmd/draw（公开版）和 x-cmd-hub/draw（线上服务）自己查，不要问站主。

## 目标与作风

- 目标是**带流量**：SEO/GEO 是正当诉求，但不夸张到让人反感。
- 规范讲的是「datalink 带来一个怎样的世界」，**不是 draw 的使用文档**：
  实现细枝末节（容量上限、收费、登录策略）不进规范；未实现但有价值的功能
  **可以写进规范**，同时在 x-cmd 仓库开 issue push 实现。
- 创业团队，速度是一切：该做的事直接做 + 开 issue，不反复问站主。

## 已定型的世界观（写作遵守）

- 短链：相同数据 → 相同短链；短链本身不带信息，用 `_ctx=<context>` 补
  （shortlink with context，见 datalink-ac#8）；不引入 TTL（不误删用户数据）；
  价格墙防滥用。
- 长度：comfort zone 3.8k（datalink-ac#3）。超限三方案：短链+_ctx（主）、
  pak 压缩（仅无可奈何场景，支持但不推荐）、默认 template+关键数据。
- 变体取舍：filelink（src=）不用；压缩数据不建议但支持。
- 图一律 x-cmd.com/draw host；交互一律 /draw/explore。

## 渠道

- 两份 SKILL.md 并存：`.x-cmd/clawhub/`（clawhub 有安全内容检测，表述小心）与
  `skills/x-cmd-draw/`；以后合并成一份。
- 计划中：x-cmd.com/draw/llms.txt、/SKILL.md、datalink.ac/llms.txt、/SKILL.md。
  skill 内容 = 方案 + 少量案例，指向一个给 AI/SEO 学习的大案例文档。

## 写作

- 审稿标准 = issue #7 正文的「写作红线」。中文是原生中文，英文同理。
- 关键词：vibe coding / ai / agent 必押；再扩 chart、graph、charting ×
  ai/agent/vibecoding/gpt/claude 的组合。

## 记录与提问

- 决策与对账记在 `mneme/wiki/`。
- **提问只在 datalink-ac/mneme 的汇总 issue**（链接见 mneme/wiki 最新记录），
  一个问题只问一次；新出现的问题追加到那个 issue，不开新 issue。
