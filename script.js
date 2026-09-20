// Interactive Features: Theme Switcher, Responsive Menu, Contact Validation, and Skill Registration Processing

document.addEventListener('DOMContentLoaded', () => {
    // 1. Light/Dark Theme Switcher (Stored in LocalStorage)
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

    // 2. Mobile Navigation Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Contact Form Validation (On index.html)
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
                document.getElementById('emailError').textContent = 'Enter a valid email address.';
                isValid = false;
            }

            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
                isValid = false;
            }

            if (isValid) {
                document.getElementById('formSuccess').textContent = 'Thank you! Your message has been sent successfully.';
                contactForm.reset();
            }
        });
    }

    // 4. Auto-Select Skill in Registration Form from URL Query Parameter
    const regSkillSelect = document.getElementById('regSkill');
    if (regSkillSelect) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedSkill = urlParams.get('skill');
        if (selectedSkill) {
            regSkillSelect.value = selectedSkill;
        }
    }

    // 5. Registration Form Validation & Submission Handling (On register.html)
    const regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            ['regNameError', 'regEmailError', 'regSkillError', 'regDayError', 'regTimeError'].forEach(id => {
                document.getElementById(id).textContent = '';
            });
            document.getElementById('regSuccess').textContent = '';

            const name = document.getElementById('regName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const skill = document.getElementById('regSkill').value;
            const day = document.getElementById('regDay').value;
            const time = document.getElementById('regTime').value;

            if (!name) {
                document.getElementById('regNameError').textContent = 'Name is required.';
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('regEmailError').textContent = 'Enter a valid email address.';
                isValid = false;
            }

            if (!skill) {
                document.getElementById('regSkillError').textContent = 'Please select a skill.';
                isValid = false;
            }

            if (!day) {
                document.getElementById('regDayError').textContent = 'Please select a day.';
                isValid = false;
            }

            if (!time) {
                document.getElementById('regTimeError').textContent = 'Please select a time slot.';
                isValid = false;
            }

            if (isValid) {
                document.getElementById('regSuccess').textContent = `Registration Successful! You are scheduled for ${skill.toUpperCase()} on ${day} at ${time}.`;
                regForm.reset();
            }
        });
    }
});