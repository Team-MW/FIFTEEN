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
                >
                    <img
                        src="/fried_chicken_1773831797726.png"
                        alt="Crispy Fried Chicken"
                        style={{
                            width: '100%',
                            borderRadius: '20px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                            border: '2px solid #222'
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>NOTRE <span className="text-primary">CONCEPT</span></h2>
                    <h3 style={{ fontSize: '1.5rem', color: '#888', marginBottom: '2rem', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none' }}>
                        L'excellence de la street food américaine, revisitée avec passion.
                    </h3>
                    <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        Chez <strong>FIFTEEN</strong>, nous croyons qu'un bon fast-food n'est pas synonyme de mauvaise qualité. Nous avons étudié les meilleures recettes de smash burgers pour vous offrir une expérience unique : une croûte croustillante à l'extérieur, un cœur juteux à l'intérieur.
                    </p>
                    <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                        Nos viandes sont sélectionnées avec soin et certifiées, notre pain est brioché et ultra-moelleux, et notre poulet frit est mariné 24h avec notre mélange d'épices secrètes. Rejoignez le mouvement.
                    </p>

                    <div className="stack-mobile" style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{
                            background: 'var(--primary)',
                            color: '#000',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '4px',
                            fontWeight: 700,
                            fontFamily: "'Anton', sans-serif",
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            NOTRE HISTOIRE
                        </button>
                        <button style={{
                            background: '#222',
                            color: '#fff',
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '4px',
                            fontWeight: 700,
                            fontFamily: "'Anton', sans-serif",
                            border: '1px solid #444',
                            cursor: 'pointer'
                        }}>
                            LES ENGAGEMENTS
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Story;
