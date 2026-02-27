import React from 'react';

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

const logos = [logoIntown, logoLovett, logoPost, logoPrecision, logoSosa, logoIsc, logoZerodraft, logoSwenson];

/* 
interface ChatMsg {
    sender: string;
    time: string;
    text: string;
    avatarBg: string;
}

const chatMessages: ChatMsg[] = [
    { sender: 'Tommy', time: '12:21 PM', text: "Hi Logan! How's the progress", avatarBg: '#3B82F6' },
    { sender: 'Logan', time: '12:23 PM', text: 'Hi, Delivery for Route A just finished', avatarBg: '#8B5CF6' },
];
*/

const Hero: React.FC = () => {
    /* 
    const [visibleMsgs, setVisibleMsgs] = React.useState<number>(0);
    const [showTask, setShowTask] = React.useState(false);
    const [showTyping, setShowTyping] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [cycle, setCycle] = React.useState(0);

    React.useEffect(() => {
        let timeouts: ReturnType<typeof setTimeout>[] = [];

        // Reset
        setIsVisible(true);
        setVisibleMsgs(0);
        setShowTask(false);
        setShowTyping(false);

        // Stagger messages with typing indicator
        timeouts.push(setTimeout(() => setVisibleMsgs(1), 800));
        timeouts.push(setTimeout(() => setShowTyping(true), 1600));
        timeouts.push(setTimeout(() => { setShowTyping(false); setVisibleMsgs(2); }, 2400));

        // Show task completed
        timeouts.push(setTimeout(() => setShowTask(true), 4000));

        // Fade everything out together
        timeouts.push(setTimeout(() => {
            setIsVisible(false);
        }, 7000));

        // Reset AFTER fade finishes (wait for 0.5s transition)
        timeouts.push(setTimeout(() => {
            setVisibleMsgs(0);
            setShowTask(false);
            setCycle(c => c + 1);
        }, 7800));

        return () => timeouts.forEach(clearTimeout);
    }, [cycle]);
    */

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
                                {/* Desktop Frame */}
                                <div className={`${styles.glassFrame} ${styles.desktopFrame}`}>
                                    <img src={chatHomeDesktop} alt="TaskTag Desktop Chat" className={styles.frameImg} />
                                </div>

                                {/* Mobile Frame Overlap */}
                                <div className={`${styles.glassFrame} ${styles.mobileFrame}`}>
                                    <img src={chatHome} alt="TaskTag Mobile Chat" className={styles.frameImg} />
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
