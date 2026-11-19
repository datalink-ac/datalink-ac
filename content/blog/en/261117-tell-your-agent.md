---
title: Tell your agent to use datalinks.
date: 2026-11-17
order: 6
desc: One prompt, one skill, and a different default when the agent needs a chart.
tags: agents
keywords: AI agent, prompt, datalink, skill, chart, vibe coding
---

Nobody types a URL by hand any more, and nobody should — that is what vibe
coding means. You say what you want; the agent writes the piece, and where it
needs a chart it makes one.

That default is the problem. "Chart" means a picture to an agent, and it
produces a picture — a fine picture, which leaves the numbers behind inside it.

So the change is one instruction:

> Use the draw skill — read
> https://github.com/x-cmd/draw/blob/main/.x-cmd/clawhub/SKILL.md
> and follow it. From now on, when you write a README, an issue, a pull
> request, a blog post or a chat message that needs a chart, embed the chart
> as a link — not an image.

What the skill adds is the part an instruction cannot carry: what the
renderers are, what kind of picture each one draws, and how the parameters are
shaped. Without it the agent has to invent a URL format, and a made-up format
will not render.

Installing it is one command:

```
npx clawhub@latest install edwinjhlee/x-cmd-draw
```

Once it is in place, the agent writes links, and the links keep working after
the conversation ends. A picture pasted into a chat is gone in a week. A link
in a README is still there in three years, still holding the numbers it was
made from — and when a number changes, you change one parameter and the
picture updates, with no new screenshot to beg for.

Here is what it writes into a README:

```
x-cmd.com/draw?type=hbar&labels=deno,node,bun&values=7238,6553,4972&title=Runtime throughput&unit=ops/s
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=hbar&amp;labels=deno,node,bun&amp;values=7238,6553,4972&amp;title=Runtime%20throughput&amp;unit=ops%2Fs" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=hbar&amp;labels=deno,node,bun&amp;values=7238,6553,4972&amp;title=Runtime%20throughput&amp;unit=ops%2Fs&amp;w=480&amp;h=300&amp;scheme=auto" alt="Runtime throughput comparison" width="480" height="300" loading="lazy"></a><figcaption>What the agent hands over is the string above — and the picture it renders into.</figcaption></figure>

The link serves both parties. The numbers are inside it, so the agent has no
reason to attach a description of what the picture shows; and it stays in the
text, so the person reading the document can open it and change a parameter
themselves.
