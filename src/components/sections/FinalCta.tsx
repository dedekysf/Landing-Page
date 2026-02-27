import React from 'react';
import { motion } from 'framer-motion';
import styles from './FinalCta.module.css';

const FinalCta: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.patternOverlayLeft} />
            <div className={styles.patternOverlayRight} />
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Ready to streamline <br className={styles.desktopBreak} /> your jobs?</h2>
                    <p className={styles.subtitle}>
                        Join thousands of contractors using TaskTag <br className={styles.desktopBreak} />to connect their field and office
                    </p>

                    <div className={styles.btnGroup}>
                        <a href="https://portal.tasktag.com/demo" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">Book Demo</a>
                        <a href="https://app.tasktag.com/register/signup-with-email" className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">Start For Free</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCta;
