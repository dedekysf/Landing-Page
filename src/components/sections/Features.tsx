import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Feature1 from './features/Feature1';
import Feature2 from './features/Feature2';
import Feature3 from './features/Feature3';
import Feature4 from './features/Feature4';
import Feature5 from './features/Feature5';
import styles from './Features.module.css';

const frameColors = [
    'var(--light-sky)',
    'var(--light-lavender)',
    'var(--light-mint)',
    'var(--light-peach)',
    'var(--light-cream)',
];

const titleColors = [
    'var(--blue)',
    'var(--dark-magenta)',
    'var(--secondary-green)',
    'var(--orange)',
    'var(--vivid-yellow)',
];

const features = [
    {
        id: 'start',
        label: 'Get started fast',
        title: 'Works Like Texting',
        desc: 'Create a project, add your team, and move work forward immediately. If they can text, they can run tasks, updates, and files in TaskTag.',
    },
    {
        id: 'updates',
        label: 'Track every update',
        title: 'Turn updates into work',
        desc: 'Tag a task with a hashtag, assign an owner, set a due date, and attach photos or files. The work is automatically tied to the right project—no duplicate entry.',
    },
    {
        id: 'proof',
        label: 'Stay organized',
        title: 'Keep proof where it belongs',
        desc: 'Progress photos, installation notes, and documents stay attached to the exact task and project. When questions come up, the answer is already organized.',
    },
    {
        id: 'billing',
        label: 'Close out faster',
        title: 'Make billing painless',
        desc: "Completion updates, checklists, and documentation roll into a project-ready record. Send fewer follow-ups when it's time to invoice, close out, or hand off.",
    },
    {
        id: 'activity',
        label: 'See the big picture',
        title: 'Stay ahead of delays',
        desc: "Activity feeds show what changed today and what just got completed across projects. You can spot gaps early and keep schedules moving.",
    },
];

const FeatureComponent: React.FC<{ featureId: string; isActive: boolean }> = ({ featureId, isActive }) => {
    switch (featureId) {
        case 'start': return <Feature1 isActive={isActive} />;
        case 'updates': return <Feature2 isActive={isActive} />;
        case 'proof': return <Feature3 isActive={isActive} />;
        case 'billing': return <Feature4 isActive={isActive} />;
        case 'activity': return <Feature5 isActive={isActive} />;
        default: return null;
    }
};


const Features: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    // IntersectionObserver: update active index as text blocks scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = textRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                // Trigger in a tight 10% strip at the exact vertical center of the viewport
                // This matches the sticky image position (top: 50vh, translateY(-50%))
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
            }
        );

        textRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="features" className={styles.section}>
            <div className={styles.wrapper}>
                {/* Section Header */}
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.sectionTitle}>
                            From Approval to Payment
                        </h2>
                        <p className={styles.sectionSubtitle}>Updates, photos, and proof in one place.</p>
                    </motion.div>
                </div>

                <div className={styles.layout}>
                    {/* LEFT: scrollable text blocks (desktop only) */}
                    <div className={styles.textColumn}>
                        {features.map((feat, i) => (
                            <div
                                key={feat.id}
                                ref={(el) => { textRefs.current[i] = el; }}
                                className={`${styles.textBlock} ${activeIndex === i ? styles.textBlockActive : ''}`}
                            >
                                <h3
                                    className={styles.featureTitle}
                                    style={activeIndex === i ? { color: titleColors[i] } : {}}
                                >{feat.title}</h3>
                                <p className={styles.featureDesc}>{feat.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: image column (desktop only) */}
                    <div className={styles.imageColumn}>
                        <div className={styles.stickyImageWrapper}>
                            <div className={styles.imgFrame} style={{ background: frameColors[activeIndex] }}>
                                <div className={styles.imgInner}>
                                    <AnimatePresence>
                                        <motion.div
                                            key={features[activeIndex].id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                            style={{ gridArea: '1/1' }}
                                        >
                                            <FeatureComponent
                                                featureId={features[activeIndex].id}
                                                isActive={true}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE: each feature shown as text-above + image-below blocks */}
                <div className={styles.mobileColumn}>
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.id}
                            className={styles.mobileBlock}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            <h3 className={styles.featureTitle} style={{ color: titleColors[i] }}>{feat.title}</h3>
                            <p className={styles.featureDesc}>{feat.desc}</p>
                            <div className={styles.imgFrame} style={{ background: frameColors[i] }}>
                                <div className={styles.imgInner}>
                                    <FeatureComponent featureId={feat.id} isActive={true} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
