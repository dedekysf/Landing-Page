import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import {
    CircleCheckBig, User, Search,
    ChevronLeft, FolderOpen, Hash, Mic, Smile, Plus, CheckCircle2,
    MessageSquare, ClipboardCheck,
    Hammer
} from 'lucide-react';

import styles from './Hero.module.css';
import logoIntown from '../../assets/client/Logo-intown.png';
import logoLovett from '../../assets/client/Logo-lovett.png';
import logoPost from '../../assets/client/Logo-post.png';
import logoPrecision from '../../assets/client/Logo-precision.png';
import logoSosa from '../../assets/client/Sosa.png';
import logoIsc from '../../assets/client/Isc-Logo-BW.png';
import logoZerodraft from '../../assets/client/Logo-Zerodraft.png';
import logoSwenson from '../../assets/client/Swenson-Logo.png';

const logos = [logoIntown, logoLovett, logoPost, logoPrecision, logoSosa, logoIsc, logoZerodraft, logoSwenson];

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

const Hero: React.FC = () => {
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

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.splitLayout}>
                        {/* LEFT: Copy */}
                        <div className={styles.content}>
                            <h1 className={styles.headline}>
                                Manage Your Projects <br />Through <span className={styles.highlight}>Chat</span>
                            </h1>
                            <p className={styles.subheadline}>
                                Turn jobsite chat into accountable work with proof ready when it's time to bill. Built by builders, for builders.
                            </p>
                            <div className={styles.heroFeatures}>
                                <div className={styles.heroFeatureItem}>
                                    <div className={styles.heroFeatureIcon}><CircleCheckBig size={20} /></div>
                                    <span className={styles.heroFeatureText}>Less rework</span>
                                </div>
                                <div className={styles.heroFeatureItem}>
                                    <div className={styles.heroFeatureIcon}><CircleCheckBig size={20} /></div>
                                    <span className={styles.heroFeatureText}>Close jobs faster</span>
                                </div>
                                <div className={styles.heroFeatureItem}>
                                    <div className={styles.heroFeatureIcon}><CircleCheckBig size={20} /></div>
                                    <span className={styles.heroFeatureText}>Get paid without disputes</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={styles.btnWrapper}>
                                    <a
                                        href="https://app.tasktag.com/register/signup-with-email"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.primaryBtn}
                                        style={{
                                            display: 'inline-block',
                                            padding: 'var(--spacing-md) var(--spacing-xxl)',
                                            backgroundColor: 'var(--secondary-green)',
                                            color: 'var(--white)',
                                            fontWeight: 'var(--font-weight-bold)',
                                            borderRadius: 'var(--radius-lg)',
                                            textDecoration: 'none',
                                            boxShadow: '0 4px 14px rgba(24, 168, 125, 0.25)',
                                            transition: 'var(--transition-normal)'
                                        }}
                                    >
                                        Start Your First Project
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Environmental Background + Floating Phone UI */}
                        <div className={styles.visualWrapper}>

                            {/* Floating Phone Frame */}
                            <div className={styles.phoneFrame}>
                                {/* Phone Header */}
                                <div className={styles.phHeader}>
                                    <ChevronLeft size={14} className={styles.phHeaderIcon} />
                                    <div className={styles.phGroupAvatar}>
                                        <Hash size={10} />
                                    </div>
                                    <div className={styles.phHeaderInfo}>
                                        <span className={styles.phGroupName}>Delivery Route</span>
                                        <span className={styles.phGroupSub}>4 members</span>
                                    </div>
                                    <Search size={14} className={styles.phHeaderIcon} />
                                </div>

                                {/* Date separator */}
                                <div className={styles.phDateSep}>Wednesday, Februari 11</div>

                                {/* Chat area */}
                                <div className={styles.phChatArea} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                                    {chatMessages.slice(0, visibleMsgs).map((msg, i) => (
                                        <motion.div
                                            key={`${cycle}-${i}`}
                                            className={styles.phMsg}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className={styles.phMsgAvatar}>
                                                <User size={10} />
                                            </div>
                                            <div className={styles.phMsgBody}>
                                                <div className={styles.phMsgMeta}>
                                                    <span className={styles.phSender}>{msg.sender}</span>
                                                    <span className={styles.phTime}>{msg.time}</span>
                                                </div>
                                                <div className={styles.phMsgText}>{msg.text}</div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Typing indicator */}
                                    {showTyping && (
                                        <motion.div
                                            className={styles.phMsg}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className={styles.phMsgAvatar}>
                                                <User size={10} />
                                            </div>
                                            <div className={styles.typingDots}>
                                                <span className={styles.dot} />
                                                <span className={styles.dot} />
                                                <span className={styles.dot} />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Task Completed Card */}
                                    {showTask && (
                                        <motion.div
                                            key={`${cycle}-task`}
                                            className={styles.phTaskCard}
                                            initial={{ opacity: 0, y: 12, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                                        >
                                            <div className={styles.phTaskHeader}>
                                                <CheckCircle2 size={14} color="#18A87D" />
                                                <span className={styles.phTaskStatus}>Task Completed</span>
                                                <span className={styles.phTaskDate}>Feb 11, 2026</span>
                                            </div>
                                            <div className={styles.phTaskProject}>
                                                <FolderOpen size={10} />
                                                <span>TaskTag Construction Team</span>
                                            </div>
                                            <div className={styles.phTaskStop}>
                                                <Hash size={10} />
                                                <span>Stop 1 – 11 N Raintree Hollow Court</span>
                                            </div>
                                            <div className={styles.phTaskFooter}>
                                                <span>Due: Feb 12</span>
                                                <div className={styles.phAvatarGroup}>
                                                    <div className={styles.phSmAvatar}><User size={8} /></div>
                                                    {/* <div className={styles.phSmAvatar}><User size={8} /></div> */}
                                                    {/* <div className={styles.phSmAvatarCount}>+2</div> */}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Input bar */}
                                <div className={styles.phInputBar}>
                                    <Plus size={14} className={styles.phInputIcon} />
                                    <div className={styles.phInputBox}>Type message here...</div>
                                    <Smile size={14} className={styles.phInputIcon} />
                                    <Mic size={14} className={styles.phInputIcon} />
                                </div>
                            </div>

                            {/* 3D Icons beside phone */}
                            <div className={styles.icon3dLeft}>
                                <div className={styles.icon3dBox}>
                                    <Hammer size={22} />
                                </div>
                            </div>
                            <div className={styles.icon3dRight}>
                                <div className={styles.icon3dBox}>
                                    <ClipboardCheck size={22} />
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
                        <p>Join <span className={styles.highlight}>50+ companies</span> using TaskTag <br className={styles.trustedBreak} /> to keep crews aligned and jobs moving</p>
                        <div className={styles.marqueeWrapper}>
                            <div className={styles.marqueeTrack}>
                                {[...logos, ...logos, ...logos].map((src, i) => (
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
