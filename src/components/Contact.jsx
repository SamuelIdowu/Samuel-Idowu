import React, { useState } from 'react';
import { Icon } from '@iconify/react';

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
            icon: <Icon icon="lucide:mail" width="24" height="24" />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/samueltemiloluwaidowu/',
            icon: <Icon icon="lucide:linkedin" width="24" height="24" />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/samuelIdowu',
            icon: <Icon icon="lucide:github" width="24" height="24" />
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/2348144604146',
            icon: <Icon icon="ri:whatsapp-line" width="24" height="24" />
        },
        {
            name: 'X',
            url: 'https://x.com/thenasis2',
            icon: <Icon icon="ri:twitter-x-line" width="24" height="24" />
        }
    ];

    return (
        <section id="contact" className="container py-32">
            <h2 className="heading-xl text-5xl mb-16 text-center">Contact.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-display font-semibold mb-6">Let's work together.</h3>
                    <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <span className="p-3 bg-bg-surface rounded-full border border-border-color text-text-primary">
                                <Icon icon="lucide:mail" width="24" height="24" />
                            </span>
                            <a href="mailto:samuelidowu689@gmail.com" className="text-lg hover:text-text-primary transition-colors text-text-secondary">
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
                                    className="p-3 bg-bg-surface rounded-full border border-border-color text-text-primary hover:bg-text-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-bg-surface p-8 rounded-2xl border border-border-color shadow-sm">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-bg-color rounded-lg border border-border-color focus:border-text-primary focus:outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-bg-color rounded-lg border border-border-color focus:border-text-primary focus:outline-none transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 bg-bg-color rounded-lg border border-border-color focus:border-text-primary focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-text-primary text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors transform active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
