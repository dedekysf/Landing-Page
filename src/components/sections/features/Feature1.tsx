import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Paperclip, FileText, Camera, Building, ChevronDown, ArrowUp, Loader2, User } from 'lucide-react';
import styles from './Feature1.module.css';
import avatarForeman from '../../../assets/avatar_foreman.png';

// Interactive component for Tab 1 Mockup
const Feature1 = ({ isActive }: { isActive: boolean }) => {
    // Phases:
    // 0: Button "New Project" (waiting for click)
    // 1: Frame + Title
    // 2: Address skeleton (1 line)
    // 3: Description skeleton (2 lines)
    // 4: Gallery (loaders -> images) + Header divider
    // 5: Toolbar icons & avatar
    // 6: Action row (Project & Submit) + Footer divider
    // 8: Full Frame Static (Default on scroll)
    const [phase, setPhase] = useState<number>(8); // Default to full frame
    const [isSubmitting, setIsSubmitting] = useState(false);

    const drywallImages = [
        "/images/features/drywall-patch-1.png",
        "/images/features/drywall-patch-2.png",
        "/images/features/drywall-patch-3.png",
        "/images/features/drywall-patch-4.png"
    ];

    // If section becomes inactive, reset to full frame. If active, start animation at 0.
    useEffect(() => {
        if (isActive) {
            setPhase(0);
        } else {

            setPhase(8);
        }

    }, [isActive]);

    // Handle automated timeline once active
    useEffect(() => {
        if (phase === 8) return;

        let timer: ReturnType<typeof setTimeout>;
        const tick = () => {
            setPhase(p => {
                if (p === 0) return 1;
                if (p === 1) return 2;
                if (p === 2) return 3;
                if (p === 3) return 4;
                if (p === 4) return 5;
                if (p === 5) return 6;
                // Add new automated phases:
                if (p === 6) return 7; // Trigger button tap + loader
                if (p === 7) return 9; // Reset button, hold final result
                return p;
            });
        };

        let delay = 1000;
        switch (phase) {
            case 0: delay = 1400; break; // Wait before pressing button
            case 1: delay = 400; break;
            case 2: delay = 500; break;
            case 3: delay = 600; break;
            case 4: delay = 1500; break; // Gallery loaders
            case 5: delay = 800; break;  // Action row & Icons
            case 6: delay = 800; break;  // Wait before automated submit
            case 7: delay = 2000; break; // Loader spinner duration
        }

        if (phase === 9) {
            timer = setTimeout(() => setPhase(0), 1500); // 1.5 sec hold then loop
        } else {
            timer = setTimeout(tick, delay);
        }

        return () => clearTimeout(timer);
    }, [phase]);

    // Framer Motion Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const zoomOut: any = {
        hidden: { opacity: 0, scale: 1.15 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: 'spring', bounce: 0.4 } }
    };

    // Helper functions for conditionally showing elements based on phase OR if it's full frame (8)
    const showTitle = phase >= 1 || phase === 8;
    const showAddress = phase >= 2 || phase === 8;
    const showDesc = phase >= 3 || phase === 8;
    const showGallery = phase >= 4 || phase === 8;
    const isLoadingState = isSubmitting || phase === 7;

    return (
        <div className={styles.mockupWrapper} >
            <AnimatePresence mode="wait">
                {phase === 0 ? (
                    <motion.div
                        key="start-btn"
                        className={styles.mockupActionBtn}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{
                            opacity: [0, 1, 1, 1, 0],
                            y: [10, 0, 0, 0, 0],
                            scale: [0.95, 1, 1, 0.92, 0.92],
                            backgroundColor: [
                                'var(--black)',
                                'var(--black)',
                                'var(--black)',
                                'var(--text-secondary)',
                                'var(--text-secondary)'
                            ],
                            boxShadow: [
                                '0 4px 6px rgba(0,0,0,0.1)',
                                '0 10px 15px rgba(0,0,0,0.1)',
                                '0 10px 15px rgba(0,0,0,0.1)',
                                '0 2px 4px rgba(0,0,0,0.1)',
                                '0 2px 4px rgba(0,0,0,0.1)'
                            ]
                        }}
                        transition={{
                            duration: 1.4, // Matches the updated timeout
                            times: [0, 0.2, 0.7, 0.8, 1], // Pops at 0.2, holds til 0.7, presses til 0.8, holds pressed til 1
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setPhase(1)} // Manual tap still works
                        style={{ cursor: 'pointer' }}
                    >
                        New Project
                    </motion.div>
                ) : (
                    <motion.div
                        key="start-frame"
                        className={styles.mockupUi}
                        initial={phase !== 8 ? { opacity: 0, y: 20, scale: 0.98 } : false}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        // Click full frame to reset and allow seeing animation again
                        onClick={() => phase === 8 && setPhase(0)}
                        style={{ cursor: phase === 8 ? 'pointer' : 'default' }}
                    >
                        <div
                            className={styles.mockupHeader}
                        >
                            {showTitle && (
                                <motion.h4
                                    className={`${styles.mockTitle} ${isLoadingState ? styles.textLoading : ''}`}
                                    initial={phase !== 8 ? "hidden" : false} animate="visible" variants={fadeUp}
                                >
                                    Raintree Hollow
                                </motion.h4>
                            )}

                            {showAddress && (
                                <motion.div
                                    className={styles.mockAddress}
                                    initial={phase !== 8 ? "hidden" : false} animate="visible" variants={fadeUp}
                                >
                                    <div className={`${styles.iconContainer} ${isLoadingState ? styles.textLoading : ''}`}><MapPin strokeWidth={2} /></div>
                                    <div className={styles.skeletonLine} style={{ flex: 1, height: '14px', marginTop: '2px' }} />
                                </motion.div>
                            )}

                            {showDesc && (
                                <motion.div
                                    className={styles.mockDescWrapper}
                                    initial={phase !== 8 ? "hidden" : false} animate="visible" variants={staggerContainer}
                                >
                                    <motion.div variants={fadeUp} className={styles.skeletonLine} style={{ width: 'calc(100% - 32px)', height: '14px' }} />
                                    <motion.div variants={fadeUp} className={styles.skeletonLine} style={{ width: '60%', height: '14px', marginTop: '8px' }} />
                                </motion.div>
                            )}

                            {showGallery && (
                                <motion.div
                                    className={styles.mockGallery}
                                    initial={phase !== 8 ? "hidden" : false} animate="visible" variants={staggerContainer}
                                >
                                    {drywallImages.map((src, idx) => (
                                        <motion.div key={idx} variants={fadeUp} className={styles.galleryItem}>
                                            {phase !== 8 && <div className={styles.galleryLoader}></div>}
                                            <img
                                                src={src}
                                                alt={`Drywall Patch ${idx + 1}`}
                                                className={styles.galleryImgLoaded}
                                                style={phase === 8 ? { opacity: 1, animation: 'none' } : {}}
                                            />
                                            {/* Note: mockRemoveBtn has animation delay if not phase 8 */}
                                            <button className={`${styles.mockRemoveBtn} ${isLoadingState ? styles.removeBtnLoading : ''}`} style={phase === 8 ? { opacity: 1, animation: 'none' } : {}}><X size={10} strokeWidth={3} /></button>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        <div
                            className={styles.mockupFooter}
                        >
                            <div className={styles.mockToolbar}>
                                <motion.div
                                    className={styles.toolbarContent}
                                    initial="hidden" animate="visible" variants={staggerContainer}
                                    style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
                                >
                                    <div className={`${styles.toolbarIcons} ${isLoadingState ? styles.textLoading : ''}`}>
                                        <motion.div variants={zoomOut} className={styles.iconContainer}><Paperclip strokeWidth={2} /></motion.div>
                                        <motion.div variants={zoomOut} className={styles.iconContainer}><FileText strokeWidth={2} /></motion.div>
                                        <motion.div variants={zoomOut} className={styles.iconContainer}><Camera strokeWidth={2} /></motion.div>
                                        <motion.div variants={zoomOut} className={styles.iconContainer}><MapPin strokeWidth={2} /></motion.div>
                                    </div>

                                    <motion.div variants={zoomOut} className={`${styles.toolbarAvatar} ${isLoadingState ? styles.avatarLoading : ''}`}>
                                        {phase >= 5 || phase === 8 ? (
                                            <>
                                                <img src={avatarForeman} alt="User" className={styles.avatarImg} />
                                                <span className={styles.avatarBadge}>3</span>
                                            </>
                                        ) : (
                                            <div style={{ width: '38px', height: '38px', backgroundColor: '#E5E7EB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <User size={20} color="#9CA3AF" />
                                            </div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div className={styles.mockActionRow} style={{ minHeight: '80px' }}>
                                <motion.div
                                    initial="hidden" animate="visible" variants={staggerContainer}
                                    style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
                                >
                                    <motion.div variants={zoomOut} className={styles.projectSelector}>
                                        <div className={styles.projectIcon}>
                                            <div className={styles.iconContainer} style={{ width: '60%', height: '60%' }}>
                                                <Building strokeWidth={2} />
                                            </div>
                                        </div>
                                        <span className={isLoadingState ? styles.textLoading : ''}>TaskTag Team</span>
                                        <div className={`${styles.iconContainer} ${isLoadingState ? styles.textLoading : ''}`} style={{ width: '20px', height: '20px' }}>
                                            <ChevronDown strokeWidth={2} />
                                        </div>
                                    </motion.div>
                                    <motion.button
                                        variants={zoomOut}
                                        className={styles.sendButton}
                                        whileTap={phase >= 6 || phase === 8 || phase === 9 ? { scale: 0.9 } : undefined}
                                        animate={isLoadingState ? { scale: 0.92 } : { scale: 1 }}
                                        onClick={() => {
                                            if (phase >= 6 || phase === 8 || phase === 9) {
                                                setIsSubmitting(true);
                                                setTimeout(() => setIsSubmitting(false), 2000);
                                            }
                                        }}
                                    >
                                        <div className={styles.iconContainer} style={{ color: 'white' }}>
                                            {isLoadingState ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                >
                                                    <Loader2 strokeWidth={2} />
                                                </motion.div>
                                            ) : (
                                                <ArrowUp strokeWidth={2} />
                                            )}
                                        </div>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default Feature1;
