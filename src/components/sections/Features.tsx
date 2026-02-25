import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Search, Activity, ArrowRight, Hash, UserPlus2, Image } from 'lucide-react';
import featureChat from '../../assets/feature-project-chat-2.png';
import featureSearch from '../../assets/feature-global-search.png';
import featureTags from '../../assets/feature-project-checklist.png';
import featureMyTasks from '../../assets/feature-activity.png';
import styles from './Features.module.css';

const Features: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const features = [
        {
            icon: <MessageSquare size={24} color="#FC7F5B" strokeWidth={1.5} />,
            title: "Keep jobs in one thread",
            desc: "Every decision, site note, and change approval lives in the job thread so nothing gets lost in personal texts or turns into paid rework later.",
            color: '#FC7F5B',
            bg: 'rgba(252,127,91,0.07)',
            borderColor: 'rgba(252,127,91,0.25)',
            blobA: '#FC7F5B',
            blobB: '#FFD7C4',
            image: featureChat,
        },
        {
            icon: <Hash size={24} color="#18A87D" strokeWidth={1.5} />,
            title: "Tag messages into tasks",
            desc: "When a decision lands in chat, you turn that exact message into a task no retyping, no switching apps so the context never disappears.",
            color: '#18A87D',
            bg: 'rgba(24,168,125,0.07)',
            borderColor: 'rgba(24,168,125,0.25)',
            blobA: '#18A87D',
            blobB: '#B8E6E9',
            image: featureTags,
        },
        {
            icon: <UserPlus2 size={24} color="#C072CD" strokeWidth={1.5} />,
            title: "Assign owners with deadlines",
            desc: "You set the owner and due date under the original message on the task created from it so responsibility is clear the moment the decision is made.",
            color: '#C072CD',
            bg: 'rgba(192,114,205,0.07)',
            borderColor: 'rgba(192,114,205,0.25)',
            blobA: '#18A87D',
            blobB: '#B8E6E9',
            image: featureMyTasks,
        },
        {
            icon: <Image size={24} color="#035B60" strokeWidth={1.5} />,
            title: "Attach proof to close",
            desc: "When work is done, photos and files attach to the task so approvals and billing don’t get stuck on “send proof.”",
            color: '#035B60',
            bg: 'rgba(3,91,96,0.07)',
            borderColor: 'rgba(3,91,96,0.25)',
            blobA: '#00D9A5',
            blobB: '#18A87D',
            image: featureTags,
        },
        {
            icon: <Activity size={24} color="var(--vivid-yellow)" strokeWidth={1.5} />,
            title: "Watch activity across jobs",
            desc: "You get one feed of what changed across every job new proof uploaded, tasks completed, overdue items so you don’t have to open ten threads to know what’s ready to bill and what’s at risk.",
            color: 'var(--vivid-yellow)',
            bg: 'rgba(251,189,66,0.08)',
            borderColor: 'rgba(251,189,66,0.35)',
            blobA: '#035B60',
            blobB: '#18A87D',
            image: featureMyTasks,
        },
        {
            icon: <Search size={24} color="#7B61FF" strokeWidth={1.5} />,
            title: "Search everything in seconds",
            desc: "When you need an answer fast, you search once across projects, tasks, contacts, and files so you find the right thread, the right task, and the right proof before a delay turns into a dispute.",
            color: '#7B61FF',
            bg: 'rgba(123,97,255,0.07)',
            borderColor: 'rgba(123,97,255,0.25)',
            blobA: '#00D9A5',
            blobB: '#18A87D',
            image: featureSearch,
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
                    animate={{
                        x: ['0%', '-40%', '0%'],
                        y: [0, 10, 0],
                        rotate: [-50, -50, -50], // Adding rotation animation
                    }}
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
                    animate={{
                        y: ['-20%', '40%', '-20%'],
                    }}
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
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -20 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    style={{
                        position: 'relative', zIndex: 2,
                        height: '100%', width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '2rem',
                    }}
                >
                    <div style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.65)',
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(3px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
                        background: 'rgba(255,255,255,0.5)',
                        padding: '5px',
                        width: '100%',
                        maxWidth: '360px',
                    }}>
                        <img
                            src={features[activeTab].image}
                            alt={features[activeTab].title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                display: 'block',
                            }}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );

    return (
        <section id="features" className={styles.features}>
            <div className={`container ${styles.container}`}>

                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>From job chat to closeout without the chaos</h2>
                    <p className={styles.subtitle}>
                        Every decision becomes a task with proof tracked in one activity feed <br />and searchable across every job.
                    </p>
                </motion.div>

                {/* Split Visual Layout */}
                <div className={styles.splitLayout}>

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
                                onClick={() => setActiveTab(i)}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.featIcon}>{feat.icon}</div>
                                <div className={styles.featBody}>
                                    <h4>
                                        <span style={{ fontWeight: 500 }}>{feat.title.split(' ')[0]}</span>
                                        <span style={{ fontWeight: 400 }}> {feat.title.split(' ').slice(1).join(' ')}</span>
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
                                                    <span style={{ color: feat.color, fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        Get Started <ArrowRight size={16} strokeWidth={2} />
                                                    </span>
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
                    </div>

                    {/* Right Side - Image + Animated Blob Background */}
                    {renderFeatureImage()}

                </div>
            </div>
        </section>
    );
};

export default Features;
