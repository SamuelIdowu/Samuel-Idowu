import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bg-surface/80 backdrop-blur-md border-b border-border-color shadow-sm' : 'py-6 bg-transparent'}`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" className="font-sans text-xl font-bold text-text-primary no-underline tracking-tight z-50 relative">
                    Samuel.
                </Link>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative text-text-primary focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 flex flex-col items-end gap-1.5">
                        <motion.span
                            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="bg-current h-0.5 w-full block transition-transform"
                        />
                        <motion.span
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="bg-current h-0.5 w-2/3 block transition-opacity"
                        />
                        <motion.span
                            animate={isMenuOpen ? { rotate: -45, y: -6, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                            className="bg-current h-0.5 w-full block transition-transform"
                        />
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-bg-surface/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden"
                        >
                            <nav className="flex flex-col gap-8 text-center">
                                <Link
                                    to="/about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold text-text-primary no-underline"
                                >
                                    About
                                </Link>

                                {['Work'].map((item) => (
                                    location.pathname === '/' ? (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            onClick={(e) => {
                                                handleNavClick(e, item);
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-2xl font-bold text-text-primary no-underline"
                                        >
                                            {item}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item}
                                            to={`/#${item.toLowerCase()}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-2xl font-bold text-text-primary no-underline"
                                        >
                                            {item}
                                        </Link>
                                    )
                                ))}

                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold text-text-primary no-underline"
                                >
                                    Contact
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
