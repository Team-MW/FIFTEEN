import React from 'react';
import { motion } from 'framer-motion';
import tandooriImg from '../assets/tandoori.png';

const menuItems = [
    {
        id: 1,
        title: 'SANDWICH TANDOORI',
        price: '8.50€',
        description: 'Notre spécialité incontournable : Poulet mariné savoureux aux épices tandoori, pain sandwich maison, sauce blanche, salade fraîche.',
        image: tandooriImg
    },
    {
        id: 2,
        title: 'THE CLASSIC BURGER',
        price: '9.00€',
        description: 'Double steak 100% bœuf, double cheddar, pickles, oignons caramélisés, sauce secrète, pain brioché.',
        image: '/hero_burger_1773831784968.png'
    },
    {
        id: 3,
        title: 'FRITES MAISON',
        price: '3.50€',
        description: 'Nos véritables frites maison, coupées chaque matin et cuites à la perfection pour un croustillant inégalé.',
        image: '/fries_1773831809051.png'
    },
    {
        id: 4,
        title: 'SANDWICH MAISON',
        price: '8.00€',
        description: 'Le classique incontournable : pain artisanal de qualité, garnitures au choix, viandes 100% halal.',
        image: '/hero_burger_1773831784968.png'
    }
];

const Menu = () => {
    return (
        <section id="menu" className="section-padding" style={{ backgroundColor: 'var(--bg-darker)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>LA <span className="text-secondary">CARTE</span></h2>
                    <p style={{ fontSize: '1.1rem', color: '#999', maxWidth: '600px', margin: '0.5rem auto' }}>
                        Notre spécialité Tandoori, des sandwichs et burgers préparés à la commande, avec des frites maison incroyables.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    padding: '1rem 0'
                }}>
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: '#111',
                                borderRadius: '20px',
                                padding: '1.5rem',
                                border: '1px solid #222',
                                transition: 'transform 0.3s ease, border-color 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#222';
                            }}
                        >
                            <div style={{
                                height: '200px',
                                position: 'relative',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        maxHeight: '100%',
                                        maxWidth: '100%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.7))',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05) rotate(3deg)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1) rotate(0)'}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', lineHeight: 1.1 }}>{item.title}</h3>
                                <span style={{
                                    fontFamily: "'Anton', sans-serif",
                                    fontSize: '1.2rem',
                                    color: '#fff',
                                    background: 'var(--secondary)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px',
                                    flexShrink: 0
                                }}>{item.price}</span>
                            </div>
                            <p style={{ color: '#aaa', lineHeight: 1.5, fontSize: '0.95rem' }}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <button style={{
                        background: 'transparent',
                        color: 'var(--primary)',
                        border: '2px solid var(--primary)',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        maxWidth: '300px'
                    }}
                        onMouseOver={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#000'; }}
                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}
                    >
                        VOIR TOUT LE MENU
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
