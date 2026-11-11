---
name: 20261112-what-a-url-reveals
date: 2026-11-12
publish: true
tags: datalink, privacy, published
---

# URL 会暴露什么（已发布）

> 已发布在：https://datalink.ac/blog/261112-what-a-url-reveals （英文）
> 与 https://datalink.ac/zh/blog/261112-what-a-url-reveals （中文）同源。
> 源文件：`content/blog/en/261112-what-a-url-reveals.md` / `content/blog/zh/261112-what-a-url-reveals.md`

## 这一篇在讲什么

数据链接天生公开：谁拿到字符串谁就拿到数据。
把 URL 会跑到哪里去列清楚——聊天与 issue 索引、referer 头、浏览器历史与同步、
CDN 缓存、分析工具记录的完整 URL、地址栏截图——然后给出那条不需要判断的规矩：

> 如果它不该出现在别人地址栏的截图里，它就不该在数据链接里。

顺带拆掉一个错觉：短链接不是隐私工具。它藏住的是数据，不是「有一条链接存在」这件事；
而且它把私有链接存进服务器，正是数据链接想避开的状态。

## 为什么把它发出去

隐私这一节在规范里只是一节的起点。把它先写成一篇文章发出去，
有两个好处：

1. **它把问题摆到了公开的地方**，而不是藏在规范的 TODO 里。
2. **它逼我们把「已经定的」和「还没定的」分开**——文章只写已经定的
   （公开、短链接不是隐私工具、那条规矩），没定的部分留在
   `mneme/wiki/20261112-datalink-privacy.md` 里继续想。

## 还没发出去的部分

- 数据的主体（被描述的人）那一半——文章里提了一句，没展开。
- 公开链接的撤销权——和纯函数性有张力，方案还没成型。
- 敏感度标记——想加进规范，还没写。
