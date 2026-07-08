import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const location = useLocation();

    const navItems = [
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resume', path: '/resume.pdf', isExternal: true }
    ];

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
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed z-50 transition-all duration-300 flex items-center justify-between px-6 top-0 left-0 w-full py-4 md:left-1/2 md:-translate-x-1/2 md:w-auto md:min-w-[400px] md:rounded-full md:border md:border-border-color/50 md:shadow-lg ${scrolled ? 'bg-bg-surface/80 backdrop-blur-md md:top-4 md:py-3 border-b border-border-color md:border-b-border-color/50' : 'bg-transparent md:top-6 md:py-4 md:bg-bg-surface/40 md:backdrop-blur-sm'}`}
            >
                <Link to="/" className="font-sans text-xl font-bold text-text-primary no-underline tracking-tight z-50 relative md:mr-8">
                    Samuel.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path || (item.name === 'Work' && location.pathname === '/');
                        return (
                            <div
                                key={item.name}
                                className="relative px-4 py-2 rounded-full cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === index && (
                                    <motion.span
                                        layoutId="nav-hover"
                                        className="absolute inset-0 bg-text-primary/5 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {item.isExternal ? (
                                    <a
                                        href={item.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-sm font-medium transition-colors duration-200 no-underline z-10 relative ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                                    >
                                        {item.name}
                                    </a>
                                ) : item.name === 'Work' && location.pathname === '/' ? (
                                    <a
                                        href={`#work`}
                                        onClick={(e) => handleNavClick(e, item.name)}
                                        className={`text-sm font-medium transition-colors duration-200 no-underline z-10 relative ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.name === 'Work' ? '/#work' : item.path}
                                        className={`text-sm font-medium transition-colors duration-200 no-underline z-10 relative ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
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
        </motion.nav>

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
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-bold text-text-primary no-underline"
                        >
                            Resume
                        </a>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default Navbar;
