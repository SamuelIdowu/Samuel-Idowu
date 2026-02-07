import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, status, image, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group p-6 rounded-[5px] bg-bg-surface border border-border-color relative overflow-hidden mb-8 transition-all duration-300 hover:border-accent-color hover:shadow-sm"
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                    {status && (
                        <span className="bg-gray-100 text-text-secondary border border-border-color py-1 px-3 rounded-full text-xs font-medium inline-block mb-3">
                            {status}
                        </span>
                    )}
                    <h3 className="font-sans font-bold text-2xl text-text-primary mb-2 group-hover:text-accent-color transition-colors">{title}</h3>
                    <p className="text-text-secondary max-w-[400px] leading-relaxed text-sm">{description}</p>
                </div>

                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center border border-border-color cursor-pointer transition-colors duration-200 hover:bg-accent-color hover:text-white hover:border-accent-color text-text-primary">
                        <Icon icon="lucide:external-link" width="18" height="18" />
                    </a>
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-border-color opacity-50 text-text-primary">
                        <Icon icon="lucide:external-link" width="18" height="18" />
                    </div>
                )}
            </div>

            <div className="flex gap-2 mb-6 flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="py-1 px-3 rounded-full bg-gray-50 border border-border-color text-xs text-text-secondary font-medium">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Placeholder for image */}
            <div className="w-full h-[300px] bg-gray-50 rounded-[3px] flex items-center justify-center overflow-hidden border border-border-color/30">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <span className="text-gray-300 font-sans text-sm">Project Preview</span>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
