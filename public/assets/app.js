/* datalink.ac — the site does three things: remember a colour scheme, copy
   links, and re-render a datalink when you change its parameters. */

(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------------------------------------------------------- theme ---- */
  const THEME_KEY = 'datalink-theme';
  const root = document.documentElement;

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
      const text = src === 'self' ? (btn.closest('.chip')?.querySelector('input, a')?.value ?? '') : src;
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

  const svgSize = (svgText) => {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
    const el = doc.documentElement;
    const num = (v) => parseFloat(v) || 0;
    const w = num(el.getAttribute('width')) || num(el.getAttribute('viewBox')?.split(/\s+/)[2]) || 700;
    const h = num(el.getAttribute('height')) || num(el.getAttribute('viewBox')?.split(/\s+/)[3]) || 450;
    return { w, h };
  };

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
          render.innerHTML = svgText;
        }
      } catch (e) {
        if (my === seq) showError('could not reach the renderer');
      }

      // What an AI reads is the link — the numbers are inside it. The picture is
      // what the same thing costs when it arrives as an image.
      const { w, h } = svgText ? svgSize(svgText) : { w: 0, h: 0 };
      const pic = w && h ? imageTokens(w, h) : 0;
      const dat = textTokens(abs);
      if (meter) {
        const max = Math.max(pic, dat, 1);
        meter.innerHTML = `
          <div class="meter-row">
            <div>
              <div class="meter-label">the picture, as an image</div>
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
          <p class="meter-verdict">${pic ? `≈ ${Math.max(1, Math.round(pic / Math.max(dat, 1)))}× fewer tokens — and the agent can read it, not only look at it` : 'the numbers, right there in the link'}</p>
          <p class="tiny">Estimate: an image is tiled into vision tokens (≈ width × height ÷ 750); a link is tokenised as text (≈ 4 characters per token). The arithmetic is an approximation; the ratio is the point.</p>`;
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
      const url = pane.dataset.url;
      if (frame) {
        frame.src = url;
        return;
      }
      if (!holder || holder.dataset.loaded === url) return;
      try {
        const res = await fetch(url, { headers: { accept: 'image/svg+xml,*/*' } });
        const text = await res.text();
        if (!res.ok) {
          holder.innerHTML = `<p class="small" style="color:var(--amber);margin:0">${esc(text.slice(0, 160))}</p>`;
        } else {
          holder.innerHTML = text;
        }
        holder.dataset.loaded = url;
      } catch (e) {
        holder.innerHTML = '<p class="small" style="color:var(--amber);margin:0">could not reach the renderer</p>';
      }
    };
    const first = tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
    if (first) {
      show(first.dataset.key);
      const pane = panes.find((p) => p.dataset.pane === first.dataset.key);
      if (pane) loadPane(pane);
    }
  });
})();
