import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import HeroA from './HeroA';
import FeaturesA from './FeaturesA';
import ActivationStepsA from './ActivationStepsA';
import InviteMomentA from './InviteMomentA';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { ArrowDown, Clock, TrendingUp } from 'lucide-react';
import constructionTeamImg from '../../assets/construction-team.png';

// Version A: Refactored SaaS Vibrant Design
const VersionA: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Navbar />
            {/* Content wrapper — NO filter here so Navbar position:fixed works */}
            <div style={{ animation: 'pageBlurIn 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' }}>
                <HeroA />
                <ActivationStepsA />
                <FeaturesA />
                <InviteMomentA />

                {/* Real Results Section */}
                <section style={{ padding: '5rem 1rem', background: '#ffffff' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            style={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4rem',
                                background: '#ffffff',
                                borderRadius: '24px',
                                padding: '4rem',
                                flexWrap: 'wrap',
                                border: '1px solid rgba(24,168,125,0.12)',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Large blurred blobs — behind everything (z-index 0) */}
                            <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '350px', height: '350px', background: 'rgba(24,168,125,0.18)', borderRadius: '50%', zIndex: 0, filter: 'blur(60px)' }} />
                            <div style={{ position: 'absolute', bottom: '-80px', right: '-60px', width: '380px', height: '380px', background: 'rgba(184,230,233,0.4)', borderRadius: '50%', zIndex: 0, filter: 'blur(70px)' }} />
                            {/* Left: Stats */}
                            <div style={{ flex: '1 1 360px', minWidth: '280px', position: 'relative', zIndex: 1 }}>
                                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                                    Real Results
                                </h2>
                                <p style={{ color: '#303742', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                    Teams using TaskTag see measurable improvements in just the first month.
                                </p>

                                {/* Stat items */}
                                {[
                                    { icon: <ArrowDown size={20} strokeWidth={2.5} color="#fff" />, bg: '#18A87D', stat: '40% Less Rework', desc: 'Clear communication means fewer costly mistakes' },
                                    { icon: <Clock size={20} strokeWidth={2.5} color="#fff" />, bg: '#138EFF', stat: '5 Hours Saved Weekly', desc: 'Per team member, on average' },
                                    { icon: <TrendingUp size={20} strokeWidth={2.5} color="#fff" />, bg: '#7B61FF', stat: '95% Task Completion', desc: 'Nothing falls through the cracks anymore' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.12 }}
                                        viewport={{ once: true }}
                                        style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.75rem' }}
                                    >
                                        <div style={{
                                            width: '44px', height: '44px', borderRadius: '12px',
                                            background: item.bg, display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', flexShrink: 0,
                                            boxShadow: `0 4px 12px ${item.bg}40`
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{item.stat}</div>
                                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right: Photo */}
                            <div style={{ flex: '1 1 360px', minWidth: '280px', position: 'relative', zIndex: 1 }}>
                                <img
                                    src={constructionTeamImg}
                                    alt="Construction team collaborating with TaskTag"
                                    style={{
                                        width: '100%',
                                        borderRadius: '18px',
                                        objectFit: 'cover',
                                        height: '480px',
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA - Bold Gradient Section */}
                <section style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #035B60 0%, #18A87D 40%, #00D9A5 100%)',
                    padding: '7rem 1rem 0',
                    textAlign: 'center',
                }}>
                    {/* Subtle radial glow overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 20%, rgba(0,217,165,0.25) 0%, transparent 70%)', zIndex: 0 }} />

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto' }}>


                        <h2 style={{
                            fontSize: '3.5rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '-0.01em',
                            lineHeight: 1.4,
                            marginBottom: '2rem',
                        }}>
                            Start your next project <br />the right way.
                        </h2>

                        <Button size="lg" style={{
                            background: '#ffffff',
                            color: '#035B60',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            padding: '0.9rem 2.5rem',
                            borderRadius: '50px',
                            border: 'none',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            marginBottom: '5rem',
                        }}>
                            Start For Free
                        </Button>

                        {/* Mockup screenshots */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            gap: '1.5rem',
                            marginTop: '1rem',
                        }}>
                            {/* Desktop mockup */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'rgba(255,255,255,0.95)',
                                    borderRadius: '16px 16px 0 0',
                                    overflow: 'hidden',
                                    boxShadow: '0 -8px 60px rgba(0,0,0,0.2)',
                                    width: '100%',
                                    maxWidth: '620px',
                                    border: '1px solid rgba(255,255,255,0.5)',
                                    borderBottom: 'none',
                                }}
                            >
                                {/* Fake browser bar */}
                                <div style={{ background: '#f1f3f5', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #e0e0e0' }}>
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
                                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                                    <div style={{ flex: 1, margin: '0 12px', background: '#e0e0e0', borderRadius: '4px', height: '18px' }} />
                                </div>
                                {/* App UI inside */}
                                <div style={{ display: 'flex', height: '220px' }}>
                                    {/* Sidebar */}
                                    <div style={{ width: '56px', background: '#035B60', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '16px', gap: '16px' }}>
                                        {['#B8E6E9', '#B2E8D4', '#B8E6E9', '#B2E8D4'].map((c, i) => (
                                            <div key={i} style={{ width: 28, height: 28, borderRadius: '8px', background: c, opacity: i === 0 ? 1 : 0.4 }} />
                                        ))}
                                    </div>
                                    {/* Content */}
                                    <div style={{ flex: 1, padding: '20px', background: '#fff' }}>
                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                                            {['Project', 'My Tasks', 'Activity', 'Contact'].map((t, i) => (
                                                <div key={i} style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600, background: i === 0 ? '#18A87D' : '#f1f3f5', color: i === 0 ? '#fff' : '#6b7280' }}>{t}</div>
                                            ))}
                                        </div>
                                        {[0, 1, 2].map(i => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid #f1f3f5' }}>
                                                <div style={{ width: 16, height: 16, borderRadius: '50%', background: i === 0 ? '#18A87D' : '#e0e0e0' }} />
                                                <div style={{ flex: 1, height: 8, borderRadius: 4, background: '#f1f3f5' }} />
                                                <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#B2E8D4' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mobile mockup */}
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                style={{
                                    background: '#1a1a2e',
                                    borderRadius: '24px 24px 0 0',
                                    overflow: 'hidden',
                                    boxShadow: '0 -8px 60px rgba(0,0,0,0.3)',
                                    width: '160px',
                                    flexShrink: 0,
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderBottom: 'none',
                                }}
                            >
                                {/* Phone status bar */}
                                <div style={{ background: '#111', padding: '10px 16px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#fff', fontSize: '0.6rem', fontWeight: 600 }}>9:41</span>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        {[1, 2, 3].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: 2, background: '#fff', opacity: 0.7 }} />)}
                                    </div>
                                </div>
                                <div style={{ padding: '10px 12px' }}>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>TaskTag</div>
                                    {[0, 1, 2, 3].map(i => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                            <div style={{ width: 20, height: 20, borderRadius: '6px', background: i % 2 === 0 ? '#18A87D' : '#035B60', flexShrink: 0 }} />
                                            <div>
                                                <div style={{ height: 5, borderRadius: 3, background: '#ffffff30', width: '70px', marginBottom: '3px' }} />
                                                <div style={{ height: 4, borderRadius: 3, background: '#ffffff20', width: '50px' }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default VersionA;
