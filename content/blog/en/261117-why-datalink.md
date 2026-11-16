---
title: Why datalink, and not infolink
date: 2026-11-17
desc: The name says what the thing is: a link that carries the data. The other three names say something else.
tags: concept, naming
---

We kept the name almost by accident, and then we had to argue for it. The
candidates were **infolink**, **linkdata** and **dataurl**. Here is why they
lost.

## data, not info

`info` is the vaguer word, and vagueness is the problem.

Every link carries information — a page, a post, a login. What a datalink
carries is the **actual data**: the numbers, in the URL, in a form a machine
can read without asking anybody. That is a narrower promise than
"information", and a stronger one.

The point is not that the link holds information. The point is that the data
sits on the URL and the service stays **stateless** — no account, no cloud
store, nothing that has to keep running for the link to keep meaning
something.

## link, not url

`url` is a term of art. It is the right word inside an HTTP header and the
wrong word on a page that a writer is going to paste into a README.

`link` is the word everybody already has. It says what the thing does in
ordinary language: you send it, someone clicks it, and it shows them
something.

## A kind of link, not a kind of data

`linkdata` has the wrong head. It reads as *data attached to a link* — the
link is the modifier, the data is the thing. But the subject of this idea is
the link itself: a **kind of link**, one that happens to carry the data.

The same goes for `dataurl`: it reads like the *place where data is
downloaded from* — a repository of data, an endpoint, somewhere else. The
whole point of a datalink is that the data is not somewhere else. It is
here, in the link you are already sending.

## data in the link

So the name says what the thing is, in the order the thing works:

> **data** — the real data, not a picture of it, not a description of it
> **link** — the thing you send, click and paste, in words everyone knows

A **datalink** is a link that carries the data.

The name is not the argument — the [specification](https://datalink.ac/spec)
is. But a name is the first sentence of a concept, and this one is true.
