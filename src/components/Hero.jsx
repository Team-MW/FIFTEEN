import React from 'react';
import { motion } from 'framer-motion';
import tandooriImg from '../assets/tandoori.png';
import chickenImg from '../assets/chicken.png';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Text Glow */}
            <div className="hero-glow"></div>

            <div className="container hero-container">
                {/* HUGE POP-ART TEXT AREA */}
                <motion.div
                    className="hero-text-area"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title-main">
                        LE VRAI <br />
                        SANDWICH <br />
                        <span className="text-primary">& GÉCHAR</span>
                    </h1>

                    {/* Animated Squiggly Line */}
                    <svg className="hero-squiggly" viewBox="0 0 500 30" fill="none" stroke="var(--primary)" strokeWidth="8" strokeLinecap="round">
                        <path d="M 5 15 Q 50 30 100 15 T 200 15 T 300 15 T 400 15 T 495 15">
                            <animate attributeName="d" dur="3s" repeatCount="indefinite" values="
                M 5 15 Q 50 30 100 15 T 200 15 T 300 15 T 400 15 T 495 15;
                M 5 20 Q 50 5 100 20 T 200 20 T 300 20 T 400 20 T 495 20;
                M 5 15 Q 50 30 100 15 T 200 15 T 300 15 T 400 15 T 495 15" />
                        </path>
                    </svg>

                    {/* Hand drawn arrow pointing to cards */}
                    <div className="desktop-only hero-arrow">
                        <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(10deg)' }}>
                            <path d="M 20 20 Q 60 20 80 80 M 50 70 L 80 80 L 90 50" />
                        </svg>
                    </div>

                    <div className="stack-mobile hero-cta-container">
                        <a href="https://www.ubereats.com/store/fifteen/HlYxsy62UzeHjO4kQWZfWA" target="_blank" rel="noopener noreferrer" className="hero-cta-button"
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            COMMANDER
                        </a>
                    </div>
                </motion.div>

                {/* TALL 'POLAROID / PHONE' CARDS */}
                <div className="hero-cards-area">

                    {/* Top/Right Card */}
                    <motion.div
                        className="hero-card hero-card-1"
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: 12 }}
                        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                    >
                        <img src={tandooriImg} alt="Le Tandoori Sandwich" />
                    </motion.div>

                    {/* Bottom/Left Card */}
                    <motion.div
                        className="hero-card hero-card-2"
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: -8 }}
                        transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                    >
                        <img src={chickenImg} alt="Le Sandwich Poulet Fromagère" />
                    </motion.div>

                    {/* Bold text floating on the far right */}
                    <motion.div
                        className="desktop-only hero-floating-text"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h2>C'EST</h2>
                        <h2>ICI.</h2>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
