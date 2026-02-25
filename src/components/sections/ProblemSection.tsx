import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProblemSection.module.css';

const ProblemSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        The job doesn’t slip on the roof <br />it slips in the handoff.
                    </h2>
                    <p className={styles.subtitle}>
                        When “ready” lives in texts and updates live in group chats, crews get bumped, punch gets missed, and closeout drags.
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    {/* Visuals - Left: Messy Chat, Right: Empty State */}
                    <div className={styles.visualColumn}>
                        <div className={styles.mockupContainer}>

                            {/* Left: Messy Chat (Realistic Tone) */}
                            <motion.div
                                className={styles.chatMockup}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.mockupHeader}>
                                    <div className={styles.mockupTitle}>Project Alpha - Field Team</div>
                                </div>
                                <div className={styles.chatBody}>
                                    <div className={`${styles.chatBubble} ${styles.chatLeft}`}>
                                        <span className={styles.chatName}>Dave</span>
                                        Drywall is ready. Send the painters.
                                    </div>
                                    <div className={`${styles.chatBubble} ${styles.chatRight}`}>
                                        <span className={styles.chatName}>You</span>
                                        Are the outlets cut out?
                                    </div>
                                    <div className={`${styles.chatBubble} ${styles.chatLeft}`}>
                                        <span className={styles.chatName}>Mike</span>
                                        Wait, plumbers aren't done in the master bath.
                                    </div>
                                    <div className={`${styles.chatBubble} ${styles.chatRight}`}>
                                        <span className={styles.chatName}>You</span>
                                        Who is handling the master bath?
                                    </div>
                                    <div className={`${styles.chatBubble} ${styles.chatLeft}`}>
                                        <span className={styles.chatName}>Dave</span>
                                        Idk, I thought Steve was.
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Empty State / No Ownership */}
                            <motion.div
                                className={styles.taskMockup}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.mockupHeader}>
                                    <div className={styles.mockupTitle}>Task Details</div>
                                </div>
                                <div className={styles.taskBody}>
                                    <div className={styles.taskField}>
                                        <span className={styles.fieldLabel}>Status</span>
                                        <span className={styles.fieldValueEmpty}>Unassigned</span>
                                    </div>
                                    <div className={styles.taskField}>
                                        <span className={styles.fieldLabel}>Due Date</span>
                                        <span className={styles.fieldValueEmpty}>No Date</span>
                                    </div>
                                    <div className={styles.taskField}>
                                        <span className={styles.fieldLabel}>Assignee</span>
                                        <span className={styles.fieldValueEmpty}>Unassigned</span>
                                    </div>
                                    <div className={styles.taskNote}>
                                        "Plumbing finish master bath"
                                        <br />
                                        <span className={styles.noteContext}>Created 4 days ago from chat</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Right Column: Bullet Pains */}
                    <div className={styles.textColumn}>
                        <ul className={styles.bulletList}>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className={styles.bulletItem}
                            >
                                <span className={styles.bulletTitle}>“It’s ready.” Then it isn’t.</span>
                                <span className={styles.bulletDesc}>Schedule whiplash.</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className={styles.bulletItem}
                            >
                                <span className={styles.bulletTitle}>Punch items disappear.</span>
                                <span className={styles.bulletDesc}>Rework and callbacks.</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className={styles.bulletItem}
                            >
                                <span className={styles.bulletTitle}>Blindspots.</span>
                                <span className={styles.bulletDesc}>Office can’t see what’s truly done today.</span>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
