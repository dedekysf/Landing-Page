import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';


import styles from './Hero.module.css';
import logoIntown from '../../assets/client/Logo-intown.png';
import logoLovett from '../../assets/client/Logo-lovett.png';
import logoPost from '../../assets/client/Logo-post.png';
import logoPrecision from '../../assets/client/Logo-precision.png';
import logoSosa from '../../assets/client/Sosa.png';
import logoIsc from '../../assets/client/Isc-Logo-BW.png';
import logoZerodraft from '../../assets/client/Logo-Zerodraft.png';
import logoSwenson from '../../assets/client/Swenson-Logo.png';
import heroMytaskImg from '../../assets/hero-mytask-2.png';

const logos = [logoIntown, logoLovett, logoPost, logoPrecision, logoSosa, logoIsc, logoZerodraft, logoSwenson];

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        Run the job from chat<br />
                        <span className={styles.highlight}>without missing a single detail</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Turn jobsite messages into assigned tasks with owners and due dates, so you always know what’s done, what’s blocked, and who owns it.
                    </p>

                    <div className={styles.actions}>
                        <div style={{ display: 'inline-block', paddingBottom: '6px', height: '80px' }}>
                            <Button size="lg" className={styles.primaryBtn}>
                                Start Your First Project
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.customVisualWrapper}>
                    <motion.div
                        className={styles.visualContainer}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <img
                            src={heroMytaskImg}
                            alt="TaskTag Project Dashboard"
                            className={styles.heroImage}
                        />
                    </motion.div>
                </div>

                {/* Marquee logo strip — 3x logos for seamless loop */}
                <div className={styles.trustedBy}>
                    <p>Trusted by growing construction teams</p>
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
    );
};

export default Hero;
