import React from 'react';
import { motion } from 'framer-motion';
import styles from './BentoResults.module.css';

import bentoImage1 from '../../assets/bento_img_1.png';
import bentoImage2 from '../../assets/bento_img_2.png';

import logoIntown from '../../assets/client/Logo-intown.png';
import logoLovett from '../../assets/client/Logo-lovett.png';

const BentoResults: React.FC = () => {
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
                        Teams use TaskTag to cut rework, save time, <br />and keep every punch item moving starting in the first few weeks.
                    </p>
                </motion.div>

                {/* Bento Grid layout */}
                <div className={styles.bentoGrid}>

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
                        <div className={styles.statValue}>40%</div>
                        <div className={styles.statDescBold}>Protect your profit margins</div>
                        <div className={styles.statDescLight}>When your superintendents and subs are all looking at the same approved photos and plans, you stop paying for work to be done twice.</div>
                    </motion.div>

                    {/* Bottom Row: Stat (2), Logo (1), Image (1) */}
                    <motion.div className={`${styles.card} ${styles.statCard} ${styles.statGreen}`}
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
                        <span className={styles.statLabel}>Increase completion by</span>
                        <div className={styles.statValue}>95%</div>
                        <div className={styles.statDescBold}>Hand over the keys faster</div>
                        <div className={styles.statDescLight}>Every final detail is tracked and verified from the field in real-time, your teams close out jobs quickly without you having to chase them down.</div>
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
        </section>
    );
};

export default BentoResults;
