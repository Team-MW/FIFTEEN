import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const locations = [
    { city: "Paris (Opéra)", address: "15 Rue de la Victoire, 75009 Paris", stat: "OUVERT" },
    { city: "Lyon (Presqu'île)", address: "42 Rue de la République, 69002 Lyon", stat: "NOUVEAU" },
    { city: "Marseille (Vieux-Port)", address: "8 Quai des Belges, 13001 Marseille", stat: "OUVERT" },
    { city: "Bordeaux", address: "Prochainement", stat: "BIENTÔT" }
];

const Location = () => {
    return (
        <section id="location" className="section-padding" style={{ backgroundColor: '#000', borderTop: '2px solid #222' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>OÙ NOUS <span className="text-primary">TROUVER</span></h2>
                    <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '0.5rem auto' }}>
                        Partout en France, on vient smasher près de vous.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: '#111',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid #222',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{loc.city}</h3>
                                <span style={{
                                    background: loc.stat === 'BIENTÔT' ? '#333' : 'var(--primary)',
                                    color: loc.stat === 'BIENTÔT' ? '#aaa' : '#000',
                                    fontFamily: "'Anton', sans-serif",
                                    padding: '0.3rem 0.6rem',
                                    fontSize: '0.9rem',
                                    borderRadius: '4px'
                                }}>
                                    {loc.stat}
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#999' }}>
                                <MapPin size={20} className="text-primary" style={{ flexShrink: 0 }} />
                                <p style={{ lineHeight: 1.5 }}>{loc.address}</p>
                            </div>
                            <button style={{
                                background: 'transparent',
                                color: '#fff',
                                border: '1px solid #444',
                                padding: '0.8rem 1.5rem',
                                borderRadius: '50px',
                                marginTop: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s'
                            }}
                                onMouseOver={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#000'; }}
                                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                            >
                                <Navigation size={18} /> Y aller
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Location;
