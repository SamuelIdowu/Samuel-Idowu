import React from 'react';

const About = () => {
    const experiences = [
        {
            role: "Frontend Developer Intern",
            company: "Reposebay HR LTD",
            period: "Aug 2025 – Present",
            achievements: [
                "Implementing responsive user interfaces and reusable component systems using React and TypeScript.",
                "Collaborating with backend teams to deliver intuitive user experiences.",
                "Developing the frontend development of core product features from concept to deployment."
            ]
        },
        {
            role: "Web Developer",
            company: "JZ Holdings",
            period: "Jan 2025 – Present",
            achievements: [
                "Engineered dynamic, scalable web applications focusing on performance and user experience.",
                "Collaborated cross-functionally to transform client needs into functional products.",
                "Contributed to deployment pipelines and modern DevOps practices."
            ]
        },
        {
            role: "Freelance Developer",
            company: "",
            period: "Feb 2025 – Mar 2025",
            achievements: [
                "Designed, developed, and deployed custom responsive web applications for multiple clients.",
                "Built and deployed a full-stack e-commerce store integrating payments and product management.",
                "Improved load times by 35% through optimized API calls and caching.",
                "Designed a responsive portfolio website with SEO-friendly structure and animations."
            ]
        }
    ];

    return (
        <main className="container pt-32 pb-16">
            <section className="mb-20">
                <h1 className="heading-xl text-center mb-8">About Me.</h1>
                <div className="max-w-3xl mx-auto text-lg text-text-secondary leading-relaxed space-y-6">
                    <p>
                        I am Samuel Temiloluwa Idowu, a Mechatronics Engineering student and aspiring Software Engineer based in Nigeria.
                        My passion lies at the intersection of creativity, empathy, and technology, where I build scalable, user-centric solutions.
                    </p>
                    <p>
                        With a strong foundation in both software and hardware, I explore the realms of Artificial Intelligence (specifically GenAI),
                        Machine Learning, Robotics, and IoT. I am driven by the goal of achieving financial independence through tech entrepreneurship
                        and making impactful contributions to the global tech ecosystem.
                    </p>
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
                    <p className="mt-4 text-text-secondary">Focus: Mechanical & Electrical Systems, Embedded Systems, Internet of Things (IoT)</p>
                </div>
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-display font-semibold mb-10 text-center">Interests</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                    {['Artificial Intelligence (GenAI)', 'Machine Learning', 'Robotics', 'Cybersecurity', 'Web3 / Blockchain', 'Embedded systems and IoT'].map((interest, index) => (
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
