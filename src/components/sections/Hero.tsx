import React from 'react';
import { Zap, ChartLine, CalendarCheck2 } from 'lucide-react';

import styles from './Hero.module.css';
import logoIntown from '../../assets/client/Logo-intown.png';
import logoLovett from '../../assets/client/Logo-lovett.png';
import logoPost from '../../assets/client/Logo-post.png';
import logoPrecision from '../../assets/client/Logo-precision.png';
import logoSosa from '../../assets/client/Sosa.png';
import logoIsc from '../../assets/client/Isc-Logo-BW.png';
import logoZerodraft from '../../assets/client/Logo-Zerodraft.png';
import logoSwenson from '../../assets/client/Swenson-Logo.png';
import chatHome from '../../assets/chat-home.png';
import chatHomeDesktop from '../../assets/chat-home-desktop.png';
import heroFilterTaskList from '../../assets/hero-filter-task-list.png';

const logos = [logoIntown, logoLovett, logoPost, logoPrecision, logoSosa, logoIsc, logoZerodraft, logoSwenson];

type BubbleStep = { type: 'loading' } | { type: 'text'; text: string; icon: React.ReactNode };

const bubbleSteps: BubbleStep[] = [
    { type: 'loading' },
    { type: 'text', text: 'Less rework', icon: <CalendarCheck2 size={24} color="#18A87D" /> },
    { type: 'loading' },
    { type: 'text', text: 'Close jobs faster', icon: <Zap size={24} fill="#E6B566" color="#E6B566" /> },
    { type: 'loading' },
    { type: 'text', text: 'Get paid without disputes', icon: <ChartLine size={24} color="#18A87D" /> },
];

const Hero: React.FC = () => {
    const [stepIndex, setStepIndex] = React.useState(0);

    React.useEffect(() => {
        const current = bubbleSteps[stepIndex];
        // Loading steps show for 1.2s, text steps show for 2s
        const duration = current.type === 'loading' ? 1200 : 2000;

        const timer = setTimeout(() => {
            setStepIndex(prev => (prev + 1) % bubbleSteps.length);
        }, duration);

        return () => clearTimeout(timer);
    }, [stepIndex]);

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.splitLayout}>
                        {/* LEFT: Copy */}
                        <div className={styles.content}>
                            <div className={styles.glowBehindTxt} />
                            <h1 className={`${styles.headline} ${styles.fadeInUp1}`}>
                                Manage Projects Through <span className={styles.highlight}>Chat</span>
                            </h1>
                            <p className={`${styles.subheadline} ${styles.fadeInUp2}`}>
                                Turn jobsite chat into accountable work with proof ready <br className={styles.desktopBr} /> when it's time to bill. Built by builders, for builders.
                            </p>
                            <div className={`${styles.actions} ${styles.fadeInUp3}`}>
                                <div className={styles.btnWrapper}>
                                    <a
                                        href="https://meetings.hubspot.com/dede"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.secondaryBtn}
                                        style={{ display: 'inline-block', textDecoration: 'none' }}
                                    >
                                        Book Demo
                                    </a>
                                </div>
                                <div className={styles.btnWrapper}>
                                    <a
                                        href="https://app.tasktag.com/register/signup-with-email"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.primaryBtn}
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM: Visual Presentation (Frames) */}
                        <div className={styles.heroVisuals}>
                            <div className={styles.patternOverlayLeft} />
                            <div className={styles.patternOverlayRight} />
                            <div className={styles.fullRowGradient} />

                            <div className={`${styles.framesWrapper} ${styles.fadeInUp4}`}>
                                {/* Single Chat Bubble — top-left of monitor */}
                                <div className={styles.chatBubble} key={stepIndex}>
                                    {bubbleSteps[stepIndex].type === 'loading' ? (
                                        <div className={styles.chatBubbleLoading}>
                                            <span className={styles.loadingDot} />
                                            <span className={`${styles.loadingDot} ${styles.loadingDot2}`} />
                                            <span className={`${styles.loadingDot} ${styles.loadingDot3}`} />
                                        </div>
                                    ) : (
                                        <span className={styles.chatBubbleText}>
                                            {(bubbleSteps[stepIndex] as { type: 'text'; text: string; icon: React.ReactNode }).icon}
                                            {(bubbleSteps[stepIndex] as { type: 'text'; text: string }).text}
                                        </span>
                                    )}
                                </div>

                                {/* Desktop Frame */}
                                <div className={`${styles.glassFrame} ${styles.desktopFrame}`}>
                                    <img src={chatHomeDesktop} alt="TaskTag Desktop Chat" className={styles.frameImg} />
                                </div>

                                {/* Mobile Frame Overlap */}
                                <div className={`${styles.glassFrame} ${styles.mobileFrame}`}>
                                    <img src={chatHome} alt="TaskTag Mobile Chat" className={styles.frameImg} />
                                </div>

                                {/* Task List Overlay — left side of monitor */}
                                <div className={styles.taskListOverlay}>
                                    <img src={heroFilterTaskList} alt="TaskTag Filter Task List" className={styles.taskListImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee logo strip */}
            <section className={styles.trustedBySection}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.trustedBy}>
                        <h2>Trusted by Builders on Real Jobsites</h2>
                        <p>Join <span className={styles.highlight}>50+ companies</span> using TaskTag <br className={styles.trustedBreak} /> to keep crews aligned and jobs moving.</p>
                        <div className={styles.marqueeContainer}>
                            <div className={styles.marqueeContent}>
                                {/* Map logos twices for infinite scroll effect */}
                                {[...logos, ...logos].map((src, i) => (
                                    <img key={i} src={src} alt="client logo" className={styles.marqueeItem} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

