import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <section id="work" className="container min-h-screen flex flex-col justify-between pt-32 pb-12 relative">
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
                    Mechatronics Engineer &<br />Fullstack Developer
                </div>
                <div className="md:text-right">
                    Based in Nigeria<br />Available for work
                </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 flex flex-col justify-center"
            >
                <h2 className="font-sans font-light leading-[0.85] tracking-tighter select-none text-text-primary">
                    <span className="block text-[clamp(2.8rem,9.1vw,9.8rem)]">INNOVATIVE</span>
                    <span className="block text-[clamp(2.8rem,9.1vw,9.8rem)] text-right">BUILDER</span>
                </h2>
            </motion.div>

            {/* Bottom Row with Arrow and Context */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-12"
            >
                <div className="flex flex-col gap-4">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <Icon icon="lucide:arrow-down" width="48" height="48" className="text-text-primary" />
                    </motion.div>
                    <p className="max-w-md text-sm md:text-base font-medium text-text-secondary uppercase tracking-tight leading-relaxed">
                        Building scalable, user-centric software solutions that merge creativity, empathy, and technology. Focused on GenAI, Robotics, and SaaS.
                    </p>
                </div>


            </motion.div>
        </section>
    );
};

export default Hero;
