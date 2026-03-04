import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import chatHomeDesktop from '../../assets/hero.png';

const logos = [logoIntown, logoLovett, logoPost, logoPrecision, logoSosa, logoIsc, logoZerodraft, logoSwenson];

type BubbleStep = { type: 'loading' } | { type: 'text'; text: string; icon: React.ReactNode };

const bubbleSteps: BubbleStep[] = [
    { type: 'loading' },
    { type: 'text', text: 'Less rework', icon: <CalendarCheck2 size={16} color="var(--secondary-green)" /> },
    { type: 'loading' },
    { type: 'text', text: 'Close jobs faster', icon: <Zap size={16} fill="var(--pastel-yellow)" color="var(--pastel-yellow)" /> },
    { type: 'loading' },
    { type: 'text', text: 'Get paid without disputes', icon: <ChartLine size={16} color="var(--secondary-green)" /> },
];

const Hero: React.FC = () => {
    const [stepIndex, setStepIndex] = React.useState(0);

    const heroRef = React.useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // We removed useSpring because it conflicts with the global Lenis smooth scrolling physics,
    // which caused the stuttering. We directly transform the scroll progress instead.
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.12], { clamp: true });

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
            <section className={styles.hero} ref={heroRef}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.splitLayout}>
                        {/* LEFT: Copy */}
                        <div className={styles.content}>
                            <div className={styles.glowBehindTxt} />
                            <h1 className={`${styles.headline} ${styles.stagger1}`}>
                                Manage Projects Through <span className={styles.highlight}>Chat</span>
                            </h1>
                            <p className={`${styles.subheadline} ${styles.stagger2}`}>
                                Turn jobsite chat into accountable work with proof for billing. <br className={styles.desktopBr} />Built by builders, for builders.
                            </p>
                            <div className={`${styles.actions} ${styles.stagger3}`}>
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
                                        Get Started For Free
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM: Visual Presentation (Frames) */}
                        <div className={styles.heroVisuals}>
                            <div className={styles.patternOverlayLeft} />
                            <div className={styles.patternOverlayRight} />
                            <div className={styles.fullRowGradient} />

                            <div className={styles.framesWrapper}>
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

                                {/* Scaling Group Wrapper */}
                                <motion.div
                                    className={styles.scalingWrapper}
                                    style={{ scale }}
                                >
                                    <motion.div
                                        className={styles.heroImageContainer}
                                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "soft" feel
                                            delay: 0.2
                                        }}
                                    >
                                        <img
                                            src={chatHomeDesktop}
                                            alt="TaskTag Platform Overview"
                                            className={styles.heroMainImg}
                                            fetchPriority="high"
                                            loading="eager"
                                        />
                                    </motion.div>
                                </motion.div>
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
                        <p>Join <span className={styles.highlight}>50+ companies</span> using TaskTag to keep crews aligned and jobs moving.</p>
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

            {/* Trusted By Divider */}
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--grey-03) 15%, var(--grey-03) 85%, transparent)', maxWidth: '1200px', margin: '4rem auto 0rem' }} />
        </>
    );
};

export default Hero;
