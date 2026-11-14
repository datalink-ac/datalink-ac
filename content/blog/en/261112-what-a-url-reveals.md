---
title: What a URL reveals
date: 2026-11-12
desc: A datalink is public by construction. Working out what that means before it means something.
tags: privacy, thinking
---

A datalink is a URL with the data inside it. That is the whole idea — and it comes
with a property that is easy to state and easy to forget:

> Anyone who has the string has the data.

Not “anyone who can log in”. Not “anyone who is on the same network”. Anyone. The
string is the payload.

It matters more now than it did a year ago, for one reason: the link outlives the
piece. A screenshot in a chat log is gone in a week. A datalink in a release note
is still there in three years, still holding the numbers it was made from — and
still perfectly readable by whoever finds it.

## Where a link actually goes

It is worth being concrete about the ways a URL escapes, because most of them are
mundane rather than malicious:

- **Chat and issue trackers.** A link pasted into a comment is copied into somebody
  else's notification, a search index, a webhook, and possibly a third-party service
  that indexes issues for search.
- **Referrer headers.** The next page you visit may learn where you came from.
  Query strings are routinely logged by the sites on the other side.
- **Browser history and sync.** Local, but copied to your account, backed up, and
  readable by anything with access to the profile.
- **CDN caches and proxies.** A query string is part of the cache key, so the URL —
  data included — is now stored in places neither you nor the author chose.
- **Screenshots.** The address bar. Someone's terminal. A photo of a whiteboard.
- **Error trackers and logs.** Analytics tools that record the full URL will happily
  record the data with it.

None of this is exotic. It is the ordinary behaviour of URLs, and it is why “put the
data in the link” is not a licence to put anything in the link.

## The short-link fallacy

Short links look like a privacy feature and are not. `https://x-cmd.com/draw/c/5168…`
hides the contents from the eye, but:

- the destination is still fetchable by anyone who has the short link;
- the short link itself is a bearer token for the data, and it travels just as far;
- the mapping is stored server-side, which means there is now a *database* of
  private links — exactly the state we were trying to avoid;
- and the promise it makes (“the data is over there”) is weaker than the promise a
  plain parameter string makes (“the data is right here, and it is exactly what you
  see”).

Short links are for URLs that are too long, not for URLs that are too private.

## The rule

> If it should not appear in a screenshot of somebody's address bar, it does not
> belong in a datalink.

That covers secrets, tokens, personal data and internal identifiers, and it covers
them without exceptions or judgement calls. It is a blunt rule on purpose: the
alternative is a rule that requires a judgement call every time, and those do not
survive contact with a deadline.

## The harder question

The rule above is about the reader of the link. It is not about the *subject* of the
data, and that is the harder question.

A public link describing a private thing is still a disclosure. A chart of support
tickets by customer name, pasted into a public issue, publishes the customer names
and the fact that they needed support. A chart of error rates per internal service
tells a reader which parts of the system are fragile. Making the data linkable is
making it *quotable*, and quotability has consequences for the people inside the
data, not just for the people who made it.

The agent makes this sharper, not softer. A report written by an AI is full of
numbers that came from somewhere, and the link is the only place that somewhere is
recorded. Publishing the report publishes the data — and, with the link, publishes
it in a form that anybody can quote back precisely.

Two questions we do not have good answers to yet:

1. **Should a datalink carry a sensitivity marker?** The spec has a way to say “this
   is an estimate”, and it should probably also have a way to say “this describes
   something private, link it carefully”.
2. **Who owns a public link?** If a link is in a public issue for three years, does
   the author get to take it down? Does the renderer get to expire it?

These are not technical problems and they do not have a technical answer. They are
the reason the [specification](/spec) is a draft with an open section on privacy
rather than a finished document.

## What we did about it, for now

The site you are reading has no accounts, no cookies, no analytics and no database.
It stores nothing about you beyond ordinary request logs, held briefly, for capacity
and abuse control. Your colour-scheme choice lives in your own browser. Every chart
on this page is a link you can copy — and every one of them is safe to copy, because
none of them contains anything that should not be copied.

Which is also why this page has no charts of your traffic. Not because there is
nothing to show, but because the moment we publish them, we have published them.
