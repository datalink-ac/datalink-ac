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
| `/d?<params>` | 渲染：人打开看到图（SVG / HTML） |
| `/d/<kind>?<params>` | 其它渲染器：`/d/arch2`、`/d/seq`、`/d/erd`、`/d/mindmap`、`/d/mermaid`… |
| `/d.json?<params>` | 数据视图：agent 读的那一份，机器可读的 JSON |
| `/d?type=table&…` | 表格渲染器（本站在地实现） |
| `/deck?<params>` | 幻灯片（markdown 进，deck 出） |
| `/`、`/zh`、`/spec`、`/blog`、`/privacy` | 站点本身 |

参考实现是 [x-cmd/draw](https://github.com/x-cmd/draw)（图表与结构图）和
[x-cmd/ppt](https://github.com/x-cmd/ppt)（幻灯片）。draw 就是 datalink 的一个实现。

## 仓库结构

```
content/
  pages/<lang>/*.html     手写的页面（首页、spec、privacy、blog 索引）
  blog/<lang>/*.md        博客文章（markdown）
src/
  layout.html             页面骨架：head、导航、页脚、语言切换
  worker.js               Cloudflare Worker：站点 + /d 代理 + /d.json + 表格渲染
scripts/
  build.mjs               content/ + public/ → dist/
  make-og.py              生成社交预览图（可选，需要 Pillow）
public/                   静态资源（css、js、favicon、og.png、manifest）
mneme/                    项目的记忆中枢：思考、决策记录、开放问题
```

## 本地开发

```sh
npm install
npm run build      # content/ + public/ → dist/
npm run dev        # build + wrangler dev（http://127.0.0.1:8788）
```

## 部署

```sh
npm run deploy     # build + wrangler deploy
```

Worker 与两个 custom domain 绑定：`datalink.ac` 与 `www.datalink.ac`
（后者 301 跳到前者）。zone 在 Cloudflare 账号 `d8caf3f6…` 下。

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
- **SEO**：canonical、`hreflang` 双语互指、JSON-LD、sitemap、robots、OG 图。

## 相关的仓库

- [x-cmd/draw](https://github.com/x-cmd/draw) —— 图表与结构图渲染器
- [x-cmd/ppt](https://github.com/x-cmd/ppt) —— 幻灯片渲染器
- [ClawHub: x-cmd-draw](https://clawhub.ai/edwinjhlee/skills/x-cmd-draw) —— 给 agent 的 skill

## 许可

Apache-2.0
