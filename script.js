/* ─── TRANSLATIONS ───────────────────────────────────────── */
const translations = {
    en: {
        nav_about:       "About",
        nav_skills:      "Skills",
        nav_projects:    "Projects",
        nav_contact:     "Contact",
        hero_subtitle:   "Software Developer & Tester",
        hero_desc:       "Building clean, functional software with attention to detail — from frontend interfaces to backend logic and quality testing.",
        hero_cta_projects: "View Projects",
        hero_cta_contact:  "Get in Touch",
        about_label:     "About",
        about_title:     "About Me",
        about_p1:        "I have been working in software development for over two years at the Mechanical Technical School, where I am studying to become a software developer and tester. Through school and personal projects, I have gained experience with Python, C#, HTML, CSS, and SQL.",
        about_p2:        "My strengths lie in frontend development, logical problem-solving, and debugging. My personal projects include the waterservice.sk business website and this continuously evolving portfolio. My goal is to pursue a career as a software engineer and keep growing professionally.",
        about_cv:        "Download CV",
        stat_years:      "Years Experience",
        stat_tech:       "Technologies",
        stat_projects:   "Projects",
        stat_live:       "Live Site",
        skills_label:    "WHAT I KNOW",
        skills_title:    "Tech Stack",
        skill_testing:   "Software Testing",
        skill_debug:     "Debugging",
        skill_frontend:  "Frontend Dev",
        projects_label:  "",
        projects_title:  "Projects",
        edu_label:       "WHERE I STUDIED",
        edu_title:       "Education",
        edu_present:     "Present",
        edu_school:      "Mechanical Technical School",
        edu_degree:      "Software Developer & Tester Technician",
        contact_label:   "GET IN TOUCH",
        contact_title:   "Contact",
        contact_sub:     "Have a project in mind or want to work together? Feel free to reach out.",
        contact_email:   "Email",
        contact_phone:   "Phone",
        footer_rights:   "All rights reserved.",
        proj_view:       "View Website",
        proj_soon:       "Coming Soon",
        proj_wip:        "Work in Progress",
    },
    hu: {
        nav_about:       "Rólam",
        nav_skills:      "Készségek",
        nav_projects:    "Projektek",
        nav_contact:     "Kapcsolat",
        hero_subtitle:   "Szoftverfejlesztő és -tesztelő",
        hero_desc:       "Tiszta, funkcionális szoftverek fejlesztése, részletekre figyelve — frontend felületektől a backend logikáig és minőségtesztelésig.",
        hero_cta_projects: "Projektek megtekintése",
        hero_cta_contact:  "Lépj kapcsolatba",
        about_label:     "Rólam",
        about_title:     "Rólam",
        about_p1:        "Több mint két éve foglalkozom szoftverfejlesztéssel a Gépészeti Technikumban, ahol szoftverfejlesztő és -tesztelő technikusnak tanulok. Iskolai és egyéni projektekben szerzett tapasztalataim során Python, C#, HTML, CSS és SQL technológiákkal dolgoztam.",
        about_p2:        "Erősségeim a frontend fejlesztés, a logikai problémamegoldás és a hibakeresés. Egyéni projektjeim közé tartozik a waterservice.sk szolgáltatói weboldal és a folyamatosan bővített bemutatkozó oldalam. Célom, hogy mérnök informatikusként folytassam a pályámat és tovább fejlesszem szakmai tudásomat.",
        about_cv:        "Önéletrajz letöltése",
        stat_years:      "Év tapasztalat",
        stat_tech:       "Technológia",
        stat_projects:   "Projekt",
        stat_live:       "Élő oldal",
        skills_label:    "MIT TUDOK",
        skills_title:    "Technológiák",
        skill_testing:   "Szoftvertesztelés",
        skill_debug:     "Hibakeresés",
        skill_frontend:  "Frontend fejlesztés",
        projects_label:  "",
        projects_title:  "Projektjeim",
        edu_label:       "HOL TANULTAM",
        edu_title:       "Tanulmányok",
        edu_present:     "Jelen",
        edu_school:      "Gépészeti Technikum",
        edu_degree:      "Szoftverfejlesztő és -tesztelő technikus",
        contact_label:   "KAPCSOLAT",
        contact_title:   "Kapcsolat",
        contact_sub:     "Van egy projekted vagy együtt szeretnél dolgozni? Írj bátran!",
        contact_email:   "E-mail",
        contact_phone:   "Telefon",
        footer_rights:   "Minden jog fenntartva.",
        proj_view:       "Weboldal megtekintése",
        proj_soon:       "Hamarosan",
        proj_wip:        "Fejlesztés alatt",
    }
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
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.getElementById('lang-label').textContent = lang === 'en' ? 'HU' : 'EN';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    renderProjects();
}

function toggleLang() {
    applyLang(currentLang === 'en' ? 'hu' : 'en');
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
    const lang = currentLang;
    const t = translations[lang];
    const grid = document.getElementById('projectsGrid');

    grid.innerHTML = projects.map(p => {
        const desc = lang === 'en' ? p.desc_en : p.desc_hu;
        const tag  = lang === 'en' ? p.tag_en  : p.tag_hu;
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
applyLang(currentLang);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
    initScrollReveal();
}