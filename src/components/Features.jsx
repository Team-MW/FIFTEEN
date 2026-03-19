import React from 'react';
import { Flame, Star, Droplets, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresList = [
    {
        icon: <Flame size={32} className="text-secondary" />,
        title: "MARINADE MAISON",
        desc: "Notre poulet est laissé à mariner longuement dans nos épices tandoori secrètes pour une explosion de saveur garantie."
    },
    {
        icon: <Star size={32} className="text-secondary" />,
        title: "PAIN ARTISANAL",
        desc: "Notre pain ultra-moelleux, délicatement préparé pour accompagner parfaitement nos recettes street-food."
    },
    {
        icon: <Droplets size={32} className="text-secondary" />,
        title: "SAUCES MAISON",
        desc: "Des recettes secrètes préparées chaque jour avec des ingrédients frais. Le game changer de nos sandwichs."
    },
    {
        icon: <Award size={32} className="text-secondary" />,
        title: "QUALITÉ PREMIUM",
        desc: "Chez FIFTEEN, pas de congélateur (sauf pour nos glaces). Une fraîcheur intraitable pour un goût authentique."
    }
];

const Features = () => {
    return (
        <section className="section-padding bg-pattern" style={{ borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>NOS <span className="text-primary">RÈGLES D'OR</span></h2>
                    <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '0.5rem auto' }}>
                        La perfection dans chaque détail. Aucun compromis sur la qualité.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {featuresList.map((feat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: 'rgba(20, 20, 20, 0.8)',
                                backdropFilter: 'blur(10px)',
                                padding: '2.5rem 2rem',
                                borderRadius: '16px',
                                border: '1px solid #333',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 206, 0, 0.1)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#333';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                background: '#111',
                                padding: '1rem',
                                borderRadius: '50%',
                                border: '1px solid #222',
                                marginBottom: '1rem'
                            }}>
                                {feat.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>{feat.title}</h3>
                            <p style={{ color: '#999', lineHeight: 1.6, fontSize: '0.95rem' }}>{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
