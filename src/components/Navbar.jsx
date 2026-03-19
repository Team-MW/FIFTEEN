import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getHref = (hash) => {
        if (location.pathname === '/') return hash;
        return `/${hash}`;
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    transition: 'all 0.3s ease',
                    padding: '0.5rem 0',
                    borderBottom: scrolled ? '1px solid #222' : '1px solid transparent'
                }}
            >
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo FIFTEEN matching the real branding shape */}
                    <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1, textDecoration: 'none', margin: '0.5rem 0' }}>
                        <span style={{ fontSize: '0.6rem', color: '#fff', fontFamily: "'Inter', sans-serif", letterSpacing: '2px', textTransform: 'uppercase' }}>Sandwichs</span>
                        <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: "'Anton', sans-serif", color: 'var(--primary)', letterSpacing: '2px', marginTop: '0.2rem' }}>FIFTEEN</span>
                        <span style={{ fontSize: '0.6rem', color: '#fff', fontFamily: "'Inter', sans-serif", letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem' }}>Sandwichs & Burgers</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-only" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                        <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontFamily: "'Anton', sans-serif", fontSize: '1.2rem', margin: 0 }}>
                            <li><a href={getHref('#menu')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>LA CARTE</a></li>
                            <li><a href={getHref('#concept')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>LE CONCEPT</a></li>
                            <li><a href={getHref('#location')} style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>NOS RESTOS</a></li>
                        </ul>
                        <a
                            href="https://www.ubereats.com/store/fifteen/HlYxsy62UzeHjO4kQWZfWA"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: '#000',
                                padding: '0.8rem 1.5rem',
                                fontSize: '1.2rem',
                                borderRadius: '4px',
                                textTransform: 'uppercase',
                                transition: 'transform 0.2s ease, filter 0.2s ease',
                                textDecoration: 'none',
                                fontFamily: "'Anton', sans-serif"
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Commander
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="mobile-only"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'transparent',
                            color: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 60
                        }}
                    >
                        {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'var(--bg-darker)',
                            zIndex: 40,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        <Link to="/" onClick={() => setIsOpen(false)} style={{ fontSize: '3rem', fontFamily: "'Anton', sans-serif", color: 'var(--primary)', marginBottom: '2rem' }}>ACCUEIL</Link>
                        <a href={getHref('#menu')} onClick={() => setIsOpen(false)} style={{ fontSize: '2.5rem', fontFamily: "'Anton', sans-serif", color: '#fff' }}>LA CARTE</a>
                        <a href={getHref('#concept')} onClick={() => setIsOpen(false)} style={{ fontSize: '2.5rem', fontFamily: "'Anton', sans-serif", color: '#fff' }}>LE CONCEPT</a>
                        <a href={getHref('#location')} onClick={() => setIsOpen(false)} style={{ fontSize: '2.5rem', fontFamily: "'Anton', sans-serif", color: '#fff' }}>RESTAURANTS</a>

                        <a
                            href="https://www.ubereats.com/store/fifteen/HlYxsy62UzeHjO4kQWZfWA"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            style={{
                                backgroundColor: 'var(--primary)',
                                color: '#000',
                                padding: '1rem 3rem',
                                fontSize: '1.5rem',
                                borderRadius: '50px',
                                textTransform: 'uppercase',
                                marginTop: '2rem',
                                textDecoration: 'none',
                                fontFamily: "'Anton', sans-serif"
                            }}
                        >
                            Commander UberEats
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
