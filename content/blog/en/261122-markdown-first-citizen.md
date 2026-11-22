---
title: A picture used to be a guest in a document; now it is a citizen.
date: 2026-11-22
order: 10
desc: After vibe coding, handover happens in issues and PRs — all markdown. To enter that scene, a picture has to be text first.
tags: concept
keywords: datalink, markdown, agent, vibe coding, chart, graph, diff, GitHub
---

Issues are markdown, pull requests are markdown, so are READMEs and release
notes. After vibe coding, even more so: a requirement is handed to the agent
in an issue, and the work comes back in a PR. The scene it reads and writes
is all markdown. Markdown is the shared work surface for humans and agents.

A picture has always been a guest on that surface.

**A guest's treatment.** `![]()` references a binary file: it appears in the
document but does not belong to it. In a diff it says "image changed", and
the reviewer cannot see what; the agent reads a reference, not the numbers —
it has to run a separate "read the numbers off the picture" pass; change one
number and the whole picture must be redrawn, re-uploaded and committed
again as a binary. The embed codes charting services hand out are iframes
and scripts — which issues and READMEs refuse to run.

**A citizen's treatment.** One line of standard markdown image syntax, and
the picture moves in:

```
![CI minutes per day](https://www.x-cmd.com/draw?type=bar&labels=lint,test,build,deploy&values=42,180,95,60&title=CI%20minutes%20per%20day)
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=bar&amp;labels=lint,test,build,deploy&amp;values=42,180,95,60&amp;title=CI%20minutes%20per%20day" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=bar&amp;labels=lint,test,build,deploy&amp;values=42,180,95,60&amp;title=CI%20minutes%20per%20day&amp;w=480&amp;h=300&amp;scheme=auto" alt="CI minutes spent per stage, per day" width="480" height="300" loading="lazy"></a><figcaption>What that line of characters renders into. The picture is the text; the text is the picture.</figcaption></figure>

The picture's definition is that one line of text, so it holds every right
text holds. Change one number and the diff shows that line — the reviewer
sees the change to the number and to the picture at once. "Which documents
does this metric appear in?" works for pictures too — links can be grepped.
Shipping a project in six languages means redrawing six links, each differing
in a few label parameters, not six pictures ([a post of its own](/blog/261117-six-languages)).

**First-class means no special treatment.** No upload, no account, no embed
protocol — the only requirement is that the picture itself is text. Whatever
treatment markdown gives text, the picture now gets.

That is all datalink does: turn a picture back into text. A picture enters
the agent's scene only after it has become text. For the four concrete
places to put these links, see [this post](/blog/261117-datalinks-in-github);
for making the agent default to links instead of screenshots, see
[this one](/blog/261117-tell-your-agent).
