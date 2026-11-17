# datalink.ac

> **Data in the link as context for agents, vision for humans.**

- **Live:** https://datalink.ac · 中文：https://datalink.ac/zh
- **Spec draft:** https://datalink.ac/spec
- **Concept issue:** [#1 — datalink as context](https://github.com/datalink-ac/datalink-ac/issues/1)

## What a datalink is

A URL that carries the data itself — not a pointer to data, and not a picture
of it.

```
https://datalink.ac/draw?type=pie&labels=TS,Py,Go&values=4821,2312,980
```

One string of characters, two readers: a person opens it and sees the picture,
an agent reads the same link and gets the numbers. Nothing to export, nothing
to keep in sync, and nothing that has to stay running.

## What one of them looks like

Every link below is live. Open it, change a number in it, watch it move.

| | |
|---|---|
| **A chart** | [`/draw?type=pie&t=revenue&title=Stars%20by%20language&…`](https://datalink.ac/draw?type=pie&t=revenue&title=Stars%20by%20language&labels=TypeScript,Python,Go,Rust,Java&values=4821,2312,980,645,520&w=480&h=340&scheme=auto) — and the numbers are still in the link |
| **The same chart, as data** | [`/draw.json?type=pie&labels=TS,Py,Go&values=4821,2312,980`](https://datalink.ac/draw.json?type=pie&labels=TS,Py,Go&values=4821,2312,980) — what an agent reads |
| **A diagram** | [`/draw/archmap?n=web;fe;Browser;r0c0&…`](https://datalink.ac/draw/archmap?n=web;fe;Browser;r0c0&n=cdn;cloud;CDN;r0c1&n=gw;be;API%20Gateway;r0c2&n=auth;be;Auth%20Service;r1c1&n=render;be;Chart%20Render;r1c2&n=pg;db;Postgres;r2c1&n=cache;db;Redis;r2c2&e=web;cdn&e=cdn;gw&e=gw;auth&e=gw;render&e=auth;pg&e=render;pg&e=render;cache&b=Data%20Layer;pg%20cache) — a structure, not a table |
| **A calendar** | [`/draw?type=calendar&layout=month&start=2026-11-02&ev=…`](https://datalink.ac/draw?type=calendar&layout=month&start=2026-11-02&ev=2026-11-03%3Bmeeting%3BRequirement%20review%3B14%3A00&ev=2026-11-11%3Breview%3BSpec%20walkthrough%3B10%3A30&scheme=auto) — events with their kinds and times |
| **A slide deck** | `/ppt?data=…` — markdown in, slides out |
| **A map** | [`/draw/echarts?d=…`](https://datalink.ac/draw/echarts?d=%7B%22title%22%3A%7B%22text%22%3A%22US%20states%20%C2%B7%20GDP%20per%20capita%202024%20%C2%B7%20thousand%20USD%22%7D%2C%22visualMap%22%3A%7B%22min%22%3A50%2C%22max%22%3A120%2C%22orient%22%3A%22horizontal%22%2C%22left%22%3A%22center%22%2C%22bottom%22%3A8%2C%22text%22%3A%5B%22high%22%2C%22low%22%5D%2C%22itemWidth%22%3A12%2C%22itemHeight%22%3A200%2C%22inRange%22%3A%7B%22color%22%3A%5B%22%23dbeafe%22%2C%22%237dd3fc%22%2C%22%230ea5e9%22%2C%22%23075985%22%5D%7D%7D%2C%22series%22%3A%5B%7B%22type%22%3A%22map%22%2C%22map%22%3A%22USA%22%2C%22roam%22%3Afalse%2C%22label%22%3A%7B%22show%22%3Atrue%2C%22fontSize%22%3A11%2C%22color%22%3A%22%230f172a%22%7D%2C%22labelLayout%22%3A%7B%22hideOverlap%22%3Atrue%7D%2C%22itemStyle%22%3A%7B%22areaColor%22%3A%22var(--d-grid)%22%2C%22borderColor%22%3A%22%23ffffff%22%2C%22borderWidth%22%3A0.6%7D%2C%22data%22%3A%5B%7B%22name%22%3A%22New%20York%22%2C%22value%22%3A116.9%2C%22label%22%3A%7B%22formatter%22%3A%22NY%5Cn%24117k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Massachusetts%22%2C%22value%22%3A109.1%2C%22label%22%3A%7B%22formatter%22%3A%22MA%5Cn%24109k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Washington%22%2C%22value%22%3A107.6%2C%22label%22%3A%7B%22formatter%22%3A%22WA%5Cn%24108k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Delaware%22%2C%22value%22%3A105.5%2C%22label%22%3A%7B%22formatter%22%3A%22DE%5Cn%24106k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22California%22%2C%22value%22%3A102.7%2C%22label%22%3A%7B%22formatter%22%3A%22CA%5Cn%24103k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22North%20Dakota%22%2C%22value%22%3A100.5%2C%22label%22%3A%7B%22formatter%22%3A%22ND%5Cn%24101k%22%2C%22color%22%3A%22%23ffffff%22%7D%7D%2C%7B%22name%22%3A%22Connecticut%22%2C%22value%22%3A97.1%2C%22label%22%3A%7B%22formatter%22%3A%22CT%5Cn%2497k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Alaska%22%2C%22value%22%3A96.7%2C%22label%22%3A%7B%22formatter%22%3A%22AK%5Cn%2497k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Nebraska%22%2C%22value%22%3A94.4%2C%22label%22%3A%7B%22formatter%22%3A%22NE%5Cn%2494k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Colorado%22%2C%22value%22%3A93.6%2C%22label%22%3A%7B%22formatter%22%3A%22CO%5Cn%2494k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Illinois%22%2C%22value%22%3A90.3%2C%22label%22%3A%7B%22formatter%22%3A%22IL%5Cn%2490k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22New%20Jersey%22%2C%22value%22%3A89%2C%22label%22%3A%7B%22formatter%22%3A%22NJ%5Cn%2489k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Texas%22%2C%22value%22%3A88.5%2C%22label%22%3A%7B%22formatter%22%3A%22TX%5Cn%2489k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Wyoming%22%2C%22value%22%3A87.6%2C%22label%22%3A%7B%22formatter%22%3A%22WY%5Cn%2488k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Minnesota%22%2C%22value%22%3A87.6%2C%22label%22%3A%7B%22formatter%22%3A%22MN%5Cn%2488k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Maryland%22%2C%22value%22%3A87.2%2C%22label%22%3A%7B%22formatter%22%3A%22MD%5Cn%2487k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Virginia%22%2C%22value%22%3A86.5%2C%22label%22%3A%7B%22formatter%22%3A%22VA%5Cn%2487k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Utah%22%2C%22value%22%3A85.5%2C%22label%22%3A%7B%22formatter%22%3A%22UT%5Cn%2486k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22New%20Hampshire%22%2C%22value%22%3A84.7%2C%22label%22%3A%7B%22formatter%22%3A%22NH%5Cn%2485k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22South%20Dakota%22%2C%22value%22%3A83.1%2C%22label%22%3A%7B%22formatter%22%3A%22SD%5Cn%2483k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Nevada%22%2C%22value%22%3A82.3%2C%22label%22%3A%7B%22formatter%22%3A%22NV%5Cn%2482k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Iowa%22%2C%22value%22%3A82%2C%22label%22%3A%7B%22formatter%22%3A%22IA%5Cn%2482k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Hawaii%22%2C%22value%22%3A81.3%2C%22label%22%3A%7B%22formatter%22%3A%22HI%5Cn%2481k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Georgia%22%2C%22value%22%3A78.8%2C%22label%22%3A%7B%22formatter%22%3A%22GA%5Cn%2479k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Ohio%22%2C%22value%22%3A77.7%2C%22label%22%3A%7B%22formatter%22%3A%22OH%5Cn%2478k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Tennessee%22%2C%22value%22%3A77.6%2C%22label%22%3A%7B%22formatter%22%3A%22TN%5Cn%2478k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Kansas%22%2C%22value%22%3A77.6%2C%22label%22%3A%7B%22formatter%22%3A%22KS%5Cn%2478k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Oregon%22%2C%22value%22%3A77.3%2C%22label%22%3A%7B%22formatter%22%3A%22OR%5Cn%2477k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Pennsylvania%22%2C%22value%22%3A77.1%2C%22label%22%3A%7B%22formatter%22%3A%22PA%5Cn%2477k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22North%20Carolina%22%2C%22value%22%3A76.4%2C%22label%22%3A%7B%22formatter%22%3A%22NC%5Cn%2476k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Wisconsin%22%2C%22value%22%3A76%2C%22label%22%3A%7B%22formatter%22%3A%22WI%5Cn%2476k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Arizona%22%2C%22value%22%3A75.2%2C%22label%22%3A%7B%22formatter%22%3A%22AZ%5Cn%2475k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Indiana%22%2C%22value%22%3A75%2C%22label%22%3A%7B%22formatter%22%3A%22IN%5Cn%2475k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Florida%22%2C%22value%22%3A73.9%2C%22label%22%3A%7B%22formatter%22%3A%22FL%5Cn%2474k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Rhode%20Island%22%2C%22value%22%3A72.3%2C%22label%22%3A%7B%22formatter%22%3A%22RI%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Missouri%22%2C%22value%22%3A71.8%2C%22label%22%3A%7B%22formatter%22%3A%22MO%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Louisiana%22%2C%22value%22%3A71.6%2C%22label%22%3A%7B%22formatter%22%3A%22LA%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%2C%7B%22name%22%3A%22Virginia%22%2C%22value%22%3A%22Virginia%22%2C%22value%22%3A71.6%2C%22label%22%3A%7B%22formatter%22%3A%22LA%5Cn%2472k%22%2C%22color%22%3A%22%230f172a%22%7D%7D%5D%7D%5D%7D&w=480&h=340&scheme=light) — a choropleth, with every state in the option |
| **A molecule** | [`/draw/chem?smiles=…`](https://datalink.ac/draw/chem?smiles=CC1(C)S%5BC%40%40H%5D2%5BC%40H%5D(NC(%3DO)Cc3ccccc3)C(%3DO)N2%5BC%40H%5D1C(%3DO)O&w=480&h=340&scheme=light) — a structure, from one SMILES string |
| **Two sides of one question** | [`/draw?type=butterfly&title=Issues%20opened%20vs%20closed&…`](https://datalink.ac/draw?type=butterfly&title=Issues%20opened%20vs%20closed&labels=0-30d,30-60d,60-90d,90-180d,180-360d,360-720d&left=Opened:7,8,2,7,6,7&right=Closed:5,6,2,7,5,6&w=480&h=340&scheme=auto) — opened on the left, closed on the right |
| **A CI/CD pipeline** | [`/draw/arch2?n=src;ext;GitHub;Source%20repo;r0c0&…`](https://datalink.ac/draw/arch2?n=client;ext;Your%20app%20or%20CI;GET%20/draw%3Ftype%3D...;r0c0&n=worker;fe;Edge%20worker;src/index.ts%20%C2%B7%20fetch%20handler;r0c1&n=handler;be;handler.ts;route%20%E2%86%92%20respond;r1c1&n=specs;be;specs/;parse%20%2B%20validate;r2c0&n=store;db;store.ts;short%20links%20%E2%86%92%20Git%20repo;r2c1&n=render;be;render/;draw%20the%20SVG;r3c0&n=styles;be;styles/;skins%20%2B%20families;r4c0&n=png;be;png.ts;resvg%20%E2%86%92%20PNG;r4c2&e=client;worker;HTTPS&e=worker;handler;same%20core&e=handler;specs;spec&e=handler;store;short%20link&e=handler;render;render&e=render;styles;skin&e=render;png;format%3Dpng&b=Edge%20runtime%20%E2%80%94%20Cloudflare%20Worker;worker%20handler%20specs%20store%20render%20styles&title=Inside%20draw&w=560&h=340&scheme=auto) — a system, drawn |
| **A repository's own numbers** | [`/draw/tokei?layout=butterfly&langs=TypeScript:4820:1180:940,…`](https://datalink.ac/draw/tokei?layout=butterfly&langs=TypeScript:4820:1180:940,JavaScript:1687:298:71,Shell:640:120:88,CSS:210:40:35,Markdown:180:760:120,JSON:95:0:12&title=Code%20composition&w=560&h=300&scheme=auto) — code, comments and blanks per language |
| **A benchmark** | [`/draw?type=bar&labels=summary,pages,referrers,browsers&series=DuckDB:117.0,…`](https://datalink.ac/draw?type=bar&labels=summary,pages,referrers,browsers&series=DuckDB:117.0,4.6,7.8,66.3&series=SQLite:3125.7,875.7,863.6,1829.1&title=duckdb%20vs%20sqlite&w=560&h=300&scheme=auto) — two engines, the same queries |
| **A requirement's flow** | [`/draw/mermaid?m=graph%20TD;A[需求]-->B[设计];…`](https://datalink.ac/draw/mermaid?m=graph%20TD%3BA%5B%E9%9C%80%E6%B1%82%5D--%3EB%5B%E8%AE%BE%E8%AE%A1%5D%3BB--%3EC%5B%E5%BC%80%E5%8F%91%5D%3BC--%3ED%5B%E8%AF%84%E5%AE%A1%5D%3BD--%3E%7C%E6%94%B9%7C%20C%3BD--%3EE%5B%E5%8F%91%E5%B8%83%5D&title=%E4%B8%80%E4%B8%AA%E9%9C%80%E6%B1%82%E7%9A%84%E6%B5%81%E7%A8%8B&w=300&h=400&scheme=auto) — the steps, in one link |

And the same diagram in six languages is the same diagram with different
labels: the language is a parameter, not a new picture.

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

## The case: six languages, one source

Six languages mean six chart files, six renders, six commits — and every change
to the data means doing it six times. The repository fills with pictures whose
history nobody can read.

With a datalink the language is a parameter: six charts, six URLs, one line of
text each, generated from the same source by the same agent — and the numbers
stay exact in all of them.

The same thing happens with one language and one README. Today a new number
means a re-render, a re-upload and a binary in the diff that says only
"image changed". With a datalink the agent changes one number in the URL and
commits: the diff shows the number, the picture follows it, and a year later
the history still says what you meant.

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
information; the point here is that the *actual data* sits on the URL, and the
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
- The **blog** — notes on the idea as we go: how datalink works and why it
  works that way, two audiences, URLs as APIs, what a URL gives away, and why
  it is called datalink.

## Related

- [x-cmd/draw](https://github.com/x-cmd/draw) — the chart and diagram renderer
- [x-cmd/ppt](https://github.com/x-cmd/ppt) — the slide deck renderer
- [ClawHub: x-cmd-draw](https://clawhub.ai/edwinjhlee/skills/x-cmd-draw) — the skill for agents

## Contributing

The repository, the build, the deploy and the house style are in
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

Apache-2.0 — see [LICENSE](LICENSE).
