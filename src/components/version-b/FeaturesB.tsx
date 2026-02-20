import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturesB.module.css';

const FEATURES = [
    { title: "CHAT-DRIVEN PROJECT CONTROL", desc: "Run daily site work from one structured chat.", icon: "01" },
    { title: "POWERFUL PROJECT SEARCH", desc: "Locate photos, decisions, and documents instantly.", icon: "02" },
    { title: "TASK TRACKING WITH TAGS", desc: "Track progress with clarity. Filter by priority or status.", icon: "03" },
    { title: "MY TASKS", desc: "Clear work. Clear ownership. Tasks appear instantly.", icon: "04" },
    { title: "ACTIVITY TIMELINE", desc: "See every update in one place. Catch risks early.", icon: "05" }
];

const FeaturesB: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>MORE THAN CHAT. <br /> <span className={styles.highlight}>REAL PROJECT CONTROL.</span></h2>
                </div>
                <div className={styles.grid}>
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.icon}>{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesB;
