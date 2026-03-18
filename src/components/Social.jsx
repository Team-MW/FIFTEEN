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
        <section className="section-padding" style={{ backgroundColor: '#000', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff', marginBottom: '1rem' }}
                >
                    JOIN THE <span className="text-secondary">CLUB</span>
                </motion.h2>
                <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '4rem' }}>
                    Suivez <strong className="text-primary">@fifteen.toulouse</strong> sur Instagram !
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
                                border: '2px solid #222',
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
                                    background: 'rgba(227, 24, 55, 0.8)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 10
                                }}
                            >
                                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '2rem', color: '#fff', transform: 'translateY(20px)', transition: 'transform 0.3s ease' }} className="social-icon">❤️</span>
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
                        color: '#fff',
                        border: '2px solid #fff',
                        padding: '1rem 3rem',
                        fontSize: '1.1rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                    }}
                        onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                    >
                        SUIVEZ-NOUS SUR INSTAGRAM
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Social;
