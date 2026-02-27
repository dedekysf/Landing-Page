import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, LayoutTemplate } from 'lucide-react';
import styles from './Templates.module.css';

const Templates: React.FC = () => {

    const preConstructionTasks = [
        "Client contract signed and uploaded",
        "Permits submitted and tracked",
        "Initial site survey completed"
    ];

    const foundationTasks = [
        "Excavation layout approved",
        "Rebar inspection passed",
        "Concrete poured and cured"
    ];

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>

                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Kickstart Next Job with <br className={styles.desktopBreak} /><span className={styles.highlight}>TaskTag Templates</span></h2>
                    <p className={styles.subtitle}>
                        No setup from scratch. Pick a template, invite your crew, <br className={styles.desktopBreak} />and start turning jobsite
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className={styles.bentoGrid}>

                    {/* Card 1: Pre-Constructions */}
                    <motion.div
                        className={styles.templateCard}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.watermark}>01</div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Pre-Constructions Checklist</h3>
                        </div>

                        <ul className={styles.checklist}>
                            {preConstructionTasks.map((task, i) => (
                                <li key={i} className={styles.checklistItem}>
                                    <CheckSquare size={18} color="#18A87D" style={{ flexShrink: 0 }} />
                                    <span>{task}</span>
                                </li>
                            ))}
                            <li className={`${styles.checklistItem} ${styles.moreItem}`}>
                                + 12 more items
                            </li>
                        </ul>

                        {/* <div className={styles.cardActionWrapper}>
                            <a href="https://app.tasktag.com/register/signup-with-email" className={styles.cardAction} target="_blank" rel="noopener noreferrer">View More <ArrowRight size={16} /></a>
                        </div> */}
                    </motion.div>

                    {/* Card 2: Foundation */}
                    <motion.div
                        className={styles.templateCard}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.watermark}>02</div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Foundation Checklist</h3>
                        </div>

                        <ul className={styles.checklist}>
                            {foundationTasks.map((task, i) => (
                                <li key={i} className={styles.checklistItem}>
                                    <CheckSquare size={18} color="#18A87D" style={{ flexShrink: 0 }} />
                                    <span>{task}</span>
                                </li>
                            ))}
                            <li className={`${styles.checklistItem} ${styles.moreItem}`}>
                                + 8 more items
                            </li>
                        </ul>

                        {/* <div className={styles.cardActionWrapper}>
                            <a href="https://app.tasktag.com/register/signup-with-email" className={styles.cardAction} target="_blank" rel="noopener noreferrer">View More <ArrowRight size={16} /></a>
                        </div> */}
                    </motion.div>

                    {/* Card 3: View More */}
                    <motion.div
                        className={`${styles.templateCard} ${styles.viewMoreCard}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconWrapper}>
                            <LayoutTemplate size={44} />
                        </div>
                        <h3>View More Template</h3>
                        <p>Discover more ready-to-use workflows to streamline your next project.</p>
                        <a href="https://app.tasktag.com/register/signup-with-email" className={styles.viewMoreBtn} target="_blank" rel="noopener noreferrer">Start For Free</a>
                    </motion.div>

                </div>
            </div >

            {/* Bottom Illustration */}
            {/* < motion.div
                className={styles.illustrationWrapper}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <img src={heroImage} alt="TaskTag App Interface" className={styles.illustration} />
            </motion.div > */}

        </section >
    );
};

export default Templates;
