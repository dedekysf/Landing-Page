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
                        Run Construction Projects <br />
                        <span className={styles.highlight}>in Chat.</span> Start Now.
                    </h1>
                    <p className={styles.subheadline}>
                        Keep your team aligned with less email, less chaos, and projects that actually get done on time.
                    </p>

                    <div className={styles.actions} style={{ flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'inline-block', paddingBottom: '6px', height: '80px' }}>
                            <Button size="lg" className={styles.primaryBtn}>
                                Start Your First Project
                            </Button>
                        </div>
                    </div>

                    {/* <div className={styles.socialProof}>
                        <div className={styles.avatars}>
                            <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=11)' }}></div>
                            <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=32)' }}></div>
                            <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=47)' }}></div>
                            <div className={styles.avatarCount}>+2k</div>
                        </div>
                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" color="var(--vivid-yellow)" />)}
                            </div>
                            <span>Loved by 2,000+ teams</span>
                        </div>
                    </div> */}

                </div>

                <div className={styles.visualWrapper}>
                    <motion.div
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
