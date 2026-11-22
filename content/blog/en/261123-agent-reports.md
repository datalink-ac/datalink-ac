---
title: An agent's report used to end at the picture; now every number can be opened and checked.
date: 2026-11-23
order: 13
desc: Agents report to humans — leaderboards, evaluations, benchmarks, breaking news. Put datalinks in the report: readers open, verify and edit; the next agent reads the numbers back; an English edition is a label swap.
tags: agent, cases
keywords: datalink, data link, AI agent, report, chart link, chart, agent, markdown, SVG, data visualization
---

Watching monitors overnight and handing in a chart-filled report by morning;
running an evaluation and posting the comparison; chasing a breaking story and
updating it as facts land. Agents reporting to humans is now routine. The
report is written for human eyes, but every step from production to archive is
carried by agents.

The picture is the only thing in a report that "is over once it is read": the
conclusion rests on numbers, and the numbers entered the picture and never
came out — a human cannot verify them, and the next agent cannot use them.
Unless the picture is a link.

## 1. A leaderboard report: 200 entries, still a one-line link

Leaderboards like this carry hundreds of entries — far past every platform's
length wall. The spec lives in a JSON source file; the link carries one `src=`:

```
https://www.x-cmd.com/draw?src=…/ladder-gpu-en.json
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?src=https%3A%2F%2Fdatalink.ac%2Fassets%2Fladder-gpu-en.json" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?src=https%3A%2F%2Fdatalink.ac%2Fassets%2Fladder-gpu-en.json" alt="GPU ladder: top 100 NVIDIA vs top 100 AMD/Intel" width="450" height="1673" loading="lazy"></a><figcaption>Top 100 NVIDIA vs top 100 AMD/Intel — all data in the source file, the link is just the one src= line. Click through to explore; the data is readable on hover.</figcaption></figure>

The data updates with the source file; whoever references it touches nothing.

## 2. An evaluation report: readers swap in their own numbers

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;t=primer&amp;title=HK%20VPS%20%E2%86%94%20Guangdong%20%C2%B7%20single-connection%20%28Mbps%29&amp;labels=China%20Telecom%2CChina%20Unicom%2CChina%20Mobile&amp;left=Upload%20%C2%B7%20GD%20%E2%86%92%20HK%3A70.4%2C67.5%2C12.3&amp;right=Download%20%C2%B7%20HK%20%E2%86%92%20GD%3A25.4%2C13%2C23&amp;w=680&amp;h=220" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=butterfly&amp;t=primer&amp;title=HK%20VPS%20%E2%86%94%20Guangdong%20%C2%B7%20single-connection%20%28Mbps%29&amp;labels=China%20Telecom%2CChina%20Unicom%2CChina%20Mobile&amp;left=Upload%20%C2%B7%20GD%20%E2%86%92%20HK%3A70.4%2C67.5%2C12.3&amp;right=Download%20%C2%B7%20HK%20%E2%86%92%20GD%3A25.4%2C13%2C23&amp;w=680&amp;h=220" alt="Single-connection speed test between a Hong Kong VPS and three Guangdong carriers" width="680" height="220" loading="lazy"></a><figcaption>Speed test from a real evaluation by an x-cmd teammate (x-cmd-hub/draw#142): left is the upload leg, right is the download leg, same scale.</figcaption></figure>

Before buying a VPS, you read evaluations like this: the same machine uploads
to Guangdong Unicom at 67.5 Mbps but downloads at 13 Mbps — restoring 20 GB
from it takes about three and a half hours. A reader does not have to trust
the report's numbers: open the picture, the data is readable on hover; with a
trial machine at hand, swap in your own measurements and the picture redraws
on the spot — paste the new link back into the comment. Questioning and
re-testing happen on the same picture.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/echarts?t=primer&amp;w=680&amp;h=238&amp;d=%7B%22title%22%3A%7B%22text%22%3A%22Small%20random%20writes%20%C2%B7%20fast%20median%2C%20slow%20tail%22%7D%2C%22legend%22%3A%7B%22data%22%3A%5B%22P50%22%2C%22P95%22%2C%22P99%22%5D%2C%22left%22%3A174%2C%22top%22%3A54%2C%22itemGap%22%3A22%7D%2C%22grid%22%3A%7B%22left%22%3A176%2C%22right%22%3A42%2C%22top%22%3A82%2C%22bottom%22%3A61%7D%2C%22tooltip%22%3A%7B%22trigger%22%3A%22item%22%7D%2C%22xAxis%22%3A%7B%22type%22%3A%22log%22%2C%22min%22%3A0.5%2C%22max%22%3A100%2C%22name%22%3A%22Write%20latency%20%28ms%2C%20log%20scale%29%22%2C%22nameLocation%22%3A%22middle%22%2C%22nameGap%22%3A33%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%7D%2C%22yAxis%22%3A%7B%22type%22%3A%22category%22%2C%22data%22%3A%5B%22MonoVM%20Linux%202048%20MB%22%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22inverse%22%3Atrue%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%2C%22axisTick%22%3A%7B%22show%22%3Afalse%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22line%22%2C%22name%22%3A%22MonoVM%20Linux%202048%20MB%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22line%22%2C%22name%22%3A%22OVHcloud%20US%20VPS-1%22%2C%22data%22%3A%5B%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P50%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22circle%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%236ba5f8%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P95%22%2C%22data%22%3A%5B%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22rect%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23aab9cd%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P99%22%2C%22data%22%3A%5B%7B%22value%22%3A%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22top%22%2C%22distance%22%3A7%2C%22formatter%22%3A%2262.1%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%2C%7B%22value%22%3A%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22right%22%2C%22distance%22%3A7%2C%22formatter%22%3A%226.9%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%5D%2C%22symbol%22%3A%22diamond%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23edaf73%22%7D%7D%5D%7D" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/echarts?t=primer&amp;w=680&amp;h=238&amp;d=%7B%22title%22%3A%7B%22text%22%3A%22Small%20random%20writes%20%C2%B7%20fast%20median%2C%20slow%20tail%22%7D%2C%22legend%22%3A%7B%22data%22%3A%5B%22P50%22%2C%22P95%22%2C%22P99%22%5D%2C%22left%22%3A174%2C%22top%22%3A54%2C%22itemGap%22%3A22%7D%2C%22grid%22%3A%7B%22left%22%3A176%2C%22right%22%3A42%2C%22top%22%3A82%2C%22bottom%22%3A61%7D%2C%22tooltip%22%3A%7B%22trigger%22%3A%22item%22%7D%2C%22xAxis%22%3A%7B%22type%22%3A%22log%22%2C%22min%22%3A0.5%2C%22max%22%3A100%2C%22name%22%3A%22Write%20latency%20%28ms%2C%20log%20scale%29%22%2C%22nameLocation%22%3A%22middle%22%2C%22nameGap%22%3A33%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%7D%2C%22yAxis%22%3A%7B%22type%22%3A%22category%22%2C%22data%22%3A%5B%22MonoVM%20Linux%202048%20MB%22%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22inverse%22%3Atrue%2C%22axisLabel%22%3A%7B%22fontSize%22%3A12%2C%22margin%22%3A10%7D%2C%22axisTick%22%3A%7B%22show%22%3Afalse%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22line%22%2C%22name%22%3A%22MonoVM%20Linux%202048%20MB%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22line%22%2C%22name%22%3A%22OVHcloud%20US%20VPS-1%22%2C%22data%22%3A%5B%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22none%22%2C%22lineStyle%22%3A%7B%22color%22%3A%22%237f8fa6%22%2C%22width%22%3A2%7D%2C%22silent%22%3Atrue%2C%22tooltip%22%3A%7B%22show%22%3Afalse%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P50%22%2C%22data%22%3A%5B%5B0.807%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B1.434%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22circle%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%236ba5f8%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P95%22%2C%22data%22%3A%5B%5B1.679%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%5B3.293%2C%22OVHcloud%20US%20VPS-1%22%5D%5D%2C%22symbol%22%3A%22rect%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23aab9cd%22%7D%7D%2C%7B%22type%22%3A%22scatter%22%2C%22name%22%3A%22P99%22%2C%22data%22%3A%5B%7B%22value%22%3A%5B62.128%2C%22MonoVM%20Linux%202048%20MB%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22top%22%2C%22distance%22%3A7%2C%22formatter%22%3A%2262.1%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%2C%7B%22value%22%3A%5B6.914%2C%22OVHcloud%20US%20VPS-1%22%5D%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22position%22%3A%22right%22%2C%22distance%22%3A7%2C%22formatter%22%3A%226.9%20ms%22%2C%22fontSize%22%3A12%2C%22fontWeight%22%3A700%2C%22color%22%3A%22var%28--d-ink%2C%20var%28--ink%29%29%22%7D%7D%5D%2C%22symbol%22%3A%22diamond%22%2C%22symbolSize%22%3A10%2C%22itemStyle%22%3A%7B%22color%22%3A%22%23edaf73%22%7D%7D%5D%7D" alt="Random-write latency distribution of two VPS" width="680" height="238" loading="lazy"></a><figcaption>Picking by the median backfires: MonoVM's write median is faster at 0.81 ms, but its P99 is 62.1 ms — a tail about 9× slower than the other machine.</figcaption></figure>

## 3. A benchmark report: the next agent never OCRs

FrontierHarness paired 22 agent tools with 5 models and ran 27,280 scored
trials. The number the report most needs readers to see: **64.5% of the
inference spend went to tasks that did not pass** ([source](https://frontierharness.org/live/)).

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=pie&amp;title=Where%20the%20inference%20spend%20went&amp;labels=Failed%20runs%2CTimed-out%20runs%2CPassed%20runs&amp;values=52.7%2C11.8%2C35.5&amp;w=520&amp;h=330&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=pie&amp;title=Where%20the%20inference%20spend%20went&amp;labels=Failed%20runs%2CTimed-out%20runs%2CPassed%20runs&amp;values=52.7%2C11.8%2C35.5&amp;w=520&amp;h=330&amp;scheme=auto" alt="Where the inference spend went" width="520" height="330" loading="lazy"></a><figcaption>Where the spend of 27,280 scored trials went: failed runs 52.7%, timed-out 11.8%, passed 35.5%.</figcaption></figure>

An agent writing the follow-up never has to write "according to the figure
below" — 52.7 and 11.8 sit in the link's parameters, read out and reused to
the decimal. A picture in a report can now be cited, not just viewed.

## 4. One report, two editions: the data stays, the labels switch language

Breaking news is turning into agents' work too: verify, update, publish in
several languages. The Riemann-hypothesis story came down to one comparison
([source](https://u-lxbin.x-cmd.io/iTXr8yOEQbyj/draw.3.md)) —

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=bar&amp;title=Known%20share%20of%20zeros%20on%20the%20critical%20line%20%28%25%29&amp;labels=Record%20before%2CAfter%20Claude&amp;values=41.6%2C67.2&amp;w=520&amp;h=330&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=bar&amp;title=Known%20share%20of%20zeros%20on%20the%20critical%20line%20%28%25%29&amp;labels=Record%20before%2CAfter%20Claude&amp;values=41.6%2C67.2&amp;w=520&amp;h=330&amp;scheme=auto" alt="Known lower bound of zeros on the critical line" width="520" height="330" loading="lazy"></a><figcaption>The known lower bound of zeros on the critical line: 41.6% to 67.2%.</figcaption></figure>

For the Chinese edition, the labels were swapped to Chinese and reposted with
the data untouched — [the Chinese version](/zh/blog/261123-agent-reports) is
exactly that. Translating a picture is not redrawing it; it is changing
parameters ([a post of its own](/blog/261117-six-languages)).

## Coda

Reports go stale; the numbers in a link do not. In an agent's report to a
human, the picture is the last piece that has not been turned into text. Make
it a link, and the reader can verify it, edit it, and build on it. Datalink
is the picture format built for these reports.
