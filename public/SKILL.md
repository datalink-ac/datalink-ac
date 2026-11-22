---
name: datalink
description: Draw charts and diagrams as links — a datalink is a URL whose parameters ARE the data. Use whenever a README, issue, pull request, document, blog post or chat message needs a picture and an agent is doing the writing — write the data into a URL, embed it with markdown image syntax; readers see the chart, and any agent can read the exact numbers back from the link itself.
---

# datalink — pictures as links

A datalink is a URL whose parameters are the complete data for a picture.
GET it → an SVG picture. Change a parameter → the picture changes. Anyone
holding the link holds the numbers — no OCR, no "the chart shows…".

Always build on the hosted renderer: `https://www.x-cmd.com/draw`
(no account, no key). CLI (`npx @x-cmd/draw`) and npm (`@x-cmd/draw`)
accept the same parameters.

## The shape

```
https://www.x-cmd.com/draw?<kind>&<data…>
```

- Charts — `/draw?type=pie|bar|hbar|line|area|radar|gauge|scatter|combo|sankey|qr|quadrant|compass|butterfly|ladder&labels=…&values=…`
- Structure — `/draw/archmap|arch2|arch3d|globe|sphere|cloud|seq|uc|dataflow|lifecycle|erd|class|chord?n=<id>;<type>;<label>[;<sub>][;<pos>]&e=<from>;<to>[;<label>]&b=<group>;<members>`
- Text diagrams — `/draw/mermaid|gantt|gantt2|mindmap?m=<source>`
- Open charting — `/draw/echarts?d=<ECharts option JSON>`
- Source as picture — `/draw/nomnoml|wavedrom|abcjs|vexflow|jianpu?d=<source>`
- Chemistry — `/draw/chem?smiles=<SMILES>`
- Code composition — `/draw/tokei?langs=…`
- Short links — POST the spec to `/draw?type=…` → embed the returned `/draw/c/<hash>`;
  hang context on `&_ctx=<what this picture is>`

Common parameters: `title=`, `unit=`, `scheme=auto|light|dark`, `w=`, `h=`,
`v=<renderer version>`. Annotations ride in the link too: `_oval` `_text`
`_hl` `_note` `_arrow` `_path`.

Embed it as a markdown image, and point the link at the interactive editor:

```md
[![chart](https://www.x-cmd.com/draw?type=pie&labels=A,B&values=3,2)](https://www.x-cmd.com/draw/explore?type=pie&labels=A,B&values=3,2)
```

## Corpora

- Examples — a large page of URL ↔ rendered pairs: https://datalink.ac/examples
- Spec — invariants and the agent contract: https://datalink.ac/spec
- Host-side reference: https://x-cmd.com/draw/llms.txt

## Rules for agents

- The numbers live in the link: read them from the URL. Do not OCR the rendered image.
- Never round, convert units, or reorder silently.
- The link is public by construction — private data does not belong in it.
- Past a platform's length wall (GitHub ~4096 chars)? POST the spec, embed the
  short link, and put the context in `_ctx=`.
