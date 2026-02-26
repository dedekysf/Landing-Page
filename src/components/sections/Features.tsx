import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MessageSquare, Search, Activity, Hash, UserPlus2, Image, ArrowRight } from 'lucide-react';
import featureOne from '../../assets/feature-1.png';
import featureTwo from '../../assets/feature-2.png';
import featureThree from '../../assets/feature-3.png';
import featureFour from '../../assets/feature-4.png';
import featureFive from '../../assets/feature-5.png';
import featureSix from '../../assets/feature-6.png';

import styles from './Features.module.css';

const Features: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [hasEntered, setHasEntered] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { margin: '-20% 0px -20% 0px' });
    const totalTabs = 6;

    // Initial 6-second delay upon entering view
    useEffect(() => {
        if (isInView && !hasEntered) {
            const timeout = setTimeout(() => {
                setHasEntered(true);
            }, 6000);
            return () => clearTimeout(timeout);
        } else if (!isInView) {
            setHasEntered(false);
        }
    }, [isInView, hasEntered]);

    const startAutoRotate = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (!isInView || !hasEntered || isHovered) return; // Wait until visible, initial delay is over, and NOT hovered
        timerRef.current = setTimeout(() => {
            setActiveTab(prev => (prev + 1) % totalTabs);
        }, 6000);
    }, [totalTabs, isInView, hasEntered, isHovered]);

    // Auto-cycle: restart timer whenever activeTab or visibility changes
    useEffect(() => {
        startAutoRotate();
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [activeTab, startAutoRotate]);

    const handleTabClick = (i: number) => {
        setActiveTab(i);
    };

    const features = [
        {
            icon: <MessageSquare size={24} color="#FC7F5B" strokeWidth={1.5} />,
            title: "Stop rework before it starts",
            desc: "RFIs, site notes, and change approvals live in the project chat—so nothing gets buried in personal texts and comes back as paid rework.",
            color: '#FC7F5B',
            bg: 'rgba(252,127,91,0.07)',
            borderColor: 'rgba(252,127,91,0.25)',
            blobA: '#FC7F5B',
            blobB: '#FFD7C4',
            image: featureOne,
        },
        {
            icon: <Hash size={24} color="#18A87D" strokeWidth={1.5} />,
            title: "Create clear ownership fast",
            desc: "Tag the exact message to create a project task, then set the owner and due date—no retyping, no second app—so accountability is tied to the original decision.",
            color: '#18A87D',
            bg: 'rgba(24,168,125,0.07)',
            borderColor: 'rgba(24,168,125,0.25)',
            blobA: '#18A87D',
            blobB: '#B8E6E9',
            image: featureTwo,
        },
        {
            icon: <UserPlus2 size={24} color="#C072CD" strokeWidth={1.5} />,
            title: "Invoice with backup, not guesswork",
            desc: "Attach photos, PDFs, and specs to the task or project as you go—so closeout and change-order backup are ready when it’s time to bill.",
            color: '#C072CD',
            bg: 'rgba(192,114,205,0.07)',
            borderColor: 'rgba(192,114,205,0.25)',
            blobA: '#18A87D',
            blobB: '#B8E6E9',
            image: featureThree,
        },
        {
            icon: <Image size={24} color="#035B60" strokeWidth={1.5} />,
            title: "Know who was on site and when",
            desc: "Drop a pin and check in/out in the same thread—so you’ve got a clean timeline of who was on site and when.",
            color: '#035B60',
            bg: 'rgba(3,91,96,0.07)',
            borderColor: 'rgba(3,91,96,0.25)',
            blobA: '#00D9A5',
            blobB: '#18A87D',
            image: featureFour,
        },
        {
            icon: <Activity size={24} color="var(--vivid-yellow)" strokeWidth={1.5} />,
            title: "Stay ahead of slips across all jobs",
            desc: "Use one global feed to see completions, late items, and missing proof—so you know what’s ready to invoice and what’s about to slip.",
            color: 'var(--vivid-yellow)',
            bg: 'rgba(251,189,66,0.08)',
            borderColor: 'rgba(251,189,66,0.35)',
            blobA: '#035B60',
            blobB: '#18A87D',
            image: featureFive,
        },
        {
            icon: <Search size={24} color="#7B61FF" strokeWidth={1.5} />,
            title: "Win disputes in minutes, not days",
            desc: "Search across projects, tasks, contacts, and files—so you can pull approvals and receipts before a question turns into a dispute or withheld payment.",
            color: '#7B61FF',
            bg: 'rgba(123,97,255,0.07)',
            borderColor: 'rgba(123,97,255,0.25)',
            blobA: '#00D9A5',
            blobB: '#18A87D',
            image: featureSix,
        }
    ];

    const renderFeatureImage = (isMobile: boolean = false) => (
        <div className={isMobile ? styles.mobileRightContent : styles.rightContent}>
            {/* Blob container — #F7F8FA bg, clips overflow */}
            <div style={{
                position: 'absolute', inset: 0,
                background: '#F7F8FA',
                borderRadius: '24px',
                overflow: 'hidden',
                zIndex: 0,
            }}>
                {/* Left blob: rounded ketupat, sits on top */}
                <motion.div
                    animate={hasEntered ? {
                        x: ['0%', '-40%', '0%'],
                        y: [0, 10, 0],
                        rotate: [-50, -50, -50], // Adding rotation animation
                    } : { x: '0%', y: 0, rotate: -50 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute', top: '10%', right: '30%',
                        width: '90%', aspectRatio: '1/1',
                        borderRadius: '40px',
                        transformOrigin: 'center',
                        background: features[activeTab].color,
                        opacity: 0.35,
                        zIndex: 2,
                    }}
                />
                {/* Right blob: large circle showing half, moves top→bottom, behind left blob */}
                <motion.div
                    animate={hasEntered ? {
                        y: ['-20%', '40%', '-20%'],
                    } : { y: '-20%' }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    style={{
                        position: 'absolute', top: '0', right: '-30%',
                        width: '80%', aspectRatio: '1/1',
                        borderRadius: '50%',
                        background: '#18A87D',
                        opacity: 0.5,
                        zIndex: 1,
                    }}
                />
            </div>

            {/* Feature image with glass frame */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    style={{
                        position: 'relative', zIndex: 2,
                        height: '100%', width: '100%',
                        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                        padding: '0 2rem 0', // Removed top padding, kept side padding
                    }}
                >
                    <div style={{
                        borderRadius: '24px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.65)',
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(3px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
                        background: 'rgba(255,255,255,0.5)',
                        padding: '4px',
                        paddingBottom: '0',
                        width: '100%',
                        maxWidth: '90%', // Increased from 92% to 96%
                    }}>
                        <img
                            src={features[activeTab].image}
                            alt={features[activeTab].title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                borderBottomLeftRadius: '0',
                                borderBottomRightRadius: '0',
                                display: 'block',
                            }}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );

    return (
        <section id="features" ref={sectionRef} className={styles.features}>
            <div className={`container ${styles.container}`}>

                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Job Chat to Closeout Without <br className={styles.desktopBreak} />Rework or Runaround</h2>
                    <p className={styles.subtitle}>
                        Turn decisions into billable progress.
                    </p>
                </motion.div>

                {/* Split Visual Layout */}
                <div
                    className={styles.splitLayout}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    {/* Left Side - Tab List */}
                    <div className={styles.leftContent}>
                        {features.map((feat, i) => (
                            <motion.div
                                key={i}
                                className={styles.featureItem}
                                style={activeTab === i ? {
                                    borderBottom: `2px solid ${feat.borderColor}`,
                                    alignItems: 'flex-start'
                                } : { borderBottom: '2px solid var(--grey-02)', alignItems: 'center' }}
                                onClick={() => handleTabClick(i)}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.featIcon}>{feat.icon}</div>
                                <div className={styles.featBody}>
                                    <h4>
                                        <span style={{ fontWeight: activeTab === i ? 600 : 400 }}>{feat.title}</span>
                                    </h4>
                                    <AnimatePresence>
                                        {activeTab === i && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 1, height: 'auto', marginTop: '0.5rem' }}
                                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            >
                                                <p style={{ marginBottom: '0.75rem' }}>{feat.desc}</p>
                                                <div className={styles.learnMore}>
                                                    {/* <span style={{ color: feat.color, fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        Get Started <ArrowRight size={16} strokeWidth={2} />
                                                    </span> */}
                                                    {/* Mobile Inline Image (Animated Wrapper) */}
                                                    <div className={styles.mobileFeatureWrapper}>
                                                        {renderFeatureImage(true)}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}

                        {/* Secondary Ghost Button below the list */}
                        <motion.div
                            className={styles.desktopOnlyBtn}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                            style={{ marginTop: '2rem' }}
                        >
                            {/* <a href="https://app.tasktag.com/register/signup-with-email" target="_blank" rel="noopener noreferrer" className={styles.ghostBtnSecondary}>
                                Start For Free <ArrowRight size={18} strokeWidth={2} style={{ marginLeft: '4px' }} />
                            </a> */}
                        </motion.div>
                    </div>

                    {/* Right Side - Image + Animated Blob Background */}
                    {renderFeatureImage()}

                </div>
            </div>
        </section>
    );
};

export default Features;
