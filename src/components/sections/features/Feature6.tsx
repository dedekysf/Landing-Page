import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, UserMinus, UserPlus, Plus, Folder, Hash } from 'lucide-react';
import styles from './Feature6.module.css';
import avatarForeman from '../../../assets/avatar_foreman.png';

const Feature6 = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setPhase(0);
            return;
        }
        let isMounted = true;
        let timeoutIds: any[] = [];

        const next = (p: number, d: number) => {
            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(p) }, d));
        };

        const runSequence = () => {
            if (!isMounted) return;

            // Phase 0 starts empty. Reveal items one by one.
            setPhase(0);
            next(1, 800);  // Melissa Created (Bottom)
            next(2, 1800); // Melissa Added
            next(3, 2800); // Melissa Unassigned
            next(4, 3800); // Oscar Gilberto Completed (Top)

            // Hold the final state, then clear smoothly
            timeoutIds.push(setTimeout(() => {
                if (!isMounted) return;
                setPhase(0); // Trigger AnimatePresence exit

                // Wait for exit animations to complete before restarting
                timeoutIds.push(setTimeout(() => {
                    if (isMounted) runSequence();
                }, 1200));
            }, 8000));
        };
        runSequence();

        return () => {
            isMounted = false;
            timeoutIds.forEach(clearTimeout);
        };
    }, [isActive]);

    const itemVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring' as any,
                damping: 24,
                stiffness: 120,
                duration: 0.8
            }
        }
    };

    return (
        <div className={styles.mockupWrapper}>
            <motion.div className={styles.mockupUi} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <div className={styles.feedContainer}>
                    <AnimatePresence mode="popLayout">
                        {/* Oldest activity at bottom (first in column-reverse DOM) */}
                        {phase >= 1 && (
                            <motion.div key="item-4" layout variants={itemVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -10 }} className={styles.feedItem}>
                                <div className={styles.avatarWrap}>
                                    <img src="https://i.pravatar.cc/150?img=5" className={styles.avatar} alt="Melissa" />
                                    <div className={`${styles.avatarBadge} ${styles.badgeBlue}`}><Plus size={10} strokeWidth={3} /></div>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <div className={styles.userName}>Melissa Johnson</div>
                                        <div className={styles.timeText}>08:45 AM</div>
                                    </div>
                                    <div className={styles.actionText}>Created this task</div>
                                    <div className={styles.pillsRow}>
                                        <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={12} /> <span>Raintree Hollow</span></div>
                                        <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={12} /> <span>Drywall patch</span></div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {phase >= 2 && (
                            <motion.div key="item-3" layout variants={itemVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -10 }} className={styles.feedItem}>
                                <div className={styles.avatarWrap}>
                                    <img src="https://i.pravatar.cc/150?img=5" className={styles.avatar} alt="Melissa" />
                                    <div className={`${styles.avatarBadge} ${styles.badgeBlue}`}><UserPlus size={10} strokeWidth={3} /></div>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <div className={styles.userName}>Melissa Johnson</div>
                                        <div className={styles.timeText}>08:45 AM</div>
                                    </div>
                                    <div className={styles.actionText}>
                                        Added <span className={styles.mention}>@Oscar Gilberto</span> as Task Assignee
                                    </div>
                                    <div className={styles.pillsRow}>
                                        <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={12} /> <span>Raintree Hollow</span></div>
                                        <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={12} /> <span>Drywall patch</span></div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {phase >= 3 && (
                            <motion.div key="item-2" layout variants={itemVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -10 }} className={styles.feedItem}>
                                <div className={styles.avatarWrap}>
                                    <img src="https://i.pravatar.cc/150?img=5" className={styles.avatar} alt="Melissa" />
                                    <div className={`${styles.avatarBadge} ${styles.badgeRed}`}><UserMinus size={10} strokeWidth={3} /></div>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <div className={styles.userName}>Melissa Johnson</div>
                                        <div className={styles.timeText}>09:20 AM</div>
                                    </div>
                                    <div className={styles.actionText}>
                                        Unassigned <span className={styles.mention}>@Gerald Oliver</span> from this task
                                    </div>
                                    <div className={styles.pillsRow}>
                                        <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={12} /> <span>1320 Smith Street R...</span></div>
                                        <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={12} /> <span>Foundation Inspect...</span></div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Newest activity at top (last in column-reverse DOM) */}
                        {phase >= 4 && (
                            <motion.div key="item-1" layout variants={itemVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -10 }} className={styles.feedItem}>
                                <div className={styles.avatarWrap}>
                                    <img src={avatarForeman} className={styles.avatar} alt="Oscar" />
                                    <div className={`${styles.avatarBadge} ${styles.badgeGreen}`}><Check size={10} strokeWidth={3} /></div>
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <div className={styles.userName}>Oscar Gilberto</div>
                                        <div className={styles.timeText}>15:44 PM</div>
                                    </div>
                                    <div className={styles.actionText}>Completed this task</div>
                                    <div className={styles.pillsRow}>
                                        <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={12} /> <span>Raintree Hollow</span></div>
                                        <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={12} /> <span>Drywall patch</span></div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default Feature6;
