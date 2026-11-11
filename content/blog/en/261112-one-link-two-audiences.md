---
title: One link, two audiences
date: 2026-11-12
desc: The same string, read by a person and read by an agent. Why that symmetry is the whole trick.
tags: concept, agents
---

A chart has exactly one reader in mind, and it is not the one with the API key.

The renderer that produces a chart is optimised for a person: it chooses a type that
suits the shape of the data, a palette that survives a projector, a label size that
fits the longest category. That person then does something with it — reads a trend,
asks a question, decides whether to open the dashboard.

The agent, meanwhile, is handed the artefact of that optimisation. It gets pixels.

## The asymmetry

The asymmetry is not subtle and it is not free.

| | a picture | the data |
|---|---|---|
| what the reader gets | a rendering chosen for human eyes | the numbers, exactly |
| precision | whatever the renderer drew | whatever was measured |
| cost to a model | vision tokens, ~1 per 750 px² | text tokens, ~4 characters each |
| verifiable | no | yes — it is text |

Take a 705×500 chart. As an image that is roughly 470 vision tokens. The same chart's
data, as JSON, is about 40 tokens. That is an order of magnitude, and it is not the
interesting part — the interesting part is what the picture *cannot* tell you: the
unit, the sample size, whether the value is a mean or a maximum, whether the series
was truncated at the axis.

We are not comparing a lossy format with a lossless one and calling the picture a
bad citizen. We are comparing the format we happened to build for people with the
format we should have been building for machines, and then noticing that the second
one is also fine for people.

## Two readings, one string

The fix is not to build a second API for agents. It is to notice that a URL can be
read in two ways, and that the *same* URL can be read in both ways at once.

```
GET /d?type=pie&labels=TS,Py,Go&values=4821,2312,980
  → image/svg+xml        (a person opens it)
  → the spec, verbatim   (an agent parses it)
```

The renderer's output embeds the spec it was drawn from, in a `<metadata>` node —
plain text, inside the SVG. So the picture can always be taken apart again. That is
the invariant we call *lossless*, and it is what makes the second reading possible
without a second source of truth.

The data view is not a separate endpoint by accident. It is the same link with a
different reader, which is why it can never disagree with the picture: there is only
one thing being described.

## What an agent should do with this

A short contract, and one instruction that carries most of it:

> Fetch the link. Read the data, not the picture.

Concretely:

- **Fetch, do not eyeball.** If a link gives you a spec, the spec is the answer.
  Never recover a value from pixels.
- **Do not launder the numbers.** No silent rounding, no unit conversions, no
  re-sorting. If the data says 4.18, say 4.18.
- **Change the parameters, not the output.** If you want a different cut, rewrite the
  link and fetch it again. Do not edit a rendered artefact; there is nothing to edit.
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

The first sentence asks for a chart. The second one forbids the lossy step. The third
one hands back an instrument instead of an image.
