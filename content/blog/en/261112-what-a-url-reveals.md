---
title: With a picture you can only look; with a link, anyone can take the numbers.
date: 2026-11-12
order: 8
desc: A datalink is public by construction — worth settling before you put anything in one.
tags: privacy
keywords: datalink, URL, privacy, public data, link security
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

## 1. Where a link actually goes

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

## 2. A short link hides the data, not the fact of it

Short links look like a privacy feature and are not. The destination is still
fetchable by anyone who has the short link, and the short link itself is a
bearer token for the data — it travels just as far. It also means a database
of private links on somebody's server, which is exactly the state we were
trying to avoid.

Short links are for URLs that are too long, not for URLs that are too private.

## 3. When the data is about people, a link publishes them

The first two sections were about how far data travels. This one is about the
other direction: who the link talks about.

A chart of support tickets by customer name, pasted into a public issue,
hands the customer names — and the fact that they needed support — to
whoever finds the link. A chart of error rates per internal service tells a
reader which parts of the system are fragile. Quoting is the link's
strength: anyone can point others at the exact string. But the cost is not
paid by the one who makes that call. The one who pastes the link decides;
the ones inside the data are exposed — and they never pressed "publish".

Agents change the nature of that step. Reports and links now come out in
batches, and "does this link say too much about someone?" stops passing
through anyone's head — it becomes a default.

So there is one rule: private things never go into a link in the first
place. Not because a gate could be added — a link has no gate — but because
the data is handed to a copier that does not stop.

Two questions we have no good answers to yet, and neither is technical:
should a datalink carry a marker saying "this describes something private"?
And a link, once pasted, has no recall — that is the other face of
statelessness — so who owns one after three years in an issue? The
specification makes a start of it and stops there.

This site is built to the same rule: no accounts, no cookies, no analytics,
no database. Every picture on this page is a link, and each one is fit to
copy — because there is nothing in it that should not be copied.


<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" target="_blank" rel="noopener"><img src="https://www.x-cmd.com/draw?type=butterfly&amp;title=Issues%20opened%20vs%20closed&amp;labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&amp;left=Opened:7,8,2,7,6,7&amp;right=Closed:5,6,2,7,5,6&amp;w=480&amp;h=340&amp;scheme=auto" alt="Age of issues, as a butterfly chart" width="480" height="340" loading="lazy"></a><figcaption>Every picture on this page is a link; so is this one. Copy it and the numbers travel with you.</figcaption></figure>
