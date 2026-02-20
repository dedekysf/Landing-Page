import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import HeroB from './HeroB';
import FeaturesB from './FeaturesB';
import ActivationStepsB from './ActivationStepsB';
import CTAB from './CTAB';

const VersionB: React.FC = () => {
    return (
        <div style={{ background: '#0f172a', minHeight: '100vh', color: 'white', fontFamily: "'Inter', sans-serif" }}>
            <Navbar />
            <HeroB />
            <ActivationStepsB />
            <FeaturesB />

            {/* Social Proof - Dark Mode */}
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center', borderTop: '1px solid #1e293b' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Built for teams tired of managing projects in WhatsApp threads.</h2>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
                    “We invited our site team in minutes, and everyone instantly knew their tasks. No more lost updates in WhatsApp.”
                </p>
                <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#e2e8f0' }}>— Project Manager, Construction Team</p>
            </div>

            {/* Objection Handling - Dark Mode */}
            <div className="container" style={{ padding: '4rem 1rem', background: '#1e293b', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'white' }}>Simple for your crew. Ready on day one.</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {['Familiar chat experience', 'Mobile-ready', 'Start alone, invite later'].map((item, i) => (
                        <div key={i} style={{ background: '#0f172a', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid #334155' }}>
                            <span style={{ color: '#18A87D', fontWeight: 'bold' }}>✓</span> {item}
                        </div>
                    ))}
                </div>
            </div>

            <CTAB />
            <Footer />
        </div>
    );
};
export default VersionB;
