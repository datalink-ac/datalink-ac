---
title: 告诉 agent：图用 datalink。
date: 2026-11-17
order: 6
desc: 一段 prompt，一个 skill，以及 agent 需要图时的另一个默认动作。
tags: agent
---

现在没人再手写 URL 了，也不该写。你说要什么，agent 写稿子，
需要图的时候它做一张。

问题就在这个默认动作上。对 agent 来说，「chart」就是一张图，它也就给一张图 ——
画得挺好，只是数字留在了图里面，出不来。

所以要改的，是一句交代：

> 用 draw 这个 skill —— 先读
> https://github.com/x-cmd/draw/blob/main/.x-cmd/clawhub/SKILL.md
> 并照着做。以后写 README、issue、pull request、博文或者聊天消息时，
> 只要需要图，就用链接来画，别贴图片。

skill 补的是一句交代补不上的那部分：有哪些渲染器、每个画的是什么、
参数长什么样。没有它，agent 只能自己编一个 URL 格式，而编出来的格式渲染不出来。

装它是一条命令：

```
npx clawhub@latest install edwinjhlee/x-cmd-draw
```

装上之后，agent 写出来的是链接，而链接在对话结束以后照样能用。
贴进聊天里的图，一周就没了；README 里的链接，三年后还在，
还装着当初那批数字 —— 数字变了，改一个参数再打开，就是新图，
不用再找人截一次图。

一条链接，agent 和读文档的人都够用：数字就在里面，agent 不必再附一段
「图里有什么」的描述；它也留在正文里，读的人自己就能打开、自己改一个参数。
