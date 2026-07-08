import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import museFlowImage from '../assets/image.png';
import impryImage from '../assets/image copy.png';

const softwareSkills = [
    { name: 'React', icon: 'mdi:react' },
    { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
    { name: 'Node.js', icon: 'mdi:nodejs' },
    { name: 'TypeScript', icon: 'mdi:language-typescript' },
    { name: 'JavaScript', icon: 'mdi:language-javascript' },
    { name: 'Python', icon: 'mdi:language-python' },
    { name: 'Express', icon: 'simple-icons:express' },
    { name: 'Supabase', icon: 'simple-icons:supabase' },
    { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
    { name: 'MongoDB', icon: 'simple-icons:mongodb' },
    { name: 'Claude Code', icon: 'simple-icons:anthropic' },
    { name: 'Vercel', icon: 'simple-icons:vercel' },
    { name: 'Git', icon: 'mdi:git' }
];

const engineeringSkills = [
    { name: 'C++', icon: 'mdi:language-cpp' },
    { name: 'Embedded Systems', icon: 'mdi:chip' },
    { name: 'IoT', icon: 'mdi:wifi' },
    { name: 'Robotics', icon: 'mdi:robot-outline' },
    { name: 'FreeCAD', icon: 'simple-icons:freecad' },
    { name: 'Arduino', icon: 'simple-icons:arduino' },
    { name: 'Tinkercad', icon: 'simple-icons:tinkercad' },
    { name: 'MATLAB', icon: 'simple-icons:mathworks' }
];

const Home = () => {
    const projects = [
        {
            title: "Muse Flow",
            description: "AI-powered SaaS platform for creators — integrating intelligent ideation, content planning, and one-click publishing workflows.",
            tags: ["SaaS", "AI", "REACT", "NODE.JS"],
            status: "PERSONAL PROJECT",
            link: "https://muse-flow-two.vercel.app/",
            image: museFlowImage,
            role: "Solo Developer · AI-Assisted Build",
            metric: "Full product shipped — AI ideation pipeline, auth, and publishing",
            featured: true
        },
        {
            title: "Impry OS",
            description: "Freelancer CRM with integrated project management, client tracking, and payment processing. Built to replace scattered tools with one system.",
            tags: ["CRM", "SAAS", "PAYMENTS", "MANAGEMENT"],
            status: "PERSONAL PROJECT",
            link: "https://impry-os.vercel.app/",
            image: impryImage,
            role: "Solo Developer · Full-Stack Build",
            metric: "End-to-end payment integration and dashboard analytics",
            featured: true
        },
        {
            title: "IoT Waste Monitoring",
            description: "IoT-enabled waste monitoring system using embedded sensors and microcontrollers to optimize collection routes and reduce operational waste.",
            tags: ["IOT", "C++", "EMBEDDED", "SENSORS"],
            status: "ENGINEERING PROJECT",
            link: null,
            image: null,
            featured: false
        },
        {
            title: "Solana Token Bot",
            description: "Telegram automation bot that monitors Solana token activity and runs configurable analysis based on preset trading rules.",
            tags: ["BOT", "BLOCKCHAIN", "SOLANA", "AUTOMATION"],
            status: "AUTOMATION PROJECT",
            link: null,
            image: null,
            featured: false
        }
    ];

    return (
        <main>
            <Hero />

            <section id="work" className="container pb-32 pt-16">
                <h2 className="heading-xl text-5xl md:text-6xl mb-16 text-center">Selected Work.</h2>

                <div className="flex flex-col border-t border-border-color">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </section>

            {/* About Preview Section */}
            <section className="container mb-32">
                <div className="bg-bg-surface border border-border-color rounded-[5px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 hover:border-accent-color transition-colors duration-300">
                    <div className="w-48 h-48 rounded-full bg-gray-50 flex-shrink-0 border border-border-color flex items-center justify-center overflow-hidden">
                        <span className="text-text-secondary text-sm">Profile Photo</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-sans font-bold text-text-primary mb-4">Hi, I'm Samuel.</h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                            I'm an AI Product Engineer who builds SaaS platforms, automation tools, and intelligent systems. 
                            My mechatronics engineering background gives me a systems-level perspective — from embedded hardware to cloud infrastructure. I work with AI as a co-engineer, using agentic frameworks and tools like Claude Code to ship production software fast.
                        </p>
                        <Link to="/about" className="inline-flex items-center text-text-primary border-b-2 border-accent-color pb-1 hover:text-accent-color transition-colors font-medium">
                            Read more about me
                            <Icon icon="lucide:arrow-right" className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="skills" className="container mb-32">
                <h2 className="heading-xl text-4xl md:text-5xl mb-16 text-center">Tools & Technologies.</h2>

                <div className="mb-12">
                    <h3 className="text-xl font-sans font-semibold mb-8 text-center text-text-secondary">Product Development & AI</h3>
                    <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
                        {softwareSkills.map(tech => (
                            <div key={tech.name} className="px-5 py-3 bg-bg-surface rounded-full flex items-center gap-3 border border-border-color transition-all hover:border-accent-color hover:shadow-sm hover:-translate-y-1">
                                <Icon icon={tech.icon} width="20" height="20" className="text-text-primary" />
                                <span className="font-semibold text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-sans font-semibold mb-8 text-center text-text-secondary">Systems & Embedded</h3>
                    <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
                        {engineeringSkills.map(tech => (
                            <div key={tech.name} className="px-5 py-3 bg-bg-surface rounded-full flex items-center gap-3 border border-border-color transition-all hover:border-accent-color hover:shadow-sm hover:-translate-y-1">
                                <Icon icon={tech.icon} width="20" height="20" className="text-text-primary" />
                                <span className="font-semibold text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
