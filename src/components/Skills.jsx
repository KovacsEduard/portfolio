import ScrollReveal from './ScrollReveal';

export default function Skills() {
    const skills = [
        { name: "Python", icon: "devicon-python-plain" },
        { name: "C#", icon: "devicon-csharp-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
        { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "Debugging", icon: "devicon-vscode-plain"},
        { name: "Frontend Dev", icon: "devicon-chrome-plain"},
    ];

    return (
        <section id="skills" className="py-[100px] bg-[var(--bg2)]">
            <ScrollReveal>
                <div className="max-w-[1180px] mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-outfit font-extrabold mb-12 text-[var(--text)]">
                        Tech Stack
                    </h2>
                    
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                className={`flex items-center gap-3 border rounded-[12px] px-5 py-3 text-sm md:text-base font-semibold font-outfit cursor-default transition-all duration-300 bg-[var(--surface)] text-[var(--text)] hover:-translate-y-1 hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-lg ${skill.dashed ? 'border-dashed opacity-80' : 'border-[var(--border)]'}`}
                            >
                                <span className="w-10 h-10 flex items-center justify-center border border-[var(--border)] rounded-lg text-2xl flex-shrink-0 bg-[var(--bg)]">
                                    <i className={`${skill.icon} colored`}></i>
                                </span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}