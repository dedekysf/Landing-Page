import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Activity, Hash } from 'lucide-react';
import featureChat from '../../assets/feature-chat.png';
import featureSearch from '../../assets/feature-search.png';
import featureTags from '../../assets/feature-tags.png';
import featureMyTasks from '../../assets/feature-mytasks.png';
import styles from './FeaturesA.module.css';

const FeaturesA: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const features = [
        {
            icon: <MessageCircle size={48} color="var(--dark-green)" strokeWidth={1.5} />,
            title: "Chat-Driven Project Control",
            desc: "Run daily site work from one structured chat. Capture decisions instantly.",
            color: 'var(--dark-green)',
            bg: 'rgba(3,91,96,0.07)',
            borderColor: 'rgba(3,91,96,0.25)',
            blobA: '#18A87D',
            blobB: '#B8E6E9',
            image: featureChat,
        },
        {
            icon: <Search size={48} color="var(--alert-red)" strokeWidth={1.5} />,
            title: "Powerful Project Search",
            desc: "Find any photo, decision, or document instantly. Show proof of completion.",
            color: 'var(--alert-red)',
            bg: 'rgba(255,68,68,0.07)',
            borderColor: 'rgba(255,68,68,0.25)',
            blobA: '#00D9A5',
            blobB: '#18A87D',
            image: featureSearch,
        },
        {
            icon: <Activity size={48} color="var(--vivid-yellow)" strokeWidth={1.5} />,
            title: "Real-Time Progress Pulse",
            desc: "Track progress with clarity. Spot delays early and generate reports quickly.",
            color: 'var(--vivid-yellow)',
            bg: 'rgba(251,189,66,0.08)',
            borderColor: 'rgba(251,189,66,0.35)',
            blobA: '#035B60',
            blobB: '#18A87D',
            image: featureTags,
        },
        {
            icon: <Hash size={48} color="var(--secondary-green)" strokeWidth={1.5} style={{ transform: 'rotate(-15deg)' }} />,
            title: "My Tasks View",
            desc: "Clear ownership. Tasks appear instantly for assigned team members.",
            color: 'var(--secondary-green)',
            bg: 'rgba(24,168,125,0.07)',
            borderColor: 'rgba(24,168,125,0.25)',
            blobA: '#18A87D',
            blobB: '#00D9A5',
            image: featureMyTasks,
        }
    ];

    return (
        <section className={styles.features}>
            <div className={`container ${styles.container}`}>

                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.pillText}>Feature Highlights</div>
                    <h2 className={styles.title}>Built for real construction work</h2>
                    <p className={styles.subtitle}>
                        Construction projects move fast and get messy. Tasktag keeps conversations, proof, and responsibilities organized so mistakes don’t multiply.
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
                                } : { borderBottom: '2px solid transparent' }}
                                onClick={() => setActiveTab(i)}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.featIcon}>{feat.icon}</div>
                                <div className={styles.featBody}>
                                    <h4>{feat.title}</h4>
                                    <p>{feat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Image + Animated Blob Background */}
                    <div className={styles.rightContent}>
                        {/* Blob container — #F7F8FA bg, clips overflow */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: '#F7F8FA',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            zIndex: 0,
                        }}>
                            {/* Left blob: icon color, moves center→left, sits on top */}
                            <motion.div
                                animate={{
                                    borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '70% 30% 40% 60% / 60% 40% 70% 30%', '55% 45% 55% 45% / 50% 50% 50% 50%', '40% 60% 70% 30% / 40% 50% 60% 50%'],
                                    x: [0, -140, -80, 0],
                                    y: [0, 20, -15, 0],
                                    scale: [1.1, 1.3, 1.0, 1.1]
                                }}
                                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute', top: '5%', left: '25%',
                                    width: '80%', height: '90%',
                                    background: features[activeTab].color,
                                    opacity: 0.35,
                                    zIndex: 2,
                                }}
                            />
                            {/* Right blob: secondary green, moves top→bottom, behind left blob */}
                            <motion.div
                                animate={{
                                    borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 70% 60% 40% / 40% 60% 30% 70%', '50% 50% 50% 50% / 60% 40% 60% 40%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
                                    x: [20, -15, 30, 20],
                                    y: [-110, 110, 20, -110],
                                    scale: [1.2, 1.0, 1.3, 1.2]
                                }}
                                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                                style={{
                                    position: 'absolute', top: '0%', left: '15%',
                                    width: '80%', height: '90%',
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

                </div>
            </div>
        </section>
    );
};

export default FeaturesA;
