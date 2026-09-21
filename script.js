document.addEventListener('DOMContentLoaded', () => {
    // 1. Notification Banner Close Action
    const closeBannerBtn = document.getElementById('closeBanner');
    const topBanner = document.getElementById('topBanner');

    if (closeBannerBtn && topBanner) {
        closeBannerBtn.addEventListener('click', () => {
            topBanner.style.display = 'none';
        });
    }

    // 2. Dark/Light Theme Toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            themeToggleBtn.textContent = targetTheme === 'dark' ? '☀️' : '🌙';
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
        });
    }

    // 3. Mobile Navigation Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 4. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('messageError').textContent = '';
            document.getElementById('formSuccess').textContent = '';

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name) {
                document.getElementById('nameError').textContent = 'Name is required.';
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Enter a valid email.';
                isValid = false;
            }

            if (message.length < 5) {
                document.getElementById('messageError').textContent = 'Message must be at least 5 characters.';
                isValid = false;
            }

            if (isValid) {
                document.getElementById('formSuccess').textContent = 'Message sent successfully!';
                contactForm.reset();
            }
        });
    }
});