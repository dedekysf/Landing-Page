import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Check } from 'lucide-react';
import styles from './Hero.module.css';

const ANGLES = [
    { text: "jobsite coordination", type: "positive" },
    { text: "missed handoffs and rework", type: "negative" },
    { text: "photo documentation and proof", type: "positive" },
    { text: "speed to first task", type: "positive" },
    { text: "clear ownership and accountability", type: "positive" },
    { text: "searchable project history", type: "positive" }
];

const Hero: React.FC = () => {
    const [angleIndex, setAngleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setAngleIndex((prev) => (prev + 1) % ANGLES.length);
                setFade(true);
            }, 500); // Wait for fade out
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const currentAngle = ANGLES[angleIndex];

    const getPrefix = (type: string) => {
        return type === 'negative' ? 'Eliminate' : 'Improve';
    };

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        className={styles.pill}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.pillText}>New: TaskTag for Enterprise</span>
                    </motion.div>

                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Manage your construction projects<br />
                        <span className={styles.highlight}>all through chat</span>
                    </motion.h1>

                    <motion.div
                        className={styles.rotatorContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className={styles.prefix}>{getPrefix(currentAngle.type)}</span>
                        <span className={`${styles.rotatingText} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                            {currentAngle.text}
                        </span>
                    </motion.div>

                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Centralize team communication into a single stream.
                        Convert conversations into actionable work items with zero friction.
                    </motion.p>

                    <motion.div
                        className={styles.ctaGroup}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button size="lg">Start Free Project</Button>
                        <p className={styles.checkText}>No credit card required</p>
                    </motion.div>

                    {/* Mockup / Image Placeholder */}
                    <motion.div
                        className={styles.mockup}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className={styles.mockupInner}>
                            {/* Abstract representation of chat interface */}
                            <div className={styles.chatBubble}>
                                <div className={styles.bubbleAvatar}></div>
                                <div className={styles.bubbleContent}>
                                    <div className={styles.bubbleLine} style={{ width: '60%' }}></div>
                                    <div className={styles.bubbleLine} style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className={`${styles.chatBubble} ${styles.right}`}>
                                <div className={styles.bubbleContent}>
                                    <div className={styles.bubbleLine} style={{ width: '70%' }}></div>
                                </div>
                                <div className={styles.bubbleAvatar}></div>
                            </div>
                            <div className={styles.taskCard}>
                                <div className={styles.taskIcon}><Check size={20} strokeWidth={2.5} /></div>
                                <div className={styles.taskDetails}>
                                    <div className={styles.taskTitle}>Fix loose wiring in Room 302</div>
                                    <div className={styles.taskMeta}>Assigned to Mike • Due Today</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
