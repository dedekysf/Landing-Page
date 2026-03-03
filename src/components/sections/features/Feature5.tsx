import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MoreVertical, Hammer, Check } from 'lucide-react';
import styles from './Feature5.module.css';

const Feature5 = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState(3);
    const [typedText, setTypedText] = useState('Fix');

    useEffect(() => {
        if (!isActive) {
            setPhase(3);
            setTypedText('Fix');
            return;
        }

        let isMounted = true;
        let timeoutIds: any[] = [];
        let typingInterval: any;

        const runSequence = () => {
            if (!isMounted) return;
            setPhase(0);
            setTypedText('');

            // Start typing after delay
            timeoutIds.push(setTimeout(() => {
                let currentText = '';
                const fullText = 'Fix';
                let i = 0;
                typingInterval = setInterval(() => {
                    if (i < fullText.length) {
                        if (isMounted) {
                            currentText += fullText[i];
                            setTypedText(currentText);
                        }
                        i++;
                    } else {
                        clearInterval(typingInterval);
                        if (isMounted) setPhase(2); // Loading phase

                        timeoutIds.push(setTimeout(() => {
                            if (isMounted) setPhase(3); // Result phase

                            timeoutIds.push(setTimeout(() => {
                                if (isMounted) runSequence();
                            }, 5000));
                        }, 800));
                    }
                }, 100);
            }, 800));
        };

        runSequence();

        return () => {
            isMounted = false;
            timeoutIds.forEach(clearTimeout);
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [isActive]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring' as any, damping: 25, stiffness: 200 }
        }
    };

    return (
        <div className={styles.mockupWrapper}>
            <motion.div className={styles.mockupUi} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                <div className={styles.searchTop}>
                    <div className={styles.searchBox}>
                        <Search size={18} className={styles.searchIcon} />
                        <div className={styles.searchInput}>
                            {typedText || <span style={{ color: '#ccc' }}>Search...</span>}
                        </div>
                        {typedText && <X size={16} className={styles.clearBtn} />}
                    </div>
                    <MoreVertical size={20} className={styles.menuIcon} />
                </div>

                <div className={styles.tabBar}>
                    <div className={styles.tabItem}>Chat</div>
                    <div className={styles.tabItem}>Projects</div>
                    <div className={`${styles.tabItem} ${styles.tabActive}`}>Tasks</div>
                    <div className={styles.tabItem}>Files</div>
                </div>

                <div className={styles.listContainer}>
                    <AnimatePresence>
                        {phase === 2 && (
                            <motion.div
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={styles.loaderWrapper}
                            >
                                <div className={styles.smallLoader}></div>
                            </motion.div>
                        )}
                        {phase === 3 && (
                            <motion.div
                                key="results"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                            >
                                <div>
                                    <div className={styles.sectionHeader}>
                                        <div>Current <span className={styles.badge}>2</span></div>
                                    </div>
                                    <motion.div variants={itemVariants} className={styles.resultItem}>
                                        <div className={styles.checkboxMark} />
                                        <div className={styles.itemContent}>
                                            <div className={styles.itemHeader}>
                                                <span className={styles.itemTitle}><span className={styles.highlight}>Fix</span> the sink</span>
                                                <div className={styles.datePill}>Feb 22</div>
                                            </div>
                                            <div className={styles.itemSub}>
                                                <Hammer size={12} className={styles.buildingIcon} /> TaskTag Project
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className={styles.resultItem}>
                                        <div className={styles.checkboxMark} />
                                        <div className={styles.itemContent}>
                                            <div className={styles.itemHeader}>
                                                <span className={styles.itemTitle}><span className={styles.highlight}>Fix</span> the squeaky door hinge</span>
                                                <div className={styles.datePill}>Feb 21</div>
                                            </div>
                                            <div className={styles.itemSub}>
                                                <Hammer size={12} className={styles.buildingIcon2} /> TaskTag Project
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                <div>
                                    <div className={styles.sectionHeader}>
                                        <div>Completed</div>
                                    </div>
                                    <motion.div variants={itemVariants} className={styles.resultItem}>
                                        <div className={`${styles.checkboxMark} ${styles.checkboxChecked}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <div className={styles.itemContent}>
                                            <div className={styles.itemHeader}>
                                                <span className={styles.itemTitle}><span className={styles.highlight}>Fix</span> the door hinge</span>
                                                <div className={styles.datePill}>Feb 21</div>
                                            </div>
                                            <div className={styles.itemSub}>
                                                <Hammer size={12} className={styles.buildingIcon2} /> TaskTag Project
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};
export default Feature5;
