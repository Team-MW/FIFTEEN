import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section style={{
            backgroundColor: 'var(--primary)',
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            borderTop: '4px solid #000',
            borderBottom: '4px solid #000'
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

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                        color: '#000',
                        marginBottom: '1rem',
                        lineHeight: 1
                    }}
                >
                    PRÊT À SMASHER ?
                </motion.h2>
                <p style={{ color: '#222', fontSize: '1.2rem', marginBottom: '3rem', fontWeight: 600 }}>
                    Passez commande maintenant et rejoignez le mouvement FIFTEEN.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#111' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: '#000',
                        color: 'var(--primary)',
                        padding: '1.5rem 4rem',
                        fontSize: '1.5rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        border: 'none',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                        cursor: 'pointer'
                    }}
                >
                    COMMANDE EN LIGNE
                </motion.button>
            </div>
        </section>
    );
};

export default Banner;
