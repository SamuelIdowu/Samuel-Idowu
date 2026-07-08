import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <section id="hero" className="container min-h-screen flex flex-col justify-between pt-32 pb-12 relative">
            {/* Top Info Row */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm font-medium uppercase tracking-wide text-text-secondary border-b border-border-color pb-6 mb-12"
            >
                <div className='text-xl'>
                    Samuel Temiloluwa Idowu
                </div>
                <div className="md:text-center text-text-primary">
                    AI Product Engineer &<br />Automation Builder
                </div>
                <div className="md:text-right">
                    Based in Nigeria<br />Open to remote work
                </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 flex flex-col justify-center"
            >
                <h1 className="font-sans font-bold leading-[0.85] tracking-tighter select-none text-text-primary">
                    <span className="block text-[clamp(2.8rem,9.1vw,9.8rem)]">AI PRODUCT</span>
                    <span className="block text-[clamp(2.8rem,9.1vw,9.8rem)] text-right text-text-primary">ENGINEER</span>
                </h1>
            </motion.div>

            {/* Bottom Row with Arrow and Context */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-12"
            >
                <div className="flex flex-col gap-6">
                    <p className="max-w-md text-sm md:text-base font-medium text-text-secondary uppercase tracking-tight leading-relaxed">
                        I build production SaaS products, automation bots, and internal tools using AI-assisted development. Mechatronics background. I think in systems, and I ship fast.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#work" className="inline-flex items-center justify-center px-6 py-3 bg-text-primary text-bg-surface font-medium rounded-none hover:bg-accent-color transition-colors duration-300">
                            View My Work
                            <motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="ml-2"
                            >
                                <Icon icon="lucide:arrow-down" width="18" height="18" />
                            </motion.div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:items-end gap-4 text-text-secondary text-sm font-medium uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-color"></span>
                        Production SaaS apps shipped
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-color"></span>
                        AI-assisted development workflow
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                        <a href="https://github.com/samuelIdowu" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1">
                            <Icon icon="lucide:github" width="18" height="18" /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/samueltemiloluwaidowu/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1">
                            <Icon icon="lucide:linkedin" width="18" height="18" /> LinkedIn
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
