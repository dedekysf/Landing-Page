import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Feature1 from './features/Feature1';
import Feature2 from './features/Feature2';
import Feature3 from './features/Feature3';
import Feature4 from './features/Feature4';
import Feature5 from './features/Feature5';
import Feature6 from './features/Feature6';
import featureOne from '../../assets/feature-1.png';
import featureTwo from '../../assets/feature-2.png';
import featureThree from '../../assets/feature-3.png';
import featureFour from '../../assets/feature-4.png';
import featureFive from '../../assets/feature-5.png';
import featureSix from '../../assets/feature-6.png';
import styles from './FeaturesV2.module.css';

const features = [
    {
        id: 'start',
        tabLabel: 'Start in minutes',
        title: 'Start in minutes no training required',
        desc: 'Create a project, add your team, and move work forward immediately. If they can text, they can run tasks, updates, and files in TaskTag.',
        color: 'var(--dark-green)',
        image: featureOne,
    },
    {
        id: 'updates',
        tabLabel: 'Turn updates into work',
        title: 'Turn updates into accountable work',
        desc: 'Tag a task with a hashtag, assign an owner, set a due date, and attach photos or files. The work is automatically tied to the right project—no duplicate entry.',
        color: 'var(--text-secondary)',
        image: featureTwo,
    },
    {
        id: 'proof',
        tabLabel: 'Keep proof where it belongs',
        title: 'Keep proof where it belongs',
        desc: 'Progress photos, installation notes, and documents stay attached to the exact task and project. When questions come up, the answer is already organized.',
        color: 'var(--light-magenta)',
        image: featureThree,
    },
    {
        id: 'billing',
        tabLabel: 'Make billing painless',
        title: 'Make billing and closeout painless',
        desc: "Completion updates, checklists, and documentation roll into a project-ready record. Send fewer follow-ups when it's time to invoice, close out, or hand off.",
        color: 'var(--blue)',
        image: featureFour,
    },
    {
        id: 'search',
        tabLabel: 'Get answers in seconds',
        title: 'Get answers in seconds',
        desc: 'Search across Chat, Projects, Tasks and Files to find the latest detail fast. No digging through long threads or old folders.',
        color: 'var(--vivid-yellow)',
        image: featureFive,
    },
    {
        id: 'activity',
        tabLabel: 'Stay ahead of delays',
        title: 'Stay ahead of delays without more meetings',
        desc: "Activity feeds show what changed today, what's overdue, and what just got completed across projects. You can spot gaps early and keep schedules moving.",
        color: 'var(--purple)',
        image: featureSix,
    },
];


const FeaturesV2: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isScrollingFromClick = useRef(false);

    // IntersectionObserver: update active tab as blocks scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Narrow rootMargin ensures that only the block in the center "active strip" triggers
                    if (entry.isIntersecting && !isScrollingFromClick.current) {
                        const index = contentRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1) {
                            setActiveTab(index);
                        }
                    }
                });
            },
            {
                // Create a 10% vertical "trigger strip" in the exact center of the viewport
                rootMargin: '-45% 0px -45% 0px',
                threshold: 0
            }
        );

        contentRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleTabClick = (i: number) => {
        setActiveTab(i);
        const el = contentRefs.current[i];
        if (!el) return;

        isScrollingFromClick.current = true;

        // Smooth scroll to the specific element
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Wait longer (1.2s) before allowing scroll events to update tabs again 
        // to ensure the smooth scroll animation has completely settled
        setTimeout(() => { isScrollingFromClick.current = false; }, 1200);
    };

    return (
        <section id="features-v2" className={styles.section}>
            <div className={styles.wrapper}>

                <div className={styles.layout}>

                    {/* LEFT: sticky panel — includes both Header AND Tab Nav */}
                    <div className={styles.leftPanel}>

                        {/* Header stays inside left panel to be sticky */}
                        <div className={styles.header}>
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className={styles.sectionTitle}>
                                    Job Chat to Closeout Without Delays or Runaround
                                </h2>
                                <p className={styles.sectionSubtitle}>Turn decisions into billable progress.</p>
                            </motion.div>
                        </div>

                        {/* Tabs */}
                        <nav className={styles.tabNav}>
                            {features.map((feat, i) => (
                                <button
                                    key={feat.id}
                                    className={`${styles.tabItem} ${activeTab === i ? styles.tabItemActive : ''}`}
                                    onClick={() => handleTabClick(i)}
                                >
                                    <span className={styles.tabLabel}>{feat.tabLabel}</span>
                                </button>
                            ))}
                        </nav>

                        <div className={styles.ctaContainer}>
                            <a href="https://app.tasktag.com/register/signup-with-email" className={styles.startBtn} target="_blank" rel="noopener noreferrer">
                                Get Started For Free
                            </a>
                        </div>

                    </div>

                    {/* RIGHT: page-scroll content */}
                    <div className={styles.contentPanel}>

                        {features.map((feat, i) => (
                            <FeatureScrollBlock
                                key={feat.id}
                                feat={feat}
                                index={i}
                                isActive={activeTab === i}
                                setRef={(el) => { contentRefs.current[i] = el; }}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

// Component helper to handle individual scroll progress per block
const FeatureScrollBlock = React.memo(({
    feat,
    index,
    isActive,
    setRef
}: {
    feat: any,
    index: number,
    isActive: boolean,
    setRef: (el: HTMLDivElement | null) => void
}) => {
    const blockRef = useRef<HTMLDivElement>(null);

    // Set both the parent ref for IntersectionObserver and our local ref for Scroll
    const handleRef = (el: HTMLDivElement | null) => {
        blockRef.current = el;
        setRef(el);
    };

    // We can use a custom hook from framer-motion if properly imported at top, but since we are refactoring inline:
    // Scale starts normal, and when we scroll DOWN past it (it moves UP), it scales down. 
    // Wait, the user wants "ketika scroll down maka dia mengecil ketika scroll up atau kembali maka akan normal kembali"
    // So as you scroll down (progress goes 0 -> 1), it shrinks. As you go back up (1 -> 0), it restores.
    // Let's make it start at scale 1, and as you scroll PAST it, it shrinks.
    // Or starts large when entering from bottom, and normalizes when centered.

    // Let's animate scale based on scroll position in viewport
    return (
        <div ref={handleRef} className={styles.featureBlock}>
            <ScrollScaleContainer>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ margin: '-80px' }}
                >
                    <h3 className={styles.featureTitle}>
                        {feat.title}
                    </h3>
                    <p className={styles.featureDesc}>{feat.desc}</p>

                    <div className={styles.imgFrame}>
                        <div className={styles.imgInner}>
                            {feat.id === 'start' ? (
                                <Feature1 isActive={isActive} />
                            ) : feat.id === 'updates' ? (
                                <Feature2 isActive={isActive} />
                            ) : feat.id === 'proof' ? (
                                <Feature3 isActive={isActive} />
                            ) : feat.id === 'billing' ? (
                                <Feature4 isActive={isActive} />
                            ) : feat.id === 'search' ? (
                                <Feature5 isActive={isActive} />
                            ) : feat.id === 'activity' ? (
                                <Feature6 isActive={isActive} />
                            ) : (
                                <img
                                    src={feat.image}
                                    alt={feat.title}
                                    className={`${styles.imgFluid} ${styles.mainImg}`}
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
            </ScrollScaleContainer>
        </div>
    );
}, (prev, next) => prev.isActive === next.isActive);

// Sub-component for clean framer hook usage
const ScrollScaleContainer = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // Start tracking when the top of the block hits the center of screen
        // End tracking when the bottom of the block hits the top of the screen
        offset: ["start center", "end start"]
    });

    // As user scrolls down (progress 0 -> 1), block shrinks more noticeably
    // We delay the scaledown until progress reaches 0.4 so the active tab's content doesn't shrink immediately
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0.7]);
    // Also delay opacity fade
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0.4]);

    return (
        <motion.div ref={ref} style={{ scale, opacity, transformOrigin: 'top center', width: '100%', willChange: 'transform, opacity' }}>
            {children}
        </motion.div>
    );
};

export default FeaturesV2;
