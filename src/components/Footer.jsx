import React from 'react';

const Footer = () => {
    return (

        <footer className="py-16 px-8 mt-16 border-t border-border-color">
            <div className="container">
                <div className="mb-16">
                    <h2 className="font-chillax text-4xl mb-4">Get in Touch</h2>
                    <p className="text-text-secondary text-lg">samuelidowu689@gmail.com</p>
                </div>

                <div className="flex justify-between items-center flex-wrap gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Samuel Idowu</h3>
                        <p className="text-text-secondary text-sm max-w-[300px]">
                            Full-Stack Developer | Mechatronics Engineering Student
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/samuelIdowu" target="_blank" rel="noopener noreferrer" className="text-text-primary no-underline">GitHub</a>
                        <a href="https://www.linkedin.com/in/samueltemiloluwaidowu/" target="_blank" rel="noopener noreferrer" className="text-text-primary no-underline">LinkedIn</a>
                    </div>
                </div>

                <div className="mt-16 text-text-secondary text-sm text-center">
                    © Samuel Idowu 2026. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
