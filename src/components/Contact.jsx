import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

        window.open(`https://wa.me/2348144604146?text=${text}`, '_blank');

        setFormData({ name: '', email: '', message: '' });
    };

    const socialLinks = [
        {
            name: 'Email',
            url: 'mailto:samuelidowu689@gmail.com',
            icon: <Icon icon="lucide:mail" width="18" height="18" />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/samueltemiloluwaidowu/',
            icon: <Icon icon="lucide:linkedin" width="18" height="18" />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/samuelIdowu',
            icon: <Icon icon="lucide:github" width="18" height="18" />
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/2348144604146',
            icon: <Icon icon="ri:whatsapp-line" width="18" height="18" />
        },
        {
            name: 'X',
            url: 'https://x.com/thenasis2',
            icon: <Icon icon="ri:twitter-x-line" width="18" height="18" />
        }
    ];

    const inputClasses = "w-full px-0 py-3 bg-transparent border-b border-border-color focus:border-accent-color focus:outline-none transition-colors placeholder:text-gray-300 text-text-primary";

    return (
        <section id="contact" className="container py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-xl mb-16 text-center"
            >
                Contact.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <h3 className="text-2xl font-bold mb-6 text-text-primary">Let's work together.</h3>
                    <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <span className="p-2 bg-gray-50 rounded-full border border-border-color text-text-primary">
                                <Icon icon="lucide:mail" width="18" height="18" />
                            </span>
                            <a href="mailto:samuelidowu689@gmail.com" className="text-lg hover:text-accent-color transition-colors text-text-secondary">
                                samuelidowu689@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-50 rounded-full border border-border-color text-text-secondary hover:text-white hover:bg-accent-color hover:border-accent-color transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-bg-surface p-8 rounded-[5px] border border-border-color"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-text-secondary">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={inputClasses}
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-text-secondary">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={inputClasses}
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1 text-text-secondary">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className={`${inputClasses} resize-none`}
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-accent-color text-white rounded-[5px] font-medium text-sm hover:bg-accent-hover transition-colors mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
