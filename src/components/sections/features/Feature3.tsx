import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Hash, X, Plus, Camera, Image as ImageIcon, Mic, Send } from 'lucide-react';
import styles from './Feature3.module.css';

const Feature3 = ({ isActive }: { isActive: boolean }) => {
    // Phases:
    // 0: Empty input
    // 1: Tag 1 added
    // 2: Tag 2 added
    // 3: Image attached
    // 4: Text typed
    const [phase, setPhase] = useState(4);
    const [typedText, setTypedText] = useState("Please review this when you got time.");
    const fullText = "Please review this when you got time.";

    useEffect(() => {
        if (!isActive) {
            setPhase(4);
            setTypedText(fullText);
            return;
        }

        setPhase(0);
        setTypedText('');

        let isMounted = true;
        let timeoutIds: ReturnType<typeof setTimeout>[] = [];
        let typingInterval: ReturnType<typeof setInterval>;

        const runSequence = () => {
            if (!isMounted) return;
            setPhase(0);
            setTypedText('');

            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(1) }, 600));
            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(2) }, 1200));
            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(3) }, 1800));
            timeoutIds.push(setTimeout(() => {
                if (!isMounted) return;
                setPhase(4);
                let i = 0;
                let currentText = '';
                typingInterval = setInterval(() => {
                    if (i < fullText.length) {
                        currentText += fullText[i];
                        setTypedText(currentText);
                        i++;
                    } else {
                        clearInterval(typingInterval);
                        timeoutIds.push(setTimeout(() => {
                            if (!isMounted) return;
                            runSequence(); // Loop
                        }, 4000));
                    }
                }, 40);
            }, 2400));
        };

        runSequence();

        return () => {
            isMounted = false;
            timeoutIds.forEach(clearTimeout);
            if (typingInterval) clearInterval(typingInterval);
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
                    <div className={styles.dateSeparator}>Friday, February 22</div>

                    <div className={styles.messageRow}>
                        <img src="https://i.pravatar.cc/150?img=5" className={styles.msgAvatar} alt="Melissa" />
                        <div className={styles.msgContent}>
                            <div className={styles.msgHeader}>
                                <span className={styles.msgSender}>Melissa</span>
                                <span className={styles.msgTime}>12:21 PM</span>
                            </div>
                            <div className={styles.msgText}>
                                Can you send your updates?
                            </div>
                        </div>
                    </div>

                    <div className={styles.messageRow}>
                        <img src="https://i.pravatar.cc/150?img=11" className={styles.msgAvatar} alt="Oscar" />
                        <div className={styles.msgContent}>
                            <div className={styles.msgHeader}>
                                <span className={styles.msgSender}>Oscar</span>
                                <span className={styles.msgTime}>12:24 PM</span>
                            </div>
                            <div className={styles.msgText}>
                                I will send soon
                            </div>
                        </div>
                    </div>

                    {/* <div className={styles.messageRow}>
                        <img src="https://i.pravatar.cc/150?img=5" className={styles.msgAvatar} alt="Melissa" />
                        <div className={styles.msgContent}>
                            <div className={styles.msgHeader}>
                                <span className={styles.msgSender}>Melissa</span>
                                <span className={styles.msgTime}>12:25 PM</span>
                            </div>
                            <div className={styles.msgText}>
                                Ok
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className={styles.inputArea}>
                    <div className={styles.tagsRow} style={{ minHeight: phase > 0 ? '28px' : '0px', transition: 'min-height 0.3s' }}>
                        <AnimatePresence>
                            {phase >= 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className={`${styles.tagPill} ${styles.projectColor}`}
                                >
                                    <Folder size={14} /> TaskTag Project <div className={styles.closeIcon}><X size={10} strokeWidth={3} /></div>
                                </motion.div>
                            )}
                            {phase >= 2 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className={`${styles.tagPill} ${styles.taskColor}`}
                                >
                                    <Hash size={14} /> PickupTrim <div className={styles.closeIcon}><X size={10} strokeWidth={3} /></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <AnimatePresence>
                        {phase >= 3 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className={styles.thumbnailWrapper}>
                                    <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200" className={styles.thumbnailImg} alt="Attachment" />
                                    <div className={styles.removeThumb}><X size={12} strokeWidth={3} /></div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className={styles.inputText} style={{ minHeight: '20px' }}>
                        {typedText}
                    </div>

                    <div className={styles.actionsRow}>
                        <div className={styles.leftActions}>
                            <div className={styles.actionIcon}><Plus size={20} /></div>
                            <div className={styles.transparentIcon}><Hash size={20} /></div>
                            <div className={styles.transparentIcon}><Camera size={20} /></div>
                            <div className={styles.transparentIcon}><ImageIcon size={20} /></div>
                            <div className={styles.transparentIcon}><Mic size={20} /></div>
                        </div>
                        <motion.div
                            className={styles.sendBtn}
                            whileTap={{ scale: 0.9 }}
                            animate={phase === 4 && typedText.length === fullText.length ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.3 }}
                        >
                            <Send size={18} />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Feature3;
