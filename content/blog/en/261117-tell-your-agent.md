---
title: Tell your agent to use datalinks.
date: 2026-11-17
order: 5
desc: One prompt, one skill, and a different default when the agent needs a chart.
tags: agents
---

Nobody types a URL by hand any more, and nobody should. You say what you want;
the agent writes the piece, and where it needs a chart it makes one.

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
made from — and if a number changes, you get the new picture without asking
anybody for a new screenshot.

The link answers both sides of the request. The numbers are in it, so there is
no reason to ask for a description of them. And it stays in the text, so the
person reading the document can open it and change a parameter themselves.
