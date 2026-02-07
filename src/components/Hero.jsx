import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="work" className="container min-h-[90vh] flex flex-col items-center justify-center pt-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="font-chillax text-[clamp(3.5rem,9vw,7rem)] font-semibold leading-[1.05] mb-6 tracking-tight">
                    Hi. I'm Samuel.<br />
                    <span className="text-text-secondary block mt-2">FullStack Dev.</span>
                </h1>

                <p className="max-w-[600px] text-xl text-text-secondary mb-10 mx-auto leading-relaxed">
                    Innovative Mechatronics Engineering student building scalable, user-centric software solutions that merge creativity and technology.
                </p>

                <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-block bg-text-primary text-white py-4 px-10 rounded-full no-underline font-medium text-lg hover:bg-black/90 transition-colors shadow-lg shadow-gray-200"
                >
                    Get In Touch
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
