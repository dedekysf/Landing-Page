import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import styles from './HeroV2.module.css';

import heroMytaskImg from '../../assets/hero-mytask-2.png';

const HeroV2: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Manage Projects <br />
                        <span className={styles.highlight}>in Chat.</span> Start Now.
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Keep your team aligned with less email, less chaos, and projects that actually get done on time.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}
                    >
                        <div style={{ display: 'inline-block', paddingBottom: '6px', height: '80px' }}>
                            <Button size="lg" className={styles.primaryBtn}>
                                Start Your First Project
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.visualWrapper}>
                    {/* Left blob from Feature Highlights */}
                    <motion.div
                        animate={{
                            x: ['40%', '0%', '40%'],
                            y: [0, 10, 0],
                            rotate: [-50, -50, -50],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute', top: '0%', right: '15%',
                            width: '64%', aspectRatio: '1/1',
                            borderRadius: '40px',
                            transformOrigin: 'center',
                            background: 'var(--secondary-green)',
                            opacity: 0.35,
                            zIndex: 0,
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <img
                            src={heroMytaskImg}
                            alt="TaskTag Project Dashboard"
                            className={styles.heroImage}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroV2;
