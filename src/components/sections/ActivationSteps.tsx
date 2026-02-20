import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { PenLine, UserPlus, MessageSquare } from 'lucide-react';
import styles from './ActivationSteps.module.css';

const ActivationSteps: React.FC = () => {
    const steps = [
        {
            title: "Create project and task",
            desc: "Plan and assign in seconds.",
            icon: <PenLine size={32} color="#138EFF" strokeWidth={1.5} />
        },
        {
            title: "Invite your team",
            desc: "Bring everyone in instantly.",
            icon: <UserPlus size={32} color="#7B61FF" strokeWidth={1.5} />
        },
        {
            title: "Manage all from chat",
            desc: "Turn chat into real progress.",
            icon: <MessageSquare size={32} color="#FC7F5B" strokeWidth={1.5} />
        }
    ];

    return (
        <section className={styles.section}>
            {/* Background decorative path */}
            <div className={styles.bgDecoration}>
                <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none">
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
                    <div className={styles.pillText}>Activation Steps</div>
                    <h2 className={styles.title}>Real progress <br />from first actions</h2>
                    <p className={styles.subtitle}>
                        Start strong with structure from the first action. See tasks, ownership, and communication aligned from the beginning.
                    </p>
                    <div className={styles.actions} style={{ flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'inline-block', paddingTop: '16px', height: '80px' }}>
                            <Button size="lg" className={styles.primaryBtn}>
                                Start For Free
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <div className={styles.stepsGrid} style={{ marginBottom: '3rem' }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className={styles.iconWrapper}>{step.icon}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                            <div className={styles.stepNumber}>0{i + 1}</div>
                        </motion.div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default ActivationSteps;
