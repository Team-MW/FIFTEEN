import React from 'react';
import { motion } from 'framer-motion';

const Promo10Euros = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: '#111', borderBottom: '2px solid #222' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>

                {/* Left Side : Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'inline-block', background: 'var(--primary)', color: '#000', padding: '0.4rem 1rem', fontFamily: "'Anton', sans-serif", fontSize: '1.2rem', borderRadius: '4px', marginBottom: '1.5rem', transform: 'rotate(-2deg)' }}>
                        L'OFFRE INCONTOURNABLE
                    </div>

                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1 }}>
                        VOTRE SANDWICH À <span className="text-primary">10 BALLES</span> MAX !
                    </h2>

                    <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                        Oui, vous avez bien lu. Tous nos sandwichs ultra généreux sont à seulement <strong>10€</strong>.
                    </p>
                    <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                        Poulet Tandoori mariné, viandes fondantes, frites fraîches incluses ou suppléments de folie... Chez FIFTEEN, on régale la street avec les sandwichs les plus géchar de Toulouse sans vider votre portefeuille. Matez la vidéo pour comprendre la taille du bordel 👇.
                    </p>

                    <div className="stack-mobile" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://www.ubereats.com/fr/store/fifteen/HIYxsy62UzeHjO4kQWZfWA?srsltid=AfmBOoq1g_Sawp0cbP9RNuSVSCUqFN7AfRW2Fzt0PdIB3xdf1XMwcd4I" target="_blank" rel="noopener noreferrer" style={{
                            background: 'var(--primary)',
                            color: '#000',
                            padding: '1rem 3rem',
                            fontSize: '1.2rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontFamily: "'Anton', sans-serif",
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            textAlign: 'center',
                            boxShadow: '0 10px 20px rgba(255, 206, 0, 0.2)',
                            transition: 'transform 0.3s'
                        }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            RÉSERVER LE MIEN
                        </a>
                    </div>
                </motion.div>

                {/* Right Side : Video */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                    <iframe
                        src="https://www.instagram.com/p/DSDoH28DB1N/embed"
                        width="100%"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        style={{
                            borderRadius: '20px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                            border: '2px solid var(--primary)',
                            backgroundColor: '#fff',
                            maxWidth: '400px',
                            transform: 'rotate(2deg)'
                        }}
                        title="Promo Sandwich 10e Instagram"
                    ></iframe>
                </motion.div>

            </div>
        </section>
    );
};

export default Promo10Euros;
