---
title: The agent does not have to guess: look up the kind, fill in the parameters, and the link is done.
date: 2026-11-17
order: 5
desc: The kind and the parameters change; the method does not — and neither do the promises.
tags: agents
---

Ask an agent for a chart. Now ask it for the release calendar, or the
architecture diagram, or a Gantt chart.

The kind changes, and so do the parameters: a calendar takes events, a
diagram takes nodes and edges, a chart takes labels and values. The method does
not change. Find the kind, put the data in the parameters, and the link is
done.

That is why the kinds are listed rather than left to be guessed. The registry
says which kind takes what:

```
/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980      a chart
/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&…   a structure diagram
/draw?type=calendar&start=2026-11-02&ev=2026-11-03;…     a calendar
/draw/erd?n=users;table;users;id:uuid (pk);…               an ER diagram
```

An agent that has the list does not have to learn a second API for the second
kind of picture. The shape of the link is the same for all of them: a URL, the
kind in the path, the data in the parameters.

<figure class="post-fig"><a href="https://www.x-cmd.com/draw/explore/erd?n=users%3Btable%3Busers%3Bid%3Auuid%20%28pk%29%0Aemail%3Atext%20%28uk%29%0Aname%3Atext&n=orders%3Btable%3BOrders%3Bid%3Auuid%20%28pk%29%0Auser_id%3Auuid%0Atotal%3Anumeric&n=products%3Btable%3Bproducts%3Bsku%3Atext%20%28pk%29%0Aname%3Atext%0Aprice%3Anumeric" target="_blank" rel="noopener"><img src="/draw/erd?n=users%3Btable%3Busers%3Bid%3Auuid%20%28pk%29%0Aemail%3Atext%20%28uk%29%0Aname%3Atext&n=orders%3Btable%3BOrders%3Bid%3Auuid%20%28pk%29%0Auser_id%3Auuid%0Atotal%3Anumeric&n=products%3Btable%3Bproducts%3Bsku%3Atext%20%28pk%29%0Aname%3Atext%0Aprice%3Anumeric&amp;w=560&amp;h=400&amp;scheme=auto" alt="Entity relationship diagram of a small shop" width="560" height="548" loading="lazy"></a><figcaption>An ER diagram — old idea, same method.</figcaption></figure>

A kind that did not exist yesterday is drawn the same way, too. The registry is
open; the promises are not.

## The promises do not depend on the kind

Whatever the agent picks, it gets the same contract. The link carries all the
data, so nothing has to be looked up to draw it. The output is a pure function
of the parameters and the version, so the same link gives the same picture
today and next year. The picture can be taken back apart into the numbers it
was drawn from, so an agent that gets the link can have the numbers as well
as the picture.

That is what makes it safe to let an agent choose. It is not choosing between
formats with different promises — it is choosing between renderers that have
to keep the same ones.

## The kind is in the link, so you can change it

The kind is the path in the address. Change it and you get a different
picture — and you do not need the agent for that. Edit the link in a README,
or in the address bar, and the picture changes with it.

The agent composes the link. You read it. Both of you are working on the same string.
