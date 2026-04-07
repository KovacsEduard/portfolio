import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../language/LanguageContext';

export default function About() {
    const { lang, toggleLang, t } = useLanguage();
    
    return (
        <section className="py-[100px]" id="about">
            <ScrollReveal>
                <div className="max-w-[1180px] mx-auto px-6">
                    <h2 className="section-title font-outfit font-extrabold mb-12" style={{ color: 'var(--text)' }}>
                        {t.about.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
                        {/* Text & CV */}
                        <div>
                            <p className="text-[0.97rem] mb-5 leading-[1.8]" style={{ color: 'var(--text2)' }}>
                                {t.about.p1}
                            </p>
                            <p className="text-[0.97rem] mb-5 leading-[1.8]" style={{ color: 'var(--text2)' }}>
                                {t.about.p2}
                            </p>
                            <a
                                href={lang === 'hu' ? 'https://canva.link/xny1e72fb00qpho' : 'https://canva.link/1d1jfx663awby9v'}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-2 px-[30px] py-[13px] rounded-[10px] font-outfit font-bold text-[0.9rem] no-underline transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: 'var(--accent)', color: '#020d18', boxShadow: '0 0 24px var(--accent-glow)' }}
                            >
                                {t.about.downloadCV}
                            </a>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>2+</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>{t.about.yearsExperience}</span>
                            </div>

                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>5+</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>{t.about.technologies}</span>
                            </div>

                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>4+</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>{t.about.projects}</span>
                            </div>

                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>1</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>{t.about.liveSite}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
