import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Building2, Folder, Hash, Mic, Check, Search, ClipboardList, X, Smile } from 'lucide-react';
import styles from './Feature2.module.css';
import avatarForeman from '../../../assets/avatar_foreman.png';

const Feature2 = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<number>(3); // Default to highlighted search result
    const [typedText, setTypedText] = useState('');
    const textToType = 'Drywall patch';

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
                if (p === 6) return 7;
                if (p === 7) return 8;
                if (p === 8) return 9;
                return p;
            });
        };

        if (phase === 0) {
            setTypedText('');
            timeout = setTimeout(tick, 400);
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
            }, 40);
        } else if (phase === 2) {
            timeout = setTimeout(tick, 400);
        } else if (phase === 3) {
            timeout = setTimeout(tick, 600);
        } else if (phase === 4) {
            timeout = setTimeout(tick, 400);
        } else if (phase === 5) {
            timeout = setTimeout(tick, 1500);
        } else if (phase === 6) {
            timeout = setTimeout(tick, 1000);
        } else if (phase === 7) {
            timeout = setTimeout(tick, 200); // Quick tap effect duration
        } else if (phase === 8) {
            timeout = setTimeout(tick, 2500);
        } else if (phase === 9) {
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
    const isConfirmTapped = phase === 7;
    const showList = (phase === 1 && typedText.length >= 1) || phase >= 2 || phase === 9;
    const showChatMembers = phase >= 5 && phase < 8;
    const oscarSelected = phase >= 6;
    const showChatScreen = phase >= 8 || phase === 9;

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
                                className={styles.mainItemList}
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
                                            ) : "Drywall patch"}
                                        </span>
                                    </div>
                                    <div className={styles.itemRight}>
                                        <div className={styles.avatarStack}>
                                            <img src={avatarForeman} className={styles.avatar} alt="James Smith" />
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
                                            <img src={avatarForeman} className={styles.avatar} alt="User 3" />
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
                    {showChatMembers && (
                        <motion.div
                            className={styles.chatMembersScreen}
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className={styles.cmHeader}>
                                <div className={styles.cmSearch}>
                                    <Search size={16} />
                                    <span>Search</span>
                                </div>
                                <div className={styles.cmCancel}>Cancel</div>
                            </div>
                            <div className={styles.cmContentScroll}>
                                <AnimatePresence>
                                    {oscarSelected && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className={styles.cmTitleRow} style={{ backgroundColor: 'transparent', paddingBottom: 0 }}>Selected Member (1)</div>
                                            <div className={styles.cmSelectedRow}>
                                                <div className={styles.cmSelectedUser}>
                                                    <div className={styles.cmSelectedAvatarWrapper}>
                                                        <div className={styles.cmInitials} style={{ backgroundColor: 'var(--dark-magenta)', color: 'var(--white)' }}>
                                                            OG
                                                        </div>
                                                        <div className={styles.cmRemoveBadge}><X size={10} strokeWidth={4} /></div>
                                                    </div>
                                                    <span className={styles.cmSelectedText}>Oscar Gilberto</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className={styles.cmTitleRow}>Suggested</div>
                                <div className={styles.cmList}>
                                    <div className={styles.cmItem}>
                                        <img src={avatarForeman} className={styles.cmAvatar} alt="James Smith" />
                                        <div className={styles.cmInfo}>
                                            <span className={styles.cmEmail}>James Smith</span>
                                            <div className={styles.cmRoleRow}>
                                                <span className={styles.cmRole}>Owner</span>
                                            </div>
                                        </div>
                                        <div className={`${styles.cmCheckCircle} ${styles.active}`}><Check size={12} strokeWidth={4} color="var(--white)" /></div>
                                    </div>
                                    <div className={styles.cmItem}>
                                        <div className={styles.cmInitials} style={{ backgroundColor: 'var(--dark-magenta)', color: 'var(--white)' }}>
                                            OG
                                        </div>
                                        <div className={styles.cmInfo}>
                                            <span className={styles.cmEmail}>Oscar Gilberto</span>
                                        </div>
                                        <div className={`${styles.cmCheckCircle} ${oscarSelected ? styles.active : ''}`}>
                                            {oscarSelected && <Check size={12} strokeWidth={4} color="var(--white)" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cmFooter}>
                                <motion.div
                                    className={`${styles.cmButton} ${oscarSelected ? styles.active : ''}`}
                                    whileTap={oscarSelected ? { scale: 0.92 } : {}}
                                    animate={isConfirmTapped
                                        ? { scale: 0.92, backgroundColor: 'var(--text-secondary)' }
                                        : { scale: 1, backgroundColor: oscarSelected ? 'var(--black)' : 'var(--grey-03)' }
                                    }
                                    transition={{ duration: 0.1 }}
                                >
                                    Confirm
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {showChatScreen && (
                        <motion.div
                            className={styles.chatFrameOverlay}
                            initial={phase !== 9 ? { x: '100%' } : false}
                            animate={{ x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{ zIndex: 300 }}
                        >
                            <div className={styles.chatWindow}>
                                <div className={styles.chatScrollArea}>
                                    {phase >= 8 && (
                                        <motion.div
                                            initial={phase !== 9 ? { opacity: 0, y: 10 } : false}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={styles.taskAssignedBubble}
                                        >
                                            <div className={styles.taHeader} style={{ backgroundColor: 'var(--light-purple)' }}>
                                                <div className={styles.taHeaderLeft} style={{ color: 'var(--dark-magenta)' }}>
                                                    <ClipboardList size={18} /> Task Assigned
                                                </div>
                                                <div className={styles.taHeaderDate} style={{ color: 'var(--dark-magenta)' }}>Feb 21, 2026</div>
                                            </div>
                                            <div className={styles.taBody}>
                                                <div className={styles.taPills}>
                                                    <div className={`${styles.tagPill} ${styles.projectColor}`}>
                                                        <Folder size={14} /> <span>Raintree Hollow</span>
                                                    </div>
                                                    <div className={`${styles.tagPill} ${styles.taskColor}`}>
                                                        <Hash size={14} /> <span>Drywall patch</span>
                                                    </div>
                                                </div>
                                                <div className={styles.taFooter}>
                                                    <div className={styles.taDue}>
                                                        Due: Feb 22
                                                    </div>
                                                    <div className={styles.taAvatarStack}>
                                                        <div className={styles.taAvatarInitials} style={{ backgroundColor: 'var(--dark-magenta)', color: 'var(--white)', marginLeft: 0 }}>
                                                            OG
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                                <div className={styles.inputArea}>
                                    <motion.div whileTap={{ scale: 0.9 }}><Plus size={18} /></motion.div>
                                    <div className={styles.inputText}>Type message here...</div>
                                    <div className={styles.inputAction}>
                                        <motion.div whileTap={{ scale: 0.9 }}><Smile size={18} /></motion.div>
                                        <motion.div whileTap={{ scale: 0.9 }}><Mic size={18} /></motion.div>
                                    </div>
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
