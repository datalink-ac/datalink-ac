---
title: Datalinks in GitHub.
date: 2026-11-17
order: 4
desc: Release notes, issues, pull requests, READMEs — four places where a link fits better than a picture.
tags: case
---

A repository is a text place. It has diffs, it has blame, it has a history you
can read. Images are the one thing in it that none of that works for: you
cannot review a PNG in a diff, you cannot tell what changed in it, and you
cannot edit it without a tool.

Four places, four different jobs.

In a **release note** — the code composition of that version. It is a link, so
the next release does not need a new picture: the link already says what to
draw.

In an **issue** — the flow of a requirement, drawn once. The next issue about
the same requirement links to the same picture rather than redrawing it.

In a **pull request** — the benchmark. The numbers travel with the diff, so
the reviewer sees the change to the number and the change to the picture at
the same time.

In a **README** — the architecture. Change the link and the picture changes
with it; nobody has to remember to regenerate a file.

The through-line is that the repository stops storing drawings. What it stores
is data, in a form a machine can read and a person can review. The picture is
still there when somebody looks at it; it just is not a thing that has to be
kept in sync by hand.

This is also why the same links work outside GitHub. A README is a document, an
issue is a document, a release note is a document — and a document that carries
its own data does not go stale.
