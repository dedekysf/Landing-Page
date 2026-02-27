import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroV2 from '../components/sections/HeroV2';
import Features from '../components/sections/Features';
import ActivationSteps from '../components/sections/ActivationSteps';
import InviteMoment from '../components/sections/InviteMoment';
import Pricing from '../components/sections/Pricing';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';
import { ArrowDown, Clock, TrendingUp } from 'lucide-react';
import constructionTeamImg from '../assets/project-leader.png';
import styles from './HomeV2.module.css';

const HomeV2: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            {/* Content wrapper */}
            <div className={styles.contentWrapper}>
                <HeroV2 />
                <ActivationSteps />
                <Features />
                <InviteMoment />
                <Pricing />

                {/* Real Results Section */}
                <section className={styles.resultsSection}>
                    <div className={styles.resultsContainer}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className={styles.resultsCard}
                        >
                            {/* Large blurred blobs — behind everything (z-index 0) */}
                            <div className={styles.blobGreen} />
                            <div className={styles.blobBlue} />

                            {/* Left: Stats */}
                            <div className={styles.resultsLeft}>
                                <h2 className={styles.resultsTitle}>
                                    Real Results
                                </h2>
                                <p className={styles.resultsDesc}>
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
                                        className={styles.statItem}
                                    >
                                        <div className={styles.statIcon} style={{ background: item.bg, boxShadow: `0 4px 12px ${item.bg}40` }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className={styles.statValue}>{item.stat}</div>
                                            <div className={styles.statText}>{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className={styles.resultsCta}
                                >
                                    <Button size="lg" className={styles.resultsBtn} fullWidth>Start For Free</Button>
                                </motion.div>
                            </div>

                            {/* Right: Photo */}
                            <div className={styles.resultsRight}>
                                <img
                                    src={constructionTeamImg}
                                    alt="Project leader using TaskTag at a residential construction site"
                                    className={styles.resultsImage}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA - Bold Gradient Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaGlow} />

                    <div className={styles.ctaContainer}>
                        <h2 className={styles.ctaTitle}>
                            Start your next project <br />the right way.
                        </h2>

                        <div className={styles.ctaBtnWrapper}>
                            <div className={styles.ctaBtnBox}>
                                <Button size="lg" className={styles.finalCtaBtn}>
                                    Start For Free
                                </Button>
                            </div>
                        </div>

                        {/* Mockup screenshots */}
                        <div className={styles.mockupsWrapper}>
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
                                            {['Project', 'My Tasks', 'Activity'].map((t, i) => (
                                                <div key={i} style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, background: i === 0 ? '#18A87D' : '#f1f3f5', color: i === 0 ? '#fff' : '#6b7280' }}>{t}</div>
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
                                    <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>9:41</span>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        {[1, 2, 3].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: 2, background: '#fff', opacity: 0.7 }} />)}
                                    </div>
                                </div>
                                <div style={{ padding: '10px 12px' }}>

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
                    <Footer />
                </section>
            </div>
        </div >
    );
};

export default HomeV2;
