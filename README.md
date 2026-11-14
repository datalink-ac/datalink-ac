# datalink.ac

> **data in the link** — 数据在链接里。
>
> 一个理念的官网：链接里装的是数据，不是数据的图片。
> 人读渲染，agent 读数据，双方操作的是同一串字符。

**Live:** https://datalink.ac · 中文：https://datalink.ac/zh
**Spec draft:** https://datalink.ac/spec
**Concept issue:** [#1 — datatalink as context](https://github.com/datalink-ac/datalink-ac/issues/1)

## 这是什么

一个理念站点，同时也是一台**数据链接主机**：

| 路径 | 是什么 |
|---|---|
| `/draw?<params>` | 渲染：人打开看到图（SVG / HTML） |
| `/draw/<kind>?<params>` | 其它渲染器：`/draw/arch2`、`/draw/seq`、`/draw/erd`、`/draw/mindmap`、`/draw/echarts`、`/draw/chem`… |
| `/explore?<params>` | 交互式编辑器（转发到 x-cmd.com 的 explorer） |
| `/draw.json?<params>` | 数据视图：agent 读的那一份，机器可读的 JSON |
| `/ppt?<params>` | 幻灯片（markdown 进，deck 出） |

这些路径**全部转发到 x-cmd.com 上对应的 endpoint** —— datalink.ac 是一扇门，
不是另一套实现（`/draw.json` 是唯一的例外：上游还没有 JSON 视图，
这一层把渲染结果里的 `<metadata>` 掏出来当规格用，见 x-cmd/draw#24）。
| `/`、`/zh`、`/spec`、`/blog`、`/privacy` | 站点本身 |

参考实现是 [x-cmd/draw](https://github.com/x-cmd/draw)（图表与结构图）和
[x-cmd/ppt](https://github.com/x-cmd/ppt)（幻灯片）。draw 就是 datalink 的一个实现。

## 托管：Cloudflare Pages

站点是 **Cloudflare Pages** 上的一个项目（`datalink-ac`），没有独立的 Worker：

- 页面是静态 HTML，`scripts/build.mjs` 把 `content/` + `public/` 变成 `dist/`
- `functions/` 里是三个 Pages Function，把渲染路径转发到 x-cmd.com：
  - `/draw`、`/draw/…` → `www.x-cmd.com/draw/…`
  - `/draw.json`、`/draw.json/…` → 数据视图（把渲染结果里的 `<metadata>` 掏出来当规格）
  - `/ppt`、`/ppt/…` → `po6.sh/ppt`（x-cmd.com/ppt 还没部署，代码是同一份）
- zone 上另外两条规则（纯配置，不在代码里）：
  - 安全响应头（CSP / Referrer-Policy / X-Content-Type-Options）——
    只加在本站页面上，`/draw`、`/ppt` 走的是上游自己的头
  - `www.datalink.ac` → `datalink.ac` 的 301（Pages 的 `_redirects` 不支持域名级跳转，
    所以这条是 zone 上的 Single Redirect）

## 仓库结构

```
content/
  pages/<lang>/*.html     手写的页面（首页、spec、privacy、blog 索引）
  blog/<lang>/*.md        博客文章（markdown）
src/
  layout.html             页面骨架：head、导航、页脚、语言切换
functions/
  draw/[[path]].ts        /draw → x-cmd.com/draw 的转发
  draw.json/[[path]].ts   数据视图
  ppt/[[path]].ts         /ppt → 幻灯片渲染器
scripts/
  build.mjs               content/ + public/ → dist/
  indexnow.mjs            推送 sitemap 里的 URL（IndexNow）
  make-og.py              生成社交预览图（可选，需要 Pillow）
public/                   静态资源（css、js、favicon、og.png、manifest）
mneme/                    项目的记忆中枢：思考、决策记录、开放问题
```

## 本地开发

```sh
npm install
npm run build      # content/ + public/ → dist/
npm run dev        # build + wrangler pages dev
```

## 部署

```sh
npm run deploy     # build + wrangler pages deploy + IndexNow 推送
npm run indexnow   # 只推送（默认推 sitemap 里的全部 URL）
```

IndexNow 的密钥在 `scripts/indexnow.key`，构建时会发布到站点根目录
（`https://datalink.ac/<key>.txt`），搜索引擎据此验证推送。

Pages 项目 `datalink-ac`，custom domain 是 `datalink.ac` 与 `www.datalink.ac`
（后者 301 跳到前者）。zone 在 Cloudflare 账号 `d8caf3f6…` 下（Free 计划）。

## 加一篇博客

```sh
$EDITOR content/blog/en/261112-your-topic.md    # frontmatter: title/date/desc/tags
$EDITOR content/blog/zh/261112-your-topic.md    # 同一个 slug
npm run build
```

构建脚本会渲染 markdown、生成 `dist/blog/<slug>.html` 与 `dist/zh/blog/<slug>.html`，
并把新页面写进 `sitemap.xml`。

## 设计说明

- **零构建依赖的字体**：只用系统字体栈，中文走 PingFang / 微软雅黑 / Noto，
  没有 web font 请求——在哪儿打开都秒开。
- **深浅色**：`prefers-color-scheme` 自动跟随，右上角可手动切换，存在本地。
- **动效**：滚动淡入。没有 JS 时内容照常显示（只有 `.js .reveal` 才隐藏）。
- **SEO**：canonical、`hreflang` 双语互指、JSON-LD（WebSite / Blog / BlogPosting /
  TechArticle / BreadcrumbList）、sitemap（带 `lastmod` 与双语互指）、robots、OG 图、
  每页唯一 `<h1>`、图片显式尺寸（不抖）、404 `noindex`。

## 相关的仓库

- [x-cmd/draw](https://github.com/x-cmd/draw) —— 图表与结构图渲染器
- [x-cmd/ppt](https://github.com/x-cmd/ppt) —— 幻灯片渲染器
- [ClawHub: x-cmd-draw](https://clawhub.ai/edwinjhlee/skills/x-cmd-draw) —— 给 agent 的 skill

## 许可

Apache-2.0
