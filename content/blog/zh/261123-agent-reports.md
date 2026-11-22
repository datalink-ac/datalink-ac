---
title: 以前 agent 的报告，图看完就完了；现在每个数字都能点进去验。
date: 2026-11-23
order: 13
desc: agent 出报告给人看：榜单、测评、评测、突发新闻。报告里的图用 datalink——人点开能验能改，下一个 agent 直接读回数字；中英文两版只换 label 参数。
tags: agent, 案例
keywords: 数据链接, datalink, AI agent, 报告, 图表链接, chart, agent, markdown, SVG, 数据可视化
---

盯一晚监控，早上交出带图的日报；跑一轮评测，贴出对比结果；追一条突发新闻，
边核实边更新。agent 出报告已经是日常。报告是给人读的，但从产出到归档，
链路里搬东西的都是 agent。

图是报告里唯一「读完就完了」的东西：结论有数字撑着，数字进了图就出不来——
人核不了，下一个 agent 也用不上。除非图是链接。

## 1. 榜单报告：两百项数据，链接还是一行

天梯图这类榜单，两百项数据塞进 URL，会顶到各处的长度墙。规格放在
JSON 源文件里，链接只带一个 `src=`：

```
https://www.x-cmd.com/draw?src=…/examples/ladder-gpu-100.json
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?src=https%3A%2F%2Fraw.githubusercontent.com%2Fx-cmd%2Fdraw%2Fmain%2Fexamples%2Fladder-gpu-100.json" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?src=https%3A%2F%2Fraw.githubusercontent.com%2Fx-cmd%2Fdraw%2Fmain%2Fexamples%2Fladder-gpu-100.json" alt="显卡天梯图：NVIDIA 前 100 对 AMD/Intel 前 100" width="450" height="1673" loading="lazy"></a><figcaption>NVIDIA 前 100 对 AMD/Intel 前 100，数据全在源文件里；链接只有 src= 那一行。点开进 explore，数据悬停可读。</figcaption></figure>

数据更新就改源文件，引用这一头什么都不用动。

## 2. 测评报告：读者换成自己的数，图即改即显

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;t=primer&amp;title=%E9%A6%99%E6%B8%AF%20VPS%20%E2%86%94%20%E5%B9%BF%E4%B8%9C%20%C2%B7%20%E4%B8%89%E7%BD%91%E5%8D%95%E8%BF%9E%E6%8E%A5%E6%B5%8B%E9%80%9F%EF%BC%88Mbps%EF%BC%89&amp;labels=%E7%94%B5%E4%BF%A1%2C%E8%81%94%E9%80%9A%2C%E7%A7%BB%E5%8A%A8&amp;left=%E5%8E%BB%E7%A8%8B%20%C2%B7%20%E5%B9%BF%E4%B8%9C%20%E2%86%92%20VPS%3A70.4%2C67.5%2C12.3&amp;right=%E5%9B%9E%E7%A8%8B%20%C2%B7%20VPS%20%E2%86%92%20%E5%B9%BF%E4%B8%9C%3A25.4%2C13%2C23&amp;w=680&amp;h=220" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=butterfly&amp;t=primer&amp;title=%E9%A6%99%E6%B8%AF%20VPS%20%E2%86%94%20%E5%B9%BF%E4%B8%9C%20%C2%B7%20%E4%B8%89%E7%BD%91%E5%8D%95%E8%BF%9E%E6%8E%A5%E6%B5%8B%E9%80%9F%EF%BC%88Mbps%EF%BC%89&amp;labels=%E7%94%B5%E4%BF%A1%2C%E8%81%94%E9%80%9A%2C%E7%A7%BB%E5%8A%A8&amp;left=%E5%8E%BB%E7%A8%8B%20%C2%B7%20%E5%B9%BF%E4%B8%9C%20%E2%86%92%20VPS%3A70.4%2C67.5%2C12.3&amp;right=%E5%9B%9E%E7%A8%8B%20%C2%B7%20VPS%20%E2%86%92%20%E5%B9%BF%E4%B8%9C%3A25.4%2C13%2C23&amp;w=680&amp;h=220" alt="香港 VPS 与广东三网的单连接测速" width="680" height="220" loading="lazy"></a><figcaption>同一份测评的测速图：左半边是上传到 VPS 的去程，右半边是取回的回程，同一刻度。出自 x-cmd 同事的真实测评（x-cmd-hub/draw#142）。</figcaption></figure>

买 VPS 前看测速：同一台机器，广东联通上传 67.5 Mbps、下载只有 13 Mbps。
当备份机用，取回 20 GB 要约三个半小时。读者未必信报告里的数——点开图，
数据悬停可读；手头有试用机，把参数换成自己测的，图立刻重画，新链接贴回
评论。质疑和复测发生在同一张图上。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/echarts?t=primer&amp;w=680&amp;h=238&amp;d=%7B%22title%22%3A%7B%22text%22%3A%22%E5%B0%8F%E5%9D%97%E9%9A%8F%E6%9C%BA%E5%86%99%20%C2%B7%20%E4%B8%AD%E4%BD%8D%E6%95%B0%E5%BF%AB%EF%BC%8C%E5%B0%BE%E9%83%A8%E5%8F%AF%E8%83%BD%E6%85%A2%22%7D%2C%22legend%22%3A%7B%22data%22%3A%5B%22P50%22%2C%22P95%22%2C%22P99%22%5D%2C%22left%22%3A174%2C%22top%22%3A54%2C%22itemGap%22%3A22%7D%2C%22grid%22%3A%7B%22left%22%3A176%2C%22right%22%3A42%2C%22top%22%3A82%2C%22bottom%22%3A61%7D%2C%22tooltip%22%3A%7B%22trigger%22%3A%22item%22%7D%2C%22xAxis%22%3A%7B%22type%22%3A%22log%22%2C%22min%22%3A0.5%2C%22max%22%3A100%2C%22name%22%3A%22%E5%86%99%E5%85%A5%E5%BB%B6%E8%BF%9F%EF%BC%88ms%EF%BC%8C%E5%AF%B9%E6%95%B0%E5%88%BB%E5%BA%A6%EF%BC%89%22%2C%22nameLocation%22%3A%22middle%22%2C%22nameGap%22%3A33%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%7D%2C%22yAxis%22%3A%7B%22type%22%3A%22category%22%2C%22data%22%3A%5B%22MonoVM%20Linux%202048%20MB%22%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22inverse%22%3Atrue%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%2C%22axisTick%22%3A%7B%22show%22%3Afalse%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22line%22%2C%22name%22%3A%22MonoVM%20Linux%202048%20MB%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22line%22%2C%22name%22%3A%22OVHcloud%20US%20VPS-1%22%2C%22data%22%3A%5B%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P50%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22circle%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%236ba5f8%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P95%22%2C%22data%22%3A%5B%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22rect%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23aab9cd%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P99%22%2C%22data%22%3A%5B%7B%22value%22%3A%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22top%22%2C%22distance%22%3A7%2C%22formatter%22%3A%2262.1%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%2C%7B%22value%22%3A%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22right%22%2C%22distance%22%3A7%2C%22formatter%22%3A%226.9%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%5D%2C%22symbol%22%3A%22diamond%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23edaf73%22%7D%7D%5D%7D" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/echarts?t=primer&amp;w=680&amp;h=238&amp;d=%7B%22title%22%3A%7B%22text%22%3A%22%E5%B0%8F%E5%9D%97%E9%9A%8F%E6%9C%BA%E5%86%99%20%C2%B7%20%E4%B8%AD%E4%BD%8D%E6%95%B0%E5%BF%AB%EF%BC%8C%E5%B0%BE%E9%83%A8%E5%8F%AF%E8%83%BD%E6%85%A2%22%7D%2C%22legend%22%3A%7B%22data%22%3A%5B%22P50%22%2C%22P95%22%2C%22P99%22%5D%2C%22left%22%3A174%2C%22top%22%3A54%2C%22itemGap%22%3A22%7D%2C%22grid%22%3A%7B%22left%22%3A176%2C%22right%22%3A42%2C%22top%22%3A82%2C%22bottom%22%3A61%7D%2C%22tooltip%22%3A%7B%22trigger%22%3A%22item%22%7D%2C%22xAxis%22%3A%7B%22type%22%3A%22log%22%2C%22min%22%3A0.5%2C%22max%22%3A100%2C%22name%22%3A%22%E5%86%99%E5%85%A5%E5%BB%B6%E8%BF%9F%EF%BC%88ms%EF%BC%8C%E5%AF%B9%E6%95%B0%E5%88%BB%E5%BA%A6%EF%BC%89%22%2C%22nameLocation%22%3A%22middle%22%2C%22nameGap%22%3A33%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%7D%2C%22yAxis%22%3A%7B%22type%22%3A%22category%22%2C%22data%22%3A%5B%22MonoVM%20Linux%202048%20MB%22%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22inverse%22%3Atrue%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%2C%22axisTick%22%3A%7B%22show%22%3Afalse%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22line%22%2C%22name%22%3A%22MonoVM%20Linux%202048%20MB%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22line%22%2C%22name%22%3A%22OVHcloud%20US%20VPS-1%22%2C%22data%22%3A%5B%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P50%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22circle%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%236ba5f8%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P95%22%2C%22data%22%3A%5B%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22rect%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23aab9cd%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P99%22%2C%22data%22%3A%5B%7B%22value%22%3A%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22top%22%2C%22distance%22%3A7%2C%22formatter%22%3A%2262.1%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%2C%7B%22value%22%3A%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22right%22%2C%22distance%22%3A7%2C%22formatter%22%3A%226.9%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%5D%2C%22symbol%22%3A%22diamond%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23edaf73%22%7D%7D%5D%7D" alt="两台 VPS 的小块随机写延迟分布" width="680" height="238" loading="lazy"></a><figcaption>按中位数挑机器会踩坑：MonoVM 写入中位数 0.81 ms 更快，P99 却是 62.1 ms，尾部比另一台慢约 9 倍。</figcaption></figure>

## 3. 评测报告：下一个 agent 不用「看图识数」

FrontierHarness 把 22 个 agent 工具 × 5 个模型两两组合，跑了 27,280 次
计分测试。报告里最该一眼看到的数字：**64.5% 的推理费用花在了没通过的
任务上**（[数据出处](https://frontierharness.org/live/)）。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=pie&amp;title=%E6%8E%A8%E7%90%86%E8%B4%B9%E7%94%A8%E8%8A%B1%E5%9C%A8%E4%BA%86%E5%93%AA%E9%87%8C&amp;labels=%E5%A4%B1%E8%B4%A5%E4%BB%BB%E5%8A%A1%2C%E8%B6%85%E6%97%B6%E4%BB%BB%E5%8A%A1%2C%E9%80%9A%E8%BF%87%E7%9A%84%E4%BB%BB%E5%8A%A1&amp;values=52.7%2C11.8%2C35.5&amp;w=520&amp;h=330&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=pie&amp;title=%E6%8E%A8%E7%90%86%E8%B4%B9%E7%94%A8%E8%8A%B1%E5%9C%A8%E4%BA%86%E5%93%AA%E9%87%8C&amp;labels=%E5%A4%B1%E8%B4%A5%E4%BB%BB%E5%8A%A1%2C%E8%B6%85%E6%97%B6%E4%BB%BB%E5%8A%A1%2C%E9%80%9A%E8%BF%87%E7%9A%84%E4%BB%BB%E5%8A%A1&amp;values=52.7%2C11.8%2C35.5&amp;w=520&amp;h=330&amp;scheme=auto" alt="推理费用去向饼图" width="520" height="330" loading="lazy"></a><figcaption>27,280 次计分测试的费用去向：失败任务 52.7%，超时 11.8%，通过 35.5%。</figcaption></figure>

写续篇、做复测的 agent 不用「根据下图」——52.7 和 11.8 就在链接的参数里，
读出来就能用，一分不差。报告里的图可以被引用，不只是被观看。

## 4. 同一份报告出两版：数据不动，图说两种语言

突发新闻也在变成 agent 的活：核实、更新、多语言分发。黎曼猜想那条
新闻，关键数字只有一个对比（[数据出处](https://u-lxbin.x-cmd.io/iTXr8yOEQbyj/draw.3.md)）——

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=bar&amp;title=%E4%B8%B4%E7%95%8C%E7%BA%BF%E4%B8%8A%E9%9B%B6%E7%82%B9%E7%9A%84%E5%B7%B2%E7%9F%A5%E4%B8%8B%E9%99%90%EF%BC%88%25%EF%BC%89&amp;labels=%E6%AD%A4%E5%89%8D%E7%9A%84%E7%BA%AA%E5%BD%95%2CClaude%20%E6%8E%A8%E8%BF%9B%E5%90%8E&amp;values=41.6%2C67.2&amp;w=520&amp;h=330&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=bar&amp;title=%E4%B8%B4%E7%95%8C%E7%BA%BF%E4%B8%8A%E9%9B%B6%E7%82%B9%E7%9A%84%E5%B7%B2%E7%9F%A5%E4%B8%8B%E9%99%90%EF%BC%88%25%EF%BC%89&amp;labels=%E6%AD%A4%E5%89%8D%E7%9A%84%E7%BA%AA%E5%BD%95%2CClaude%20%E6%8E%A8%E8%BF%9B%E5%90%8E&amp;values=41.6%2C67.2&amp;w=520&amp;h=330&amp;scheme=auto" alt="临界线上零点已知下限对比" width="520" height="330" loading="lazy"></a><figcaption>临界点零点的已知下限：41.6% 到 67.2%。</figcaption></figure>

英文版把 label 换成英文再贴一次，数据一行不动——[英文版](/blog/261123-agent-reports)
就是这么做的。翻译图不是重画，是改参数（[专篇](/zh/blog/261117-six-languages)）。

## 收尾

报告会过时，链接里的数字不过时。agent 给人的报告，图是最后一个还没
文本化的环节；把它变成链接，读报告的人能验、能改、能接着用。
Datalink 就是为这种报告准备的图格式。
