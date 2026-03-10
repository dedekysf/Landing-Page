import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Hash, X, Plus, Camera, Image as ImageIcon, Mic, Send, FileText, MapPin, Check, Clipboard, Smile } from 'lucide-react';
import styles from './Feature3.module.css';
import avatarForeman from '../../../assets/avatar_foreman.png';
import drywallImg from '../../../assets/drywall.png';
import pdfIcon from '../../../assets/pdf_icon.png';

const Feature3 = ({ isActive }: { isActive: boolean }) => {
    /**
     * Phases:
     * 0: Empty - Initial state
     * 1: Press Hash icon (scale down)
     * 2: Tags added (Raintree Hollow, Drywall patch)
     * 3: Press Image icon (scale down)
     * 4: Image thumbnail added
     * 5: Press Plus icon (scale down)
     * 6: Bottom Sheet appears
     * 7: Press "File" in BS (scale down item)
     * 8: BS hides + PDF attached
     * 9: Typing message
     * 10: Press Send icon (scale down)
     * 11: Oscar's message sent (Complex bubble)
     * 12: Melissa reply: "How many coats..."
     * 13: Oscar reply: "In the repair notes..."
     * 14: Melissa final: "Found it, thanks."
     */
    const [phase, setPhase] = useState(0);
    const [typedText, setTypedText] = useState("");
    const fullText = "Drywall patch done. Photos and notes attached.";

    useEffect(() => {
        if (!isActive) {
            setPhase(0);
            setTypedText('');
            return;
        }

        let isMounted = true;
        let timeoutIds: ReturnType<typeof setTimeout>[] = [];
        let typingInterval: ReturnType<typeof setInterval>;

        const runSequence = () => {
            if (!isMounted) return;
            setPhase(0);
            setTypedText('');

            const next = (nextPhase: number, delay: number) => {
                timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(nextPhase) }, delay));
            };

            // Timeline Adjustments
            next(1, 1000); // Press Hash
            next(2, 1300); // Show Tags
            next(3, 2000); // Press Image
            next(4, 2300); // Show Image
            next(5, 3000); // Press Plus
            next(6, 3300); // Show Bottom Sheet
            next(7, 4300); // Press File in BS
            next(8, 4600); // Hide BS + Show PDF

            timeoutIds.push(setTimeout(() => {
                if (!isMounted) return;
                setPhase(9); // Start typing
                let i = 0;
                let currentText = '';
                typingInterval = setInterval(() => {
                    if (i < fullText.length) {
                        currentText += fullText[i];
                        setTypedText(currentText);
                        i++;
                    } else {
                        clearInterval(typingInterval);
                        next(10, 500);  // Press Send
                        next(11, 800);  // Oscar message appears (rose from bottom)
                        next(12, 2800); // Melissa reply
                        next(13, 4800); // Oscar reply
                        next(14, 6800); // Melissa final

                        timeoutIds.push(setTimeout(() => {
                            if (isMounted) runSequence();
                        }, 10000));
                    }
                }, 30);
            }, 5000));
        };

        runSequence();

        return () => {
            isMounted = false;
            timeoutIds.forEach(clearTimeout);
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [isActive]);

    const bsItems = [
        { icon: <Camera size={18} />, label: 'Camera' },
        { icon: <ImageIcon size={18} />, label: 'Gallery' },
        { icon: <FileText size={18} />, label: 'File', active: phase === 7 },
        { icon: <MapPin size={18} />, label: 'Check in / Location' },
        { icon: <Check size={18} />, label: 'Complete Task' },
        { icon: <Clipboard size={18} />, label: 'Assign Task' },
    ];

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
                        {phase >= 11 && (
                            <motion.div
                                key="oscar-msg-1"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className={styles.messageRow}
                                layout
                            >
                                <img src={avatarForeman} className={styles.msgAvatar} alt="Oscar" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}>
                                        <span className={styles.msgSender} style={{ color: 'var(--dark-magenta)' }}>Oscar</span>
                                        <span className={styles.msgTime} style={{ color: 'var(--grey-05)' }}>12:20 PM</span>
                                    </div>
                                    <div className={styles.msgText}>{fullText}</div>
                                    <div className={styles.attachmentList} style={{ marginTop: '8px' }}>
                                        <div className={styles.attachmentGrid}>
                                            <div className={styles.thumbnailWrapper}>
                                                <img src={drywallImg} className={styles.thumbnailImg} alt="Attachment" />
                                            </div>
                                            <div className={styles.fileAttachment}>
                                                <div className={styles.fileIcon}><img src={pdfIcon} alt="PDF" /></div>
                                                <span className={styles.fileName}>Drywall_Notes.pdf</span>
                                            </div>
                                        </div>
                                        <div className={styles.tagsGrid} style={{ marginTop: '4px' }}>
                                            <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={14} /> <span>Raintree Hollow</span></div>
                                            <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={14} /> <span>Drywall patch</span></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {phase >= 12 && (
                            <motion.div
                                key="melissa-msg-1"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                                className={styles.messageRow}
                                layout
                            >
                                <img src="https://i.pravatar.cc/150?img=5" className={styles.msgAvatar} alt="Melissa" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}>
                                        <span className={styles.msgSender}>Melissa</span>
                                        <span className={styles.msgTime} style={{ color: 'var(--grey-05)' }}>12:21 PM</span>
                                    </div>
                                    <div className={styles.msgText}>How many coats of compound?</div>
                                </div>
                            </motion.div>
                        )}
                        {phase >= 13 && (
                            <motion.div
                                key="oscar-msg-2"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                                className={styles.messageRow}
                                layout
                            >
                                <img src={avatarForeman} className={styles.msgAvatar} alt="Oscar" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}>
                                        <span className={styles.msgSender} style={{ color: 'var(--dark-magenta)' }}>Oscar</span>
                                        <span className={styles.msgTime} style={{ color: 'var(--grey-05)' }}>12:24 PM</span>
                                    </div>
                                    <div className={styles.msgText}>It's in the repair notes on the task.</div>
                                </div>
                            </motion.div>
                        )}
                        {phase >= 14 && (
                            <motion.div
                                key="melissa-msg-2"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                                className={styles.messageRow}
                                layout
                            >
                                <img src="https://i.pravatar.cc/150?img=5" className={styles.msgAvatar} alt="Melissa" />
                                <div className={styles.msgContent}>
                                    <div className={styles.msgHeader}>
                                        <span className={styles.msgSender}>Melissa</span>
                                        <span className={styles.msgTime} style={{ color: 'var(--grey-05)' }}>12:30 PM</span>
                                    </div>
                                    <div className={styles.msgText}>Found it, thanks.</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className={styles.inputArea}>
                    {phase < 11 ? (
                        <>
                            <div className={styles.tagsGrid} style={{ minHeight: phase >= 2 ? '28px' : '0px', transition: 'min-height 0.3s' }}>
                                <AnimatePresence>
                                    {phase >= 2 && (
                                        <>
                                            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className={`${styles.tagPill} ${styles.projectColor}`}>
                                                <Folder size={14} /> <span>Raintree Hollow</span>
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className={`${styles.tagPill} ${styles.taskColor}`}>
                                                <Hash size={14} /> <span>Drywall patch</span>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className={styles.attachmentList}>
                                <div className={styles.attachmentGrid}>
                                    <AnimatePresence>
                                        {phase >= 4 && (
                                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                                                <div className={styles.thumbnailWrapper}>
                                                    <img src={drywallImg} className={styles.thumbnailImg} alt="Attachment" />
                                                    <div className={styles.removeThumb}><X size={12} strokeWidth={3} /></div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {phase >= 8 && (
                                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                                                <div className={styles.fileAttachment}>
                                                    <div className={styles.fileIcon}><img src={pdfIcon} alt="PDF" /></div>
                                                    <span className={styles.fileName}>drywall_notes.pdf</span>
                                                    <div className={styles.removeThumb}><X size={12} strokeWidth={3} /></div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className={styles.inputText}>{typedText || (phase < 9 ? "Type message here..." : "")}</div>

                            <div className={styles.actionsRow}>
                                <div className={styles.leftActions}>
                                    <motion.div
                                        animate={phase === 5 ? { scale: 0.88, opacity: 0.8, backgroundColor: 'var(--grey-03)' } : { scale: 1, opacity: 1 }}
                                        whileTap={{ scale: 0.88, opacity: 0.8 }}
                                        className={styles.actionIcon}
                                    >
                                        <Plus size={18} />
                                    </motion.div>
                                    <motion.div
                                        animate={phase === 1 ? { scale: 0.88, opacity: 0.6 } : { scale: 1, opacity: 1 }}
                                        whileTap={{ scale: 0.88, opacity: 0.8 }}
                                        className={styles.transparentIcon}
                                    >
                                        <Hash size={18} />
                                    </motion.div>
                                    <div className={styles.transparentIcon}><Camera size={18} /></div>
                                    <motion.div
                                        animate={phase === 3 ? { scale: 0.88, opacity: 0.6 } : { scale: 1, opacity: 1 }}
                                        whileTap={{ scale: 0.88, opacity: 0.8 }}
                                        className={styles.transparentIcon}
                                    >
                                        <ImageIcon size={18} />
                                    </motion.div>
                                    <div className={styles.transparentIcon}><Mic size={18} /></div>
                                </div>
                                <motion.div
                                    className={styles.sendBtn}
                                    whileTap={{ scale: 0.88, opacity: 0.8 }}
                                    animate={phase === 10 ? { scale: 0.88, opacity: 0.8, backgroundColor: 'var(--text-primary)' } : { scale: 1, opacity: 1 }}
                                >
                                    <Send size={18} />
                                </motion.div>
                            </div>
                        </>
                    ) : (
                        <div className={styles.actionsRow} style={{ padding: '0 4px' }}>
                            <div className={styles.transparentIcon} style={{ width: 'auto', color: 'var(--text-secondary)' }}><Plus size={18} /></div>
                            <div style={{ flex: 1, margin: '0 12px', color: 'var(--grey-05)', fontSize: '14px' }}>Type message here...</div>
                            <div className={styles.leftActions} style={{ gap: '16px' }}>
                                <div className={styles.transparentIcon} style={{ width: 'auto' }}><Smile size={18} /></div>
                                <div className={styles.transparentIcon} style={{ width: 'auto' }}><Mic size={18} /></div>
                            </div>
                        </div>
                    )}
                </div>

                <AnimatePresence>
                    {(phase === 6 || phase === 7) && (
                        <>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.bottomSheetOverlay} />
                            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className={styles.bottomSheet}>
                                {bsItems.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={styles.bsItem}
                                        whileTap={{ opacity: 0.6 }}
                                        animate={item.active ? { opacity: 0.6 } : { opacity: 1 }}
                                    >
                                        <div className={styles.bsIcon}>{item.icon}</div>
                                        <div className={styles.bsLabel}>{item.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Feature3;
