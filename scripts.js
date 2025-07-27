document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');
  status.textContent = "Sending...";

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem sending your message.";
    }
  } catch (err) {
    status.textContent = "Oops! There was a problem sending your message.";
  }
});
