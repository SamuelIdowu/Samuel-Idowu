import React from 'react';

const Hero = () => {
    return (
        <section id="work" className="container min-h-[90vh] flex flex-col items-center justify-center pt-32 text-center">
            <h1 className="font-chillax text-[clamp(3rem,8vw,6rem)] font-semibold leading-[1.1] mb-8">
                Hi. I'm Samuel.<br />
                <span className="text-text-secondary">FullStack Dev.</span>
            </h1>

            <p className="max-w-[700px] text-xl text-text-secondary mb-12">
                Innovative Mechatronics Engineering student building scalable, user-centric software solutions that merge creativity and technology.
            </p>

            <a href="#contact" className="bg-text-primary text-white py-4 px-8 rounded-full no-underline font-semibold text-lg transition-transform duration-200 hover:scale-105">
                Get In Touch
            </a>
        </section>
    );
};

export default Hero;
