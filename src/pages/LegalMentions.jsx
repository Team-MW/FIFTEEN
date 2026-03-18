import React from 'react';

const LegalMentions = () => {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '8rem', backgroundColor: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '800px', color: '#ddd', fontFamily: "'Inter', sans-serif" }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--primary)', marginBottom: '3rem', borderBottom: '2px solid #222', paddingBottom: '1rem' }}>
                    MENTIONS LÉGALES
                </h1>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem', textTransform: 'none', fontFamily: "'Inter', sans-serif" }}>1. Éditeur du site</h2>
                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                        Le site <strong>fifteen.fr</strong> est édité par le restaurant FIFTEEN.
                        <br />Siège social : 15 avenue de Muret, 31300 Toulouse
                        <br />RCS : Toulouse B 123 456 789
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem', textTransform: 'none', fontFamily: "'Inter', sans-serif" }}>2. Hébergement</h2>
                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                        Ce site est hébergé par Vercel Inc.
                        <br />340 S Lemon Ave #4133
                        <br />Walnut, CA 91789, USA
                        <br />Site web : https://vercel.com
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem', textTransform: 'none', fontFamily: "'Inter', sans-serif" }}>3. Propriété intellectuelle</h2>
                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                        L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques liées à FIFTEEN.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem', textTransform: 'none', fontFamily: "'Inter', sans-serif" }}>4. Données personnelles</h2>
                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                        Conformément à la réglementation européenne en vigueur (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, et de portabilité des données vous concernant si elles sont collectées.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default LegalMentions;
