import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Building2, Folder, Hash, Camera, Image as ImageIcon, Mic, Send, X } from 'lucide-react';
import styles from './Feature2.module.css';

const Feature2 = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<number>(3); // Default to highlighted search result
    const [typedText, setTypedText] = useState('');
    const textToType = 'PickupTrim';

    // If section becomes inactive, reset to highlighted search. If active, start animation at 0.
    useEffect(() => {
        if (isActive) {
            setPhase(0);
        } else {
            setPhase(3);
        }
    }, [isActive]);

    // Handle automated timeline
    useEffect(() => {
        if (!isActive && phase === 3) {
            setTypedText(textToType);
            return;
        }

        let isMounted = true;
        let timeout: ReturnType<typeof setTimeout>;
        let typingInterval: ReturnType<typeof setInterval>;

        const tick = () => {
            if (!isMounted) return;
            setPhase(p => {
                if (p === 0) return 1;
                if (p === 1) return 2;
                if (p === 2) return 3;
                if (p === 3) return 4;
                if (p === 4) return 5;
                if (p === 5) return 6;
                return p;
            });
        };

        if (phase === 0) {
            setTypedText('');
            timeout = setTimeout(tick, 800);
        } else if (phase === 1) {
            let i = 0;
            let currentStr = '';
            typingInterval = setInterval(() => {
                if (i < textToType.length) {
                    currentStr += textToType[i];
                    setTypedText(currentStr);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    tick();
                }
            }, 80);
        } else if (phase === 2) {
            timeout = setTimeout(tick, 600);
        } else if (phase === 3) {
            timeout = setTimeout(tick, 800);
        } else if (phase === 4) {
            timeout = setTimeout(tick, 300);
        } else if (phase === 5) {
            timeout = setTimeout(tick, 4000);
        } else if (phase === 6) {
            timeout = setTimeout(() => {
                if (isMounted) setPhase(0);
            }, 1000);
        }

        return () => {
            isMounted = false;
            if (timeout) clearTimeout(timeout);
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [phase, isActive]);

    const isTapped = phase === 4;
    const showChatFrame = phase >= 5;
    const showList = (phase === 1 && typedText.length >= 1) || phase >= 2 || phase === 8;

    return (
        <div className={styles.mockupWrapper}>
            <motion.div
                className={styles.mockupUi}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <div className={styles.searchBarRow}>
                    <div className={styles.searchInputWrapper}>
                        <div className={styles.searchHashIcon}>#</div>
                        <div className={styles.searchInput}>
                            {typedText}
                            {(phase === 0 || phase === 1) && <div className={styles.cursor} />}
                        </div>
                    </div>
                    <div className={styles.cancelText}>Cancel</div>
                </div>

                <div className={styles.listContainer}>
                    <AnimatePresence>
                        {showList && (
                            <motion.div
                                initial={phase !== 8 ? { opacity: 0, y: 10 } : false}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                            >
                                <motion.div className={styles.listItem} >
                                    <div className={styles.itemLeft}>
                                        <div className={styles.ttIcon}><Building2 size={14} color="#fff" /></div>
                                        <span className={styles.itemTitle}>TaskTag Project</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className={styles.listItem}
                                    animate={isTapped ? { opacity: 0.3, scale: 0.96 } : { opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    <div className={styles.itemLeft}>
                                        <div className={styles.hashIcon}>#</div>
                                        <span className={`${styles.itemTitle} ${(phase >= 2 && phase <= 4) ? styles.highlightText : ''}`}>
                                            {phase === 1 ? (
                                                <>
                                                    <span className={styles.typingHighlight}>{textToType.substring(0, typedText.length)}</span>
                                                    {textToType.substring(typedText.length)}
                                                </>
                                            ) : "PickupTrim"}
                                        </span>
                                    </div>
                                    <div className={styles.itemRight}>
                                        <div className={styles.avatarStack}>
                                            <img src="https://i.pravatar.cc/150?img=11" className={styles.avatar} alt="User 1" />
                                            <img src="https://i.pravatar.cc/150?img=12" className={styles.avatar} alt="User 2" style={{ zIndex: 1 }} />
                                            <div className={styles.avatarCount} style={{ zIndex: 2 }}>+2</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className={styles.listItem}>
                                    <div className={styles.itemLeft}>
                                        <div className={styles.hashIcon}>#</div>
                                        <span className={styles.itemTitle}>Set Water Meter</span>
                                    </div>
                                    <div className={styles.itemRight}>
                                        <div className={styles.avatarStack}>
                                            <img src="https://i.pravatar.cc/150?img=33" className={styles.avatar} alt="User 3" />
                                            <img src="https://i.pravatar.cc/150?img=47" className={styles.avatar} alt="User 4" style={{ zIndex: 1 }} />
                                            <div className={styles.avatarCount} style={{ zIndex: 2 }}>+2</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className={styles.fabContainer}>
                    <div className={styles.fab}>
                        <Plus size={18} /> New Task
                    </div>
                </div>

                <AnimatePresence>
                    {(showChatFrame || phase === 8) && (
                        <motion.div
                            className={styles.chatFrameOverlay}
                            initial={phase !== 8 ? { x: '100%' } : false}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className={styles.chatInputArea}>
                                <div className={styles.tagsRow}>
                                    <div className={`${styles.tagPill} ${styles.projectColor}`}>
                                        <Folder size={14} /> TaskTag Project <div className={styles.closeIcon}><X size={10} strokeWidth={3} /></div>
                                    </div>
                                    <div className={`${styles.tagPill} ${styles.taskColor}`}>
                                        <Hash size={14} /> PickupTrim <div className={styles.closeIcon}><X size={10} strokeWidth={3} /></div>
                                    </div>
                                </div>
                                <div className={styles.placeholderText}>Write a message...</div>
                                <div className={styles.actionsRow}>
                                    <div className={styles.leftActions}>
                                        <div className={styles.actionIcon}><Plus size={20} /></div>
                                        <div className={styles.transparentIcon}><Hash size={20} /></div>
                                        <div className={styles.transparentIcon}><Camera size={20} /></div>
                                        <div className={styles.transparentIcon}><ImageIcon size={20} /></div>
                                        <div className={styles.transparentIcon}><Mic size={20} /></div>
                                    </div>
                                    <div className={styles.sendBtn}><Send size={18} /></div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Feature2;
