---
title: Anyone with the link has the data.
date: 2026-11-12
order: 8
desc: A datalink is public by construction — worth settling before you put anything in one.
tags: privacy
---

A datalink is a link that carries the data. That is the whole idea, and it
comes with a property that is easy to state and easy to forget:

> Anyone who has the string has the data.

Not anyone who can log in. Anyone. The string is the payload.

It matters more now than it did a year ago, for one reason: the link outlives
the piece. A screenshot in a chat log is gone in a week. A datalink in a
release note is still there in three years, still holding the numbers it was
made from — and still perfectly readable by whoever finds it.

## Where a link actually goes

Most of the ways a URL travels are ordinary, not malicious:

- A link pasted into a comment is copied into a notification, a search index, a
  webhook, and possibly a third-party service that indexes issues for search.
- The next page you visit may learn where you came from. Query strings are
  routinely logged on the other side.
- Browser history is local, but it syncs to your account, and it is backed up.
- A query string is part of the cache key, so the URL — data included — ends
  up stored in places neither you nor the author chose.
- Screenshots. The address bar. Somebody's terminal.

None of this is exotic. It is the ordinary behaviour of URLs, and it is why
"put the data in the link" is not a licence to put anything in the link.

## A short link hides the data, not the fact of it

Short links look like a privacy feature and are not. The destination is still
fetchable by anyone who has the short link, and the short link itself is a
bearer token for the data — it travels just as far. It also means a database
of private links on somebody's server, which is exactly the state we were
trying to avoid.

Short links are for URLs that are too long, not for URLs that are too private.

## Quotation has consequences for the people inside the data

There is a harder side to this, and it is not about the reader of the link. It
is about the subject of the data.

A public link describing a private thing is still a disclosure. A chart of
support tickets by customer name, pasted into a public issue, publishes the
customer names and the fact that they needed support. A chart of error rates
per internal service tells a reader which parts of the system are fragile.
Making the data linkable is making it quotable, and quotability has
consequences for the people inside the data, not just for the people who made
it.

An agent sharpens this rather than softening it. A report written by an AI is
full of numbers that came from somewhere, and the link is the only place that
somewhere is recorded. Publishing the report publishes the data — and with the
link, publishes it in a form that anybody can quote back precisely.

Some of this we do not have good answers to yet: whether a datalink should
carry a marker saying "this describes something private", and who owns a
public link once it has been sitting in an issue for three years. Those
questions are open in the [specification](/spec), and they are not technical
questions.

This site is a small example of the rule. No accounts, no cookies, no
analytics, no database. Every chart here is a link you can copy, and every one
of them is safe to copy, because none of them contains anything that should
not be copied.
