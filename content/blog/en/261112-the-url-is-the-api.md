---
title: The URL is the API
date: 2026-11-12
desc: Parameters in, picture out. Why the simplest possible interface is the one that survives contact with agents.
tags: concept, design
---

There is a particular kind of software that agents cannot use: the kind where getting
at the data means *being* the user. A dashboard with a login, a date range set by
clicking, a chart behind a "view report" button, and a table that exists only after
you have navigated to the right tab.

None of that is hard for a person, and all of it is fatal for a machine. So teams
build a second thing — an API, with a key, a rate limit, a schema, a client library,
and a changelog. The API is fine. It is also a second description of the same facts,
kept in sync by hand, that drifts the moment somebody adds a field to the dashboard.

## Pure functions have a habit of surviving

There is another way. Make the link itself the interface: parameters in, picture out.
No session, no login, no stored state, no hidden defaults.

```
/draw?type=bar&labels=Mon,Tue,Wed&values=120,180,95
```

This is a pure function. The same parameters give the same picture today and next
year, on any machine, with no account. It is the smallest possible API: the parts of
one that are already native to the web, and that every agent already knows how to
read, write and send.

Three things follow, and they are the reason we care.

**It caches.** The URL is the key. The picture behind a URL can sit in a CDN for as
long as it is worth keeping, and every reader after the first one gets it for free.

**It versions.** Put `v=1` in the link and the output stops moving. A chart pasted
into a release note stays correct, because the renderer that made it is pinned. This
is the difference between a link and a screenshot: a screenshot is a promise about
the past that nobody can check.

**It diffs.** Two links that differ in one parameter differ in one character. A
chart in a pull request is a chart you can review: change the number, change the
link, see the picture change. And — the part that matters in a repository — a chart
that lives in a repo as a *file* is a binary that grows the history and has to be
re-rendered and re-uploaded every time a number moves. The same chart as a *link* is
one character in a diff, and the picture follows it on its own.

## The shared surface

Here is the part we did not expect to matter.

Nobody types a URL by hand any more, and nobody should. You say what you want; the
agent composes the links, draws the pictures and sends the report. What you get back
is a piece with charts in it — and every chart is a link with its numbers still
inside.

Then the two of you read the same artefact, differently. The human sees the picture
and gets the insight out of it. The agent reads the link and gets the exact data —
already there, no fetch, no vision tokens, nothing spent on pixels. Neither of them
had to learn the other's software, because a URL is a format both already know: you
can point at it, you can copy it, an agent can rewrite it in one call.

That is the collaboration. Not "AI plus a UI". One string, two sets of hands.

## What it costs

Honesty requires naming the trade-offs.

- **Long URLs.** Data in the URL means data in the URL. There is a practical ceiling
  somewhere around a few thousand characters, and past it you want a short link or a
  store — which reintroduces the server-side state we were trying to avoid, and with
  it the privacy question.
- **Verbosity.** A chart with twelve series is a long parameter list. Flat
  parameters and a JSON escape hatch (`?d=`) are both needed; neither is pleasant on
  its own.
- **No secrets.** A URL is public. This is a feature for data that *should* be
  shared and a hard no for data that should not.

## The rule we keep coming back to

If the parameters are the data, then the data is public, and the only question left
is whether it should be. That question has to be answered before the format is
chosen — not after, when somebody pastes a customer id into a chart link.

We are still working out where the line is. It is written up, unresolved, in the
[specification](/spec) and in *What a URL reveals*.
