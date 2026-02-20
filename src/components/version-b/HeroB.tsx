import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import styles from './HeroB.module.css';

const HeroB: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <h1 className={styles.headline}>
                        RUN YOUR CONSTRUCTION PROJECTS <br />
                        <span className={styles.highlight}>DIRECTLY IN CHAT.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Turn conversations into tasks. Keep updates organized. Make sure everyone knows what to do next.
                    </p>
                    <div className={styles.actions}>
                        <Button size="lg" className={styles.primaryBtn}>START FREE - CREATE PROJECT</Button>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>Only a project name required. Invite takes seconds.</p>
                    </div>
                </motion.div>

                {/* Abstract 3D/Tech visual - Animated */}
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.card1}>
                        <div className={styles.cardHeader}>Project Alpha</div>
                        <div className={styles.progressBar}><motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5, delay: 0.5 }}></motion.div></div>
                    </div>
                    <div className={styles.card2}>
                        <div className={styles.cardHeader}>Daily Report</div>
                        <div className={styles.status}>Pending Approval</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroB;
