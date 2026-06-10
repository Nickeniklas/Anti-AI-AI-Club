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
