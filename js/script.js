// script.js

// Form submission confirmation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  form.reset(); // Optional: clear the form after submission
});

