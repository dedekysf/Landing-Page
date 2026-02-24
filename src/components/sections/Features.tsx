import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Folder } from 'lucide-react';
import styles from './Features.module.css';

const Features: React.FC = () => {
    // New 3-step visual feature grid

    return (
        <section id="features" className={styles.features}>
            <div className={`container ${styles.container}`}>

                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title} style={{ textAlign: 'center', margin: '0 auto' }}>
                        Message it. Tag it. <br />The job moves.
                    </h2>
                </motion.div>

                {/* 3-Step Visual Strip */}
                <div className={styles.visualStrip}>

                    {/* Step 1: Chat to Tag */}
                    <motion.div
                        className={styles.stepCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.stepHeader}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Message it</h3>
                        </div>
                        <div className={styles.stepVisual}>
                            <div className={styles.chatVisual}>
                                <div className={styles.chatMessage}>
                                    <div className={styles.avatarSm} style={{ background: '#138EFF' }}>M</div>
                                    <div className={styles.msgBody}>
                                        <div className={styles.msgName}>Mike</div>
                                        <div className={styles.msgText}>Drywall is material is short.</div>
                                    </div>
                                </div>
                                <div className={styles.chatMessage}>
                                    <div className={styles.avatarSm} style={{ background: '#FC7F5B' }}>S</div>
                                    <div className={styles.msgBody}>
                                        <div className={styles.msgName}>Sarah</div>
                                        <div className={styles.msgText}>@Dave order 20 more sheets.</div>

                                        {/* Action Button popping up */}
                                        <motion.div
                                            className={styles.actionPopup}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                            viewport={{ once: true }}
                                        >
                                            <Folder size={14} />
                                            <span>Tag as task</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 2: Task Created */}
                    <motion.div
                        className={styles.stepCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.stepHeader}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Tag it</h3>
                        </div>
                        <div className={styles.stepVisual}>
                            <div className={styles.taskVisual}>
                                <div className={styles.taskTitle}>Order 20 more sheets</div>
                                <div className={styles.taskMeta}>
                                    <div className={styles.metaLabel}>Owner</div>
                                    <div className={styles.metaValue}>
                                        <div className={styles.avatarXs} style={{ background: '#28C840' }}>D</div>
                                        Dave
                                    </div>
                                </div>
                                <div className={styles.taskMeta}>
                                    <div className={styles.metaLabel}>Due</div>
                                    <div className={styles.metaValue}>Tomorrow</div>
                                </div>
                                <div className={styles.taskMeta}>
                                    <div className={styles.metaLabel}>Status</div>
                                    <div className={styles.metaValue}>
                                        <span className={styles.statusTodo}>To Do</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 3: Progress Tracked */}
                    <motion.div
                        className={styles.stepCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.stepHeader}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>The job moves</h3>
                        </div>
                        <div className={styles.stepVisual}>
                            <div className={styles.projectVisual}>
                                <div className={styles.kanbanColumn}>
                                    <div className={styles.colHeader}>Today</div>
                                    <div className={styles.kCard} style={{ borderLeft: '3px solid #138EFF' }}>Order drywall</div>
                                    <div className={styles.kCard} style={{ borderLeft: '3px solid #138EFF' }}>Prep floors</div>
                                </div>
                                <div className={styles.kanbanColumn}>
                                    <div className={styles.colHeader}>Blocked</div>
                                    <div className={styles.kCard} style={{ borderLeft: '3px solid #E53E3E' }}>Paint prep</div>
                                </div>
                                <div className={styles.kanbanColumn}>
                                    <div className={styles.colHeader}>Done</div>
                                    <div className={styles.kCard} style={{ borderLeft: '3px solid #18A87D', opacity: 0.6 }}>Rough plumbing</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Outcome-Driven Construction Features */}
                <div className={styles.outcomesSection}>
                    <motion.div
                        className={styles.outcomesHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.outcomesTitle}>Built for punch lists, crews, and closeout.</h2>
                    </motion.div>

                    <div className={styles.outcomesGrid}>
                        {/* Outcome 1: Punch Tracking */}
                        <motion.div
                            className={styles.outcomeCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.outcomeVisual}>
                                <div className={styles.mockPhotoWrapper}>
                                    <div className={styles.mockPhoto} style={{ background: '#e2e8f0' }}>
                                        {/* Abstract representation of a field photo */}
                                        <div className={styles.photoCrosshair} />
                                    </div>
                                    <div className={styles.mockTag}>Need paint touchup</div>
                                </div>
                            </div>
                            <div className={styles.outcomeContent}>
                                <h4>Visual Punch Lists</h4>
                                <p>Snap a photo, tag the issue, and assign it before you even leave the room. No more transcribing notes later.</p>
                            </div>
                        </motion.div>

                        {/* Outcome 2: Templates */}
                        <motion.div
                            className={styles.outcomeCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.outcomeVisual}>
                                <div className={styles.mockList}>
                                    <div className={styles.mockListHeader}>Daily Safety Checklist</div>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={styles.mockListItem}>
                                            <div className={styles.mockCheckbox} />
                                            <div className={styles.mockLine} style={{ width: `${80 + (i * 5)}%` }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.outcomeContent}>
                                <h4>Standardize with Templates</h4>
                                <p>Load your standard checks instantly. Ensure consistency across crews without passing around crushed paper forms.</p>
                            </div>
                        </motion.div>

                        {/* Outcome 3: Closeout */}
                        <motion.div
                            className={styles.outcomeCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.outcomeVisual}>
                                <div className={styles.mockReport}>
                                    <div className={styles.mockReportHeader}>
                                        <div className={styles.mockLine} style={{ width: '40%', height: '8px', background: '#fff' }} />
                                    </div>
                                    <div className={styles.mockReportBody}>
                                        <div className={styles.mockChart}>
                                            <div className={styles.mockPie} />
                                            <div className={styles.mockLegend}>
                                                <div className={styles.mockLine} style={{ width: '100%', marginBottom: '4px' }} />
                                                <div className={styles.mockLine} style={{ width: '80%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.outcomeContent}>
                                <h4>Clean Project Summary</h4>
                                <p>Generate instant, professional PDF reports showing what was requested, who did it, and the photo proof.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Optional Small CTA */}
                <motion.div
                    className={styles.centerCta}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <a href="#" className={styles.smallCtaLink}>Start free <ArrowRight size={16} /></a>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
