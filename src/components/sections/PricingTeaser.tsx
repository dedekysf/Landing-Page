import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './PricingTeaser.module.css';

const PricingTeaser: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.banner}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Try It on Your Next Job
                        </h2>
                        <p className={styles.subtitle}>
                            Try TaskTag for <span className={styles.highlight}>30 days free</span> with all features unlocked. No credit card required to start.
                        </p>
                    </div>
                    <motion.a
                        href="https://tasktag.com/pricing"
                        className={styles.ctaButton}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>See Pricing</span>
                        <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingTeaser;
