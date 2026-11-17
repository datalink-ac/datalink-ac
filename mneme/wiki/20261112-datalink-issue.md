---
name: 20261112-datalink-issue
date: 2026-11-12
tags: datalink, concept, issue
---

# 讲法：Datalink as Context（issue #1 的出处）

> 原始 issue：https://github.com/datalink-ac/datalink-ac/issues/1
> 抓到这里的原文副本：`mneme/inbox/20261112-issue-datalink-as-context.md`
>
> 这一篇记的是**现在这版**的说法。首页重做过好几轮，
> 下面写的是活下来的那一版。

## 一句话

**Datalink as Context** ——

> **Agent gets true data. Human gets big picture.**
> 都靠同一件事：把数据放进链接里。

D-A-C 三个字母对应 datalink.ac —— 首页的大标题就是按这个做的。

## 谁在用

**AI 写稿的年代，人不写链接。** 人只复制一段 prompt，
agent 写稿（README、issue、PR、博文、聊天），需要图就拼一条链接。
所以首页从头到尾都在讲 agent 怎么用，而不是人怎么用。

这也是为什么首页的主语是 agent，而不是「你」。

## 现在的骨架（首页六节）

| | 那一节要说的 |
|---|---|
| **The link is the data.** | 链接里装着数据 —— 大 URL 框，可以直接改，改完回车，图和数字一起变 |
| **Case: 6-language charts.** | 先摆两行账：✅ 6 条链接（diff 里看得到数字）／ ❌ 每改一次数据多 6 个 PNG（仓库在胖、文档走样）。左边六种语言的按钮，右边同一张架构图换标签 |
| **Datalink is not only for charts.** | 不只是数据图表：架构图、日历、PPT、地图、分子结构，用的是同一个 datalink 范式 —— 左边一列，点一个换一张图 |
| **Datalink is designed for GitHub.** | release（代码构成）／ issue（需求流程）／ PR（性能对比）／ README（架构图），四张 2×2 的卡 |
| **Tell your agent to use datalinks.** | 左 prompt（带 skill 说明书地址）、右 clawhub 安装，都能 copy |

## 博客：一篇一个故事（2026-11-17 重整）

博客不再是一堆随笔，而是**首页那几节各自展开**。顺序跟着首页走：

| 顺序 | 文章 | 对应 |
|---|---|---|
| 1 | Send a picture and the numbers are gone; send a link and they are still there. ／ 发出去一张图，数字就没了；发出去一条链接，数字还在。 | 首屏 +「The link is the data.」（issue 主张 01 + 02） |
| 2 | Six languages: no six images to add every time — six links are enough. ／ 6种语言的图表，不需要每次加6个图，6个链接即可。 | 案例那节 |
| 3 | Not just charts: diagrams, calendars, maps and molecules are the same kind of link. ／ 不止图表：架构图、日历、地图、分子结构，用的也是同一种链接。 | 「给的不只是图」（issue 主张 03） |
| 4 | No more images in the repository: a link is text, so the diff shows the number. ／ 仓库里不必再放图：链接是文本，diff 里就是那个数字。 | GitHub 那节 |
| 5 | The agent does not have to guess: look up the kind, fill in the parameters, and the link is done. ／ agent 不用再猜格式：查一下注册表，填上参数，链接就成了。 | 「不只是图表」那节的另一半：agent 怎么挑渲染器 |
| 6 | Tell your agent to use datalinks. ／ 告诉 agent：图用 datalink。 | 最后一节 |
| 7 | Why it is called datalink. ／ 为什么叫 datalink。 | 名字那篇（首页首屏有个小链接指过去） |
| 8 | With a picture you can only look; with a link, anyone can take the numbers. ／ 以前图里的数字只能看，现在链接里的数字谁都能拿。 | 隐私（规范第 8 节那件事，单独写一篇） |

**标题的写法：以前是什么，现在怎么更好了。** 一句话说清代价和好处，
不要只说话题（「6 种语言，6 条链接」那种不算数）：

- 「6种语言的图表，不需要每次加6个图，6个链接即可。」
- 「发出去一张图，数字就没了；发出去一条链接，数字还在。」

标题不能读成另一个意思。「语言只是一个参数」在中文里会被读成
「语言不重要」—— 这就是为什么标题要写完整。

**文章里的图就是证据。** 要讲的就画出来，不要干说。
第 1 篇放那张饼图，第 3 篇放四种不同的图（各自的链接、各自的参数），
第 4 篇四张图分别对应 release / issue / PR / README。
图都指向 `/draw?...`，点得开、改得动。

**第 2 篇（六种语言）不放图** —— 那件事的重点是链接：六条链接，
每条只差一个 label。图是同一张，不用再加。

**索引卡片上不再有副标题。** 标题写好了，就不用再补一句说明
（front-matter 的 `desc` 只留给 meta description 和搜索结果摘要，页面上不显示）。

**顺序由 front-matter 的 `order:` 决定**，没有 `order` 的按日期倒序（`scripts/build.mjs`）。

**删掉的两篇**（内容已经被别的篇吃掉了）：
- 《One link, two audiences》—— 两种读法已经是《链接就是数据》的正文；
  agent 契约在规范第 6 节；prompt 在首页。
- 《The URL is the API》—— 「URL 就是 API」讲的是接口设计，不是数据链接；
  纯函数、可缓存、可版本化在规范第 3、7 节。
  其中「没人再手写 URL，agent 拼链接」那段并进了《告诉 agent：图用 datalink》。

### 理解要摆正：一条链接，一张图

**这是 blog 写错过的最深的一处。** 之前写成「一条链接、几种画法」，
还把同一串参数交给四个渲染器（`/draw/archmap`、`/draw/cloud`、`/draw/seq`、
`/draw/arch3d`），说那叫「同一条链接」—— **没有这回事**。

- **一条链接画出一张图。** 图不一样，链接就不一样（参数不同）。
- 不变的是**链接的形态**：一条 URL，参数里装着数据；以及渲染器必须守的承诺
  （规范里那五条不变量）。「换的是渲染器，不变的是链接」说的也是形态。
- 渲染器是 host 后面的服务，可以换（换 host 也行）；换不了的是契约。
- **六种语言要六条链接**，因为图里的 label 是参数；label 是参数，
  翻译一个图就是改参数，不是重画 —— 这也是这个做法省事的地方。
- 别把「几张不同的图」当成「同一条链接的几种画法」。那是几条不同的链接。
- 「不只是图表」那节讲的是**范式**（各种数据共用一种形态），
  跟它配的那一篇讲的是**agent 怎么挑渲染器**（挑了以后承诺不变）。
  这是两篇。
- 「不只是图表」那节讲的是**范式**：架构图、日历、地图、分子结构，各是各的链接，
  但形态一样（一条 URL + 参数 + 版本），渲染器守的承诺也一样。
  不是「一条链接画出好几种图」。

### 写 blog 的规矩

规矩来自那个 skill：**edwinjhlee/ai#61**（vip: english-oriented-efficient-writing-skill）。
有问题去那个 issue 上问。

- **先想清楚听众是谁、他们要什么。** 这站的听众是「跟 AI 一起写东西的人」，
  不是工程师。给谁输出什么价值 —— 对象错了，句子再好也没用。
- **标题到小标题，直述价值点。** 不卖关子（「更难的那个问题」「怎么做更好」
  一律不许）；副标题大部分无意义；真理自证，不要名人名言。
- **精确。** 宁可生僻也不要含糊 ——「立足点太松」「听起来太软」这种词是
  立论无力。精确，但要用听众熟悉的词。
- **缩短论证闭环。** 主线自洽就够，细节证明另有专题文章（规范那一篇）。
- **中文用意译，不要直译。** 原文接地气但目标语言有偏差的词，换个精准词。

落到 blog 上：

- **标题直接给结论。** 标题就是一句话结论，跟首页的 h2 一个口气。
- **一篇一个故事。** 别在一篇里讲三件事；讲不下就再开一篇。
- **别命令读者。** 不要「你应该」「你必须」。
- **别写成 AI。** 平行排比当结论（「它可缓存。它可版本化。它可 diff。」）
  是最像 AI 的一种写法 —— 能用一段话讲完就别拆成三条。
- **只讲 datalink 体系**；实现是 x-cmd draw 的事，blog 不替 draw 讲它。
- **中文要像中文**，别是英文的翻译。

## 两条不能丢的

**一、两种读法是同一串字符。**
人读到图（insight and vision），agent 读到数（exact, quotable）。
同一串数字，一个给人看，一个给机器读 —— 这才是「Context」这个词的意思。

**二、链接就是存档。**
数字在链接里，所以：仓库不再堆二进制、diff 里看得见数字、
六个月后 agent 还能从那条链接里读出当时的意图和数据。

## 被砍掉的（别再加回来）

- **「A picture is not the data.」那一节** —— 首屏已经说了
  「Agent gets true data. Human gets big picture.」，
  再用一节把同一句话说三遍，是重复
- **「三十六个文件」这种说法** —— 哪有什么三十六个文件。
  真相是：**每改一次数据，仓库里就多六个图片文件**。
- **「六次提交」也是错的** —— 六张图是**一次**提交里的六个文件。
  渲染才是六次。
- **数字写数字**（6，不写 Six）—— 标题里的数目要能一眼扫过去。
- **一级就够** —— 一节里不要再套小标题 + 副标题：
  大标题说结论，正文用粗体开头点题（「6 languages.」「Your README.」）。
- 小节标签（「怎么跑」「两个读者」「另一半」那一套）—— 节标题自己就是观点
- 导语 —— 节标题已经说完了，导语是重复
- 「我们为眼睛造了图片」这类辩解 —— 那是解释，不是宣传
- draw 自己的设计宣传（统一视觉、最省事、压得紧）——
  那些搬到 **x-cmd-hub/draw#87** 去了，datalink.ac 不替 draw 讲它

## 踩过的坑

- **一开始整页是密密麻麻的文字**（英文 1,345 词）→ 砍到 449 词。
  「要讲价值，不要写日记」。
- **标题写成没有营养的断言**（「不只是图表」）→ 那种句子读者一眼就滑过去。
- **把人写成要手写 URL 的人** → 人只复制 prompt。
- **拿 vision token 跟 token 比** → 图片不能只按 token 算，
  现在比的是「SVG 标记约 1,100 vs 链接约 25」，两边都是文本。

### 托管换了一次（2026-11-16）

页面搬到 **GitHub Pages**（push 就发布，构建里多出 `CNAME` 和 `.nojekyll`）；
转发路径交给一个 **Cloudflare Worker**（`worker/index.ts`，路由 `datalink.ac/d*`、`/ppt*`、`/explore*`），
zone 上的安全响应头和 www→apex 的 301 不变。

**踩到的**：Worker 的路由一开始只写了 `d*` —— `/ppt` 和 `/explore` 不是 d 开头，
那两条直接落到 GitHub Pages，404 了。凡是 Worker 要应的路径，路由都得单写出来。

### 渲染器给的东西，不一定是你要的

- **日历只会说中文。** draw 的日历图面文字（月份、星期、图例、页脚）是写死的中文，
  代码里的英文串够不着（`en` 挂在皮肤的 `title` 上，日历两个家族都不是）。
  英文页那一格因此只能挂着一张中文日历 —— 开了 **x-cmd/draw#28** 等它会说英文。
- **PPT 那一格是活的 iframe**，直接指 `www.x-cmd.com/ppt?url=…`，
  引的是 x-cmd/office 里那份 datalink 讲稿（11 页）。
  裸的 `x-cmd.com` 不在本站 CSP 的 `frame-src` 里（白名单写的是 `www.x-cmd.com`），
  用的是同一个服务的规范主机名。
- **分子式默认画一块深色卡片**，浅色页面上像一个洞 —— 钉 `scheme=light`。
- **`scheme=auto` 是两套配色 + 媒体查询**，跟着读者的系统走，不是跟着页面走；
  手动切主题时得由 JS 把 `scheme=` 换掉。
- **内联的 SVG 会把 `:root{color-scheme:light}` 漏到页面上** —— 内联时改成 `svg{`，
  不然整页的 color-scheme 被图带走。
- **幻灯片那一格原本嵌的是 ppt 编辑器**（一个深色的 app），跟旁边一排图片不像一类。
  改成 `/ppt/cover.svg`：一张幻灯片，本身就是一张图。

### 自己家的 bug（自己家才查得出）
- **同权重的 CSS，后写的赢** —— 想复用 `.topic-switch` 的样式，
  结果首屏那排按钮也跟着变成竖排（`.topic-switch` 的竖排规则写在后面）。
  复用样式要么提高选择器权重，要么把规则挪到后面。

- 标签页的「architecture」是**白的** —— 亮色模式里有一条
  `.tab[aria-selected=true]{color:#fff}`，浅底白字，等于没有标签。
- 标签区多了一个 `</div>`，五个面板被挤出 `.panel-body`。
- `.chart-holder` 是 grid + `place-items:center`，里面的 `<a>` 收缩包裹，
  SVG 的 `width:100%` 落在收缩宽度上 —— 图一直按原尺寸待着，框里一大片空。
- 规范草案里的路径全是旧的（`/d?…`、`/deck`、`/d/arch2`），
  而站上早就换成 `/draw?…`、`/ppt` 了。**页面说自己有什么，就是有什么。**

## 相关

- 台账（现在什么状态）：issue #2
- SEO 怎么想：[[20261112-datalink-seo]]
- 隐私那条线：[[20261112-datalink-privacy]]
- draw 的宣传素材：x-cmd-hub/draw#87
- 渲染器要一个 table：x-cmd/draw#24
- 架构图标题乱跑：x-cmd/draw#22
- 日历要会说英文：x-cmd/draw#28
