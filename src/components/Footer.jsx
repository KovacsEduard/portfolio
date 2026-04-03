import { useLanguage } from '../language/LanguageContext';

export default function Footer() {
    const { lang, toggleLang, t } = useLanguage();
    
    return (
        <footer 
            className="py-8 px-6 text-center text-[0.82rem] border-t" 
            style={{ 
                color: 'var(--text2)',
                borderColor: 'var(--border)', 
                background: 'var(--bg)' 
            }}
        >
            <p>
                &copy; {new Date().getFullYear()} {t.footer.copiright}
            </p>
        </footer>
    );
}