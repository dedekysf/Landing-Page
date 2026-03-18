import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import foremanImg from '../../assets/foreman.jpg';
import styles from './PricingTeaser.module.css';

const PricingTeaser: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.bannerWrapper}>
                    <motion.div
                        className={styles.banner}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.leftImageBlock}>
                            <img src={foremanImg} alt="TaskTag Foreman" className={styles.foremanImage} />
                        </div>
                        
                        <div className={styles.rightContentBlock}>
                            <div className={styles.content}>
                                <h2 className={styles.title}>
                                    Try It on Your Next Job
                                </h2>
                                <p className={styles.subtitle}>
                                    Try TaskTag for <span className={styles.highlight}>30 days free</span> with all features unlocked. No credit card required to start.
                                </p>
                            </div>
                            <a
                                href="https://tasktag.com/pricing"
                                className={styles.ctaButton}
                            >
                                <span>See Pricing</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                    
                    {/* Border stroke overrides for the ticket notches */}
                    <div className={styles.notchLeft}></div>
                    <div className={styles.notchRight}></div>
                </div>
            </div>
        </section>
    );
};

export default PricingTeaser;
