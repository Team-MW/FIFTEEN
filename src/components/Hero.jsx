import React from 'react';
import { motion } from 'framer-motion';
import tandooriImg from '../assets/tandoori.png';
import chickenImg from '../assets/chicken.png';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#050505',
            overflow: 'hidden',
            paddingTop: '100px',
            paddingBottom: '2rem',
            display: 'flex',
            alignItems: 'center'
        }}>

            {/* Background Text Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '0%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(255, 206, 0, 0.15) 0%, transparent 60%)',
                filter: 'blur(100px)',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

                {/* HUGE POP-ART TEXT AREA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 50%', minWidth: '300px', position: 'relative', zIndex: 5 }}
                >
                    <h1 style={{
                        fontFamily: "'Anton', sans-serif",
                        fontSize: 'clamp(4.5rem, 10vw, 12rem)',
                        lineHeight: 0.9,
                        color: '#fff',
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        L'ART DU <br />
                        VRAI SMASH <br />
                        <span className="text-primary">& GÉCHAR</span>
                    </h1>

                    {/* Animated Squiggly Line */}
                    <svg viewBox="0 0 500 30" style={{ width: '90%', maxWidth: '600px', margin: '1rem 0 2rem 0' }} fill="none" stroke="var(--primary)" strokeWidth="8" strokeLinecap="round">
                        <path d="M 5 15 Q 50 30 100 15 T 200 15 T 300 15 T 400 15 T 495 15">
                            <animate attributeName="d" dur="3s" repeatCount="indefinite" values="
                M 5 15 Q 50 30 100 15 T 200 15 T 300 15 T 400 15 T 495 15;
                M 5 20 Q 50 5 100 20 T 200 20 T 300 20 T 400 20 T 495 20;
                M 5 15 Q 50 30 100 15 T 200 15 T 300 15 T 400 15 T 495 15" />
                        </path>
                    </svg>

                    {/* Hand drawn arrow pointing to cards */}
                    <div className="desktop-only" style={{ position: 'absolute', right: '-10%', bottom: '15%', width: '120px' }}>
                        <svg viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(10deg)' }}>
                            <path d="M 20 20 Q 60 20 80 80 M 50 70 L 80 80 L 90 50" />
                        </svg>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }} className="stack-mobile">
                        <a href="https://www.ubereats.com/store/fifteen/HlYxsy62UzeHjO4kQWZfWA" target="_blank" rel="noopener noreferrer" style={{
                            background: 'var(--primary)',
                            color: '#000',
                            padding: '1.2rem 3rem',
                            fontSize: '1.3rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontFamily: "'Anton', sans-serif",
                            textDecoration: 'none',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(255, 206, 0, 0.2)',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            COMMANDER
                        </a>
                    </div>
                </motion.div>

                {/* TALL 'POLAROID / PHONE' CARDS */}
                <div style={{ flex: '1 1 45%', minWidth: '300px', position: 'relative', height: 'clamp(500px, 60vh, 700px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    {/* Top/Right Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: 12 }}
                        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
                        style={{
                            position: 'absolute',
                            top: '5%',
                            right: '5%',
                            width: 'clamp(180px, 20vw, 320px)',
                            height: 'clamp(280px, 30vw, 480px)',
                            borderRadius: '24px',
                            border: '6px solid #222',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.9)',
                            overflow: 'hidden',
                            zIndex: 2,
                            backgroundColor: '#111'
                        }}
                    >
                        <img src={tandooriImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Le Tandoori Sandwich" />
                    </motion.div>

                    {/* Bottom/Left Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: -8 }}
                        transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                        style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '5%',
                            width: 'clamp(180px, 20vw, 320px)',
                            height: 'clamp(280px, 30vw, 480px)',
                            borderRadius: '24px',
                            border: '8px solid var(--primary)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.9)',
                            overflow: 'hidden',
                            zIndex: 3,
                            backgroundColor: '#111'
                        }}
                    >
                        <img src={chickenImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Le Sandwich Poulet Fromagère" />
                    </motion.div>

                    {/* Bold text floating on the far right */}
                    <motion.div
                        className="desktop-only"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{
                            position: 'absolute',
                            right: '-8%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0rem',
                            zIndex: 1
                        }}
                    >
                        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(4rem, 8vw, 10rem)', lineHeight: 0.8, color: '#222', m: 0 }}>C'EST</h2>
                        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(4rem, 8vw, 10rem)', lineHeight: 0.8, color: '#222', m: 0 }}>ICI.</h2>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
