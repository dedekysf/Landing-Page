import React from 'react';
import { motion } from 'framer-motion';
import styles from './FinalCta.module.css';
import taskPanelImg from '../../assets/final-section-task-panel.png';

const FinalCta: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.contentWrapper}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={styles.imageWrapper}
                    >
                        <img src={taskPanelImg} alt="TaskTag Dashboard Preview" className={styles.previewImage} />
                    </motion.div>
                    <h2 className={styles.title}>Ready to Streamline Your Jobs?</h2>
                    <p className={styles.subtitle}>
                        Join thousands of contractors using TaskTag to connect their field and office
                    </p>

                    <div className={styles.btnGroup}>
                        <a href="https://portal.tasktag.com/demo" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">Book Demo</a>
                        <a href="https://app.tasktag.com/register/signup-with-email" className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">Get Started For Free</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCta;
