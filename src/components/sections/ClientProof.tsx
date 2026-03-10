import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ClientProof.module.css';

import bentoImage1 from '../../assets/bento_img_1.jpg';
import bentoImage2 from '../../assets/bento_img_2.jpg';

import logoIntown from '../../assets/client/Logo-intown.png';
import logoLovett from '../../assets/client/Logo-lovett.png';

// Animated counter component
const CountUp: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
    target, suffix = '', duration = 1000
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            if (current !== start) {
                setCount(current);
                start = current;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, target, duration]);

    return <div ref={ref} className={styles.statValue}>{count}{suffix}</div>;
};

const ClientProof: React.FC = () => {
    const row1Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (window.innerWidth <= 768 && row1Ref.current) {
            // Synchronously scroll to the far right before paint
            row1Ref.current.scrollLeft = 9999;
        }
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >

                    <h2 className={styles.title}>Real Results on Real Jobs</h2>
                    <p className={styles.subtitle}>
                        Teams cut rework, close out faster, and document proof of work — within weeks.
                    </p>
                </motion.div>

                {/* Bento Grid layout */}
                <div className={styles.bentoGrid}>
                    <div className={styles.bentoRow} ref={row1Ref}>
                        {/* Top Row: Logo (1), Image (1), Stat (2) */}
                        <motion.div className={`${styles.card} ${styles.logoCard}`}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                            <img src={logoIntown} alt="Intown Builders" className={styles.logoImage} />
                        </motion.div>

                        <motion.div className={`${styles.card} ${styles.imageCard}`}
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                            <img src={bentoImage1} alt="Construction site interior" className={styles.photo} />
                        </motion.div>

                        <motion.div className={`${styles.card} ${styles.statCard} ${styles.statBlue}`}
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                            <span className={styles.statLabel}>Cut rework by</span>
                            <CountUp target={40} suffix="%" />
                            <div className={styles.statDescBold}>Protect your profit margins</div>
                            <div className={styles.statDescLight}>When everyone's working from the same approved photos and plans, you stop paying for work twice.</div>
                        </motion.div>
                    </div>

                    <div className={styles.bentoRow}>
                        {/* Bottom Row: Stat (2), Logo (1), Image (1) */}
                        <motion.div className={`${styles.card} ${styles.statCard} ${styles.statGreen}`}
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
                            <span className={styles.statLabel}>Increase completion rate to</span>
                            <CountUp target={95} suffix="%" />
                            <div className={styles.statDescBold}>Close out jobs without chasing anyone</div>
                            <div className={styles.statDescLight}>Every item is tracked and verified from the field in real time. Your teams close out faster — without you following up.</div>
                        </motion.div>

                        <motion.div className={`${styles.card} ${styles.logoCard}`}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
                            <img src={logoLovett} alt="Lovett Commercial" className={styles.logoImage} />
                        </motion.div>

                        <motion.div className={`${styles.card} ${styles.imageCard}`}
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
                            <img src={bentoImage2} alt="Construction blueprints" className={styles.photo} />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClientProof;
