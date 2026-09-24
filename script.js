/* ==========================================================================
   DYNAMIC CONFIGURATION (All variables editable)
   ========================================================================== */
const CONFIG = {
    personal: {
        name: "Md. Amdadul Islam",
        titleRoles: ["Junior Developer", "Junior Networking Engineer"],
        phone: "01537586283",
        email: "mdamdadulislam140@gmail.com",
        location: "Tejgaon, Dhaka-1215",
        bio: "I am a final‑year Computer Science and Engineering student at Southeast University set to graduate in 2027. I love networking and IT infrastructure. I am learning CCNA concepts, the OSI/TCP‑IP model and IP subnetting. I also dabble in web development with HTML5 and CSS3. I am looking for internship or entry‑level opportunities, in Network Engineering, System Administration or IT Infrastructure.",
        
        aboutTitle: "Architecting Networks & Building Smart Web Solutions",
        aboutDesc: `<p class="mb-3">I am a CSE student at Southeast University (Graduating 2027) passionate about network infrastructure and modern web engineering. I focus on bridging hardware infrastructure with software logic to build scalable, secure, and reliable digital systems.</p>
        <p>With expertise in CCNA concepts, routing protocols, and full-stack development, I solve complex infrastructure challenges and engineer web applications. I am seeking opportunities as a Network Engineer, System Administrator, or Web Developer.</p>`,
        
        profileImage: "suny.jpg", // Replace with your image URL
        cvUrl: "CV.pdf", // Your CV PDF File path
        stats: {
            experience: "Fresher",
            completedProjects: "2+",
            happyClients: "5+"
        }
    },
    
    socials: [
        { icon: "fa-brands fa-github", link: "https://github.com/Amdadul140" },
        { icon: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/md-amdadul-islam-6580933b2" },
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com/share/1CaBxrsPjv/" },
    ],

    // Updated Education & Certifications (Matching exact structure of Image)
    educationAndCertifications: [
        {
            statusBadge: "Expected June 2027",
            institution: "Southeast University",
            title: "B.Sc. in Computer Science & Engineering",
            description: "Currently pursuing B.Sc. in Computer Science & Engineering (11th Semester, CGPA: 2.72 / 4.00). Focusing on networking, system administration, software development, and core computer science fundamentals.",
            tags: ["Networking", "Web Development", "Database Systems", "OSI/TCP-IP", "CCNA"]
        },
        {
            statusBadge: "June 2023",
            institution: "SIT Foundation BD",
            title: "Diploma in Computer Science & ICT",
            description: "Completed comprehensive practical training in web development, computer operations, hardware fundamentals, and system maintenance.",
            tags: ["Practical Web Dev", "System Training", "ICT Fundamentals"]
        },
        {
            statusBadge: "October 2023",
            institution: "UY LAB",
            title: "Professional Digital Marketing",
            description: "Acquired hands-on experience in Search Engine Optimization (SEO), digital content strategy, and online brand management and positioning.",
            tags: ["SEO", "Content Strategy", "Digital Marketing", "Brand Positioning"]
        },
        {
            statusBadge: "In Progress",
            institution: "Cisco / Self-Paced Prep",
            title: "Cisco Certified Network Associate (CCNA)",
            description: "Gaining hands-on expertise in network routing, switching protocols, IP subnetting, and secure device access and administration.",
            tags: ["Routing & Switching", "IP Subnetting", "Network Security", "TCP/IP Protocol"]
        }
    ],

    skills: [
        {
            category: "Networking & Infrastructure",
            icon: "fa-solid fa-network-wired",
            color: "from-blue-500 to-indigo-500",
            tags: ["CCNA", "OSI Model", "TCP/IP", "Routing & Switching", "Subnetting", "Network Troubleshooting"],
            level: "80%"
        },
        {
            category: "Backend Development",
            icon: "fa-solid fa-server",
            color: "from-indigo-500 to-purple-500",
            tags: ["Laravel", "PHP", "MySQL", "Database Architecture", "REST API"],
            level: "90%"
        },
        {
            category: "CMS & Custom Solutions",
            icon: "fa-brands fa-wordpress",
            color: "from-sky-500 to-blue-600",
            tags: ["WordPress", "Custom Themes", "Plugin Development", "WooCommerce"],
            level: "95%"
        },
        {
            category: "Frontend Frameworks & UI",
            icon: "fa-solid fa-code",
            color: "from-cyan-400 to-blue-500",
            tags: ["Tailwind CSS", "Bootstrap 5", "HTML5", "CSS3 / SASS"],
            level: "90%"
        },
        {
            category: "Core Scripting & Logic",
            icon: "fa-brands fa-js",
            color: "from-yellow-400 to-amber-500",
            tags: ["JavaScript", "ES6+", "Async/Fetch API", "DOM Manipulation"],
            level: "85%"
        },
        {
            category: "Database & Systems",
            icon: "fa-solid fa-database",
            color: "from-emerald-400 to-teal-600",
            tags: ["MySQL", "Relational DB", "Query Optimization", "System Admin"],
            level: "80%"
        }
    ],

    experience: [
        {
            company: "Academic & Personal Projects",
            role: "Network & Web Project Trainee",
            duration: "2023 - Present",
            desc: "Configured network topologies, subnetting models, and built custom web portals using modern web stacks."
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
            text: "His expertise in web development and technical problem solving is truly commendable.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        }
    ],

    // APIs Configuration
    telegramBotToken: "YOUR_TELEGRAM_BOT_TOKEN", 
    telegramChatId: "YOUR_TELEGRAM_CHAT_ID",   
    googleScriptUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL", 
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.528373307519!2d90.38883657613523!3d23.76417038817726!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a049d531ef%3A0xb35181b5ff9d4e50!2sTejgaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
};

/* ==========================================================================
   DOM RENDERER & LOGIC
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // Set Current Year
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Render Personal Info
    const navBrand = document.getElementById('nav-brand');
    if (navBrand) navBrand.textContent = CONFIG.personal.name;

    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = CONFIG.personal.name;

    const heroBio = document.getElementById('hero-bio');
    if (heroBio) heroBio.textContent = CONFIG.personal.bio;

    const heroImg = document.getElementById('hero-img');
    if (heroImg) heroImg.src = CONFIG.personal.profileImage;

    // Attach CV Link to Download Button
    const cvBtn = document.getElementById('download-cv-btn');
    if (cvBtn) {
        cvBtn.href = CONFIG.personal.cvUrl;
        cvBtn.setAttribute('download', `${CONFIG.personal.name.replace(/\s+/g, '_')}_CV.pdf`);
    }

    const statExp = document.getElementById('stat-exp');
    if (statExp) statExp.textContent = CONFIG.personal.stats.experience;

    // Render About Title
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = CONFIG.personal.aboutTitle;

    // Render About Description with innerHTML
    const aboutDesc = document.getElementById('about-description');
    if (aboutDesc) aboutDesc.innerHTML = CONFIG.personal.aboutDesc;

    const statProjects = document.getElementById('stat-projects');
    if (statProjects) statProjects.textContent = CONFIG.personal.stats.completedProjects;

    const statClients = document.getElementById('stat-clients');
    if (statClients) statClients.textContent = CONFIG.personal.stats.happyClients || "5+";

    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) contactPhone.textContent = CONFIG.personal.phone;

    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.textContent = CONFIG.personal.email;

    const contactLocation = document.getElementById('contact-location');
    if (contactLocation) contactLocation.textContent = CONFIG.personal.location;

    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.textContent = CONFIG.personal.name;

    const googleMap = document.getElementById('google-map');
    if (googleMap) googleMap.src = CONFIG.mapEmbedUrl;

    // Personal Info Grid
    const personalGrid = document.getElementById('personal-info-grid');
    if (personalGrid) {
        personalGrid.innerHTML = `
            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div class="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm shrink-0">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                    <span class="text-gray-400 text-xs block">Phone</span>
                    <a href="tel:${CONFIG.personal.phone}" class="font-semibold text-white text-sm hover:text-blue-400 transition-colors">${CONFIG.personal.phone}</a>
                </div>
            </div>

            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div class="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-sm shrink-0">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                    <span class="text-gray-400 text-xs block">Email</span>
                    <a href="mailto:${CONFIG.personal.email}" class="font-semibold text-white text-sm hover:text-indigo-400 transition-colors break-all">${CONFIG.personal.email}</a>
                </div>
            </div>

            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div class="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm shrink-0">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                    <span class="text-gray-400 text-xs block">Location</span>
                    <p class="font-semibold text-white text-sm">${CONFIG.personal.location}</p>
                </div>
            </div>

            <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div class="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm shrink-0">
                    <i class="fa-solid fa-briefcase"></i>
                </div>
                <div>
                    <span class="text-gray-400 text-xs block">Status</span>
                    <p class="font-semibold text-emerald-400 text-sm">Available for Hire / Internship</p>
                </div>
            </div>
        `;
    }

    // Render Social Links
    const socialContainer = document.getElementById('hero-socials');
    if (socialContainer) {
        socialContainer.innerHTML = '';
        CONFIG.socials.forEach(s => {
            socialContainer.innerHTML += `
                <a href="${s.link}" target="_blank" class="w-10 h-10 glassmorphism rounded-xl flex items-center justify-center text-gray-300 hover:text-brand hover:border-brand transition-all">
                    <i class="${s.icon}"></i>
                </a>
            `;
        });
    }

    // Render Education & Experience (Timeline Card Design matching image)
    const eduContainer = document.getElementById('education-container');
    if (eduContainer && CONFIG.educationAndCertifications) {
        eduContainer.innerHTML = '';
        CONFIG.educationAndCertifications.forEach(item => {
            // Render Skill/Topic Tags
            const tagsHtml = item.tags ? item.tags.map(tag => 
                `<span class="px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-full border border-slate-700/60">${tag}</span>`
            ).join('') : '';

            eduContainer.innerHTML += `
                <div class="relative group" data-aos="fade-up">
                    <!-- Timeline Left Circle Dot -->
                    <div class="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                    <!-- Card Body -->
                    <div class="p-6 md:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 shadow-xl">
                        
                        <!-- Status Badge + Institution -->
                        <div class="flex items-center gap-3 flex-wrap mb-3">
                            <span class="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                ${item.statusBadge}
                            </span>
                            <span class="text-sm font-medium text-slate-400">
                                ${item.institution}
                            </span>
                        </div>

                        <!-- Title -->
                        <h3 class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                            ${item.title}
                        </h3>

                        <!-- Description -->
                        <p class="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                            ${item.description}
                        </p>

                        <!-- Tags Container -->
                        <div class="flex flex-wrap gap-2">
                            ${tagsHtml}
                        </div>

                    </div>
                </div>
            `;
        });
    }

    // Render Skills (Continuous Moving Marquee + Interactive Cards)
    const skillsContainer = document.getElementById('skills-container');
    const skillsMarquee = document.getElementById('skills-marquee');

    if (CONFIG.skills) {
        // Collect all individual skill tags for the continuous slider
        let allSkills = [];
        CONFIG.skills.forEach(s => {
            if (s.tags) allSkills.push(...s.tags);
        });

        // Duplicate the skills array to create a seamless infinite looping effect
        const duplicatedSkills = [...allSkills, ...allSkills];

        // 1. Render Moving Marquee Items
        if (skillsMarquee) {
            skillsMarquee.innerHTML = duplicatedSkills.map(tag => `
                <div class="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-md group hover:border-blue-500/50 transition-all cursor-pointer shrink-0">
                    <span class="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
                    <span class="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">${tag}</span>
                </div>
            `).join('');
        }

        // 2. Render Skill Category Cards
        if (skillsContainer) {
            skillsContainer.innerHTML = '';
            CONFIG.skills.forEach(skill => {
                const tagsHtml = skill.tags.map(tag => 
                    `<span class="px-3 py-1.5 text-xs font-medium bg-slate-800/90 text-slate-300 rounded-lg border border-slate-700/60 hover:border-blue-500/40 hover:text-white transition-all">${tag}</span>`
                ).join('');

                skillsContainer.innerHTML += `
                    <div class="p-6 md:p-7 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group" data-aos="zoom-in">
                        <div>
                            <!-- Header: Icon, Category & Level -->
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center gap-3.5">
                                    <div class="w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <i class="${skill.icon}"></i>
                                    </div>
                                    <h3 class="font-bold text-white text-lg md:text-xl group-hover:text-blue-400 transition-colors">${skill.category}</h3>
                                </div>
                                <span class="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">${skill.level}</span>
                            </div>
                            
                            <!-- Tags Grid -->
                            <div class="flex flex-wrap gap-2 my-5">
                                ${tagsHtml}
                            </div>
                        </div>

                        <!-- Progress Bar -->
                        <div class="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden mt-2 border border-slate-700/30">
                            <div class="bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 group-hover:brightness-125" style="width: ${skill.level}"></div>
                        </div>
                    </div>
                `;
            });
        }
    }

    // Render Experience
    const expContainer = document.getElementById('experience-container');
    if (expContainer) {
        expContainer.innerHTML = '';
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
    }

    // Render Portfolio
    const portfolioContainer = document.getElementById('portfolio-container');
    if (portfolioContainer) {
        portfolioContainer.innerHTML = '';
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
    }

    // Render Testimonials
    const testContainer = document.getElementById('testimonials-container');
    if (testContainer) {
        testContainer.innerHTML = '';
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
    }

    // Typing Effect Logic
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');

    function typeEffect() {
        if (!typingElement) return;

        const roles = CONFIG.personal.titleRoles || ["Junior Developer"];
        const currentRole = roles[roleIndex].trim();

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
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    typeEffect();

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner animate-spin"></i>`;
            }

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

                if (formStatus) {
                    formStatus.textContent = "Thank you! Your message has been sent successfully.";
                    formStatus.className = "text-center text-sm font-medium mt-2 text-green-400";
                }
                contactForm.reset();
            } catch (error) {
                if (formStatus) {
                    formStatus.textContent = "An error occurred while sending your message. Please try again.";
                    formStatus.className = "text-center text-sm font-medium mt-2 text-red-400";
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>`;
                }
            }
        });
    }
});

/* ==========================================================================
   Dark / Light Theme Toggle Functionality
   ========================================================================== */
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