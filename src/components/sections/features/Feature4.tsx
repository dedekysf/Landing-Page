import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Folder, Hash, Plus, Smile, Mic } from 'lucide-react';
import styles from './Feature4.module.css';

const Feature4 = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState(2);

    useEffect(() => {
        if (!isActive) {
            setPhase(2);
            return;
        }

        setPhase(0);

        let isMounted = true;
        let timeoutIds: any[] = [];

        const runSequence = () => {
            if (!isMounted) return;
            setPhase(0);

            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(1) }, 400));
            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(2) }, 1800));

            // loop
            timeoutIds.push(setTimeout(() => {
                if (isMounted) runSequence();
            }, 6000));
        };

        runSequence();

        return () => {
            isMounted = false;
            timeoutIds.forEach(clearTimeout);
        };
    }, [isActive]);

    return (
        <div className={styles.mockupWrapper}>
            <motion.div className={styles.mockupUi} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <div className={styles.chatWindow}>
                    <div className={styles.dateSeparator}>Friday, February 22</div>

                    <AnimatePresence>
                        {phase >= 1 && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.messageRow}>
                                <img src="https://i.pravatar.cc/150?img=5" className={styles.msgAvatar} alt="Melissa" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}><span className={styles.msgSender}>Melissa</span><span className={styles.msgTime}>12:21 PM</span></div>
                                    <div className={styles.msgText}>Hi Oscar!<br />How is the progress?</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {phase >= 2 && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.messageRow}>
                                <img src="https://i.pravatar.cc/150?img=11" className={styles.msgAvatar} alt="Oscar" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}><span className={styles.msgSender}>Oscar</span><span className={styles.msgTime}>12:24 PM</span></div>
                                    <div className={styles.msgText}>Delivery for Route A just finished.</div>

                                    <AnimatePresence>
                                        {phase >= 2 && (
                                            <motion.div initial={{ opacity: 0, scale: 0.95, height: 0 }} animate={{ opacity: 1, scale: 1, height: 'auto' }} className={styles.completedCard}>
                                                <div className={styles.cardHeader}>
                                                    <div className={styles.cardHeaderLeft}><CheckCircle2 size={20} fill="var(--secondary-green)" color="#fff" /> Task Completed</div>
                                                    <div>Feb 22, 2026</div>
                                                </div>
                                                <div className={styles.cardBody}>
                                                    <div className={styles.cardPills}>
                                                        <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={14} /> TaskTag Project</div>
                                                        <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={14} /> PickupTrim</div>
                                                    </div>
                                                    <div className={styles.cardFooter}>
                                                        <span>Due: Feb 22</span>
                                                        <div className={styles.avatarStack}>
                                                            <img src="https://i.pravatar.cc/150?img=11" className={styles.avatar} alt="User 1" />
                                                            <img src="https://i.pravatar.cc/150?img=12" className={styles.avatar} alt="User 2" style={{ zIndex: 1 }} />
                                                            <div className={styles.avatarCount} style={{ zIndex: 2 }}>+2</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* <AnimatePresence>
                        {phase >= 3 && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={styles.messageRow}>
                                <img src="https://i.pravatar.cc/150?img=5" className={styles.msgAvatar} alt="Melissa" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}><span className={styles.msgSender}>Melissa</span><span className={styles.msgTime}>12:21 PM</span></div>
                                    <div className={styles.msgText}>Thanks Oscar!</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence> */}
                </div>

                <div className={styles.inputArea}>
                    <Plus size={24} />
                    <div className={styles.inputText}>Type message here...</div>
                    <div className={styles.inputAction}>
                        <Smile size={24} />
                        <Mic size={24} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export default Feature4;
