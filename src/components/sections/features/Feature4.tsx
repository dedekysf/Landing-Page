import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Folder, Hash, Plus, Smile, Mic } from 'lucide-react';
import styles from './Feature4.module.css';
import avatarForeman from '../../../assets/avatar_foreman.png';
import drywallImg from '../../../assets/drywall.png';
import pdfIcon from '../../../assets/pdf_icon.png';

const Feature4 = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setPhase(0);
            return;
        }

        let isMounted = true;
        let timeoutIds: ReturnType<typeof setTimeout>[] = [];

        const runSequence = () => {
            if (!isMounted) return;
            setPhase(0);

            const next = (nextPhase: number, delay: number) => {
                timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(nextPhase) }, delay));
            };

            next(1, 1000); // Gerald's text
            next(2, 2500); // Gerald's status card
            next(3, 4000); // Gerald's attachments (grid)
            next(4, 7000); // Melissa's reply

            timeoutIds.push(setTimeout(() => {
                if (isMounted) runSequence();
            }, 12000));
        };

        runSequence();

        return () => {
            isMounted = false;
            timeoutIds.forEach(clearTimeout);
        };
    }, [isActive]);

    return (
        <div className={styles.mockupWrapper}>
            <motion.div
                className={styles.mockupUi}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <div className={styles.chatWindow}>
                    <AnimatePresence mode="popLayout">
                        {phase >= 1 && (
                            <motion.div
                                key="gerald-msg-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                                className={styles.messageRow}
                                layout
                            >
                                <img src={avatarForeman} className={styles.msgAvatar} alt="Gerald" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}>
                                        <span className={styles.msgSender} style={{ color: 'var(--dark-magenta)' }}>Gerald</span>
                                        <span className={styles.msgTime}>12:23 PM</span>
                                    </div>
                                    <div className={styles.msgText}>
                                        Drywall patch complete. Invoice attached.
                                    </div>

                                    {phase >= 2 && (
                                        <motion.div
                                            key="gerald-card"
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className={styles.completedCard}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className={styles.cardHeader}>
                                                <div className={styles.cardHeaderLeft}><CheckCircle2 size={18} fill="var(--secondary-green)" color="#fff" /> TASK COMPLETED</div>
                                                <div className={styles.cardHeaderDate}>Feb 22, 2026</div>
                                            </div>
                                            <div className={styles.cardBody}>
                                                <div className={styles.cardPills}>
                                                    <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={14} /> <span>Raintree Hollow</span></div>
                                                    <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={14} /> <span>Drywall patch</span></div>
                                                </div>
                                                <div className={styles.cardFooter}>
                                                    <div className={styles.taDue}>
                                                        Due: Feb 22, 2026
                                                    </div>
                                                    <img src={avatarForeman} className={styles.avatar} style={{ marginLeft: 'auto', border: 'none' }} alt="Avatar" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {phase >= 3 && (
                                        <motion.div
                                            key="gerald-attachments"
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className={styles.attachmentGrid}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <img
                                                src={drywallImg}
                                                className={styles.drywallImage}
                                                alt="Drywall"
                                            />
                                            <div className={styles.fileAttachment}>
                                                <div className={styles.fileIcon}><img src={pdfIcon} alt="PDF" /></div>
                                                <span className={styles.fileName}>Drywall_Invoice.pdf</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {phase >= 4 && (
                            <motion.div
                                key="melissa-msg-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                                className={styles.messageRow}
                                layout
                            >
                                <img src="https://i.pravatar.cc/150?img=5" className={styles.msgAvatar} alt="Melissa" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}>
                                        <span className={styles.msgSender}>Melissa</span>
                                        <span className={styles.msgTime}>12:30 PM</span>
                                    </div>
                                    <div className={styles.msgText}>Approved. Sending to accounting.</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className={styles.inputArea}>
                    <Plus size={18} />
                    <div className={styles.inputText}>Type message here...</div>
                    <div className={styles.inputAction}>
                        <Smile size={18} />
                        <Mic size={18} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export default Feature4;
