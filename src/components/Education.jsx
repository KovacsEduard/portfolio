import ScrollReveal from './ScrollReveal';

export default function Education() {
    return (
        <section className="py-[100px]" id="education">
            <ScrollReveal>
                <div className="max-w-[1180px] mx-auto px-6">
                    <h2 className="section-title font-outfit font-extrabold mb-12" style={{ color: 'var(--text)' }}>
                        Education
                    </h2>
                    
                    <div className="timeline relative pl-7">
                        <div className="relative mb-10">

                            {/* The Content Card */}
                            <div className="border rounded-[14px] px-7 py-6 transition-colors duration-300 hover:border-[var(--border-hover)]"
                                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                
                                <div className="font-outfit text-[0.8rem] font-bold tracking-wider mb-1.5" style={{ color: 'var(--accent)' }}>
                                    2023 – Present
                                </div>
                                
                                <h3 className="font-outfit font-bold text-[1.1rem] mb-1" style={{ color: 'var(--text)' }}>
                                    MSzC Gépészeti Technikum, Mátészalka
                                </h3>
                                
                                <p className="text-[0.9rem]" style={{ color: 'var(--text2)' }}>
                                    Software Developer & Tester Technician
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}