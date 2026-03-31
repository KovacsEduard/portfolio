import ScrollReveal from './ScrollReveal';

export default function About() {
    return (
        <section className="py-[100px]" id="about">
            <ScrollReveal>
                <div className="max-w-[1180px] mx-auto px-6">
                    <h2 className="section-title font-outfit font-extrabold mb-12" style={{ color: 'var(--text)' }}>
                        About Me
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
                        {/* Text & CV */}
                        <div>
                            <p className="text-[0.97rem] mb-5 leading-[1.8]" style={{ color: 'var(--text2)' }}>
                                I have been working in software development for over two years at the MSzC Gépészeti Technikum,
                                where I am studying to become a software developer and tester. Through school and personal projects,
                                I have gained experience with Python, C#, HTML, CSS, JS, and SQL.
                            </p>
                            <p className="text-[0.97rem] mb-5 leading-[1.8]" style={{ color: 'var(--text2)' }}>
                                My strengths lie in frontend development, logical problem-solving, and debugging. My personal projects
                                include the waterservice.sk business website and this continuously evolving portfolio. My goal is to
                                pursue a career as a software engineer and keep growing professionally.
                            </p>
                            <a
                                href="https://www.canva.com/design/DAGH0oXyWxY/cFSq2AzvlI-cy0NrqIl8ZA/view"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-2 px-[30px] py-[13px] rounded-[10px] font-outfit font-bold text-[0.9rem] no-underline transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: 'var(--accent)', color: '#020d18', boxShadow: '0 0 24px var(--accent-glow)' }}
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>2+</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>Years Experience</span>
                            </div>

                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>5+</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>Technologies</span>
                            </div>

                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>4+</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>Projects</span>
                            </div>

                            <div className="border rounded-[14px] p-6 flex flex-col gap-1.5 transition-all duration-300 hover:shadow-lg hover:border-[var(--border-hover)]" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                <span className="font-outfit font-extrabold text-[2rem] leading-none" style={{ color: 'var(--accent)' }}>1</span>
                                <span className="text-[0.82rem] font-medium" style={{ color: 'var(--text2)' }}>Live Site</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}