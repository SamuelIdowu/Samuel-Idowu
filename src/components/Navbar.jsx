import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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
        if (item === 'About') return; // Let Link handle it

        if (location.pathname !== '/') {
            // If not on home page, navigation will happen, then we need to scroll after navigation
            // This is a simple implementation, for robust hash scrolling on route change additional logic is needed
            // But for now, we can just let it navigate to '/'
            return;
        }

        e.preventDefault();
        scrollToSection(item.toLowerCase());
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bg-surface/80 backdrop-blur-md border-b border-border-color' : 'py-8 bg-transparent'}`}>
            <div className="container flex items-center justify-between">
                <Link to="/" className="font-chillax text-2xl font-semibold text-text-primary no-underline">
                    Samuel.
                </Link>

                <div className="hidden md:flex gap-8">
                    <Link
                        to="/about"
                        className={`text-base transition-colors duration-200 font-normal hover:text-text-primary no-underline ${location.pathname === '/about' ? 'text-text-primary font-medium' : 'text-text-secondary'}`}
                    >
                        About
                    </Link>

                    {['Work'].map((item) => (
                        location.pathname === '/' ? (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-text-secondary no-underline text-base transition-colors duration-200 font-normal hover:text-text-primary"
                            >
                                {item}
                            </a>
                        ) : (
                            <Link
                                key={item}
                                to={`/#${item.toLowerCase()}`}
                                className="text-text-secondary no-underline text-base transition-colors duration-200 font-normal hover:text-text-primary"
                            >
                                {item}
                            </Link>
                        )
                    ))}

                    <Link
                        to="/contact"
                        className={`text-base transition-colors duration-200 font-normal hover:text-text-primary no-underline ${location.pathname === '/contact' ? 'text-text-primary font-medium' : 'text-text-secondary'}`}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon (Placeholder) */}
                <button className="hidden bg-none border-none text-white">Menu</button>
            </div>
        </nav>
    );
};

export default Navbar;
