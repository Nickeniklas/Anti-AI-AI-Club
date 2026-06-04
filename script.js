'use strict';

const form          = document.getElementById('topic-form');
const checkboxError = document.getElementById('checkbox-error');
const submitError   = document.getElementById('submit-error');
const formSuccess   = document.getElementById('form-success');
const submitBtn     = form.querySelector('button[type="submit"]');
const formHeading   = document.querySelector('.form-heading');
const formSubtext   = document.querySelector('.form-subtext');

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
      form.hidden = true;
      formHeading.hidden = true;
      formSubtext.hidden = true;
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
