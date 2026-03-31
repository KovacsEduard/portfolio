import ScrollReveal from "./ScrollReveal";

export default function Contact() {
    return (
        <section id="contact" className="py-[100px]" style={{ background: 'var(--bg2)' }}>
            <ScrollReveal>
                <div className="max-w-[1180px] mx-auto px-6">
                    <h2 className="section-title font-outfit font-extrabold mb-4" style={{ color: 'var(--text)' }}>
                        Contact
                    </h2>
                    <p className="text-[0.97rem] mb-10" style={{ color: 'var(--text2)' }}>
                        Have a project in mind or want to work together? Feel free to reach out.
                    </p>

                    {/* Using the grid class from your index.css */}
                    <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Email Card */}
                        <a href="mailto:kovaceduard7@gmail.com" 
                           className="no-underline flex items-center gap-[18px] border rounded-[14px] px-6 py-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg" 
                           style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                            <div className="w-10 h-10 flex items-center justify-center border rounded-[10px] flex-shrink-0" 
                                 style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text2)' }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <div className="text-[0.75rem] font-outfit font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--accent)' }}>Email</div>
                                <div className="text-[0.88rem] break-all" style={{ color: 'var(--text2)' }}>kovaceduard7@gmail.com</div>
                            </div>
                        </a>

                        {/* Phone Card */}
                        <a href="tel:+36204311776" 
                           className="no-underline flex items-center gap-[18px] border rounded-[14px] px-6 py-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg" 
                           style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                            <div className="w-10 h-10 flex items-center justify-center border rounded-[10px] flex-shrink-0" 
                                 style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text2)' }}>
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <div className="text-[0.75rem] font-outfit font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--accent)' }}>Phone</div>
                                <div className="text-[0.88rem]" style={{ color: 'var(--text2)' }}>+36 20 431 1776</div>
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a href="https://www.linkedin.com/in/edu%C3%A1rd-kov%C3%A1cs-11b5593b5" 
                           target="_blank" 
                           rel="noreferrer"
                           className="no-underline flex items-center gap-[18px] border rounded-[14px] px-6 py-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg" 
                           style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                            <div className="w-10 h-10 flex items-center justify-center border rounded-[10px] flex-shrink-0" 
                                 style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text2)' }}>
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <div>
                                <div className="text-[0.75rem] font-outfit font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--accent)' }}>LinkedIn</div>
                                <div className="text-[0.88rem]" style={{ color: 'var(--text2)' }}>Kovács Eduárd</div>
                            </div>
                        </a>

                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}