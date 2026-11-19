---
title: 以前换平台就要重新传图；现在同一条链接贴遍六个 Git 平台。
date: 2026-11-19
order: 9
desc: 在 GitHub、GitLab、Gitee、GitCode、Codeberg、Bitbucket 的 issue 里实测同一组数据链接 —— 都能显示，只有一个长度上的坑。
tags: 案例
keywords: 数据链接, GitHub, GitLab, Gitee, GitCode, Codeberg, Bitbucket, issue, SVG
---

数据链接贴进 issue，图不是读者的浏览器画的 —— 是平台的服务器先抓一遍、
存下来、再递给读者。所以「一条链接能不能用」，渲染器说了不算，平台说了算。
issue 是开发的现场 —— vibe coding 之后，提 issue、跟 issue 的常常就是
agent 本人，markdown 是它们的界面。

我们把同一组链接贴进了六个平台的 issue：GitHub、GitLab、Gitee、GitCode、
Codeberg（Forgejo）、Bitbucket（Atlassian）。从饼图、雷达图到架构图、日历、
分子、地图，十几种；外加一组专门测长度的链接 —— 4000、4096、5000 个字符，
一级一级加上去。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=pie&amp;t=revenue&amp;title=%E5%90%84%E8%AF%AD%E8%A8%80%E7%9A%84%20star%20%E6%95%B0&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=pie&amp;t=revenue&amp;title=%E5%90%84%E8%AF%AD%E8%A8%80%E7%9A%84%20star%20%E6%95%B0&amp;labels=TypeScript,Python,Go,Rust,Java&amp;values=4821,2312,980,645,520&amp;w=480&amp;h=340&amp;scheme=auto" alt="各语言 star 数的饼图" width="480" height="340" loading="lazy"></a><figcaption>测试链接之一 —— 一百多个字符，离 4096 远得很。</figcaption></figure>

## 1. 一个坑：链接太长，GitHub 和 GitCode 不显示

六个平台，目前记录到的问题只有这一个：图片链接超过大约 4096 个字符，
GitHub 和 GitCode 就不抓、不显示。出事的正是这类链接：

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A50%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A8%2C%22text%22%3A%5B%22high%22%2C%22low%22%5D%2C%22itemWidth%22%3A12%2C%22itemHeight%22%3A200%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22fontSize%22%3A11%2C%22color%22%3A%22%230f172a%22%7D%2C%22labelLayout%22%3A%7B%22hideOverlap%22%3Atrue%7D%2C%22itemStyle%22%3A%7B%22areaColor%22%3A%22var(--d-grid)%22%2C%22borderColor%22%3A%22%23ffffff%22%2C%22borderWidth%22%3A0.6%7D%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%2C%22label%22%3A%7B%22formatter%22%3A%22NY%5Cn%24117k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%2C%22label%22%3A%7B%22formatter%22%3A%22MA%5Cn%24109k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%7D%5D%7D%5D%7D&amp;w=560&amp;h=315&amp;scheme=light" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A50%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A8%2C%22text%22%3A%5B%22high%22%2C%22low%22%5D%2C%22itemWidth%22%3A12%2C%22itemHeight%22%3A200%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22fontSize%22%3A11%2C%22color%22%3A%22%230f172a%22%7D%2C%22labelLayout%22%3A%7B%22hideOverlap%22%3Atrue%7D%2C%22itemStyle%22%3A%7B%22areaColor%22%3A%22var(--d-grid)%22%2C%22borderColor%22%3A%22%23ffffff%22%2C%22borderWidth%22%3A0.6%7D%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%2C%22label%22%3A%7B%22formatter%22%3A%22NY%5Cn%24117k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%2C%22label%22%3A%7B%22formatter%22%3A%22MA%5Cn%24109k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%2C%22label%22%3A%7B%22formatter%22%3A%22WA%5Cn%24108k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Delaware%22%2C%22value%22%3A105.5%2C%22label%22%3A%7B%22formatter%22%3A%22DE%5Cn%24106k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%2C%22label%22%3A%7B%22formatter%22%3A%22CA%5Cn%24103k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22North%20Dakota%22%2C%22value%22%3A100.5%2C%22label%22%3A%7B%22formatter%22%3A%22ND%5Cn%24101k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Connecticut%22%2C%22value%22%3A97.1%2C%22label%22%3A%7B%22formatter%22%3A%22CT%5Cn%2497k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Alaska%22%2C%22value%22%3A96.7%2C%22label%22%3A%7B%22formatter%22%3A%22AK%5Cn%2497k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Nebraska%22%2C%22value%22%3A94.4%2C%22label%22%3A%7B%22formatter%22%3A%22NE%5Cn%2494k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Colorado%22%2C%22value%22%3A93.6%2C%22label%22%3A%7B%22formatter%22%3A%22CO%5Cn%2494k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%2C%22label%22%3A%7B%22formatter%22%3A%22IL%5Cn%2490k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22New%20Jersey%22%2C%22value%22%3A89%2C%22label%22%3A%7B%22formatter%22%3A%22NJ%5Cn%2489k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%2C%22label%22%3A%7B%22formatter%22%3A%22TX%5Cn%2489k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Wyoming%22%2C%22value%22%3A87.6%2C%22label%22%3A%7B%22formatter%22%3A%22WY%5Cn%2488k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Minnesota%22%2C%22value%22%3A87.6%2C%22label%22%3A%7B%22formatter%22%3A%22MN%5Cn%2488k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Maryland%22%2C%22value%22%3A87.2%2C%22label%22%3A%7B%22formatter%22%3A%22MD%5Cn%2487k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Virginia%22%2C%22value%22%3A86.5%2C%22label%22%3A%7B%22formatter%22%3A%22VA%5Cn%2487k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Utah%22%2C%22value%22%3A85.5%2C%22label%22%3A%7B%22formatter%22%3A%22UT%5Cn%2486k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22New%20Hampshire%22%2C%22value%22%3A84.7%2C%22label%22%3A%7B%22formatter%22%3A%22NH%5Cn%2485k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22South%20Dakota%22%2C%22value%22%3A83.1%2C%22label%22%3A%7B%22formatter%22%3A%22SD%5Cn%2483k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Nevada%22%2C%22value%22%3A82.3%2C%22label%22%3A%7B%22formatter%22%3A%22NV%5Cn%2482k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Iowa%22%2C%22value%22%3A82%2C%22label%22%3A%7B%22formatter%22%3A%22IA%5Cn%2482k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Hawaii%22%2C%22value%22%3A81.3%2C%22label%22%3A%7B%22formatter%22%3A%22HI%5Cn%2481k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%2C%22label%22%3A%7B%22formatter%22%3A%22GA%5Cn%2479k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%2C%22label%22%3A%7B%22formatter%22%3A%22OH%5Cn%2478k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Tennessee%22%2C%22value%22%3A77.6%2C%22label%22%3A%7B%22formatter%22%3A%22TN%5Cn%2478k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Kansas%22%2C%22value%22%3A77.6%2C%22label%22%3A%7B%22formatter%22%3A%22KS%5Cn%2478k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%2C%22label%22%3A%7B%22formatter%22%3A%22OR%5Cn%2477k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Pennsylvania%22%2C%22value%22%3A77.1%2C%22label%22%3A%7B%22formatter%22%3A%22PA%5Cn%2477k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22North%20Carolina%22%2C%22value%22%3A76.4%2C%22label%22%3A%7B%22formatter%22%3A%22NC%5Cn%2476k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Wisconsin%22%2C%22value%22%3A76%2C%22label%22%3A%7B%22formatter%22%3A%22WI%5Cn%2476k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Arizona%22%2C%22value%22%3A75.2%2C%22label%22%3A%7B%22formatter%22%3A%22AZ%5Cn%2475k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Indiana%22%2C%22value%22%3A75%2C%22label%22%3A%7B%22formatter%22%3A%22IN%5Cn%2475k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%2C%22label%22%3A%7B%22formatter%22%3A%22FL%5Cn%2474k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Rhode%20Island%22%2C%22value%22%3A72.3%2C%22label%22%3A%7B%22formatter%22%3A%22RI%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Missouri%22%2C%22value%22%3A71.8%2C%22label%22%3A%7B%22formatter%22%3A%22MO%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Louisiana%22%2C%22value%22%3A71.6%2C%22label%22%3A%7B%22formatter%22%3A%22LA%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Virginia%22%2C%22value%22%3A%22Virginia%22%2C%22value%22%3A71.6%2C%22label%22%3A%7B%22formatter%22%3A%22LA%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%5D%7D%5D%7D&amp;w=560&amp;h=315&amp;scheme=light" alt="美国各州人均 GDP 地图" width="560" height="315" loading="lazy"></a><figcaption>真版链接有 5000 多个字符 —— 每个州的数据都在里面。它在我们站上照常渲染；贴进 GitHub / GitCode 的 issue，平台拒绝代抓。</figcaption></figure>

这不是数据链接的毛病，是任何图片链接都要过的一关：平台代抓的服务器对
URL 长度设了上限。替所有读者抓图的中间人，不想替太长的地址背锅 ——
GitHub 的[图片代理](https://github.blog/news-insights/product-news/proxying-user-images/)
就是这么工作的。

## 2. 贴之前过一遍

- **长度**：在 GitHub / GitCode 上，图片链接控制在 4000 字符以内。
  图表、结构图、日历都很短，够不上；会超限的是装了几十个节点的图、
  全量地图这类。真要贴，先用短链接：把规格 POST 给渲染器，
  换一条短 URL 回来。
- **缓存**：平台按 URL 缓存。改链接就是一张新图；链接不动，
  平台可能短期给你看它缓存里的旧渲染，过期就好。要永远不变的图，
  钉 `v=1`；要跟着数据走的图，本来就不该钉。
- **深浅色**：`scheme=auto` 跟随读者的系统 —— 但平台代抓那一刻，
  抓到的是那一刻的主题。想让所有读者看到同一种配色，
  显式写 `scheme=light` 或 `scheme=dark`。
- **SVG**：实测的六个平台都透传 SVG。但邮件客户端和一些聊天工具会拦
  外链图 —— 贴进那些地方之前，先瞄一眼。
- **隐私**：代抓意味着平台的服务器会访问一次渲染器，链接里的数据
  平台看得见。链接本来就是公开的，这不是漏洞；但别把「平台也看了一遍」
  当成意外。

## 3. 测试记录

同一组链接、六个平台，测试 issue 都是公开的，可以自己复看：
[GitHub](https://github.com/lunrenyi/test/issues/3) ·
[GitLab](https://gitlab.com/lunrenyi7/test/-/work_items/1) ·
[Gitee](https://gitee.com/liaoxuanbin/test/issues/IKVREJ) ·
[GitCode](https://gitcode.com/lunrenyi/test/issues/1) ·
[Codeberg](https://codeberg.org/lunrenyi/test/issues/1) ·
[Bitbucket](https://lunrenyi7.atlassian.net/jira/browse/KAN-1)。
已知问题在 [x-cmd/draw#31](https://github.com/x-cmd/draw/issues/31) 跟进。
