---
title: 仓库该存的是数据，不是图片。
date: 2026-11-17
order: 4
desc: release note、issue、pull request、README —— 四个链接比图片更合适的地方。
tags: 案例
---

仓库是由文本组成的。它有 diff，有 blame，有一段能读下来的历史。
图片是里面唯一一样这些都不管用的东西：PNG 没法在 diff 里被审阅，
你看不出它改了哪里，不装个工具也改不动它。

四个地方，四种用法。

**release note** 里放这个版本的代码构成。是一条链接，所以下个版本不用再画一张新图 ——
链接本身已经说明了要画什么。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/tokei?layout=butterfly&amp;langs=TypeScript:4820:1180:940,JavaScript:1687:298:71,Shell:640:120:88,CSS:210:40:35,Markdown:180:760:120,JSON:95:0:12&amp;title=Code%20composition&amp;w=560&amp;h=300&amp;scheme=auto" target="_blank" rel="noopener"><img src="/draw/tokei?layout=butterfly&amp;langs=TypeScript:4820:1180:940,JavaScript:1687:298:71,Shell:640:120:88,CSS:210:40:35,Markdown:180:760:120,JSON:95:0:12&amp;title=Code%20composition&amp;w=560&amp;h=300&amp;scheme=auto" alt="仓库的代码构成" width="560" height="300" loading="lazy"></a><figcaption>release note 里的那张图 —— 链接说明了要画什么，所以下个版本自己就画出来了。</figcaption></figure>

**issue** 里放一个需求的流程，画一次就够了。下一个跟同一个需求有关的 issue，
引同一条链接就行，不用重画。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/mermaid?m=graph%20TD%3BA%5B%E9%9C%80%E6%B1%82%5D--%3EB%5B%E8%AE%BE%E8%AE%A1%5D%3BB--%3EC%5B%E5%BC%80%E5%8F%91%5D%3BC--%3ED%5B%E8%AF%84%E5%AE%A1%5D%3BD--%3E%7C%E6%94%B9%7C%20C%3BD--%3EE%5B%E5%8F%91%E5%B8%83%5D&amp;title=%E4%B8%80%E4%B8%AA%E9%9C%80%E6%B1%82%E7%9A%84%E6%B5%81%E7%A8%8B&amp;w=300&amp;h=400&amp;scheme=auto" target="_blank" rel="noopener"><img src="/draw/mermaid?m=graph%20TD%3BA%5B%E9%9C%80%E6%B1%82%5D--%3EB%5B%E8%AE%BE%E8%AE%A1%5D%3BB--%3EC%5B%E5%BC%80%E5%8F%91%5D%3BC--%3ED%5B%E8%AF%84%E5%AE%A1%5D%3BD--%3E%7C%E6%94%B9%7C%20C%3BD--%3EE%5B%E5%8F%91%E5%B8%83%5D&amp;title=%E4%B8%80%E4%B8%AA%E9%9C%80%E6%B1%82%E7%9A%84%E6%B5%81%E7%A8%8B&amp;w=300&amp;h=400&amp;scheme=auto" alt="一个需求的流程" width="320" height="594" loading="lazy"></a><figcaption>一个需求的流程，画一次。</figcaption></figure>

**pull request** 里放性能对比。数字跟着 diff 一起走，所以审阅的人同时看到
数字的改动和图的改动。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw?type=bar&amp;labels=summary,pages,referrers,browsers&amp;series=DuckDB:117.0,4.6,7.8,66.3&amp;series=SQLite:3125.7,875.7,863.6,1829.1&amp;title=duckdb%20vs%20sqlite&amp;w=560&amp;h=300&amp;scheme=auto" target="_blank" rel="noopener"><img src="/draw?type=bar&amp;labels=summary,pages,referrers,browsers&amp;series=DuckDB:117.0,4.6,7.8,66.3&amp;series=SQLite:3125.7,875.7,863.6,1829.1&amp;title=duckdb%20vs%20sqlite&amp;w=560&amp;h=300&amp;scheme=auto" alt="DuckDB 与 SQLite 的性能对比" width="560" height="300" loading="lazy"></a><figcaption>PR 里的性能对比 —— 数字跟着 diff 一起走。</figcaption></figure>

**README** 里放架构图。改链接，图跟着变；没有人需要记得去重新生成一个文件。

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/arch2?n=client;ext;Your%20app%20or%20CI;GET%20/draw%3Ftype%3D...;r0c0&amp;n=worker;fe;Edge%20worker;src/index.ts%20%C2%B7%20fetch%20handler;r0c1&amp;n=handler;be;handler.ts;route%20%E2%86%92%20respond;r1c1&amp;n=specs;be;specs/;parse%20%2B%20validate;r2c0&amp;n=store;db;store.ts;short%20links%20%E2%86%92%20Git%20repo;r2c1&amp;n=render;be;render/;draw%20the%20SVG;r3c0&amp;n=styles;be;styles/;skins%20%2B%20families;r4c0&amp;n=png;be;png.ts;resvg%20%E2%86%92%20PNG;r4c2&amp;e=client;worker;HTTPS&amp;e=worker;handler;same%20core&amp;e=handler;specs;spec&amp;e=handler;store;short%20link&amp;e=handler;render;render&amp;e=render;styles;skin&amp;e=render;png;format%3Dpng&amp;b=Edge%20runtime%20%E2%80%94%20Cloudflare%20Worker;worker%20handler%20specs%20store%20render%20styles&amp;title=Inside%20draw&amp;w=560&amp;h=340&amp;scheme=auto" target="_blank" rel="noopener"><img src="/draw/arch2?n=client;ext;Your%20app%20or%20CI;GET%20/draw%3Ftype%3D...;r0c0&amp;n=worker;fe;Edge%20worker;src/index.ts%20%C2%B7%20fetch%20handler;r0c1&amp;n=handler;be;handler.ts;route%20%E2%86%92%20respond;r1c1&amp;n=specs;be;specs/;parse%20%2B%20validate;r2c0&amp;n=store;db;store.ts;short%20links%20%E2%86%92%20Git%20repo;r2c1&amp;n=render;be;render/;draw%20the%20SVG;r3c0&amp;n=styles;be;styles/;skins%20%2B%20families;r4c0&amp;n=png;be;png.ts;resvg%20%E2%86%92%20PNG;r4c2&amp;e=client;worker;HTTPS&amp;e=worker;handler;same%20core&amp;e=handler;specs;spec&amp;e=handler;store;short%20link&amp;e=handler;render;render&amp;e=render;styles;skin&amp;e=render;png;format%3Dpng&amp;b=Edge%20runtime%20%E2%80%94%20Cloudflare%20Worker;worker%20handler%20specs%20store%20render%20styles&amp;title=Inside%20draw&amp;w=560&amp;h=340&amp;scheme=auto" alt="渲染器的架构" width="784" height="777" loading="lazy"></a><figcaption>README 里的架构图 —— 改链接，图跟着变。</figcaption></figure>

贯穿着的一条线是：仓库不再存画了。它存的是数据 —— 一种机器能读、人能审的形态。
图还是在那儿，谁想看就渲染出来；只是它不再是那个得靠人手去同步的东西。

这也是为什么同一批链接在 GitHub 之外照样能用。README 是一份文档，issue 是一份文档，
release note 也是一份文档 —— 而一份自己带着数据的文档，不会过时。
