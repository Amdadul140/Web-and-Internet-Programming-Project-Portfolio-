// Interactive Features: Theme Switcher, Responsive Navigation, Compact Contact Validation, Skill Selection

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark / Light Theme Toggle
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

    // 2. Mobile Responsive Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Compact Contact Form Validation (On index.html)
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
                document.getElementById('nameError').textContent = 'Name required.';
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Invalid email.';
                isValid = false;
            }

            if (message.length < 5) {
                document.getElementById('messageError').textContent = 'Message too short.';
                isValid = false;
            }

            if (isValid) {
                document.getElementById('formSuccess').textContent = 'Sent successfully!';
                contactForm.reset();
            }
        });
    }

    // 4. Auto-Select Skill from URL Parameter
    const regSkillSelect = document.getElementById('regSkill');
    if (regSkillSelect) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedSkill = urlParams.get('skill');
        if (selectedSkill) {
            regSkillSelect.value = selectedSkill;
        }
    }

    // 5. Registration Form Processing & Validation (On register.html)
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
                document.getElementById('regSuccess').textContent = `Registration Successful! Scheduled for ${skill.toUpperCase()} on ${day} at ${time}.`;
                regForm.reset();
            }
        });
    }
});