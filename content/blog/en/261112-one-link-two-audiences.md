---
title: One link, two audiences
date: 2026-11-12
desc: The same string, read by a person and read by an agent. Why that symmetry is the whole trick.
tags: concept, agents
---

A chart is a rendering, and it is optimised for the eye that will look at it: the
type that suits the shape of the data, the palette that survives a projector, the
label size that fits the longest category.

Your AI writes the piece, and where it needs a chart it makes one. What it leaves
behind is that rendering — and the numbers went into the image and did not come back
out of it. The piece ships; the context that made it does not. Whoever reads it next
— a person, an agent, you next year — has the picture and nothing else.

## The asymmetry

The asymmetry is not subtle and it is not free.

| | a picture | the link |
|---|---|---|
| what the reader gets | a rendering chosen for human eyes | the same rendering — and the numbers |
| precision | whatever the renderer drew | whatever was measured |
| cost to a model | vision tokens, ~1 per 750 px² | text tokens, ~4 characters each — the link is ~20 |
| what is left behind | the picture | the picture and the data |

Take a 705×500 chart. As an image that is roughly 470 vision tokens. The link that
carries the same numbers is about 20 — the numbers are *in* it, so an agent that
reads the link has the data without fetching anything.

That is more than an order of magnitude, and it is not the interesting part — the
interesting part is what the picture *cannot* tell you: the unit, the sample size,
whether the value is a mean or a maximum, whether the series was truncated at the
axis.

We are not comparing a lossy format with a lossless one and calling the picture a
bad citizen. We are comparing the format we happened to build for people with the
format we should have been building for machines, and then noticing that the second
one is also fine for people.

## Two readings, one string

The fix is not to build a second API for agents. It is to notice that a URL can be
read in two ways, and that the *same* URL can be read in both ways at once.

```
/d?type=pie&labels=TS,Py,Go&values=4821,2312,980
  → a person opens it, sees a chart
  → an agent reads it, sees TS 4821, Py 2312, Go 980
```

The second reading needs no fetch at all: the numbers are in the address, because
the address is where the data lives. And the renderer's output embeds the spec it
was drawn from, in a `<metadata>` node — plain text, inside the SVG — so the picture
can always be taken apart again. That is the invariant we call *lossless*, and it
is what makes the second reading possible without a second source of truth.

The data view is not a separate endpoint by accident. It is the same link with a
different reader, which is why it can never disagree with the picture: there is only
one thing being described.

## What an agent should do with this

A short contract, and one instruction that carries most of it:

> Read the link. The numbers are in it.

Concretely:

- **Read, do not eyeball.** If a link carries the numbers, they are the answer.
  Never recover a value from pixels.
- **Do not launder the numbers.** No silent rounding, no unit conversions, no
  re-sorting. If the data says 4.18, say 4.18.
- **Change the parameters, not the output.** If you want a different cut, rewrite the
  link. Do not edit a rendered artefact; there is nothing to edit.
- **Hand the link back.** The link you used is the link the human should open. It
  is the one artefact that means the same thing to both of you.

That last one is the human–agent collaboration, stated as a protocol rather than a
feature. The agent's output and the human's input are the same string.

## The sentence to paste into your prompt

If your agent is handing you charts it read from images, the fix might be one
sentence:

> Draw a pie chart of our error budget by service and give me the exact numbers.
> Read them from the link, not from the picture — I want the values, not your
> reading of the values. Then send me the link so I can change the parameters myself.

(The last sentence matters more than it looks: the link is not a picture of the
answer, it *is* the answer. Handing it back hands back the instrument.)

The first sentence asks for a chart. The second one forbids the lossy step. The third
one hands back an instrument instead of an image.
