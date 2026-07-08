import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, tags, status, image, link, role, metric, featured, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-border-color overflow-hidden"
        >
            {/* Header / Strip */}
            <motion.button 
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 md:py-8 cursor-pointer text-left group transition-colors"
            >
                <div className="flex items-center gap-6">
                    <h3 className="text-3xl md:text-5xl font-bold font-sans text-text-primary group-hover:text-accent-color transition-colors">
                        {title}
                    </h3>
                    {status && (
                        <span className="hidden md:inline-block text-xs uppercase tracking-wider font-semibold border border-border-color rounded-none px-3 py-1">
                            {status}
                        </span>
                    )}
                </div>
                <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-none border border-border-color flex items-center justify-center text-text-secondary group-hover:border-accent-color group-hover:text-accent-color group-hover:bg-gray-50 transition-colors"
                >
                    <Icon icon="lucide:chevron-down" className="w-6 h-6" />
                </motion.div>
            </motion.button>

            {/* Expandable Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 md:pb-12 pt-4 flex flex-col md:flex-row gap-8 md:gap-12">
                            {/* Left: Info */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-xl">
                                        {description}
                                    </p>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {role && (
                                            <div>
                                                <span className="text-xs text-text-secondary uppercase tracking-widest block mb-1">Role</span>
                                                <span className="text-text-primary font-medium">{role}</span>
                                            </div>
                                        )}
                                        {metric && (
                                            <div>
                                                <span className="text-xs text-text-secondary uppercase tracking-widest block mb-1">Outcome</span>
                                                <span className="text-text-primary font-medium">{metric}</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex gap-2 flex-wrap mb-8">
                                        {tags.map((tag, idx) => (
                                            <span 
                                                key={idx} 
                                                className="text-xs font-medium border border-border-color rounded-none px-3 py-1.5 bg-bg-surface text-text-secondary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {link && (
                                    <div>
                                        <a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex text-white items-center gap-2 bg-text-primary text-bg-base px-6 py-3 rounded-none hover:bg-accent-color transition-colors font-medium text-sm group"
                                        >
                                            View Live Project
                                            <Icon icon="lucide:arrow-up-right" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Right: Image */}
                            {image && (
                                <div className="w-full md:w-5/12 rounded-none overflow-hidden border border-border-color self-start bg-gray-100">
                                    <img src={image} alt={title} className="w-full h-auto object-cover" loading="lazy" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectCard;
