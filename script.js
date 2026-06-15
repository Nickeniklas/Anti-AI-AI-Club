'use strict';

(function () {
  /* Theme toggle (default dark; persisted in localStorage) */
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const setLabel = (isLight) => {
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    };
    setLabel(document.documentElement.classList.contains('theme-light'));

    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('theme-light');
      try {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
      } catch (e) {}
      setLabel(isLight);
    });
  }

  /* Nav background once the page scrolls */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('stuck', window.scrollY > 4);
    }, { passive: true });
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          ro.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });

    reveals.forEach((el) => ro.observe(el));
    setTimeout(() => reveals.forEach((el) => el.classList.add('in')), 600);
  }

  /* $1.82T counter animation */
  const counter = document.getElementById('counter');
  if (counter) {
    let hasRun = false;
    const runCounter = () => {
      if (hasRun) return;
      hasRun = true;

      const duration = 1800;
      const interval = 16;
      const steps = Math.round(duration / interval);
      const end = 1.82;
      let step = 0;

      counter.textContent = '$0.00T';
      const timer = setInterval(() => {
        step++;
        const progress = Math.min(step / steps, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        counter.textContent = '$' + (end * ease).toFixed(2) + 'T';
        if (progress >= 1) clearInterval(timer);
      }, interval);
    };

    const co = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounter();
        co.disconnect();
      }
    }, { threshold: 0.1 });
    co.observe(counter);
    setTimeout(runCounter, 500);
  }
})();

/* Topic form */
const form = document.getElementById('form');
if (form) {
  const checkboxError = document.getElementById('checkbox-error');
  const submitError = document.getElementById('submit-error');
  const formSuccess = document.getElementById('form-success');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const checked = form.querySelectorAll('input[name="topics"]:checked');
    if (checked.length === 0) {
      checkboxError.hidden = false;
      checkboxError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    checkboxError.hidden = true;
    submitError.hidden = true;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        Array.from(form.children).forEach((child) => {
          if (child.id !== 'form-success') child.hidden = true;
        });
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        submitError.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send it in';
      }
    } catch {
      submitError.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send it in';
    }
  });

  form.addEventListener('change', () => {
    if (form.querySelectorAll('input[name="topics"]:checked').length > 0) {
      checkboxError.hidden = true;
    }
  });
}

/* AI-exposure treemap — front-page teaser.
   Compact, observed-metric-only version of the ai-exposure.html chart. Cell
   fills (coral→green) are light pastels, so dark cell labels read on both
   themes; only the gaps/tooltip track the paper tokens and repaint on toggle. */
(function () {
  const el = document.getElementById('exposure-teaser-chart');
  if (!el || !window.echarts || !window.AI_EXPOSURE_DATA) return;

  const DATA = window.AI_EXPOSURE_DATA;
  const CORAL = [255, 144, 99];
  const GREEN = [202, 239, 140];

  const ratioToColor = (ratio) => {
    const t = Math.min(ratio / DATA.maxRatio, 1);
    const mix = (a, b) => Math.round(a + t * (b - a));
    return `rgb(${mix(CORAL[0], GREEN[0])},${mix(CORAL[1], GREEN[1])},${mix(CORAL[2], GREEN[2])})`;
  };

  const treeData = DATA.categories.map((cat) => {
    const color = ratioToColor(cat.ratio);
    return {
      name: cat.name,
      value: cat.observed,
      itemStyle: { color },
      extra: { observed: cat.observed, soc: cat.soc },
      children: cat.children.map((occ) => ({
        name: occ.name,
        value: Math.max(occ.observed, 0.05),
        itemStyle: { color },
        extra: { observed: occ.observed, parentName: cat.name },
      })),
    };
  });

  // Theme-dependent colours, re-read from the live paper tokens on each repaint.
  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  let theme = {};
  const readTheme = () => {
    theme = {
      gap: css('--bg') || '#131210',
      surface: css('--surface') || '#1e1d1a',
      rule: css('--rule2') || 'rgba(244,241,234,.18)',
      ink: css('--ink') || '#f4f1ea',
      ink2: css('--ink2') || '#9c9890',
    };
  };
  readTheme();

  const tooltipFormatter = (info) => {
    const d = info.data || {};
    const x = d.extra;
    // The treemap's synthetic root node (the top "total" bar) has no extra — skip it.
    if (!x || x.observed === undefined) return '';
    const head = `font-family:Poppins,sans-serif;font-size:12px;color:${theme.ink}`;
    if (x.parentName) {
      return `<div style="${head}"><strong>${d.name}</strong>` +
        `<br><span style="color:${theme.ink2}">Observed exposure: <strong>${x.observed.toFixed(1)}%</strong></span></div>`;
    }
    return `<div style="${head}"><strong style="font-size:13px">${d.name}</strong>` +
      `<br><span style="color:${theme.ink2}">Observed exposure: <strong>${x.observed}%</strong></span>` +
      `<br><span style="color:${theme.ink2};font-size:10px">Tap to see individual occupations</span></div>`;
  };

  const buildOption = () => ({
    tooltip: {
      show: true,
      confine: true,
      backgroundColor: theme.surface,
      borderColor: theme.rule,
      borderWidth: 1,
      padding: [10, 14],
      extraCssText: 'box-shadow:0 8px 24px rgba(0,0,0,0.28);border-radius:6px;',
      formatter: tooltipFormatter,
    },
    series: [{
      type: 'treemap',
      roam: false,
      nodeClick: 'zoomToNode',
      top: 0,
      left: 0,
      right: 0,
      bottom: 28,
      breadcrumb: {
        show: true,
        bottom: 2,
        height: 24,
        emptyItemWidth: 22,
        itemStyle: {
          color: '#f4c430',
          borderWidth: 0,
          shadowBlur: 0,
          textStyle: { color: '#1a1916', fontFamily: 'Spline Sans Mono, monospace', fontSize: 10, fontWeight: '500' },
        },
      },
      visibleMin: 200,
      itemStyle: { borderColor: theme.gap, borderWidth: 2, gapWidth: 2 },
      emphasis: { itemStyle: { borderColor: theme.ink, borderWidth: 2 } },
      label: {
        show: true,
        fontFamily: 'Poppins, sans-serif',
        fontSize: 11,
        color: '#1a1916',
        padding: [5, 7],
        overflow: 'truncate',
        formatter: (p) => p.name + '\n' + (p.value || 0).toFixed(1) + '%',
      },
      upperLabel: {
        show: true,
        height: 24,
        fontFamily: 'Poppins, sans-serif',
        fontSize: 11,
        fontWeight: '500',
        color: '#1a1916',
        backgroundColor: 'rgba(255,255,255,0.72)',
        padding: [0, 8],
      },
      levels: [
        { itemStyle: { borderWidth: 4, gapWidth: 4, borderColor: theme.gap } },
        { itemStyle: { borderWidth: 2, gapWidth: 2, borderColor: theme.gap }, label: { fontSize: 10 } },
      ],
      data: treeData,
    }],
  });

  const chart = echarts.init(el);
  chart.setOption(buildOption());
  window.addEventListener('resize', () => chart.resize());

  // Repaint gaps/tooltip when the light/dark toggle flips the <html> class.
  const mo = new MutationObserver(() => { readTheme(); chart.setOption(buildOption()); });
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
})();
