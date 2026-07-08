import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="mt-32">
            {/* Pre-footer CTA */}
            <div className="container mb-24">
                <div className="bg-bg-surface border border-border-color rounded-[5px] p-12 md:p-20 text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-color to-blue-500"></div>
                    <h2 className="heading-xl text-4xl md:text-5xl lg:text-6xl max-w-3xl">Have a product idea? Let's ship it.</h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mb-4">
                        SaaS products, automation tools, AI-powered systems — I build fast and ship real software.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent-color text-white rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg shadow-accent-color/30">
                        Get in Touch
                        <Icon icon="lucide:arrow-right" className="ml-2" width="20" height="20" />
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="border-t border-border-color py-12 px-8">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        <div>
                            <h3 className="text-2xl font-sans font-bold text-text-primary mb-2">Samuel Idowu.</h3>
                            <p className="text-text-secondary text-sm max-w-[300px]">
                                AI Product Engineer building SaaS, automations, and intelligent systems.
                            </p>
                        </div>

                        <div className="flex flex-col md:items-end gap-4">
                            <a href="mailto:samuelidowu689@gmail.com" className="text-text-primary font-medium hover:text-accent-color transition-colors inline-flex items-center gap-2">
                                <Icon icon="lucide:mail" width="18" height="18" />
                                samuelidowu689@gmail.com
                            </a>
                            <div className="flex gap-4">
                                <a href="https://github.com/samuelIdowu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-surface border border-border-color flex items-center justify-center text-text-secondary hover:text-accent-color hover:border-accent-color transition-all">
                                    <Icon icon="lucide:github" width="20" height="20" />
                                </a>
                                <a href="https://www.linkedin.com/in/samueltemiloluwaidowu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-surface border border-border-color flex items-center justify-center text-text-secondary hover:text-accent-color hover:border-accent-color transition-all">
                                    <Icon icon="lucide:linkedin" width="20" height="20" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border-color/50 text-text-secondary text-sm">
                        <p>© {new Date().getFullYear()} Samuel Idowu. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link to="/about" className="hover:text-text-primary transition-colors">About</Link>
                            <Link to="/contact" className="hover:text-text-primary transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
