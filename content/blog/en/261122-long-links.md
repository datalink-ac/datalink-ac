---
title: A long link used to be a dead end; long data now has three proper ways out.
date: 2026-11-22
order: 12
desc: GitHub's proxy refuses links past ~4096 characters. Short links, a context parameter, link compression — three ways datalink houses long data, and the account of each.
tags: concept
keywords: datalink, short link, URL length, GitHub 4096, chart, agent, data link spec
---

Links have length, and every platform enforces it. GitHub's image proxy
simply refuses addresses beyond roughly 4096 characters — measured in the
last post, a 120-step flowchart URLs to about 4.9k characters and presses
against that wall ([tested across six platforms](/blog/261119-git-platforms)).

The wall's nature: the intermediary that fetches pictures for every reader
does not want to carry the weight of an over-long address. That motive will
not go away, so the question is not "when will the wall come down" but
**where does data live when it is longer than the wall**.

Datalink's answer has three ways out, in order of recommendation.

## Way out 1: short links (works today)

POST the spec to the renderer, get a short URL back. Measured:

```
$ curl -X POST https://www.x-cmd.com/draw?type=pie \
    -d '{"title":"Share me","data":[{"label":"A","value":3},{"label":"B","value":2}]}'

{"hash":"ba9f3be03d00e76a","url":"https://www.x-cmd.com/draw/c/ba9f3be03d00e76a","template":"pie"}
```

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/c/ba9f3be03d00e76a" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw/c/ba9f3be03d00e76a?w=420&amp;h=300&amp;scheme=auto" alt="A pie chart rendered from a short link" width="420" height="300" loading="lazy"></a><figcaption>What the short link from the POST above renders into. A sixteen-character name; the data lives with the renderer.</figcaption></figure>

The short link is not a random id — it is **a fingerprint of the data**: the
implementation canonicalises the spec (object keys sorted, arrays untouched —
array order is data order) and hashes it. So the same data always yields the
same short link; measured, shuffling key order changes nothing, while real
changes to the data change the fingerprint. That lets a short link be cached,
shared and cited — it keeps the same promises as a long link, only the data's
residence moves from the URL into the renderer's storage.

The residence moves, and the account must be acknowledged: a short link is no
longer self-contained — the link alone no longer reveals the data. So the
spec requires renderers to offer a machine-readable view of the spec for such
links: JSON output, or a `/draw/explain` parsing endpoint (the shape is open
in §9 of the spec; the push is
[x-cmd/draw#43](https://github.com/x-cmd/draw/issues/43)).

A short link also has an innate shortfall: it carries no information. A
reader or agent holding `/draw/c/ba9f3be03d00e76a` cannot tell what the
picture is about. The fix is to hang the context on the link —
`_ctx=this chart is Q3 code composition; A is TypeScript`. Today's
renderers ignore the parameter (measured: the picture renders fine), but it
travels with the link and any agent that reads the link gets it; displaying
it in explore is the next step.

## Way out 2: link compression (designed, not landed yet)

Compress the spec and carry it in the parameter — the link keeps its data
and self-containment survives. The cost is the same as base64's: **a
compressed payload is unreadable to an agent in context**; it takes a decode
pass before it can be used, and the promise "the link carries the data"
quietly weakens half a step.

So it belongs only in the cornered scene: you refuse the short link, and you
are pressed against the platform's wall anyway. A fallback slot in the
design, not the default (the trade-offs are recorded in
[issue #8](https://github.com/datalink-ac/datalink-ac/issues/8)).

## Way out 3: template + key data (in the design)

Another route splits style from data: a template (a style package, or even a
base SVG) is uploaded to the service and becomes a template link; only the
key data rides in the parameters. The link shrinks, and the style becomes
reusable — a family of same-looking pictures shares one template, and
changing the style means touching the template alone. The spec-level design
lives in issue #8; the landing is not scheduled.

## One stance: no expiry on short links

Hosting data costs money, and the common practice is a TTL on short links —
delete what expires. Datalink does not plan to do this: **a user's data is
precious, and the platform should not delete it carelessly** — a link pasted
into an issue, dug out three years later, must still render.

No expiry means abuse control: a link that is free and never expires invites
abuse, and abusive traffic makes rendering costs spike. So this feature can
only be gated behind login and a paywall — the wall stops abusers, and
careful users pay for links that live forever. Between deleting data and
charging for it, choose charging.

## Choosing

| situation | way out |
| --- | --- |
| link under 3.8k | nothing — a long link is the most self-contained form |
| against the platform wall, data may leave the link | short link, context hung on `_ctx=` |
| data must stay in the link, the wall must be passed | compression (once landed), accepting the decode pass |
| a family of same-looking pictures, restyleable centrally | template + key data (once landed) |

## Coda

A link that is too long is, on the surface, an address-bar problem; at
bottom it is a problem of **where the data lives**. In the URL, it is
self-contained and readable by anyone, but there is a wall; with the
renderer, the address is short and the picture lives forever, but a view
must be added for "reading the data", and a login-and-paywall for abuse
control. The three
ways out are three solutions to one conservation law — data does not
vanish, it only moves house; the cost of moving is the design space of the
link's form.
