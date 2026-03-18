import React from 'react';
import { Instagram, MapPin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // using actual logo file from src/assets

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', paddingTop: '5rem', borderTop: '1px solid #222' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', paddingBottom: '4rem' }}>

                {/* Brand / Logo */}
                <div>
                    <img
                        src={Logo}
                        alt="FIFTEEN Logo"
                        style={{
                            width: '120px',
                            height: 'auto',
                            marginBottom: '1.5rem',
                            filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.5))'
                        }}
                    />
                    <p style={{ color: '#777', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Burgers et sandwichs halal maison 🍔🍟<br />Frites maison
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://instagram.com/fifteen.toulouse" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#222', padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = '#222'}>
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.ubereats.com/store/fifteen/HlYxsy62UzeHjO4kQWZfWA" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#222', padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = '#222'}>
                            <ShoppingBag size={20} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>LIENS UTILES</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li><a href="/#menu" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>La Carte</a></li>
                        <li><a href="/#location" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>Restaurants</a></li>
                        <li><a href="/#faq" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>FAQ</a></li>
                        <li><Link to="/mentions-legales" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>Mentions légales</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>CONTACT</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#888' }}>
                            <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <span>15 avenue de Muret<br />31300 Toulouse</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div style={{ background: '#111', padding: '1.5rem 0', textAlign: 'center', borderTop: '1px solid #222' }}>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} FIFTEEN. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
