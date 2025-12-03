// Theme detection and toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
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

// Initialize theme on page load
initTheme();

// Sample projects data
const projects = [
    {
        title: "WaterService",
        description: "Teljes funkcionalitású vállalkozás adatait, munkáit tartalmazó wablap <b>waterservice</b> számára.",
        image: "img/waterservice.png",
        liveUrl: "https://waterservice.sk/"
    },
    {
        title: "Gépészeti munkáim",
        description: "Iskola közben elkészített projektjeim, melyekkel fejlesztettem a tudásomat.",
        image: "img/webalapok.png",
        liveUrl: "https://sites.google.com/view/webalapok-eduard/projekt-11-szf"
    }
];

// Render projects
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projects.map(project => `
        <article class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.liveUrl}" class="project-btn" target="_blank">Weboldal Megtekintése</a>
            </div>
        </article>
    `).join('');
}

renderProjects();
