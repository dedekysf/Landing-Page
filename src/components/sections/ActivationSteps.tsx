import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Building } from 'lucide-react';
import styles from './ActivationSteps.module.css';

const ActivationSteps: React.FC = () => {
    const [isMonthly, setIsMonthly] = useState(false);

    const togglePricing = () => {
        setIsMonthly(!isMonthly);
    };

    const steps: any[] = [
        {
            title: "Free Plan",
            desc: "Get started instantly with 3 active projects, 2 GB of storage and unlimited users with dedicated admin and member roles. Keep everything organized with centralized billing and a global activity log for full visibility.",
            icon: <Star size={32} color="#18A87D" strokeWidth={1.5} />,
            btnType: 'outline',
            priceMonthly: 0,
            priceAnnual: 0,
            priceSubtext: 'Free Forever',
            isFilled: false
        },
        {
            title: "Team Plan",
            desc: "Scale Your Operations with unlimited projects, 2 TB of secure storage and easily manage unlimited users. Streamline financials with centralized billing while tracking every move through a global activity log.",
            icon: <Building size={32} color="var(--white)" strokeWidth={1.5} />,
            btnType: 'inverted',
            priceMonthly: 20, /* Note: Change this to desired monthly price if different */
            priceAnnual: 16, /* Note: Change this to desired annual price if different */
            priceSubtext: 'Member/Month',
            isFilled: true,
            showBadge: true
        }
    ];

    return (
        <section className={styles.section}>
            {/* Background decorative path flipped horizontally */}
            <div className={styles.bgDecoration}>
                <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none" style={{ transform: 'scaleX(-1)' }}>
                    <path d="M0,200 Q300,50 600,200 T1200,200" fill="none" stroke="var(--grey-03)" strokeWidth="4" strokeDasharray="10 10" />
                </svg>
            </div>

            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Start Free Run One Job</h2>
                    <p className={styles.subtitle}>
                        Try TaskTag Pro free for <span className={styles.highlight}>30 days</span> with all features unlocked <br className={styles.desktopOnlyBr} />Cancel any time, No credit card required to start
                    </p>

                    <motion.div
                        className={styles.toggleContainer}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className={`${styles.switchLabel} ${!isMonthly ? styles.inactive : ''}`}>
                            Monthly Plans
                        </span>
                        <label className={styles.switch}>
                            <input type="checkbox" checked={!isMonthly} onChange={togglePricing} />
                            <span className={styles.slider}></span>
                        </label>
                        <span className={`${styles.switchLabel} ${isMonthly ? styles.inactive : ''}`}>
                            Annual Plans
                        </span>
                    </motion.div>
                </motion.div>

                <div className={styles.stepsGrid} style={{ marginBottom: '3rem' }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.stepCard} ${step.isFilled ? styles.stepCardFilled : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            {/* <div className={styles.iconWrapper}>{step.icon}</div> */}
                            <h3 className={styles.stepTitle}>
                                {step.title}
                                {step.showBadge && (
                                    <span
                                        className={styles.saveBadge}
                                        style={{
                                            marginLeft: '8px',
                                            visibility: isMonthly ? 'hidden' : 'visible'
                                        }}
                                    >
                                        Save 20%
                                    </span>
                                )}
                            </h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '1.5rem' }}>
                                <div className={styles.price} style={{ marginBottom: 0 }}>
                                    ${isMonthly ? step.priceMonthly : step.priceAnnual}
                                </div>
                                <div className={styles.priceSubtext} style={{ margin: 0 }}>{step.priceSubtext}</div>
                            </div>
                            <p className={styles.stepDesc} style={{ flexGrow: 1 }}>{step.desc}</p>
                            <div className={styles.cardFooter}>
                                <a
                                    href="https://app.tasktag.com/register/signup-with-email"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        step.btnType === 'outline' ? styles.cardBtnOutline :
                                            step.btnType === 'inverted' ? styles.cardBtnInverted :
                                                styles.cardBtnFilled
                                    }
                                >
                                    GET STARTED
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default ActivationSteps;
