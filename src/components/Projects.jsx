import ScrollReveal from "./ScrollReveal";

export default function Projects() {
    const projects = [
        {
            title: "WaterService",
            desc: "Full-featured business website for WaterService, showcasing company services, work history and contact information.",
            image: "src/assets/waterservice.png",
            tag: "Live Project",
            liveUrl: "https://waterservice.sk/",
        },
        {
            title: "Gépészeti munkáim",
            desc: "School projects completed during my studies, used to develop and demonstrate my technical skills.",
            image: "src/assets/webalapok.png",
            tag: "School Projects",
            liveUrl: "https://sites.google.com/view/webalapok-eduard/projekt-11-szf",
        }
    ];

    return (
        <section id="projects" className="py-[100px]">
            <ScrollReveal>
                <div className="max-w-[1180px] mx-auto px-6">
                    <h2 className="section-title font-outfit font-extrabold mb-12" style={{ color: 'var(--text)' }}>
                        Projects
                    </h2>
                    
                    {/* The Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className="group border rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                            >
                                {/* Project Image Area */}
                                <div className="relative h-[240px] overflow-hidden border-b" style={{ borderColor: 'var(--border)' }}>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider"
                                         style={{ background: 'rgba(0,0,0,0.6)', color: 'var(--accent)', backdropFilter: 'blur(4px)', border: '1px solid var(--accent)' }}>
                                        {project.tag}
                                    </div>
                                </div>

                                {/* Project Info Area */}
                                <div className="p-8">
                                    <h3 className="font-outfit font-bold text-xl mb-3" style={{ color: 'var(--text)' }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-[0.92rem] leading-relaxed mb-6" style={{ color: 'var(--text2)' }}>
                                        {project.desc}
                                    </p>
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-[0.9rem] font-bold no-underline transition-all hover:gap-3"
                                        style={{ color: 'var(--accent)' }}
                                    >
                                        View Project <i className="fas fa-arrow-right text-xs"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}