'use strict';

const form = document.getElementById('topic-form');
const checkboxError = document.getElementById('checkbox-error');
const formSuccess = document.getElementById('form-success');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const checked = form.querySelectorAll('input[name="topics"]:checked');
  if (checked.length === 0) {
    checkboxError.hidden = false;
    checkboxError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }
  checkboxError.hidden = true;

  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      form.hidden = true;
      formSuccess.hidden = false;
    } else {
      alert('Something went wrong — please try again.');
    }
  } catch {
    alert('Something went wrong — please check your connection and try again.');
  }
});

form.addEventListener('change', () => {
  const checked = form.querySelectorAll('input[name="topics"]:checked');
  if (checked.length > 0) checkboxError.hidden = true;
});
