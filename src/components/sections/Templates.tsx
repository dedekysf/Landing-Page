import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import styles from './Templates.module.css';
import { col1Templates, col2Templates } from './templates/TemplateList';
import type { TemplateType } from './templates/TemplateList';

const TemplateCard = ({ template }: { template: TemplateType }) => {
    const displayTasks = template.tasks.slice(0, 5);
    const moreCount = template.tasks.length - 5;

    return (
        <div className={styles.templateCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{template.title}</h3>
            </div>
            <ul className={styles.checklist}>
                {displayTasks.map((task, i) => (
                    <li key={i} className={styles.checklistItem}>
                        <CheckSquare size={14} color="var(--secondary-green)" strokeWidth={1.6} style={{ flexShrink: 0 }} />
                        <span>{task}</span>
                    </li>
                ))}
                {moreCount > 0 && (
                    <li className={`${styles.checklistItem} ${styles.moreItem}`}>
                        + {moreCount} more items
                    </li>
                )}
            </ul>
        </div>
    );
};

const Templates: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Track scroll progress across this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // Wait until top of section hits middle of screen, ends when bottom hits bottom
        offset: ["start center", "end end"]
    });

    // Add spring physics for smoother scroll tracking
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Expand width to 100% with an ease-out curve so it's smoother towards the end
    const dynamicWidth = useTransform(
        smoothProgress,
        [0, 0.1, 0.2, 0.3, 0.4],
        ["90%", "95%", "98%", "99.5%", "100%"]
    );
    const dynamicBorderRadius = useTransform(
        smoothProgress,
        [0, 0.1, 0.2, 0.3, 0.4],
        ["24px", "12px", "4.8px", "1.2px", "0px"]
    );

    return (
        <section ref={sectionRef} className={styles.section}>
            {/* The animated wrapper takes the role of the background color */}
            <motion.div
                className={styles.fullWidthBg}
                style={{
                    width: dynamicWidth,
                    borderRadius: dynamicBorderRadius,
                    margin: "0 auto"
                }}
            >
                <div className={`container ${styles.container}`}>
                    <div className={styles.layout}>

                        {/* LEFT: Marquee Columns */}
                        <div className={styles.marqueePanel}>

                            {/* Wrapper for fade-out edges */}
                            <div className={styles.marqueeMask}>

                                {/* Column 1: Scrolls Up */}
                                <div className={styles.marqueeColumn}>
                                    <div className={`${styles.marqueeTrack} ${styles.scrollUp}`}>
                                        {/* Duplicate content twice for seamless loop */}
                                        {col1Templates.map(t => <TemplateCard key={`orig-${t.id}`} template={t} />)}
                                        {col1Templates.map(t => <TemplateCard key={`dup-${t.id}`} template={t} />)}
                                    </div>
                                </div>

                                {/* Column 2: Scrolls Down */}
                                <div className={styles.marqueeColumn}>
                                    <div className={`${styles.marqueeTrack} ${styles.scrollDown}`}>
                                        {/* Duplicate content twice for seamless loop */}
                                        {col2Templates.map(t => <TemplateCard key={`orig-${t.id}`} template={t} />)}
                                        {col2Templates.map(t => <TemplateCard key={`dup-${t.id}`} template={t} />)}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT: Static Content */}
                        <div className={styles.staticPanel}>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={styles.textContent}
                            >
                                <h2 className={styles.title}>No Setup from Scratch <br />with <span className={styles.highlight}>TaskTag</span> Templates</h2>
                                <p className={styles.subtitle}>
                                    Pick a template and start turning jobsite work into approved, invoice-ready proof in minutes.
                                </p>
                                <a href="https://app.tasktag.com/register/signup-with-email" className={styles.startBtn} target="_blank" rel="noopener noreferrer">
                                    Get Started For Free
                                </a>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Templates;
