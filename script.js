/* ==========================================================================
   DYNAMIC CONFIGURATION (All variables editable)
   ========================================================================== */
const CONFIG = {
    personal: {
        name: "Md. Amdadul Islam",
        titleRoles: ["Developer"],
        phone: "01537586283",
        email: "mdamdadulislam140@gmail.com",
        location: "Tejgaon, Dhaka-1215",
        bio: "I am a professional web developer specializing in WordPress and Laravel frameworks, dedicated to crafting modern, secure, and high-performance websites and web applications.",
        aboutTitle: "Turning Concepts Into Digital Excellence",
        aboutDesc: "With over 3+ years of experience, I build custom web applications, bespoke e-commerce platforms, custom themes, and web portals for global clients. My top priorities are clean code, fast loading speeds, and delivering a premium user experience.",
        profileImage: "suny.jpg", // Replace with your image URL
        stats: {
            experience: "Fresher",
            completedProjects: "2+",
        }
    },
    
    socials: [
        { icon: "fa-brands fa-github", link: "https://github.com/Amdadul140" },
        { icon: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/md-amdadul-islam-6580933b2/" },
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com/share/1CaBxrsPjv/" },
    ],

    skills: [
        { name: "Laravel / PHP", level: "90%" },
        { name: "WordPress / Custom Theme & Plugin", level: "95%" },
        { name: "Tailwind CSS / Bootstrap", level: "90%" },
        { name: "JavaScript / ES6+", level: "85%" },
        { name: "MySQL / Database Management", level: "80%" },
        { name: "RESTful API Development", level: "85%" }
    ],

    experience: [
        {
            company: "Tech Solutions Ltd.",
            role: "Senior Web Developer",
            duration: "2023 - Present",
            desc: "Architecting and developing custom web portals and enterprise applications using Laravel and WordPress."
        },
        {
            company: "Creative IT Agency",
            role: "WordPress Specialist",
            duration: "2021 - 2023",
            desc: "Designed custom WordPress themes, plugins, and implemented site performance and security optimizations."
        }
    ],

    portfolio: [
        {
            title: "E-Commerce Web Application",
            category: "Laravel",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "Custom News Portal Theme",
            category: "WordPress",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        },
        {
            title: "Corporate Landing Page",
            category: "Tailwind CSS",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com"
        }
    ],

    testimonials: [
        {
            name: "Rafsan Ahmed",
            designation: "CEO, BD Tech",
            text: "Md. Amdadul Islam's work is outstanding! He delivered our complex e-commerce application on time with exceptional quality.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Sabrina Rahman",
            designation: "Founder, Fashion House",
            text: "His expertise in WordPress customization and website speed optimization is truly commendable.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
    ],

    // APIs Configuration
    telegramBotToken: "YOUR_TELEGRAM_BOT_TOKEN", // Enter Telegram Bot Token
    telegramChatId: "YOUR_TELEGRAM_CHAT_ID",   // Enter Telegram Chat ID
    googleScriptUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL", // Enter Google Apps Script URL
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.528373307519!2d90.38883657613523!3d23.76417038817726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a049d531ef%3A0xb35181b5ff9d4e50!2sTejgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
};

/* ==========================================================================
   DOM RENDERER & LOGIC
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation Library
    AOS.init({ duration: 800, once: true });

    // Set Current Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Render Personal Info
    document.getElementById('nav-brand').textContent = CONFIG.personal.name;
    document.getElementById('hero-name').textContent = CONFIG.personal.name;
    document.getElementById('hero-bio').textContent = CONFIG.personal.bio;
    document.getElementById('hero-img').src = CONFIG.personal.profileImage;
    document.getElementById('stat-exp').textContent = CONFIG.personal.stats.experience;
    document.getElementById('about-title').textContent = CONFIG.personal.aboutTitle;
    document.getElementById('about-description').textContent = CONFIG.personal.aboutDesc;
    document.getElementById('stat-projects').textContent = CONFIG.personal.stats.completedProjects;
    document.getElementById('stat-clients').textContent = CONFIG.personal.stats.happyClients;

    document.getElementById('contact-phone').textContent = CONFIG.personal.phone;
    document.getElementById('contact-email').textContent = CONFIG.personal.email;
    document.getElementById('contact-location').textContent = CONFIG.personal.location;
    document.getElementById('footer-name').textContent = CONFIG.personal.name;
    document.getElementById('google-map').src = CONFIG.mapEmbedUrl;

    // Personal Info Grid
    const personalGrid = document.getElementById('personal-info-grid');
    personalGrid.innerHTML = `
        <div><span class="text-gray-400 text-sm">Phone:</span> <p class="font-medium text-white">${CONFIG.personal.phone}</p></div>
        <div><span class="text-gray-400 text-sm">Email:</span> <p class="font-medium text-white">${CONFIG.personal.email}</p></div>
        <div><span class="text-gray-400 text-sm">Location:</span> <p class="font-medium text-white">${CONFIG.personal.location}</p></div>
        <div><span class="text-gray-400 text-sm">Status:</span> <p class="font-medium text-brand">Available for Hire</p></div>
    `;

    // Render Social Links
    const socialContainer = document.getElementById('hero-socials');
    CONFIG.socials.forEach(s => {
        socialContainer.innerHTML += `
            <a href="${s.link}" target="_blank" class="w-10 h-10 glassmorphism rounded-xl flex items-center justify-center text-gray-300 hover:text-brand hover:border-brand transition-all">
                <i class="${s.icon}"></i>
            </a>
        `;
    });

    // Render Skills
    const skillsContainer = document.getElementById('skills-container');
    CONFIG.skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="glassmorphism-card p-5 rounded-2xl" data-aos="zoom-in">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-semibold text-white">${skill.name}</span>
                    <span class="text-brand text-sm font-bold">${skill.level}</span>
                </div>
                <div class="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <div class="bg-brand h-2.5 rounded-full" style="width: ${skill.level}"></div>
                </div>
            </div>
        `;
    });

    // Render Experience
    const expContainer = document.getElementById('experience-container');
    CONFIG.experience.forEach(exp => {
        expContainer.innerHTML += `
            <div class="relative pl-8" data-aos="fade-up">
                <div class="absolute -left-[11px] top-1.5 w-5 h-5 bg-brand rounded-full border-4 border-gray-900"></div>
                <div class="glassmorphism-card p-6 rounded-2xl">
                    <span class="text-xs text-brand font-semibold uppercase tracking-wider">${exp.duration}</span>
                    <h3 class="text-xl font-bold font-heading text-white mt-1">${exp.role}</h3>
                    <h4 class="text-sm text-gray-400 font-medium mb-3">${exp.company}</h4>
                    <p class="text-gray-300 text-sm">${exp.desc}</p>
                </div>
            </div>
        `;
    });

    // Render Portfolio
    const portfolioContainer = document.getElementById('portfolio-container');
    CONFIG.portfolio.forEach(item => {
        portfolioContainer.innerHTML += `
            <div class="glassmorphism-card rounded-2xl overflow-hidden group" data-aos="fade-up">
                <div class="portfolio-img-container">
                    <img src="${item.image}" alt="${item.title}" class="portfolio-img">
                </div>
                <div class="p-6">
                    <span class="text-xs text-brand font-semibold uppercase tracking-wider">${item.category}</span>
                    <h3 class="text-xl font-bold font-heading text-white mt-1 mb-4">${item.title}</h3>
                    <div class="flex space-x-4">
                        <a href="${item.liveUrl}" target="_blank" class="flex-1 gradient-btn py-2 text-center rounded-xl text-sm font-semibold text-white">
                            Live Demo <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                        </a>
                        <a href="${item.githubUrl}" target="_blank" class="w-10 h-10 glassmorphism rounded-xl flex items-center justify-center text-white hover:text-brand transition-colors">
                            <i class="fa-brands fa-github text-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    // Render Testimonials
    const testContainer = document.getElementById('testimonials-container');
    CONFIG.testimonials.forEach(t => {
        testContainer.innerHTML += `
            <div class="glassmorphism-card p-6 rounded-2xl flex flex-col justify-between" data-aos="fade-up">
                <p class="text-gray-300 italic mb-6">"${t.text}"</p>
                <div class="flex items-center space-x-4">
                    <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover border-2 border-brand">
                    <div>
                        <h4 class="text-white font-bold text-sm">${t.name}</h4>
                        <p class="text-xs text-gray-400">${t.designation}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // Typing Effect Logic
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');

    function typeEffect() {
        const currentRole = CONFIG.personal.titleRoles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % CONFIG.personal.titleRoles.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    typeEffect();

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner animate-spin"></i>`;

        const name = document.getElementById('form-name').value;
        const phone = document.getElementById('form-phone').value;
        const email = document.getElementById('form-email').value;
        const message = document.getElementById('form-message').value;

        const telegramMsg = `<b>New Portfolio Message!</b>\n\n<b>Name:</b> ${name}\n<b>Phone:</b> ${phone}\n<b>Email:</b> ${email}\n<b>Message:</b> ${message}`;

        try {
            // Telegram Bot Integration
            if (CONFIG.telegramBotToken !== "YOUR_TELEGRAM_BOT_TOKEN") {
                await fetch(`https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: CONFIG.telegramChatId,
                        text: telegramMsg,
                        parse_mode: 'HTML'
                    })
                });
            }

            // Google Sheet Script Integration
            if (CONFIG.googleScriptUrl !== "YOUR_GOOGLE_APPS_SCRIPT_URL") {
                await fetch(CONFIG.googleScriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, phone, email, message })
                });
            }

            formStatus.textContent = "Thank you! Your message has been sent successfully.";
            formStatus.className = "text-center text-sm font-medium mt-2 text-green-400";
            contactForm.reset();
        } catch (error) {
            formStatus.textContent = "An error occurred while sending your message. Please try again.";
            formStatus.className = "text-center text-sm font-medium mt-2 text-red-400";
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>`;
        }
    });
});
// ==========================================
// Dark / Light Theme Toggle
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const themeToggleIconMobile = document.getElementById('theme-toggle-icon-mobile');

// Check saved user preference from LocalStorage
const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcons('light');
} else {
    updateThemeIcons('dark');
}

function updateThemeIcons(theme) {
    const isLight = theme === 'light';
    const iconClass = isLight ? 'fa-solid fa-moon text-indigo-600' : 'fa-solid fa-sun text-yellow-400';
    
    if (themeToggleIcon) themeToggleIcon.className = iconClass;
    if (themeToggleIconMobile) themeToggleIconMobile.className = iconClass;
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const newTheme = isLight ? 'light' : 'dark';
    
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcons(newTheme);
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

if (themeToggleMobileBtn) {
    themeToggleMobileBtn.addEventListener('click', toggleTheme);
}