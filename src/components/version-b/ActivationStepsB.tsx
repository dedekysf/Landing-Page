import React from 'react';
import { motion } from 'framer-motion';
import styles from './ActivationStepsB.module.css';

const ActivationStepsB: React.FC = () => {
    const steps = [
        { title: "Create your project", desc: "Add a name. You’re in." },
        { title: "Turn chat into your first task", desc: "Assign an owner and due date in seconds." },
        { title: "Invite one crew member", desc: "They join and instantly see their task in My Tasks." }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>GET VALUE IN YOUR FIRST SESSION</h2>
                <div className={styles.stepsGrid}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={styles.stepCard}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.stepNumber}>0{i + 1}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p style={{ color: '#94a3b8' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivationStepsB;
