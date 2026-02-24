import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MonitorPlay, CheckCircle2 } from 'lucide-react';
import styles from './ActivationSteps.module.css';

const ActivationSteps: React.FC = () => {
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
                    <h2 className={styles.title}>Everyone can message<br />You stay in control</h2>
                    <p className={styles.subtitle}>
                        Field crews get a dead-simple app to send updates. Managers get a powerful dashboard to track ownership.
                    </p>
                </motion.div>

                {/* Split Layout */}
                <div className={styles.accountabilityWrapper}>

                    {/* Left: Mobile Field View */}
                    <motion.div
                        className={styles.deviceBlock}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.deviceHeader}>
                            <Smartphone size={24} color="#18A87D" />
                            <h3>The Field: "My Tasks"</h3>
                        </div>
                        <p className={styles.deviceDesc}>
                            Crews instantly see what they own today. No digging through chat history to find instructions.
                        </p>

                        <div className={styles.mobileMockup}>
                            <div className={styles.mobileScreen}>
                                <div className={styles.mHeader}>
                                    <div className={styles.mGreeting}>Good morning, Dave</div>
                                    <div className={styles.avatarsSm}>
                                        <div className={styles.avatarSm} style={{ background: '#28C840' }}>D</div>
                                    </div>
                                </div>
                                <div className={styles.mSection}>Today's Work</div>

                                <div className={styles.mTaskCard}>
                                    <div className={styles.mTaskTop}>
                                        <div className={styles.checkbox} />
                                        <span>Order 20 sheets drywall</span>
                                    </div>
                                    <div className={styles.mTaskContext}>From: Sarah • 101 Main St</div>
                                </div>

                                <div className={styles.mTaskCard}>
                                    <div className={styles.mTaskTop}>
                                        <div className={styles.checkbox} />
                                        <span>Touch up paint in lobby</span>
                                    </div>
                                    <div className={styles.mTaskContext}>From: Mike • 101 Main St</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Desktop Manager View */}
                    <motion.div
                        className={styles.deviceBlock}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.deviceHeader}>
                            <MonitorPlay size={24} color="#138EFF" />
                            <h3>The Office: Project Overview</h3>
                        </div>
                        <p className={styles.deviceDesc}>
                            Managers get a high-level view of every task, who owns it, and exactly what's blocking progress.
                        </p>

                        <div className={styles.desktopMockup}>
                            <div className={styles.desktopScreen}>
                                <div className={styles.dHeader}>
                                    <div className={styles.dSearch} />
                                    <div className={styles.dFilter}>Filter by Owner</div>
                                </div>

                                <div className={styles.dTable}>
                                    <div className={styles.dRowHeader}>
                                        <div className={styles.dColTask}>Task</div>
                                        <div className={styles.dColOwner}>Owner</div>
                                        <div className={styles.dColStatus}>Status</div>
                                    </div>

                                    <div className={styles.dRow}>
                                        <div className={styles.dColTask}>Order 20 sheets drywall</div>
                                        <div className={styles.dColOwner}>
                                            <div className={styles.dOwnerBadge}><div className={styles.avatarXs} style={{ background: '#28C840' }}>D</div> Dave</div>
                                        </div>
                                        <div className={styles.dColStatus}><span className={styles.statusBadge} style={{ background: '#f1f3f5', color: '#4a5568' }}>To Do</span></div>
                                    </div>

                                    <div className={styles.dRow}>
                                        <div className={styles.dColTask}>Rough plumbing inspection</div>
                                        <div className={styles.dColOwner}>
                                            <div className={styles.dOwnerBadge}><div className={styles.avatarXs} style={{ background: '#FC7F5B' }}>S</div> Sarah</div>
                                        </div>
                                        <div className={styles.dColStatus}><span className={styles.statusBadge} style={{ background: '#F0FFF4', color: '#18A87D' }}><CheckCircle2 size={12} /> Done</span></div>
                                    </div>

                                    <div className={styles.dRow}>
                                        <div className={styles.dColTask}>Paint prep framing</div>
                                        <div className={styles.dColOwner}>
                                            <div className={styles.dOwnerBadge}><div className={styles.avatarXs} style={{ background: '#138EFF' }}>M</div> Mike</div>
                                        </div>
                                        <div className={styles.dColStatus}><span className={styles.statusBadge} style={{ background: '#FFF5F5', color: '#E53E3E' }}>Blocked</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ActivationSteps;
