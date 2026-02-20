import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import styles from './InviteMoment.module.css';

const InviteMoment: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>

                {/* Visual Side (Left) */}
                <div className={styles.visual}>
                    <motion.div
                        className={styles.centerNode}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <MessageSquare size={48} strokeWidth={1.5} color="var(--secondary-green)" />
                    </motion.div>

                    {/* Connecting Lines */}
                    <div className={styles.connections}>
                        <svg className={styles.svgLines} viewBox="0 0 400 300">
                            <motion.path
                                d="M 50,80 C 150,80 150,150 200,150"
                                fill="none" stroke="var(--grey-03)" strokeWidth="4" strokeDasharray="8 8"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                            <motion.path
                                d="M 50,220 C 150,220 150,150 200,150"
                                fill="none" stroke="var(--grey-03)" strokeWidth="4" strokeDasharray="8 8"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            />
                            <motion.path
                                d="M 350,80 C 250,80 250,150 200,150"
                                fill="none" stroke="var(--grey-03)" strokeWidth="4" strokeDasharray="8 8"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                            />
                            <motion.path
                                d="M 350,220 C 250,220 250,150 200,150"
                                fill="none" stroke="var(--grey-03)" strokeWidth="4" strokeDasharray="8 8"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                            />
                        </svg>

                        {/* Node Avatars */}
                        <motion.div
                            className={`${styles.node} ${styles.nodeTopLeft}`}
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", delay: 0.8 }}
                        >
                            <img src="https://i.pravatar.cc/150?img=51" alt="Foreman 1" />
                        </motion.div>
                        <motion.div
                            className={`${styles.node} ${styles.nodeBottomLeft}`}
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", delay: 1 }}
                        >
                            <img src="https://i.pravatar.cc/150?img=57" alt="Foreman 2" />
                        </motion.div>
                        <motion.div
                            className={`${styles.node} ${styles.nodeTopRight}`}
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", delay: 1.2 }}
                        >
                            <img src="https://i.pravatar.cc/150?img=59" alt="Foreman 3" />
                        </motion.div>
                        <motion.div
                            className={`${styles.node} ${styles.nodeBottomRight}`}
                            initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", delay: 1.4 }}
                        >
                            <img src="https://i.pravatar.cc/150?img=52" alt="Foreman 4" />
                        </motion.div>
                    </div>
                </div>

                {/* Content Side (Right) */}
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.pillText}>Invite Value</div>
                        <h2 className={styles.title}>Invite Team &<br />See tasks clearly</h2>
                        <p className={styles.subtitle}>
                            New members land in the project with their tasks ready. <br />No confusion. Just action.
                        </p>
                        <ul className={styles.benefitsList}>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                                <div className={styles.checkCircle}><Check size={16} strokeWidth={2} /></div>
                                Join directly into project workspace
                            </motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                                <div className={styles.checkCircle}><Check size={16} strokeWidth={2} /></div>
                                Tasks are clear from day one
                            </motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
                                <div className={styles.checkCircle}><Check size={16} strokeWidth={2} /></div>
                                Updates stay connected to the chat
                            </motion.li>
                        </ul>
                        <div className={styles.ctaWrapper}>
                            <Button size="lg" className={styles.ctaBtn} style={{ borderBottom: 'none' }}>Start For Free</Button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default InviteMoment;
