import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: '80px',
            background: 'radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                        lineHeight: 0.9,
                        color: 'var(--primary)',
                        textShadow: '0 10px 30px rgba(0,0,0,0.8)',
                        marginBottom: '1rem',
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    SMASH OR<br />PASS?
                </motion.h1>

                <motion.p
                    className="hero-desc"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontWeight: '600',
                        maxWidth: '600px',
                        color: '#ddd',
                        marginBottom: '3rem',
                        zIndex: 2
                    }}
                >
                    Bienvenue chez <span className="text-primary">FIFTEEN</span>. La nouvelle référence du smash burger et du fried chicken premium.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ zIndex: 2 }}
                >
                    <button style={{
                        background: 'var(--primary)',
                        color: '#000',
                        padding: '1.2rem 3rem',
                        fontSize: '1.5rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        boxShadow: '0 10px 25px rgba(255, 206, 0, 0.4)',
                        transition: 'transform 0.3s ease, background 0.3s ease',
                        border: '2px solid transparent'
                    }}
                        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.background = '#fff'; }}
                        onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--primary)'; }}
                    >
                        VOIR LA CARTE
                    </button>
                </motion.div>
            </div>

            <motion.div
                className="hero-burger-img"
                initial={{ y: 150, opacity: 0, rotate: -5 }}
                animate={{ y: [0, -20, 0], opacity: 1, rotate: [0, 2, 0] }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 1 }
                }}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    pointerEvents: 'none',
                    filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8))'
                }}
            >
                <img
                    src="/hero_burger_1773831784968.png"
                    alt="Premium Smash Burger"
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </motion.div>

            {/* Decorative Elements */}
            <div className="desktop-only" style={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                opacity: 0.1,
                filter: 'blur(40px)',
                zIndex: 0
            }}></div>
        </section>
    );
};

export default Hero;
