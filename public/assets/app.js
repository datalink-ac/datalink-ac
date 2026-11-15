/* datalink.ac — the site does three things: remember a colour scheme, copy
   links, and re-render a datalink when you change its parameters. */

(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------------------------------------------------------- theme ---- */
  const THEME_KEY = 'datalink-theme';
  const root = document.documentElement;

  /* --------------------------------------------------------- pictures --- */
  /* The renderer paints the picture, so it has to be told which palette to
     use. `scheme=auto` follows the reader's system; when the reader picks a
     scheme here, the pictures have to be told instead. Pictures that the page
     pinned to one palette keep it. */
  const pictureSync = [];
  const authored = new WeakMap();

  const schemeOf = (url) => {
    const m = String(url || '').match(/[?&]scheme=([^&#]*)/);
    return m ? m[1] : 'auto';
  };

  const withScheme = (url, scheme) => {
    const bare = url.replace(/([?&]scheme=)[^&#]*/, '');
    const join = bare.endsWith('?') || bare.endsWith('&') ? '' : bare.includes('?') ? '&' : '?';
    return bare + join + 'scheme=' + scheme;
  };

  /** Every picture the page points at, and the palette it asked for. */
  const pictureList = () => {
    const list = [];
    $$('img[src*="/draw"]').forEach((el) =>
      list.push({ el, get: () => el.getAttribute('src'), set: (v) => el.setAttribute('src', v) }));
    $$('[data-src*="/draw"]').forEach((el) =>
      list.push({ el, get: () => el.getAttribute('data-src'), set: (v) => el.setAttribute('data-src', v) }));
    $$('[data-url-in]').forEach((el) =>
      list.push({ el, get: () => el.value, set: (v) => { el.value = v; } }));
    return list;
  };

  const syncPictures = () => {
    const t = root.getAttribute('data-theme');
    const target = t === 'light' || t === 'dark' ? t : null;

    pictureList().forEach(({ el, get, set }) => {
      const url = get();
      if (!url) return;
      const want = target || authored.get(el) || 'auto';
      const next = withScheme(url, want);
      if (next === url) return;
      set(next);
      if (el.matches('[data-url-in]')) {
        el.dispatchEvent(new Event('input'));
        el.dispatchEvent(new Event('change'));
      }
    });

    pictureSync.forEach((fn) => fn(target));
  };

  /* remember what the page asked for, so `auto` can go back to it */
  const rememberPictures = () => {
    pictureList().forEach(({ el, get }) => {
      if (!authored.has(el)) authored.set(el, schemeOf(get()));
    });
  };

  const applyTheme = (t) => {
    if (t === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', t);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch (e) {}
  };

  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) applyTheme(saved);
  } catch (e) {}

  $$('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const order = ['auto', 'light', 'dark'];
      let cur = 'auto';
      try {
        cur = localStorage.getItem(THEME_KEY) || 'auto';
      } catch (e) {}
      const next = order[(order.indexOf(cur) + 1) % order.length];
      applyTheme(next);
      syncPictures();
      btn.setAttribute('title', `Colour scheme: ${next}`);
    });
  });

  /* ----------------------------------------------------------- copy ---- */
  const copyText = async (text, btn) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch (e2) {}
      ta.remove();
    }
    if (!btn) return;
    const old = btn.textContent;
    btn.textContent = 'copied';
    btn.classList.add('is-done');
    setTimeout(() => {
      btn.textContent = old;
      btn.classList.remove('is-done');
    }, 1400);
  };

  $$('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-copy');
      const text =
        src === 'self'
          ? (btn.closest('.chip, [data-urlbar]')?.querySelector('input, a')?.value ?? '')
          : src;
      copyText(text, btn);
    });
  });

  /* --------------------------------------------------------- reveal ---- */
  const revealables = $$('.reveal');
  if (revealables.length) {
    if (!('IntersectionObserver' in window)) {
      revealables.forEach((el) => el.classList.add('is-in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
      );
      revealables.forEach((el) => io.observe(el));
    }
  }

  /* -------------------------------------------------------- datalink --- */

  /** Rough vision-token cost: an image is tiled, ~1 token per 750 px². */
  const imageTokens = (w, h) => Math.round((w * h) / 750);
  /** Rough text-token cost: ~4 characters per token. */
  const textTokens = (s) => Math.round(s.length / 4);

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  /* The renderer puts its palette in `:root`. Dropped into the page as it is,
     that would repaint the page too — so the palette belongs to the picture. */
  const inlineSvg = (text) => text.replace(/:root\{/g, 'svg{');

  /** The link, with the numbers inside it lit up. */
  const linkHtml = (url) => {
    const u = new URL(url, location.origin);
    const q = u.search ? '?' + u.search.slice(1) : '';
    const qs = q
      .split('&')
      .map((pair) => {
        const i = pair.indexOf('=');
        if (i < 0) return esc(pair);
        const key = pair.slice(0, i);
        const val = esc(pair.slice(i + 1)).replace(/(\d+(?:[.,]\d+)*)/g, '<b class="num">$1</b>');
        return `<i>${esc(key)}</i>=${val}`;
      })
      .join('&');
    return `<b>${esc(u.host)}${esc(u.pathname)}</b><i>${qs}</i>`;
  };

  // Every picture is a link to the explorer, where it can be changed by hand.
  const EXPLORE = 'https://www.x-cmd.com/draw/explore';
  const exploreUrl = (path) => EXPLORE + path.replace(/^\/draw/, '');

  const svgSize = (svgText) => {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
    const el = doc.documentElement;
    const num = (v) => parseFloat(v) || 0;
    const w = num(el.getAttribute('width')) || num(el.getAttribute('viewBox')?.split(/\s+/)[2]) || 700;
    const h = num(el.getAttribute('height')) || num(el.getAttribute('viewBox')?.split(/\s+/)[3]) || 450;
    return { w, h };
  };

  /* ------------------------------------- hero: one link, many pictures --- */
  const hero = $('[data-hero]');
  if (hero) {
    const img = $('[data-hero-img]', hero);
    const link = $('[data-hero-link]', hero);
    const hostOut = $('[data-hero-host]', hero);
    const paramsOut = $('[data-hero-params]', hero);
    const copyBtn = $('[data-hero-copy]', hero);
    const items = $$('[data-hero-item]', hero);

    /* the palette: the page's, unless the page has none and the picture pinned one */
    const schemeFor = (item) => {
      const t = root.getAttribute('data-theme');
      if (t === 'light' || t === 'dark') return t;
      return item.getAttribute('data-scheme') || 'auto';
    };

    const show = (item) => {
      if (!item) return;
      const src = withScheme(item.getAttribute('data-src'), schemeFor(item));
      /* the chip shows the data link — the rendering params (size, palette) are not part of it */
      const clean = item.getAttribute('data-url') || src;
      const [path, query] = clean.split('?');
      img.src = src;
      img.alt = item.getAttribute('data-alt') || '';
      link.href = item.getAttribute('data-href') || '#';
      hostOut.textContent = location.host + path;
      const q = query ? '?' + query : '';
      /* the map's link is enormous — show the head of it, copy gives the whole thing */
      paramsOut.innerHTML =
        q.length > 170 ? esc(q.slice(0, 170)) + '\u2026' : q.replace(/&/g, '&amp;&#8203;');
      copyBtn.setAttribute('data-copy', location.origin + clean);
      items.forEach((i) => i.classList.toggle('is-on', i === item));
    };

    let timer = null;
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    const start = (ms) => {
      stop();
      timer = setInterval(() => {
        const idx = items.findIndex((i) => i.classList.contains('is-on'));
        show(items[(idx + 1) % items.length]);
      }, ms);
    };

    items.forEach((item) =>
      item.addEventListener('click', () => {
        show(item);
        start(7000);            /* a click buys some quiet time */
      }),
    );

    show(items[0]);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        (entries) => entries.forEach((e) => (e.isIntersecting ? start(4200) : stop())),
        { threshold: 0.25 },
      ).observe(hero);
    } else {
      start(4200);
    }

    /* the page's palette changed — repaint the picture that is on screen */
    pictureSync.push(() => {
      const cur = items.find((i) => i.classList.contains('is-on')) || items[0];
      show(cur);
    });
  }

  const demo = $('[data-demo]');
  if (demo) {
    const urlIn = $('[data-url-in]', demo);
    const render = $('[data-render]', demo);
    const meter = $('[data-meter]', demo);
    const fields = $$('[data-f]', demo);
    let seq = 0;

    const currentPath = () => {
      const u = new URL(urlIn.value, location.origin);
      return u.pathname + u.search;
    };

    const setParams = (patch) => {
      const u = new URL(urlIn.value, location.origin);
      for (const [k, v] of Object.entries(patch)) {
        if (v === '' || v == null) u.searchParams.delete(k);
        else u.searchParams.set(k, v);
      }
      u.searchParams.sort();
      urlIn.value = u.pathname + u.search;
    };

    const syncFieldsFromUrl = () => {
      const u = new URL(urlIn.value, location.origin);
      fields.forEach((f) => {
        const k = f.getAttribute('data-f');
        if (u.searchParams.has(k)) f.value = u.searchParams.get(k);
      });
    };

    const showError = (msg) => {
      render.innerHTML = `<p class="small" style="color:var(--amber);margin:0">${esc(msg)}</p>`;
    };

    const renderLink = async () => {
      const my = ++seq;
      const path = currentPath();
      const abs = location.origin + path;

      const out = $('[data-url-out]', demo);
      if (out) out.innerHTML = linkHtml(abs);
      const linkOut = $('[data-link-out]', demo);
      if (linkOut) linkOut.innerHTML = linkHtml(abs);

      let svgText = '';
      try {
        const res = await fetch(path, { headers: { accept: 'image/svg+xml,*/*' } });
        svgText = await res.text();
        if (my !== seq) return;
        if (!res.ok) {
          showError(svgText.slice(0, 200) || `renderer said ${res.status}`);
        } else {
          render.innerHTML = '';
          const a = document.createElement('a');
          a.href = exploreUrl(path);
          a.target = '_blank';
          a.rel = 'noopener';
          a.innerHTML = inlineSvg(svgText);
          render.appendChild(a);
        }
      } catch (e) {
        if (my === seq) showError('could not reach the renderer');
      }

      // What an AI reads is the link — the numbers are inside it. The picture is
      // what the same thing costs when it arrives as an image.
      // The same numbers, two carriers: the rendered picture (SVG markup, which
      // an agent has to read as text) and the link that holds them.
      const pic = svgText ? Math.round(svgText.length / 3) : 0;
      const dat = textTokens(abs);
      if (meter) {
        const max = Math.max(pic, dat, 1);
        meter.innerHTML = `
          <div class="meter-row">
            <div>
              <div class="meter-label">the picture, as SVG markup</div>
              <div class="meter-bar"><div class="meter-fill is-pic" style="width:${(pic / max) * 100}%"></div></div>
            </div>
            <div class="meter-val">≈ ${pic}</div>
          </div>
          <div class="meter-row">
            <div>
              <div class="meter-label">the link, with the numbers in it</div>
              <div class="meter-bar"><div class="meter-fill is-data" style="width:${(dat / max) * 100}%"></div></div>
            </div>
            <div class="meter-val">≈ ${dat}</div>
          </div>
          <p class="meter-verdict">${pic ? `≈ ${Math.max(1, Math.round(pic / Math.max(dat, 1)))}× fewer tokens — and the agent can read it, not only look at it` : 'the numbers, right there in the link'}</p>`;
      }
    };

    fields.forEach((f) => {
      const ev = f.tagName === 'SELECT' ? 'change' : 'input';
      f.addEventListener(ev, () => {
        const patch = {};
        patch[f.getAttribute('data-f')] = f.value;
        setParams(patch);
        renderLink();
      });
    });

    urlIn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        syncFieldsFromUrl();
        renderLink();
      }
    });
    urlIn.addEventListener('change', () => {
      syncFieldsFromUrl();
      renderLink();
    });

    renderLink();
  }

  /* ---------------------------------------------------- the url bar --- */
  /** Paint a URL as coloured parts: scheme, host, path, keys, values, numbers. */
  const paintUrl = (raw) => {
    let u;
    try {
      u = new URL(raw, location.origin);
    } catch (e) {
      return esc(raw);
    }
    const scheme = esc(u.protocol.replace(':', '')) + '://';
    const host = esc(u.host);
    const path = esc(u.pathname);
    let qs = '';
    u.searchParams.forEach((value, key) => {
      const val = esc(value).replace(/(\d+(?:[.,]\d+)*)/g, '<b class="num">$1</b>');
      qs += `${qs ? '&amp;' : '?'}<span class="k">${esc(key)}</span>=<span class="v">${val}</span>`;
    });
    return `<span class="scheme">${scheme}</span><span class="host">${host}</span><span class="path">${path}</span><span class="qs">${qs}</span>`;
  };

  $$('[data-urlbar]').forEach((bar) => {
    const input = $('[data-url-in]', bar);
    const hl = $('[data-urlbar-hl]', bar);
    if (!input || !hl) return;
    const paint = () => {
      hl.innerHTML = paintUrl(input.value);
      hl.style.transform = `translateX(${-input.scrollLeft}px)`;
    };
    input.addEventListener('input', paint);
    input.addEventListener('scroll', paint);
    paint();
  });

  /* ------------------------------------------- one topic, many languages --- */
  $$('[data-topic]').forEach((topic) => {
    const img = $('[data-topic-img]', topic);
    const link = $('[data-topic-link]', topic);
    const tabs = $$('[data-topic-tab]', topic);
    const auto = topic.dataset.carousel !== undefined;

    const show = (tab) => {
      if (!tab) return;
      if (img) {
        img.src = tab.dataset.src || '';
        img.alt = tab.dataset.alt || '';
      }
      if (link) link.href = tab.dataset.href || '';
      tabs.forEach((t) => t.classList.toggle('is-on', t === tab));
    };

    let timer = null;
    const tick = () => {
      const idx = tabs.findIndex((t) => t.classList.contains('is-on'));
      show(tabs[(idx + 1) % tabs.length]);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    const start = (ms) => {
      stop();
      if (auto) timer = setInterval(tick, ms);
    };

    tabs.forEach((tab) =>
      tab.addEventListener('click', () => {
        show(tab);
        start(6000);          // a click buys some quiet time
      }),
    );

    if (auto) {
      // only rotate while the section is on screen
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(
          (entries) => entries.forEach((e) => (e.isIntersecting ? start(3200) : stop())),
          { threshold: 0.25 },
        ).observe(topic);
      } else {
        start(3200);
      }
    }
  });

  /* ------------------------------------------------------------ tabs --- */
  $$('[data-tabs]').forEach((group) => {
    const tabs = $$('[role="tab"]', group);
    const panes = $$('[data-pane]', group);
    const show = (key) => {
      tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.key === key)));
      panes.forEach((p) => (p.hidden = p.dataset.pane !== key));
    };
    tabs.forEach((t) =>
      t.addEventListener('click', () => {
        show(t.dataset.key);
        const pane = panes.find((p) => p.dataset.pane === t.dataset.key);
        if (pane && pane.dataset.url) loadPane(pane);
      }),
    );
    const loadPane = async (pane) => {
      const holder = pane.querySelector('[data-pane-render]');
      const frame = pane.querySelector('iframe');
      const pic = pane.querySelector('[data-pane-img]');
      const url = pane.dataset.url;
      if (frame) {
        frame.src = url;
        return;
      }
      if (pic) {
        pic.src = url;
        return;
      }
      if (!holder || holder.dataset.loaded === url) return;
      try {
        const res = await fetch(url, { headers: { accept: 'image/svg+xml,*/*' } });
        const text = await res.text();
        if (!res.ok) {
          holder.innerHTML = `<p class="small" style="color:var(--amber);margin:0">${esc(text.slice(0, 160))}</p>`;
        } else if (url.startsWith('/draw')) {
          holder.innerHTML = '';
          const a = document.createElement('a');
          a.href = exploreUrl(url);
          a.target = '_blank';
          a.rel = 'noopener';
          a.innerHTML = inlineSvg(text);
          holder.appendChild(a);
        } else {
          holder.innerHTML = inlineSvg(text);
        }
        holder.dataset.loaded = url;
      } catch (e) {
        holder.innerHTML = '<p class="small" style="color:var(--amber);margin:0">could not reach the renderer</p>';
      }
    };
    /* remember the palette each pane asked for */
    panes.forEach((p) => {
      if (p.dataset.url) authored.set(p, schemeOf(p.dataset.url));
    });

    pictureSync.push((target) => {
      let dirty = false;
      panes.forEach((p) => {
        if (!p.dataset.url || !p.dataset.url.includes('/draw')) return;
        const want = target || authored.get(p) || 'auto';
        const next = withScheme(p.dataset.url, want);
        if (next !== p.dataset.url) {
          p.dataset.url = next;
          const holder = p.querySelector('[data-pane-render]');
          if (holder) {
            holder.dataset.loaded = '';
            holder.innerHTML = '';
          }
          dirty = true;
        }
      });
      if (!dirty) return;
      const visible = panes.find((p) => !p.hidden);
      if (visible) loadPane(visible);
    });

    const first = tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
    if (first) {
      show(first.dataset.key);
      const pane = panes.find((p) => p.dataset.pane === first.dataset.key);
      if (pane) loadPane(pane);
    }
  });

  /* the panes register late, so remember and give them the scheme once more */
  rememberPictures();
  syncPictures();
})();
