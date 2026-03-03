import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing: React.FC = () => {
    const [isMonthly, setIsMonthly] = useState(false);

    const togglePricing = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <section id="pricing" className={styles.pricing}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Start free. Run one job.
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Try Tasktag for <span className={styles.highlight}>30 days</span> to start connected with all your teams. <br className={styles.desktopOnlyBr} />Cancel any time. No credit card required.
                    </motion.p>

                    <motion.div
                        className={styles.toggleContainer}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className={`${styles.switchLabel} ${isMonthly ? styles.inactive : ''}`}>
                            Yearly {!isMonthly && <span className={styles.saveBadge}>(Save 20%)</span>}
                        </span>
                        <label className={styles.switch}>
                            <input type="checkbox" checked={isMonthly} onChange={togglePricing} />
                            <span className={styles.slider}></span>
                        </label>
                        <span className={`${styles.switchLabel} ${!isMonthly ? styles.inactive : ''}`}>
                            Monthly
                        </span>
                    </motion.div>
                </div>

                <div className={styles.grid}>
                    {/* Free Plan */}
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.planName}>Free plan</div>
                        {/* <div className={styles.planTarget}>For Individuals</div> */}
                        <div className={styles.price}>
                            $0
                        </div>
                        <div className={styles.billingCircle}>
                            FOREVER
                        </div>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> 3 Projects</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> 2 GB Storage</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Add unlimited users to projects & tasks</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Team admin & member roles</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Centralized billing</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Global activity log for full visibility</div>
                        </div>

                        <a href="https://app.tasktag.com/register/signup-with-email" className={styles.cardBtn} target="_blank" rel="noopener noreferrer">Get Started</a>
                    </motion.div>

                    {/* Teams Plan (Popular) */}
                    <motion.div
                        className={`${styles.card} ${styles.cardPopular}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.popularBadge}>MOST POPULAR</div>
                        <div className={styles.planName}>Teams Plan</div>
                        {/* <div className={styles.planTarget}>For Teams</div> */}
                        <div className={styles.price}>
                            ${isMonthly ? '20' : '16'}
                        </div>
                        <div className={styles.priceSubtext}>Member/Month</div>
                        <div className={styles.billingCircle}>
                            {isMonthly ? 'BILLED MONTHLY' : 'BILLED ANNUALLY'}
                        </div>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Unlimited Projects</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> 2 TB Storage</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Add unlimited users to projects & tasks</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Team admin & member roles</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Centralized billing</div>
                            <div className={styles.featureItem}><Check size={20} className={styles.featureIcon} strokeWidth={2.5} /> Global activity log for full visibility</div>
                        </div>

                        <a href="https://app.tasktag.com/register/signup-with-email" className={styles.cardBtn} target="_blank" rel="noopener noreferrer">Get Started</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
