import React from 'react';
import { Icon } from '@iconify/react';

const ProjectCard = ({ title, description, tags, status, image, link }) => {
    return (

        <div className="card p-8 rounded-[2rem] bg-bg-surface border border-border-color relative overflow-hidden mb-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-xl">
            <div className="flex justify-between items-start mb-8">
                <div>
                    {status && (
                        <span className="bg-tag-bg text-text-primary border border-border-color py-1 px-3 rounded-2xl text-xs font-semibold inline-block mb-4">
                            {status}
                        </span>
                    )}
                    <h3 className="font-chillax text-4xl mb-2">{title}</h3>
                    <p className="text-text-secondary max-w-[400px]">{description}</p>
                </div>

                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-bg-surface flex items-center justify-center border border-border-color cursor-pointer transition-transform duration-200 hover:scale-110 text-text-primary">
                        <Icon icon="lucide:external-link" width="24" height="24" />
                    </a>
                ) : (
                    <div className="w-[50px] h-[50px] rounded-full bg-bg-surface flex items-center justify-center border border-border-color opacity-50 text-text-primary">
                        <Icon icon="lucide:external-link" width="24" height="24" />
                    </div>
                )}
            </div>

            <div className="flex gap-2 mb-8 flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="py-2 px-4 rounded-full bg-tag-bg border border-border-color text-sm font-medium">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Placeholder for image */}
            <div className="w-full h-[300px] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-[#333]">Project Preview</span>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
