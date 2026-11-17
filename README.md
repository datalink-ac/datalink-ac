# datalink.ac

> **Data in the link as context for agents, vision for humans.**

- **Live:** https://datalink.ac · 中文：https://datalink.ac/zh
- **Spec draft:** https://datalink.ac/spec
- **Concept issue:** [#1 — datalink as context](https://github.com/datalink-ac/datalink-ac/issues/1)

## What a datalink is

A URL that carries the data itself — not a pointer to data, and not a picture
of it.

One string of characters, two readers: a person opens it and sees the
picture, an agent reads the same link and gets the numbers. Nothing to
export, nothing to keep in sync, and nothing that has to stay running.

## What one of them looks like

Every picture below **is** a link. Click it, change a number in it, watch it
move.

**A chart — stars by language. The numbers are in the link.**

[![Stars by language](https://datalink.ac/draw?type=pie&t=revenue&title=Stars%20by%20language&labels=TypeScript,Python,Go,Rust,Java&values=4821,2312,980,645,520&w=560&h=340&scheme=auto)](https://www.x-cmd.com/draw/explore?type=pie&t=revenue&title=Stars%20by%20language&labels=TypeScript,Python,Go,Rust,Java&values=4821,2312,980,645,520)

**A sankey — where pull requests end up, by age.**

[![Pull requests lifecycle](https://datalink.ac/draw?type=sankey&t=pipeline&labels=feat,fix,docs,chore,merged,closed,rejected,0-1y,1-2y,2y%2B&links=feat%3Emerged:38;feat%3Eclosed:12;feat%3Erejected:8;fix%3Emerged:33;fix%3Eclosed:6;fix%3Erejected:2;docs%3Emerged:16;docs%3Eclosed:4;chore%3Emerged:5;chore%3Eclosed:6;chore%3Erejected:6;merged%3E0-1y:52;merged%3E1-2y:28;merged%3E2y%2B:12;closed%3E0-1y:14;closed%3E1-2y:9;closed%3E2y%2B:5;rejected%3E0-1y:9;rejected%3E1-2y:5;rejected%3E2y%2B:2&title=Pull%20requests%20lifecycle&unit=prs&w=560&h=340&scheme=auto)](https://www.x-cmd.com/draw/explore?type=sankey&t=pipeline&labels=feat,fix,docs,chore,merged,closed,rejected,0-1y,1-2y,2y%2B&links=feat%3Emerged:38;feat%3Eclosed:12;feat%3Erejected:8;fix%3Emerged:33;fix%3Eclosed:6;fix%3Erejected:2;docs%3Emerged:16;docs%3Eclosed:4;chore%3Emerged:5;chore%3Eclosed:6;chore%3Erejected:6;merged%3E0-1y:52;merged%3E1-2y:28;merged%3E2y%2B:12;closed%3E0-1y:14;closed%3E1-2y:9;closed%3E2y%2B:5;rejected%3E0-1y:9;rejected%3E1-2y:5;rejected%3E2y%2B:2&title=Pull%20requests%20lifecycle&unit=prs)

**A diagram — a three-tier web app.**

[![Web app architecture](https://datalink.ac/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20Gateway;r0c2&n=auth;be;Auth%20Service;r1c1&n=render;be;Chart%20Render;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=Data%20Layer;pg%20cache&title=Web%20App&w=436&h=270&scheme=auto)](https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20Gateway;r0c2&n=auth;be;Auth%20Service;r1c1&n=render;be;Chart%20Render;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=Data%20Layer;pg%20cache&title=Web%20App)

**A calendar — events, kinds and times.**

[![November](https://datalink.ac/draw?type=calendar&layout=month&start=2026-11-02&ev=2026-11-03;meeting;Requirement%20review;14:00&ev=2026-11-11;review;Spec%20walkthrough;10:30&w=480&h=340&scheme=auto)](https://www.x-cmd.com/draw/explore?type=calendar&layout=month&start=2026-11-02&ev=2026-11-03;meeting;Requirement%20review;14:00&ev=2026-11-11;review;Spec%20walkthrough;10:30)

**A map — every state is a number.**

[![US states by GDP per capita](https://datalink.ac/draw/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A70%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A6%2C%22itemWidth%22%3A10%2C%22itemHeight%22%3A120%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%7D%5D%7D%5D%7D&w=480&h=340&scheme=light)](https://www.x-cmd.com/draw/explore/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A70%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A6%2C%22itemWidth%22%3A10%2C%22itemHeight%22%3A120%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%7D%5D%7D%5D%7D&w=480&h=340&scheme=light)

**A molecule — one SMILES string in, a structure out.**

[![Penicillin G](https://datalink.ac/draw/chem?smiles=CC1(C)S%5BC%40%40H%5D2%5BC%40H%5D(NC(%3DO)Cc3ccccc3)C(%3DO)N2%5BC%40H%5D1C(%3DO)O&w=480&h=340&scheme=light)](https://www.x-cmd.com/draw/explore/chem?smiles=CC1(C)S%5BC%40%40H%5D2%5BC%40H%5D(NC(%3DO)Cc3ccccc3)C(%3DO)N2%5BC%40H%5D1C(%3DO)O&scheme=light)

**A benchmark — two engines, the same queries.**

[![DuckDB vs SQLite](https://datalink.ac/draw?type=bar&labels=summary,pages,referrers,browsers&series=DuckDB:117.0,4.6,7.8,66.3&series=SQLite:3125.7,875.7,863.6,1829.1&title=duckdb%20vs%20sqlite&w=560&h=300&scheme=auto)](https://www.x-cmd.com/draw/explore?type=bar&labels=summary,pages,referrers,browsers&series=DuckDB:117.0,4.6,7.8,66.3&series=SQLite:3125.7,875.7,863.6,1829.1&title=duckdb%20vs%20sqlite)

**A repository's own numbers — code, comments and blanks per language.**

[![Code composition](https://datalink.ac/draw/tokei?layout=butterfly&langs=TypeScript:4820:1180:940,JavaScript:1687:298:71,Shell:640:120:88,CSS:210:40:35,Markdown:180:760:120,JSON:95:0:12&title=Code%20composition&w=560&h=300&scheme=auto)](https://www.x-cmd.com/draw/explore/tokei?layout=butterfly&langs=TypeScript:4820:1180:940,JavaScript:1687:298:71,Shell:640:120:88,CSS:210:40:35,Markdown:180:760:120,JSON:95:0:12&title=Code%20composition)

**Two sides of one question — issues opened, issues closed.**

[![Issues opened vs closed](https://datalink.ac/draw?type=butterfly&title=Issues%20opened%20vs%20closed&labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&left=Opened:7,8,2,7,6,7&right=Closed:5,6,2,7,5,6&w=480&h=340&scheme=auto)](https://www.x-cmd.com/draw/explore?type=butterfly&title=Issues%20opened%20vs%20closed&labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&left=Opened:7,8,2,7,6,7&right=Closed:5,6,2,7,5,6)

**A flow — the steps of a requirement, in one link.**

[![A requirement's flow](https://datalink.ac/draw/mermaid?m=graph%20TD%3BA%5BRequirement%5D--%3EB%5BDesign%5D%3BB--%3EC%5BDevelopment%5D%3BC--%3ED%5BReview%5D%3BD--%3E%7Cchange%7CC%3BD--%3EE%5BRelease%5D&title=The%20flow%20of%20a%20requirement&w=300&h=400&scheme=auto)](https://www.x-cmd.com/draw/explore/mermaid?m=graph%20TD%3BA%5BRequirement%5D--%3EB%5BDesign%5D%3BB--%3EC%5BDevelopment%5D%3BC--%3ED%5BReview%5D%3BD--%3E%7Cchange%7CC%3BD--%3EE%5BRelease%5D&title=The%20flow%20of%20a%20requirement)

### The same diagram in three languages

Same nodes, same edges, same numbers — only the labels are translated. One
diagram, three links; a fourth or a fourteenth is one more parameter away.

| | | |
|---|---|---|
| [![Web App](https://datalink.ac/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20Gateway;r0c2&n=auth;be;Auth%20Service;r1c1&n=render;be;Chart%20Render;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=Data%20Layer;pg%20cache&title=Web%20App&w=436&h=270&scheme=auto)](https://www.x-cmd.com/draw/explore/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20Gateway;r0c2&n=auth;be;Auth%20Service;r1c1&n=render;be;Chart%20Render;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=Data%20Layer;pg%20cache&title=Web%20App) | [![Web 应用](https://datalink.ac/draw/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20%E7%BD%91%E5%85%B3;r0c2&n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache&title=Web%20%E5%BA%94%E7%94%A8&w=436&h=270&scheme=auto)](https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E6%B5%8F%E8%A7%88%E5%99%A8;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20%E7%BD%91%E5%85%B3;r0c2&n=auth;be;%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1;r1c1&n=render;be;%E5%9B%BE%E8%A1%A8%E6%B8%B2%E6%9F%93;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=%E6%95%B0%E6%8D%AE%E5%B1%82;pg%20cache&title=Web%20%E5%BA%94%E7%94%A8) | [![Web アプリ](https://datalink.ac/draw/archmap?n=web;fe;%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20%E3%82%B2%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A4;r0c2&n=auth;be;%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9;r1c1&n=render;be;%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E6%8F%8F%E7%94%BB;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=%E3%83%87%E3%83%BC%E3%82%BF%E5%B1%A4;pg%20cache&title=Web%20%E3%82%A2%E3%83%97%E3%83%AA&w=436&h=270&scheme=auto)](https://www.x-cmd.com/draw/explore/archmap?n=web;fe;%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20%E3%82%B2%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A4;r0c2&n=auth;be;%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9;r1c1&n=render;be;%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88%E6%8F%8F%E7%94%BB;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=%E3%83%87%E3%83%BC%E3%82%BF%E5%B1%A4;pg%20cache&title=Web%20%E3%82%A2%E3%83%97%E3%83%AA) |

[x-cmd/draw](https://github.com/x-cmd/draw) ships its README in 18 languages —
same figures, translated labels, because every figure is a datalink.

## Why a link and not a picture

**A picture shows; it does not hold.** A chart can show you the shape of a
hundred numbers; it cannot hand you the hundred numbers. A model handed the
picture reconstructs the values by looking — good at that, still a reading, and
it cannot tell which parts it read and which it filled in.

**The piece ships; the context that made it does not.** Whoever reads it next —
a person, an agent, you next year — has the picture, and nothing to check it
against.

**With the data in the link, the numbers travel.** The other side gets the
exact context, not a picture of one. They can change it, add a comment, share
it again. Put it in a README, in a blog post, and it still means something when
the service behind it is down: stateless, no account, no cloud, nothing that
has to stay running.

**And the agent stops guessing.** It reads the numbers themselves — never
reconstructing a value from pixels, never rounding one, never spending a
vision token on a picture of the data. It quotes the number, and it can do
arithmetic on it. The link is about 25 tokens; the same chart as SVG markup is
about 1,100 — so the context window stays free for the work.

**A report becomes memory.** The parameters say what was measured and how it
was framed, so six months on an agent with memory can read the link and find
the intent and the numbers — not a picture of them.

## How to use it

Give your agent the links. Fetch one directly —

```sh
curl 'https://datalink.ac/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980'
```

— or install the skill, and it knows the shape:

```sh
npx clawhub@latest install edwinjhlee/x-cmd-draw
```

Either way, this prompt is the whole thing:

> Use the draw skill — read
> https://github.com/x-cmd/draw/blob/main/.x-cmd/clawhub/SKILL.md and follow it.
> From now on, when you write a README, an issue, a pull request, a blog post or
> a chat message that needs a chart, embed the chart as a link — not an image.

## Why it is called datalink

Not **infolink**: `info` is vaguer than `data`. Every link carries
information; the point here is that the *actual data* sits in the URL, and the
service stays stateless.

Not **linkdata**: the head of that phrase would be `data`, with `link` as the
modifier — the data attached to a link. But the subject is the link itself: a
kind of link, one that happens to carry the data.

Not **dataurl**: it reads like the place where data is downloaded from. And
`url` is a term of art; `link` is the word everyone already has,
including the people we are writing for.

So: a **datalink** — a link that carries the data. The long version is in
[the blog](https://datalink.ac/blog/261117-why-datalink).

## Where to go next

- The **specification draft** — what a datalink is, and what a renderer has to
  promise: the anatomy, the invariants, the agent contract, and the questions
  we have not settled.
- The **concept issue** — where the idea is argued out in the open.
- The **blog** — one story per post, in the order of the home page: what a
  datalink is, six languages in six links, what else a link can be, where a
  datalink belongs in GitHub, telling your agent to use them, and why it is
  called datalink.

## Related

- [x-cmd/draw](https://github.com/x-cmd/draw) — the chart and diagram renderer
- [x-cmd/ppt](https://github.com/x-cmd/ppt) — the slide deck renderer
- [ClawHub: x-cmd-draw](https://clawhub.ai/edwinjhlee/skills/x-cmd-draw) — the skill for agents

## Contributing

The repository, the build, the deploy and the house style are in
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

Apache-2.0 — see [LICENSE](LICENSE).
