import { useState, useEffect } from 'react';
import { useLanguage } from '../language/LanguageContext';

export default function Navbar() {
    const { lang, toggleLang, t } = useLanguage();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // 1. Theme Toggle Logic
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    // 2. Scroll Spy & Navbar Background Logic
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Detects section when in center of screen
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // 3. Link Class Helper
    const getLinkClass = (id, isMobile = false) => {
        const base = isMobile
            ? "text-2xl font-bold no-underline transition-all duration-300 "
            : "text-[0.9rem] font-medium transition-all duration-300 no-underline ";

        const active = activeSection === id
            ? "text-[var(--accent)] scale-110"
            : "text-[var(--text2)] hover:text-[var(--accent)]";

        return base + active;
    };

    const navLinks = ['about', 'skills', 'projects', 'contact'];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 px-6 flex items-center justify-between ${isScrolled ? 'navbar-scrolled py-3' : 'py-5'}`}>
                {/* Logo */}
                <div className="font-outfit font-extrabold text-2xl z-[1001]" style={{ color: 'var(--text)' }}>
                    KE<span style={{ color: 'var(--accent)' }}>.</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-9 list-none m-0 p-0">
                    {navLinks.map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} 
                            className={getLinkClass(item)}
                            >
                                {t.nav[item]}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-3 z-[1001]">
                    <button onClick={toggleTheme} className="border rounded-lg px-3 py-1.5 cursor-pointer transition-all hover:border-[var(--accent)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text2)' }}>
                        {theme === 'dark' ? '🌙' : '☀️'}
                    </button>

                    <button
                        onClick={() => toggleLang(lang === 'hu' ? 'en' : 'hu')}
                        className="px-3 py-1 rounded border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                    >
                        {lang === 'hu' ? 'EN' : 'HU'}
                    </button>

                    {/* Hamburger Button */}
                    <button
                        className={`hamburger md:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span className="w-6 h-0.5 bg-[var(--text)] transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-[var(--text)] transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-[var(--text)] transition-all duration-300"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed top-0 left-0 w-full h-screen z-[999] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
                style={{ background: 'var(--bg)', backdropFilter: 'blur(10px)' }}
            >
                {navLinks.map((item) => (
                    <a
                        key={item}
                        href={`#${item}`}
                        onClick={() => setIsMenuOpen(false)}
                        className={getLinkClass(item, true)}
                    >
                        {t.nav[item]}
                    </a>
                ))}
            </div>
        </>
    );
}