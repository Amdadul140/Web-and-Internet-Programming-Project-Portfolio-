document.addEventListener('DOMContentLoaded', () => {
    // Banner Close
    const closeBannerBtn = document.getElementById('closeBanner');
    const topBanner = document.getElementById('topBanner');
    if (closeBannerBtn && topBanner) {
        closeBannerBtn.addEventListener('click', () => { topBanner.style.display = 'none'; });
    }

    // Theme Toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            let targetTheme = currentTheme === 'light' ? 'dark' : 'light';
            themeToggleBtn.textContent = targetTheme === 'light' ? '☀️' : '🌙';
            document.body.setAttribute('data-theme', targetTheme);
        });
    }

    // Mobile Nav Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => { navLinks.classList.toggle('active'); });
    }

    // Voice Recognition for Data Science Commands
    const micBtn = document.getElementById('micBtn');
    const aiInput = document.getElementById('aiInput');
    const sendBtn = document.getElementById('sendBtn');

    if (micBtn && aiInput) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;

            micBtn.addEventListener('click', () => {
                recognition.start();
                aiInput.placeholder = "Listening for query...";
                micBtn.style.color = "#38bdf8";
            });

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                aiInput.value = transcript;
                aiInput.placeholder = "Query data pipelines or models...";
                micBtn.style.color = "inherit";
                handleAISearch(transcript);
            };

            recognition.onend = () => { micBtn.style.color = "inherit"; };
        }
    }

    if (sendBtn && aiInput) {
        sendBtn.addEventListener('click', () => {
            if (aiInput.value.trim() !== '') handleAISearch(aiInput.value);
        });

        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && aiInput.value.trim() !== '') handleAISearch(aiInput.value);
        });
    }

    // Contact Form Validation
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

            if (!name) { document.getElementById('nameError').textContent = 'Name is required.'; isValid = false; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById('emailError').textContent = 'Valid email required.'; isValid = false; }
            if (message.length < 5) { document.getElementById('messageError').textContent = 'Message too short.'; isValid = false; }

            if (isValid) {
                document.getElementById('formSuccess').textContent = 'Project submission sent to SynapseAI team!';
                contactForm.reset();
            }
        });
    }
});

// Data Science Execution Response Simulator
function handleAISearch(query) {
    const aiResponse = document.getElementById('aiResponse');
    if (!aiResponse) return;

    aiResponse.style.display = "block";
    aiResponse.innerHTML = `<p style="color: var(--subtext-color);">⚡ Executing Data Pipeline on SynapseAI Core: <em>"${query}"</em>...</p>`;

    setTimeout(() => {
        let response = "SynapseAI core offers end-to-end predictive modeling, automated feature pipelines, and deep statistical intelligence.";
        const q = query.toLowerCase();

        if (q.includes("eda") || q.includes("report") || q.includes("exploratory")) {
            response = "Automated EDA Generated: Analyzed 250,000 records. Identified 3 core statistical clusters with 0 missing values.";
        } else if (q.includes("feature") || q.includes("pipeline") || q.includes("engineering")) {
            response = "Feature Pipeline Executed: Engineered 14 new polynomial and aggregate features in Feature Store.";
        } else if (q.includes("xgboost") || q.includes("train") || q.includes("model")) {
            response = "XGBoost Training Complete: Final accuracy 98.6%, ROC-AUC 0.99. Model saved to registry v3.1.";
        }

        aiResponse.innerHTML = `
            <div style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 10px; border: 1px solid var(--card-border);">
                <strong style="color: #38bdf8;">SynapseAI Studio Output:</strong>
                <p style="margin-top: 0.3rem;">${response}</p>
            </div>
        `;
    }, 600);
}

function fillPrompt(text) {
    const aiInput = document.getElementById('aiInput');
    if (aiInput) {
        aiInput.value = text;
        handleAISearch(text);
    }
}