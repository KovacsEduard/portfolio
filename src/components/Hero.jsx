import profileImg from '../assets/profil.jpg';

export default function Hero() {
  return (
    <section 
      className="min-h-screen pt-[128px] pb-20 px-6 flex items-center justify-center gap-[60px] max-w-[1180px] mx-auto relative flex-wrap" 
      id="home"
    >
      {/* Background Decor */}
      <div className="hero-grid-bg"></div>
      <div 
        className="fixed top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(0,200,255,0.12), transparent 70%)' }}
      ></div>

      {/* Text Content */}
      <div className="hero-content flex-1 min-w-[280px] max-w-[580px]">
        <h1 className="hero-title font-outfit font-extrabold mb-4" style={{ color: 'var(--text)' }}>
          Kovács<br />
          <span style={{ color: 'var(--accent)' }}>Eduárd</span>
        </h1>
        
        <p className="hero-subtitle font-normal mb-[18px]" style={{ color: 'var(--text2)' }}>
          Software Developer & Tester
        </p>
        
        <p className="text-[0.97rem] max-w-[460px] mb-9 leading-[1.75]" style={{ color: 'var(--text2)' }}>
          Building clean, functional software with attention to detail — from frontend interfaces to backend logic and quality testing.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-3.5 flex-wrap mb-9">
          <a 
            href="#projects" 
            className="inline-block px-[30px] py-[13px] rounded-[10px] font-outfit font-bold text-[0.9rem] no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#020d18', boxShadow: '0 0 24px var(--accent-glow)' }}
          >
            View Projects
          </a>
          
          <a 
            href="#contact" 
            className="inline-block px-[30px] py-[13px] rounded-[10px] font-outfit font-semibold text-[0.9rem] border no-underline transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)]"
            style={{ background: 'transparent', borderColor: 'var(--border-hover)', color: 'var(--text)' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a 
            href="https://github.com/KovacsEduard" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center border rounded-[10px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)]"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text2)' }}
          >
            <i className="fab fa-github"></i>
          </a>

          <a 
            href="https://www.linkedin.com/in/eduárd-kovács-11b5593b5" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center border rounded-[10px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)]"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text2)' }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a 
            href="mailto:kovaceduard7@gmail.com" 
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center border rounded-[10px] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--accent)] hover:border-[var(--accent)]"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text2)' }}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Profile Image Wrap */}
      <div className="hero-image-wrap relative flex-shrink-0">
        <div 
          className="absolute rounded-[32px] border z-0"
          style={{ inset: '-10px', borderColor: 'var(--border)', background: 'linear-gradient(135deg, rgba(0,200,255,0.06), transparent)' }}
        ></div>
        
        <img 
          src={profileImg} 
          alt="Kovács Eduárd" 
          loading="lazy"
          className="w-[280px] h-[340px] object-cover object-top rounded-[22px] block relative z-10"
          style={{ border: '1.5px solid var(--border-hover)', boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px var(--border)' }}
          onError={(e) => { 
            e.currentTarget.style.background = 'var(--accent)'; 
            e.currentTarget.src = ''; 
          }}
        />
      </div>
    </section>
  );
}