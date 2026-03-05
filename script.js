/* ─── TRANSLATIONS ───────────────────────────────────────── */
const translations = {
    nav_about:       "About",
    nav_skills:      "Skills",
    nav_projects:    "Projects",
    nav_contact:     "Contact",
    hero_subtitle:   "Software Developer & Tester",
    hero_desc:       "Building clean, functional software with attention to detail — from frontend interfaces to backend logic and quality testing.",
    hero_cta_projects: "View Projects",
    hero_cta_contact:  "Get in Touch",
    about_title:     "About Me",
    about_p1:        "I have been working in software development for over two years at the Mechanical Technical School, where I am studying to become a software developer and tester. Through school and personal projects, I have gained experience with Python, C#, HTML, CSS, and SQL.",
    about_p2:        "My strengths lie in frontend development, logical problem-solving, and debugging. My personal projects include the waterservice.sk business website and this continuously evolving portfolio. My goal is to pursue a career as a software engineer and keep growing professionally.",
    about_cv:        "Download CV",
    stat_years:      "Years Experience",
    stat_tech:       "Technologies",
    stat_projects:   "Projects",
    stat_live:       "Live Site",
    skills_title:    "Tech Stack",
    skill_testing:   "Software Testing",
    skill_debug:     "Debugging",
    skill_frontend:  "Frontend Dev",
    projects_title:  "Projects",
    edu_title:       "Education",
    edu_present:     "Present",
    edu_school:      "MSzC Gépészeti Technikum",
    edu_degree:      "Software Developer & Tester Technician",
    contact_title:   "Contact",
    contact_sub:     "Have a project in mind or want to work together? Feel free to reach out.",
    contact_email:   "Email",
    contact_phone:   "Phone",
    footer_rights:   "All rights reserved.",
    proj_view:       "View Website",
    proj_soon:       "Coming Soon",
    proj_wip:        "Work in Progress",
};

/* ─── PROJECTS DATA ──────────────────────────────────────── */
const projects = [
    {
        title:       "WaterService",
        desc_en:     "Full-featured business website for WaterService, showcasing company services, work history and contact information.",
        desc_hu:     "Teljes funkcionalitású vállalkozási weboldal a WaterService számára, bemutatva a cég szolgáltatásait, munkáit és elérhetőségeit.",
        image:       "img/waterservice.png",
        tag_en:      "Live Project",
        tag_hu:      "Élő projekt",
        liveUrl:     "https://waterservice.sk/",
        placeholder: false
    },
    {
        title:       "Gépészeti munkáim",
        desc_en:     "School projects completed during my studies, used to develop and demonstrate my technical skills.",
        desc_hu:     "Iskola közben elkészített projektjeim, melyekkel fejlesztettem és bemutattam a tudásomat.",
        image:       "img/webalapok.png",
        tag_en:      "School Projects",
        tag_hu:      "Iskolai projektek",
        liveUrl:     "https://sites.google.com/view/webalapok-eduard/projekt-11-szf",
        placeholder: false
    }
];

/* ─── LANGUAGE ───────────────────────────────────────────── */
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) el.textContent = translations[key];
    });
    renderProjects();
}

/* ─── THEME ──────────────────────────────────────────────── */
function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefers ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    document.getElementById('theme-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
}

/* ─── MOBILE MENU ────────────────────────────────────────── */
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn  = document.getElementById('hamburger');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
}

/* ─── STICKY NAV ─────────────────────────────────────────── */
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
function initScrollReveal() {
    const elements = document.querySelectorAll('.section-fade');

    if (!('IntersectionObserver' in window)) {
        // Fallback: just show everything
        elements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
}

/* ─── RENDER PROJECTS ────────────────────────────────────── */
function renderProjects() {
    const t = translations;
    const grid = document.getElementById('projectsGrid');

    grid.innerHTML = projects.map(p => {
        const desc = p.desc_en;
        const tag  = p.tag_en;
        const imgHtml = p.image
            ? `<img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'project-placeholder\\'>${p.icon || '💻'}</div>'">`
            : `<div class="project-placeholder">${p.icon || '💻'}</div>`;
        const btnHtml = p.liveUrl
            ? `<a href="${p.liveUrl}" class="project-btn" target="_blank" rel="noopener">${t.proj_view}</a>`
            : `<span class="project-btn project-btn--placeholder">${p.placeholder ? t.proj_soon : t.proj_wip}</span>`;

        return `
        <article class="project-card">
            <div class="project-img-wrap">${imgHtml}</div>
            <div class="project-content">
                <span class="project-tag">${tag}</span>
                <h3>${p.title}</h3>
                <p>${desc}</p>
                ${btnHtml}
            </div>
        </article>`;
    }).join('');
}

/* ─── INIT ───────────────────────────────────────────────── */
initTheme();
applyTranslations();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
    initScrollReveal();
}