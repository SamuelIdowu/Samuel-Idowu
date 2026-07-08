import React from 'react';

const About = () => {
    const experiences = [
        {
            role: "Frontend Developer Intern",
            company: "Reposebay HR LTD",
            period: "Aug 2025 – June 2026",
            achievements: [
                "Building responsive interfaces and reusable component systems with React and TypeScript, using AI-assisted development workflows.",
                "Collaborating with backend teams to ship intuitive, production-ready user experiences.",
                "Developing core product features end-to-end — from concept through AI-assisted prototyping to deployment."
            ]
        },
        {
            role: "Web Developer",
            company: "JZ Holdings",
            period: "Jan 2025 – Present",
            achievements: [
                "Engineering dynamic, scalable web applications with a focus on performance and user experience.",
                "Transforming client requirements into functional, shipped products through cross-functional collaboration.",
                "Contributing to deployment pipelines and modern DevOps practices."
            ]
        },
        {
            role: "Freelance Developer",
            company: "",
            period: "Feb 2025 – Mar 2025",
            achievements: [
                "Designed, developed, and deployed custom responsive web applications for multiple clients using AI-assisted workflows.",
                "Built and deployed a full-stack e-commerce platform with integrated payments and product management.",
                "Improved page load performance by 35% through optimized API calls and intelligent caching strategies.",
                "Delivered a responsive portfolio website with SEO-optimized structure and micro-animations."
            ]
        }
    ];

    return (
        <main className="container pt-32 pb-16">
            <section className="mb-20">
                <h1 className="heading-xl text-center mb-8">About Me.</h1>
                <div className="max-w-3xl mx-auto text-lg text-text-secondary leading-relaxed space-y-6">
                    <p>
                        I'm Samuel Temiloluwa Idowu — an AI Product Engineer based in Nigeria, currently studying Mechatronics Engineering at the Federal University Oye Ekiti.
                    </p>
                    <p>
                        I specialize in AI-assisted product development: building SaaS platforms, internal tools, and automation systems using agentic frameworks and modern AI workflows. I work with tools like Claude Code and Antigravity as co-engineering partners, combining rapid AI-assisted iteration with solid engineering fundamentals. This is how I ship production software quickly without cutting corners.
                    </p>
                    <p>
                        My mechatronics background gives me a unique systems perspective. I understand embedded systems, IoT architectures, and robotics at the hardware level — which means I can think about products from sensor to cloud. I'm actively deepening my expertise in machine learning and AI engineering, building toward a career where software intelligence meets physical systems.
                    </p>
                    <p>
                        I build bots, CLI tools, and workflow automations that eliminate repetitive work. I architect SaaS products that solve real problems. And I do it all with AI as my force multiplier.
                    </p>
                    <div className="pt-4 flex justify-center md:justify-start">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-text-primary text-bg-surface font-medium rounded-full hover:bg-accent-color transition-colors duration-300">
                            Download Resume
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-display font-semibold mb-10 text-center">Experience</h2>
                <div className="max-w-3xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative border-l border-border-color pl-8 pb-8 last:pb-0">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-text-primary"></div>
                            <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                            <p className="text-text-secondary mb-2">
                                {exp.company && <span className="font-medium">{exp.company} | </span>}
                                {exp.period}
                            </p>
                            <ul className="list-disc list-inside text-text-secondary space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-display font-semibold mb-10 text-center">Education</h2>
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-text-primary">B.Eng. in Mechatronics Engineering</h3>
                    <p className="text-text-secondary">Federal University Oye Ekiti (FUOYE)</p>
                    <p className="text-text-secondary text-sm">2021 – 2027</p>
                    <p className="mt-4 text-text-secondary">Focus: Embedded Systems, IoT, Control Systems, Robotics</p>
                </div>
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-display font-semibold mb-10 text-center">Interests</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                    {['AI-Assisted Development', 'Agentic AI Frameworks', 'Machine Learning', 'SaaS Architecture', 'Automation & Bots', 'Embedded Systems & IoT', 'Robotics & Mechatronics'].map((interest, index) => (
                        <span key={index} className="px-4 py-2 bg-bg-surface rounded-full text-sm border border-border-color text-text-primary hover:border-text-primary transition-colors cursor-default">
                            {interest}
                        </span>
                    ))}
                </div>
            </section>


        </main>
    );
};

export default About;
