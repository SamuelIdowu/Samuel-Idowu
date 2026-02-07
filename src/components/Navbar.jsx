import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (e, item) => {
        if (item === 'About') return;

        if (location.pathname !== '/') {
            return;
        }

        e.preventDefault();
        scrollToSection(item.toLowerCase());
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/50 backdrop-blur-md border-b border-white/20 shadow-sm' : 'py-6 bg-transparent'}`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" className="font-chillax text-2xl font-semibold text-text-primary no-underline tracking-tight">
                    Samuel.
                </Link>

                <div className="hidden md:flex gap-8">
                    <Link
                        to="/about"
                        className={`text-sm font-medium transition-colors duration-200 no-underline ${location.pathname === '/about' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                    >
                        About
                    </Link>

                    {['Work'].map((item) => (
                        location.pathname === '/' ? (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-text-secondary no-underline text-sm font-medium transition-colors duration-200 hover:text-text-primary"
                            >
                                {item}
                            </a>
                        ) : (
                            <Link
                                key={item}
                                to={`/#${item.toLowerCase()}`}
                                className="text-text-secondary no-underline text-sm font-medium transition-colors duration-200 hover:text-text-primary"
                            >
                                {item}
                            </Link>
                        )
                    ))}

                    <Link
                        to="/contact"
                        className={`text-sm font-medium transition-colors duration-200 no-underline ${location.pathname === '/contact' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon (Placeholder) */}
                <button className="hidden bg-none border-none text-white">Menu</button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
