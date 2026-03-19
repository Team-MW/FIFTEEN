import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        q: "Proposez-vous une alternative veggie ?",
        a: "Oui, nous proposons une alternative végétarienne de très haute qualité sur presque toutes nos recettes, avec un steak végétal maison qui respecte l'ADN de nos sandwichs."
    },
    {
        q: "D'où proviennent vos viandes ?",
        a: "Notre viande rouge (100% bœuf) provient des meilleures fermes certifiées avec une traçabilité parfaite. Nous utilisons une technique de vieillissement à sec pour maximiser les saveurs."
    },
    {
        q: "Est-il possible de commander en ligne ?",
        a: "Bien sûr ! Vous disposez d'un service de Click & Collect dans tous nos restaurants FIFTEEN via le bouton 'Commander' du site pour éviter toute file d'attente."
    },
    {
        q: "Avez-vous le menu Allergènes ?",
        a: "Oui, vous pouvez demander le tableau détaillé de tous nos allergènes à la caisse de chaque restaurant FIFTEEN."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>F.A.<span className="text-secondary">Q</span></h2>
                    <p style={{ fontSize: '1.2rem', color: '#888', margin: '0.5rem auto' }}>
                        Toutes vos questions, nos réponses.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#111',
                                border: '1px solid #222',
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <button
                                onClick={() => toggle(index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.5rem',
                                    background: 'transparent',
                                    color: '#fff',
                                    textAlign: 'left',
                                    textTransform: 'none',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '1.1rem'
                                }}
                            >
                                {item.q}
                                {openIndex === index ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#999', lineHeight: 1.6 }}>
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
