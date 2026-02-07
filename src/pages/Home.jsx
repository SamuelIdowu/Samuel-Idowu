import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import museFlowImage from '../assets/image.png';
import impryImage from '../assets/image copy.png';

const Home = () => {
    const projects = [
        {
            title: "Muse Flow",
            description: "SaaS Platform for creators integrating AI-assisted ideation, content planning, and publishing.",
            tags: ["SaaS", "AI", "REACT", "NODE.JS"],
            status: "PERSONAL PROJECT",
            link: "https://muse-flow-two.vercel.app/",
            image: museFlowImage
        },
        {
            title: "Impry OS",
            description: "Freelancer-focused CRM with project management and client management features.",
            tags: ["CRM", "SAAS", "PAYMENTS", "MANAGEMENT"],
            status: "PERSONAL PROJECT",
            link: "https://impry-os.vercel.app/",
            image: impryImage
        },
        {
            title: "IoT Waste Monitoring",
            description: "Smart waste bin using microcontrollers and sensors to optimize collection efficiency.",
            tags: ["IOT", "C++", "EMBEDDED", "SENSORS"],
            status: "ACADEMIC PROJECT",
            link: null,
            image: null
        },
        {
            title: "Solana Token Bot",
            description: "Telegram bot that fetches latest solana bots and runs analysis based on pre-set instructions.",
            tags: ["BOT", "BLOCKCHAIN", "SOLANA", "AUTOMATION"],
            status: "PERSONAL PROJECT",
            link: null,
            image: null
        }
    ];

    return (
        <main>
            <Hero />

            <section id="work" className="container pb-32">
                <h2 className="heading-xl text-6xl mb-16 text-center">Projects.</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <section id="about" className="container mb-32">
                <h2 className="heading-xl text-5xl mb-16 text-center">Skills.</h2>

                <div className="mb-12">
                    <h3 className="text-2xl font-display font-semibold mb-8 text-center text-text-secondary">Software Development</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6 max-w-[800px] mx-auto">
                        {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MongoDB', 'Git'].map(tech => (
                            <div key={tech} className="card p-4 bg-bg-surface rounded-xl flex flex-col items-center justify-center gap-2 border border-border-color transition-transform hover:-translate-y-1">
                                <span className="font-semibold text-sm">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-display font-semibold mb-8 text-center text-text-secondary">Engineering & IoT</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6 max-w-[800px] mx-auto">
                        {['C++', 'Embedded Systems', 'IoT', 'Robotics', 'FreeCAD', 'Arduino', 'Tinkercad', 'MATLAB', 'Python'].map(tech => (
                            <div key={tech} className="card p-4 bg-bg-surface rounded-xl flex flex-col items-center justify-center gap-2 border border-border-color transition-transform hover:-translate-y-1">
                                <span className="font-semibold text-sm">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
