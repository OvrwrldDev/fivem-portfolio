document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    return;
  }

  // For demo: just show a confirmation. 
  // To actually send, use a backend or a service like Formspree, EmailJS, etc.
  status.textContent = "Thank you! Your message has been sent (demo only).";
  this.reset();
});