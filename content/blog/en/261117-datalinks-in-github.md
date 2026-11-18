---
title: No more images in the repository: a link is text, so the diff shows the number.
date: 2026-11-17
order: 4
desc: Release notes, issues, pull requests, READMEs — four places where a link fits better than a picture.
tags: case
---

A repository is made of text. It has diffs, it has blame, it has a history you
can read. Images are the one thing in it that none of that works for: you
cannot review a PNG in a diff, you cannot tell what changed in it, and you
cannot edit it without a tool.

So a link does not have to change any habit. It lands where the text already
is, and it brings the numbers along.

Four places, four different jobs.

In a **release note** — the code composition of that version. It is a link, so
the next release does not need a new picture: the link already says what to
draw.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/tokei?layout=butterfly&amp;langs=TypeScript:4820:1180:940,JavaScript:1687:298:71,Shell:640:120:88,CSS:210:40:35,Markdown:180:760:120,JSON:95:0:12&amp;title=Code%20composition&amp;w=560&amp;h=300&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/tokei?layout=butterfly&amp;langs=TypeScript:4820:1180:940,JavaScript:1687:298:71,Shell:640:120:88,CSS:210:40:35,Markdown:180:760:120,JSON:95:0:12&amp;title=Code%20composition&amp;w=560&amp;h=300&amp;scheme=auto" alt="Code composition of a repository" width="560" height="300" loading="lazy"></a><figcaption>The release note’s picture — the link says what to draw, so the next version draws itself.</figcaption></figure>

In an **issue** — the flow of a requirement, drawn once. The next issue about
the same requirement links to the same picture rather than redrawing it.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/mermaid?m=graph%20TD%3BA%5BRequirement%5D--%3EB%5BDesign%5D%3BB--%3EC%5BDevelopment%5D%3BC--%3ED%5BReview%5D%3BD--%3E%7Cchange%7CC%3BD--%3EE%5BRelease%5D&amp;title=The%20flow%20of%20a%20requirement&amp;w=300&amp;h=400&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/mermaid?m=graph%20TD%3BA%5BRequirement%5D--%3EB%5BDesign%5D%3BB--%3EC%5BDevelopment%5D%3BC--%3ED%5BReview%5D%3BD--%3E%7Cchange%7CC%3BD--%3EE%5BRelease%5D&amp;title=The%20flow%20of%20a%20requirement&amp;w=300&amp;h=400&amp;scheme=auto" alt="Flow of a requirement" width="320" height="594" loading="lazy"></a><figcaption>A requirement’s flow, drawn once.</figcaption></figure>

In a **pull request** — the benchmark. The numbers travel with the diff, so
the reviewer sees the change to the number and the change to the picture at
the same time.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw?type=bar&amp;labels=summary,pages,referrers,browsers&amp;series=DuckDB:117.0,4.6,7.8,66.3&amp;series=SQLite:3125.7,875.7,863.6,1829.1&amp;title=duckdb%20vs%20sqlite&amp;w=560&amp;h=300&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=bar&amp;labels=summary,pages,referrers,browsers&amp;series=DuckDB:117.0,4.6,7.8,66.3&amp;series=SQLite:3125.7,875.7,863.6,1829.1&amp;title=duckdb%20vs%20sqlite&amp;w=560&amp;h=300&amp;scheme=auto" alt="Benchmark comparing DuckDB and SQLite" width="560" height="300" loading="lazy"></a><figcaption>The benchmark in a pull request — the numbers travel with the diff.</figcaption></figure>

In a **README** — the architecture. Change the link and the picture changes
with it; nobody has to remember to regenerate a file.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/arch2?n=client;ext;Your%20app%20or%20CI;GET%20/draw%3Ftype%3D...;r0c0&amp;n=worker;fe;Edge%20worker;src/index.ts%20%C2%B7%20fetch%20handler;r0c1&amp;n=handler;be;handler.ts;route%20%E2%86%92%20respond;r1c1&amp;n=specs;be;specs/;parse%20%2B%20validate;r2c0&amp;n=store;db;store.ts;short%20links%20%E2%86%92%20Git%20repo;r2c1&amp;n=render;be;render/;draw%20the%20SVG;r3c0&amp;n=styles;be;styles/;skins%20%2B%20families;r4c0&amp;n=png;be;png.ts;resvg%20%E2%86%92%20PNG;r4c2&amp;e=client;worker;HTTPS&amp;e=worker;handler;same%20core&amp;e=handler;specs;spec&amp;e=handler;store;short%20link&amp;e=handler;render;render&amp;e=render;styles;skin&amp;e=render;png;format%3Dpng&amp;b=Edge%20runtime%20%E2%80%94%20Cloudflare%20Worker;worker%20handler%20specs%20store%20render%20styles&amp;title=Inside%20draw&amp;w=560&amp;h=340&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/arch2?n=client;ext;Your%20app%20or%20CI;GET%20/draw%3Ftype%3D...;r0c0&amp;n=worker;fe;Edge%20worker;src/index.ts%20%C2%B7%20fetch%20handler;r0c1&amp;n=handler;be;handler.ts;route%20%E2%86%92%20respond;r1c1&amp;n=specs;be;specs/;parse%20%2B%20validate;r2c0&amp;n=store;db;store.ts;short%20links%20%E2%86%92%20Git%20repo;r2c1&amp;n=render;be;render/;draw%20the%20SVG;r3c0&amp;n=styles;be;styles/;skins%20%2B%20families;r4c0&amp;n=png;be;png.ts;resvg%20%E2%86%92%20PNG;r4c2&amp;e=client;worker;HTTPS&amp;e=worker;handler;same%20core&amp;e=handler;specs;spec&amp;e=handler;store;short%20link&amp;e=handler;render;render&amp;e=render;styles;skin&amp;e=render;png;format%3Dpng&amp;b=Edge%20runtime%20%E2%80%94%20Cloudflare%20Worker;worker%20handler%20specs%20store%20render%20styles&amp;title=Inside%20draw&amp;w=560&amp;h=340&amp;scheme=auto" alt="Architecture of the renderer" width="784" height="777" loading="lazy"></a><figcaption>The architecture in a README — change the link, the picture changes.</figcaption></figure>

What "the diff shows the number" means:

<div class="post-figs">
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=line&amp;labels=Mon,Tue,Wed,Thu,Fri&amp;values=12,9,14,11,8&amp;title=Errors%20per%20day" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=line&amp;labels=Mon,Tue,Wed,Thu,Fri&amp;values=12,9,14,11,8&amp;title=Errors%20per%20day&amp;w=420&amp;h=260&amp;scheme=auto" alt="Errors per day in this release" width="420" height="260" loading="lazy"></a><figcaption>This release: errors per day.</figcaption></figure>
<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=line&amp;labels=Mon,Tue,Wed,Thu,Fri&amp;values=12,9,14,11,13&amp;title=Errors%20per%20day" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=line&amp;labels=Mon,Tue,Wed,Thu,Fri&amp;values=12,9,14,11,13&amp;title=Errors%20per%20day&amp;w=420&amp;h=260&amp;scheme=auto" alt="Errors per day in the next release" width="420" height="260" loading="lazy"></a><figcaption>The next release: one number changed in the link. In the diff, that is one line.</figcaption></figure>
</div>

The through-line is that the repository stops storing drawings. What it stores
is data, in a form a machine can read and a person can review. The picture is
still there whenever somebody looks at it; it just is not a thing that has to
be kept in sync by hand.

This is also why the same links work outside GitHub. A README is a document, an
issue is a document, a release note is a document — and a document that carries
its own data never falls out of sync with it. The six-platform test is written
up in [this post](/blog/261119-git-platforms).
