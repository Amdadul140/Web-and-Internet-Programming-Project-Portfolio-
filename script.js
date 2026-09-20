// Interactive Feature: Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

// Check local storage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = 'dark';

  if (currentTheme === 'dark') {
    newTheme = 'light';
    themeToggleBtn.textContent = '🌙';
  } else {
    themeToggleBtn.textContent = '☀️';
  }

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Interactive Feature: Form Submission Alert
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});