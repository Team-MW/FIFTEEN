import React from 'react';
import { motion } from 'framer-motion';

const Social = () => {
    const images = [
        '/hero_burger_1773831784968.png',
        '/fries_1773831809051.png',
        '/fried_chicken_1773831797726.png',
        '/hero_burger_1773831784968.png'
    ];

    return (
        <section className="section-padding" style={{
            backgroundColor: 'var(--primary)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background huge text */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                whiteSpace: 'nowrap',
                fontSize: 'clamp(10rem, 25vw, 20rem)',
                fontFamily: "'Anton', sans-serif",
                color: 'rgba(0,0,0,0.05)',
                lineHeight: 1,
                pointerEvents: 'none',
                zIndex: 0
            }}>
                CRAAAAVING
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#000', marginBottom: '1rem' }}
                >
                    JOIN THE <span className="text-secondary">CLUB</span>
                </motion.h2>
                <p style={{ color: '#000', fontSize: '1.2rem', marginBottom: '4rem', fontWeight: 600 }}>
                    Suivez <strong className="text-primary" style={{ color: '#000', textShadow: 'none' }}>@fifteen.toulouse</strong> sur Instagram !
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            style={{
                                aspectRatio: '1 / 1',
                                background: '#111',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                                border: '2px solid #000',
                                cursor: 'pointer'
                            }}
                            className="social-card"
                        >
                            {/* Instagram Hover Overlay */}
                            <div
                                className="social-overlay"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(0, 0, 0, 0.8)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 10
                                }}
                            >
                                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '2rem', color: 'var(--primary)', transform: 'translateY(20px)', transition: 'transform 0.3s ease' }} className="social-icon">❤️</span>
                            </div>

                            <img
                                src={src}
                                alt="Community post"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    padding: '2rem',
                                    filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))',
                                    transition: 'transform 0.5s ease'
                                }}
                                className="social-img"
                            />
                        </motion.div>
                    ))}
                </div>

                <style jsx="true">{`
          .social-card:hover .social-overlay {
            opacity: 1 !important;
          }
          .social-card:hover .social-icon {
            transform: translateY(0) !important;
          }
          .social-card:hover .social-img {
            transform: scale(1.1) !important;
          }
        `}</style>

                <div style={{ marginTop: '4rem' }}>
                    <a href="https://instagram.com/fifteen.toulouse" target="_blank" rel="noopener noreferrer" style={{
                        background: 'transparent',
                        display: 'inline-block',
                        color: '#000',
                        border: '2px solid #000',
                        padding: '1rem 3rem',
                        fontSize: '1.1rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        fontWeight: 600
                    }}
                        onMouseOver={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = 'var(--primary)'; }}
                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}
                    >
                        SUIVEZ-NOUS SUR INSTAGRAM
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Social;
