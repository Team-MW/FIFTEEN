import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section id="concept" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                    {/* Instagram Embed Iframe */}
                    <iframe
                        src="https://www.instagram.com/p/DJuFIiqs_9y/embed"
                        width="100%"
                        height="500"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        style={{
                            borderRadius: '20px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                            border: '2px solid #222',
                            backgroundColor: '#fff',
                            maxWidth: '400px'
                        }}
                        title="Fifteen Instagram Video"
                    ></iframe>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>NOTRE <span className="text-primary">CONCEPT</span></h2>
                    <h3 style={{ fontSize: '1.5rem', color: '#888', marginBottom: '2rem', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none' }}>
                        Burgers, sandwichs et frites 100% halal et faits maison.
                    </h3>
                    <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        Créé en 2022, <strong>FIFTEEN</strong> s'est imposé avec un seul but : proposer <strong>les sandwichs les plus géchar de Toulouse</strong> 🔥. On a mélangé l'art du bon burger avec la street-food authentique ultra-généreuse, notamment avec notre incontournable poulet Tandoori maison.
                    </p>
                    <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                        Ici, zéro galère, que du lourd : toutes nos viandes sont strictement certifiées halal, nos frites de compétition sont coupées et cuites sur place, et les portions sont étudiées pour caler même les plus grosses faims. Pas de compromis sur le goût, on casse les codes.
                    </p>

                    <div className="stack-mobile" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://www.ubereats.com/store/fifteen/HlYxsy62UzeHjO4kQWZfWA" target="_blank" rel="noopener noreferrer" style={{
                            background: 'var(--primary)',
                            color: '#000',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '4px',
                            fontWeight: 700,
                            fontFamily: "'Anton', sans-serif",
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}>
                            UBER EATS
                        </a>
                        <a href="#menu" style={{
                            background: '#222',
                            color: '#fff',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '4px',
                            fontWeight: 700,
                            fontFamily: "'Anton', sans-serif",
                            border: '1px solid #444',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}>
                            VOIR LE MENU
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Story;
