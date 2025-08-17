// src/components/Header/Header.jsx
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useLayoutEffect(() => {
        const updateHeight = () => {
            const h = headerRef.current?.offsetHeight ?? 0;
            document.documentElement.style.setProperty('--header-height', `${h}px`);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    useEffect(() => {
        const h = headerRef.current?.offsetHeight ?? 0;
        document.documentElement.style.setProperty('--header-height', `${h}px`);
    }, [isScrolled]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        document.body.classList.toggle('menu-open', isMenuOpen);
        return () => document.body.classList.remove('menu-open');
    }, [isMenuOpen]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header ref={headerRef} className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <h2>Nattasith M.</h2>
                    </div>

                    <nav
                        id="site-nav"
                        className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
                        role="navigation"
                    >
                        <ul className="nav-list">
                            <li><button onClick={() => scrollToSection('about')}>About</button></li>
                            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="mobile-menu-btn"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="site-nav"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;