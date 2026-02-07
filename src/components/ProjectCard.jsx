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
            className="card p-8 rounded-3xl bg-bg-surface border border-border-color/50 relative overflow-hidden mb-8 transition-all duration-300 hover:border-gray-400 hover:shadow-lg group"
        >
            <div className="flex justify-between items-start mb-8">
                <div>
                    {status && (
                        <span className="bg-tag-bg/50 text-text-primary border border-border-color py-1 px-3 rounded-full text-xs font-medium inline-block mb-4">
                            {status}
                        </span>
                    )}
                    <h3 className="font-chillax text-4xl mb-2 group-hover:text-black transition-colors">{title}</h3>
                    <p className="text-text-secondary max-w-[400px] leading-relaxed">{description}</p>
                </div>

                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center border border-border-color cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white hover:border-black text-text-primary">
                        <Icon icon="lucide:external-link" width="20" height="20" />
                    </a>
                ) : (
                    <div className="w-[50px] h-[50px] rounded-full bg-bg-surface flex items-center justify-center border border-border-color opacity-50 text-text-primary">
                        <Icon icon="lucide:external-link" width="20" height="20" />
                    </div>
                )}
            </div>

            <div className="flex gap-2 mb-8 flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="py-2 px-4 rounded-full bg-white border border-border-color text-sm text-text-secondary font-medium">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Placeholder for image */}
            <div className="w-full h-[300px] bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border border-border-color/30">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <span className="text-gray-400 font-lexend">Project Preview</span>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
