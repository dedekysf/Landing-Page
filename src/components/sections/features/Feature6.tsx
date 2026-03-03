import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ListFilter, Check, Image as ImageIcon, Folder, Hash, FileText } from 'lucide-react';
import styles from './Feature6.module.css';

const Feature6 = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setPhase(0);
            return;
        }
        let isMounted = true;
        let timeoutIds: any[] = [];

        const runSequence = () => {
            if (!isMounted) return;
            setPhase(0);
            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(1) }, 600));
            timeoutIds.push(setTimeout(() => { if (isMounted) setPhase(2) }, 1400));
            timeoutIds.push(setTimeout(() => { if (isMounted) runSequence() }, 5500));
        };
        runSequence();

        return () => {
            isMounted = false;
            timeoutIds.forEach(clearTimeout);
        };
    }, [isActive]);

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring' as any,
                damping: 25,
                stiffness: 180,
                duration: 0.6
            }
        }
    };

    return (
        <div className={styles.mockupWrapper}>
            <motion.div className={styles.mockupUi} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <div className={styles.searchTop}>
                    <div className={styles.searchBox}>
                        <Search size={18} className={styles.searchIcon} />
                        <div className={styles.searchInput}>Search</div>
                    </div>
                    <ListFilter size={20} className={styles.filterIcon} />
                </div>

                <div className={styles.feedContainer}>
                    <div className={styles.dateHeader}>Feb 22, 2026</div>
                    <AnimatePresence>
                        {phase >= 1 && (
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className={styles.feedItem}
                            >
                                <div className={styles.itemHeader}>
                                    <div className={styles.userRow}>
                                        <div className={styles.avatarWrap}>
                                            <img src="https://i.pravatar.cc/150?img=11" className={styles.avatar} alt="Tristan" />
                                            <div className={`${styles.avatarBadge} ${styles.badgeGreen}`}><Check size={10} strokeWidth={3} /></div>
                                        </div>
                                        <div className={styles.userName}>Tristan Enver Valerio</div>
                                    </div>
                                    <div className={styles.timeText}>01:44 PM</div>
                                </div>
                                <div className={styles.actionText}>Completed this task</div>
                                <div className={styles.pillsRow}>
                                    <div className={styles.singleLineContent}>
                                        <div className={`${styles.tagPill} ${styles.projectColor}`}><Folder size={12} /> TaskTag Project</div>
                                        <div className={`${styles.tagPill} ${styles.taskColor}`}><Hash size={12} /> PickupTrim</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {phase >= 2 && (
                            <>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.dateHeader}>Feb 21, 2026</motion.div>
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={styles.feedItem}
                                >
                                    <div className={styles.itemHeader}>
                                        <div className={styles.userRow}>
                                            <div className={styles.avatarWrap}>
                                                <img src="https://i.pravatar.cc/150?img=11" className={styles.avatar} alt="Tristan" />
                                                <div className={`${styles.avatarBadge} ${styles.badgeOrange}`}><ImageIcon size={8} strokeWidth={2} /></div>
                                            </div>
                                            <div className={styles.userName}>Tristan Enver Valerio</div>
                                        </div>
                                        <div className={styles.timeText}>11:25 AM</div>
                                    </div>
                                    <div className={styles.actionText}>Preview of abstract buildings and sink document</div>

                                    <div className={styles.galleryGrid}>
                                        <div className={styles.galleryBox}>
                                            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=150" className={styles.galleryImg} alt="House" />
                                        </div>
                                        <div className={styles.galleryBox}>
                                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150" className={styles.galleryImg} alt="Abstract" />
                                        </div>
                                        <div className={styles.galleryBox}>
                                            <FileText size={24} className={styles.pdfIcon} />
                                            <div className={styles.pdfText}>first_draft_ki...</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};
export default Feature6;
