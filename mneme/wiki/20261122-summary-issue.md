# 汇总定调与提问约定（2026-11-22）

**唯一提问处：datalink-ac/mneme#10。** 一个问题只问一次；新问题追加到 #10 评论。
9 个分散的问题 issue（mneme#1-#9）已关闭并指向 #10。站主的定调已固化进
datalink-ac 仓库根 `AGENTS.md`（定位/作风/世界观/渠道/写作/记录六节）。

## 站主定调要点（细节以 AGENTS.md 与 mneme#10 为准）

- datalink.ac = spec + 理念站 + 文章库；对外只有 x-cmd.com/draw，不混 host。
- 规范是宣传：带流量、不夸张；不写 draw 使用文档；未实现但有价值的功能
  可写进规范并开 issue push 实现。
- 短链：相同数据相同短链；`_ctx=<context>` 补信息；无 TTL；价格墙防滥用。
- 超限治理：3.8k comfort zone；短链+_ctx 为主，pak 兜底，template+关键数据备选；
  `/draw/explain` 做参数解析。
- 选题：「图是证据」砍掉；「markdown 第一公民」可写；关键词押 vibe coding/ai/agent
  加 chart/graph/charting 组合。

## 工作计划（在 mneme#10 的 checklist 里跟踪）

规范修订（.json 幻觉句删除、§5 种类表对账）→ 两篇文章 → llms.txt/SKILL.md 布局
+ 大案例文档页。

## 全站通读对账（2026-11-21）

过程记录见上一节同名文件：AI 味清单发在 datalink-ac#7 评论；首页 hero 三个
data-url 断链 bug 已修复发布（46036bf）。

## 渠道对账：/draw/SKILL.md 归 worker（2026-11-22）

站主确认：`/draw/SKILL.md` 是 /draw worker 的事，不是站点的事。核实：hub 仓库根
SKILL.md 只是 repo 文件，worker ROUTES 未挂（`src/index.ts:84` 只有 `/llms.txt`），
线上 www.x-cmd.com/draw/SKILL.md 404。已开 x-cmd-hub/draw#146（附最小补丁与同步
策略）。datalink.ac/SKILL.md 是本站自己的 agent-facing 文件，保留。

## 写作更正：mermaid 在 draw 里的位置（2026-11-23）

站主指正：「直接用 mermaid 的画法，不重造一套」是错误表述。mermaid 只是
x-cmd/draw 注册表里**其中一种**方案；每个图类还有一套结构化参数的原生画法
（seq/archmap/erd/pie…），两案并存。已改为「其中一种方案，不是唯一方案」。
教训：写对比关系前先回源码数清楚方案集合，别用「直接采用」这种偷懒句。

## 新篇：agent 给人的报告（2026-11-23）

站主命题「Datalink is designed for reports for agents to human」，素材：
x-cmd/draw 的 ladder-gpu-100.json（src= 已落地，hub src-spec.ts 核实：
折进 d=、SSRF/1MB/10s 防护、URL 的 title= 不覆盖 JSON 里的 title）、
x-cmd-hub/draw#142 的 VPS 测评图（选测速 butterfly + 磁盘 P99 散点）、
u-lxbin 的 FrontierHarness/黎曼猜想两份报告。产出 261123-agent-reports
中英各一：四个报告例子，中文版图配中文版、英文版图配英文版（GPU 天梯
EN 版数据文件放 datalink.ac/assets/ladder-gpu-en.json）。AGENTS.md 的
「filelink(src=)不用」已改为「src= 已落地并在用」。
补充（同日）：该主题同时上了首页——「Datalink 是为 agent 的报告设计的」
section（在 GitHub section 与「告诉 agent」之间），榜单(src=)/测评/评测/
新闻四张案例卡，中文首页中文图、英文首页英文图；know-more 指向博客长文。
