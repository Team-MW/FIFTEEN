import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', paddingTop: '5rem', borderTop: '1px solid #222' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', paddingBottom: '4rem' }}>

                {/* Brand */}
                <div>
                    <h2 style={{ fontSize: '3.5rem', color: 'var(--primary)', letterSpacing: '2px', marginBottom: '1rem' }}>FIFTEEN</h2>
                    <p style={{ color: '#777', lineHeight: 1.6, marginBottom: '2rem' }}>
                        L'expert du smash burger et du poulet frit premium. Goûtez la différence.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: '#fff', background: '#222', padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = '#222'}>
                            <Instagram size={20} />
                        </a>
                        <a href="#" style={{ color: '#fff', background: '#222', padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = '#222'}>
                            <Facebook size={20} />
                        </a>
                        <a href="#" style={{ color: '#fff', background: '#222', padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.background = '#222'}>
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>LIENS UTILES</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li><a href="#" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>La Carte</a></li>
                        <li><a href="#" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>Notre Histoire</a></li>
                        <li><a href="#" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>Click & Collect</a></li>
                        <li><a href="#" style={{ color: '#888', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>FAQ</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>CONTACT</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#888' }}>
                            <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <span>15 Rue de la Victoire<br />75009 Paris, France</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#888' }}>
                            <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <a href="mailto:contact@fifteen.fr" style={{ transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.color = '#888'}>contact@fifteen.fr</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div style={{ background: '#111', padding: '1.5rem 0', textAlign: 'center', borderTop: '1px solid #222' }}>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} FIFTEEN. Tous droits réservés. | Mentions légales
                </p>
            </div>
        </footer>
    );
};

export default Footer;
