import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { ArrowDown, Clock2, CircleCheckBig } from 'lucide-react';

import styles from './Hero.module.css';
import logoIntown from '../../assets/client/Logo-intown.png';
import logoLovett from '../../assets/client/Logo-lovett.png';
import logoPost from '../../assets/client/Logo-post.png';
import logoPrecision from '../../assets/client/Logo-precision.png';
import logoSosa from '../../assets/client/Sosa.png';
import logoIsc from '../../assets/client/Isc-Logo-BW.png';
import logoZerodraft from '../../assets/client/Logo-Zerodraft.png';
import logoSwenson from '../../assets/client/Swenson-Logo.png';

// Import images for carousel
import foremanRoofing from '../../assets/foreman_roofing.png';
import foremanIrrigation from '../../assets/foreman_irrigation.png';
import foremanCeiling from '../../assets/foreman_ceiling.png';

const carouselImages = [foremanRoofing, foremanIrrigation, foremanCeiling];

const overlayData = [
    { icon: <ArrowDown size={20} />, stat: "40%", text: "Less rework", bg: "rgba(220, 252, 231, 0.85)", color: "#166534" },
    { icon: <Clock2 size={20} />, stat: "5H", text: "Saved weekly", bg: "rgba(219, 234, 254, 0.85)", color: "#1e40af" },
    { icon: <CircleCheckBig size={20} />, stat: "95%", text: "Task completion", bg: "rgba(243, 232, 255, 0.85)", color: "#6b21a8" }
];

const logos = [logoIntown, logoLovett, logoPost, logoPrecision, logoSosa, logoIsc, logoZerodraft, logoSwenson];

const Hero: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className={styles.hero}>

                <div className={`container ${styles.container}`}>
                    <div className={styles.splitLayout}>
                        <div className={styles.content}>
                            <h1 className={styles.headline}>
                                Manage Your Job Through <span className={styles.highlight}>in Chat</span>
                            </h1>
                            <p className={styles.subheadline}>
                                Turn jobsite messages into trackable tasks with an owner, a due date, and photo updates organized by job so nothing gets missed.
                            </p>

                            <div className={styles.heroFeatures}>
                                <div className={styles.heroFeatureItem}>
                                    <div className={styles.heroFeatureIcon}><CircleCheckBig size={20} /></div>
                                    <span className={styles.heroFeatureText}>Clear Owner</span>
                                </div>
                                <div className={styles.heroFeatureItem}>
                                    <div className={styles.heroFeatureIcon}><CircleCheckBig size={20} /></div>
                                    <span className={styles.heroFeatureText}>Clear Due Date</span>
                                </div>
                                <div className={styles.heroFeatureItem}>
                                    <div className={styles.heroFeatureIcon}><CircleCheckBig size={20} /></div>
                                    <span className={styles.heroFeatureText}>Clear Proof</span>
                                </div>
                            </div>

                            <div className={styles.actions} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                                <div style={{ display: 'inline-block', paddingBottom: '6px', height: '80px' }}>
                                    <Button size="lg" className={styles.primaryBtn}>
                                        Start Your First Project
                                    </Button>
                                </div>
                            </div>

                        </div>

                        <div className={styles.visualWrapper}>
                            <div
                                className={styles.heroImageContainer}
                                style={{ position: 'relative', width: '100%', aspectRatio: '1/1', paddingTop: '40px' }} // Changed to 1/1 to prevent cropping square images
                            >
                                {carouselImages.map((src, index) => {
                                    // Calculate position in the stack (0 is front, 1 is behind it, etc.)
                                    const diff = (index - currentImageIndex + carouselImages.length) % carouselImages.length;

                                    // Determine if this is the card that JUST left the front
                                    // (If the current index is one step ahead of this card's index)
                                    const isJustLeft = (currentImageIndex === (index + 1) % carouselImages.length) || (currentImageIndex === 0 && index === carouselImages.length - 1);

                                    // Define styles based on position in stack
                                    let yOffset = 0;
                                    let scale = 1;
                                    let opacity = 1;
                                    let zIndex = 10 - diff;

                                    if (diff === 0) {
                                        // Front card
                                        yOffset = 0;
                                        scale = 1;
                                        opacity = 1;
                                    } else if (diff === 1) {
                                        // Second card
                                        yOffset = -20;
                                        scale = 0.95;
                                        opacity = 0.8;
                                    } else if (diff === 2) {
                                        // Third card
                                        yOffset = -40;
                                        scale = 0.9;
                                        opacity = 0.5;
                                    } else if (isJustLeft) {
                                        // The card that just moved away from the front: drop down and fade out
                                        yOffset = 100; // Drops down gently without overlapping the logos
                                        scale = 0.95;
                                        opacity = 0; // Fade out as it drops so it doesn't clip awkwardly at the very bottom
                                        zIndex = 11; // Stays on top while dropping
                                    } else {
                                        // Hidden cards at the very back (snaps instantly because of layout shift)
                                        yOffset = -60;
                                        scale = 0.85;
                                        opacity = 0;
                                        zIndex = 0;
                                    }

                                    return (
                                        <motion.div
                                            key={src}
                                            className={styles.heroImageCarousel}
                                            initial={false}
                                            animate={{
                                                y: yOffset,
                                                scale: scale,
                                                opacity: opacity,
                                                zIndex: zIndex
                                            }}
                                            transition={{
                                                duration: isJustLeft ? 0.5 : 0.6, // Slightly faster drop so it clears out elegantly
                                                ease: "easeInOut"
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: '40px', // Push down to give room for tabs
                                                left: 0,
                                                width: '100%',
                                                height: 'calc(100% - 40px)',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(255,255,255,0.65)',
                                                backdropFilter: 'blur(3px)',
                                                WebkitBackdropFilter: 'blur(3px)',
                                                boxShadow: diff === 0 ? '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)' : 'none',
                                                background: 'rgba(255,255,255,0.5)',
                                                padding: '5px',
                                                overflow: 'hidden',
                                                pointerEvents: diff === 0 ? 'auto' : 'none',
                                                transformOrigin: 'top center',
                                            }}
                                        >
                                            <div style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                backgroundColor: '#fff'
                                            }}>
                                                <img
                                                    src={src}
                                                    alt={`TaskTag Feature ${index + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                {/* Overlay Box */}
                                                <div className={styles.carouselOverlay} style={{
                                                    backgroundColor: overlayData[index].bg,
                                                    color: overlayData[index].color
                                                }}>
                                                    <div className={styles.overlayTop}>
                                                        <div className={styles.overlayIconCircle} style={{ color: overlayData[index].color, borderColor: overlayData[index].color }}>
                                                            {overlayData[index].icon}
                                                        </div>
                                                        <span className={styles.overlayStat}>{overlayData[index].stat}</span>
                                                    </div>
                                                    <span className={styles.overlayText}>{overlayData[index].text}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee logo strip — separated from Hero */}
            <section className={styles.trustedBySection}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.trustedBy}>
                        <h2>Trusted by Builders on Real Jobsites.</h2>
                        <p>Join <span className={styles.highlight}>50+ companies</span> using TaskTag to keep crews aligned and jobs moving.</p>
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
