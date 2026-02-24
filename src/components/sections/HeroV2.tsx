import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import styles from './HeroV2.module.css';



const HeroV2: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        className={styles.titleWrapper}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <h1 className={styles.title}>
                            Run the <span className={styles.highlight}>job</span><br />
                            from chat
                        </h1>
                        <p className={styles.subtitle}>
                            Turn jobsite messages into assigned work and visible progress.
                        </p>
                    </motion.div>

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
                        className={styles.chatWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <motion.div
                            className={styles.messageRow}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <div className={styles.avatarInitials} style={{ background: 'var(--blue)' }}>M</div>
                            <div className={styles.messageContent}>
                                <div className={styles.messageName}>Mike <span className={styles.messageTime}>9:42 AM</span></div>
                                <div className={styles.messageBubble}>Just finished the framing on the second floor. Looks solid.</div>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.messageRow}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                        >
                            <div className={styles.avatarInitials} style={{ background: 'var(--orange)' }}>S</div>
                            <div className={styles.messageContent}>
                                <div className={styles.messageName}>Sarah <span className={styles.messageTime}>9:45 AM</span></div>
                                <div className={styles.messageBubbleTagged}>
                                    Great work Mike! I'll notify the inspectors for tomorrow. <span className={styles.projectTag}>#123-MainSt-Update</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroV2;
