import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Building, Check } from 'lucide-react';
import styles from './ActivationSteps.module.css';

interface PlanData {
    title: string;
    tagline: string;
    icon: React.ReactNode;
    btnType: 'outline' | 'inverted' | 'filled';
    priceMonthly: number;
    priceAnnual: number;
    priceSubtext: string;
    isFilled: boolean;
    showBadge?: boolean;
    checklistHeader: string;
    checklist: string[];
}

const TornEdge = ({ position }: { position: 'top' | 'bottom' }) => {
    // Generate a smooth path that looks like torn paper
    const generateTornPath = () => {
        let path = "M 0 0 ";
        // We create points across the width (0 to 1200)
        for (let i = 0; i <= 1200; i += 20) {
            // Randomly fluctuate between y=0 and y=15 for the "tear"
            // Use quadratic curves to make it smooth, not jagged points
            const randomY = Math.random() * 15;
            path += `Q ${i - 10} ${randomY + 5}, ${i} ${randomY} `;
        }
        // Close the shape back to the starting side so it fills correctly
        path += "L 1200 40 L 0 40 Z";
        return path;
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 30"
            preserveAspectRatio="none"
            style={{
                position: 'absolute',
                [position]: '-1px',
                left: 0,
                width: '100%',
                height: '35px',  // Taller to accommodate the waves
                zIndex: 1,
                // We use transform to flip it for the top edge so it points outward
                transform: position === 'top' ? 'rotate(180deg)' : 'none',
                fill: position === 'top' ? 'var(--white)' : 'var(--white)'
                // Set to white as it acts as a mask over the var(--grey-02) background to seamlessly transition
            }}
        >
            <path d={generateTornPath()} />
        </svg>
    );
};

const ActivationSteps: React.FC = () => {
    const [isMonthly, setIsMonthly] = useState(false);

    const togglePricing = () => {
        setIsMonthly(!isMonthly);
    };

    const plans: PlanData[] = [
        {
            title: "Free Plan",
            tagline: "Up to 3 Projects, Get Started Instantly",
            icon: <Star size={32} color="var(--secondary-green)" strokeWidth={1.5} />,
            btnType: 'outline',
            priceMonthly: 0,
            priceAnnual: 0,
            priceSubtext: 'No credit card required',
            isFilled: false,
            checklistHeader: "What do you get",
            checklist: [
                "3 Projects",
                "2GB shared team storage"
                // "Add unlimited users to projects & tasks",
                // "Team admin & member roles",
                // "Centralized billing",
            ],
        },
        {
            title: "Team Plan",
            tagline: "Unlimited Projects, Scale Your Operations",
            icon: <Building size={32} color="var(--white)" strokeWidth={1.5} />,
            btnType: 'inverted',
            priceMonthly: 20,
            priceAnnual: 16,
            priceSubtext: 'Member/Month',
            isFilled: true,
            showBadge: true,
            checklistHeader: "What do you get",
            checklist: [
                "Unlimited Projects",
                "2TB shared team storage"
                // "Add unlimited users to projects & tasks",
                // "Team admin & member roles",
                // "Centralized billing",
            ],
        }
    ];

    return (
        <section id="activation" className={styles.section}>
            {/* Top and Bottom torn paper jagged edges overlaying the border */}
            <TornEdge position="top" />
            <TornEdge position="bottom" />

            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Start Free. Run Your First Job</h2>
                    <p className={styles.subtitle}>
                        Try TaskTag Pro free for <span className={styles.highlight}>30 days</span> with all features unlocked. <br className={styles.desktopOnlyBr} />Cancel any time - No credit card required to start.
                    </p>

                    <motion.div
                        className={styles.toggleContainer}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className={`${styles.switchLabel} ${!isMonthly ? styles.inactive : ''}`}>
                            Monthly
                        </span>
                        <label className={styles.switch}>
                            <input type="checkbox" checked={!isMonthly} onChange={togglePricing} />
                            <span className={styles.slider}></span>
                        </label>
                        <span className={`${styles.switchLabel} ${isMonthly ? styles.inactive : ''}`}>
                            Yearly
                        </span>
                    </motion.div>
                </motion.div>

                <div className={styles.stepsGrid} style={{ marginBottom: '3rem' }}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.stepCard} ${plan.isFilled ? styles.stepCardFilled : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {/* "Most Popular" Pill for Team Plan */}
                            {plan.title === "Team Plan" && (
                                <div className={styles.popularPill}>
                                    MOST POPULAR
                                </div>
                            )}

                            <div className={styles.iconWrapper}>{plan.icon}</div>
                            <h3 className={styles.stepTitle}>
                                {plan.title}
                                {plan.showBadge && (
                                    <span
                                        className={styles.saveBadge}
                                        style={{
                                            marginLeft: '8px',
                                            visibility: isMonthly ? 'hidden' : 'visible'
                                        }}
                                    >
                                        Save 20% yearly
                                    </span>
                                )}
                            </h3>
                            <p className={styles.planTagline}>{plan.tagline}</p>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '1.5rem' }}>
                                <div className={styles.price} style={{ marginBottom: 0 }}>
                                    ${isMonthly ? plan.priceMonthly : plan.priceAnnual}
                                </div>
                                <div className={styles.priceSubtext} style={{ margin: 0 }}>{plan.priceSubtext}</div>
                            </div>
                            <div className={styles.cardFooter}>
                                <a
                                    href="https://app.tasktag.com/register/signup-with-email"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                        plan.btnType === 'outline' ? styles.cardBtnOutline :
                                            plan.btnType === 'inverted' ? styles.cardBtnInverted :
                                                styles.cardBtnFilled
                                    }
                                >
                                    GET STARTED
                                </a>
                            </div>

                            {/* Feature Checklist */}
                            <div className={styles.checklistSection}>
                                <p className={styles.checklistHeader}>{plan.checklistHeader}</p>
                                <ul className={styles.checklist}>
                                    {plan.checklist.map((item, idx) => (
                                        <li key={idx} className={styles.checklistItem}>
                                            <Check size={16} className={styles.checkIcon} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivationSteps;

