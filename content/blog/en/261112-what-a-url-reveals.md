---
title: With a picture you can only look; with a link, anyone can take the numbers.
date: 2026-11-12
order: 8
desc: A datalink is public by construction — worth settling before you put anything in one.
tags: privacy
---

A datalink is a link that carries the data. That is the whole idea, and it
comes with a property that is easy to state and easy to forget:

> Anyone who has the string has the data.

Not anyone who can log in. Anyone. The string is the payload — and a link has
no gate. That is not a figure of speech; it is how the thing is built.

It is worth saying this now because pictures are lost and links are not. A
screenshot in a chat log is gone in a week. A datalink in a release note is
still there in three years, still holding the numbers it was made from — and
still perfectly readable by whoever finds it.

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

## When the data is about people, a link publishes them

There is a harder side to this. It is not about who reads the link. It is about
who the link talks about.

A link that describes a private thing is still a disclosure. A chart of
support tickets by customer name, pasted into a public issue, hands the
customer names — and the fact that they needed support — to whoever finds the
link. A chart of error rates per internal service tells a reader which parts of
the system are fragile. Making the data linkable is making it quotable, and
quotability has consequences for the people inside the data, not just for the
people who made it.

An agent makes this worse, not better. A report written by an AI is full of
numbers that came from somewhere, and the link is the only place that somewhere
is recorded. Publishing the report publishes the data — and with the
link, publishes it in a form that anybody can quote back precisely.

Some of this we do not have good answers to yet: whether a datalink should
carry a marker saying "this describes something private", and who owns a
link once it has been sitting in an issue for three years. The
specification makes a start of it and leaves these bigger questions to the
repo's issues and this blog — unanswered, and none of them technical.

This site is a small example of the rule. No accounts, no cookies, no
analytics, no database. Every chart here is a link you can copy, and every one
of them is safe to copy, because none of them contains anything that should
not be copied.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" alt="Age of issues, as a butterfly chart" width="480" height="340" loading="lazy"></a><figcaption>Every picture on this page is a link; so is this one. Copy it and the numbers travel with you.</figcaption></figure>
