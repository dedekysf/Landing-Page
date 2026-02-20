import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { CheckCircle } from 'lucide-react';
import styles from './HeroA.module.css';
import logoIntown from '../../assets/client/Logo-intown.png';
import logoLovett from '../../assets/client/Logo-lovett.png';
import logoPost from '../../assets/client/Logo-post.png';
import logoPrecision from '../../assets/client/Logo-precision.png';
import logoSosa from '../../assets/client/Sosa.png';
import logoIsc from '../../assets/client/Isc-Logo-BW.png';
import logoZerodraft from '../../assets/client/Logo-Zerodraft.png';
import logoSwenson from '../../assets/client/Swenson-Logo.png';

const logos = [logoIntown, logoLovett, logoPost, logoPrecision, logoSosa, logoIsc, logoZerodraft, logoSwenson];

const HeroA: React.FC = () => {
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
                    {/* Tablet/Dashboard Mockup */}
                    <div className={styles.tabletMockup}>
                        <div className={styles.tabletScreen}>
                            <div className={styles.mockupHeader}>
                                <div className={styles.windowControls}>
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className={styles.mockupBody}>
                                <div className={styles.sidebar}>
                                    <div className={styles.sideItemActive}>Project</div>
                                    <div className={styles.sideItem}>My Task</div>
                                    <div className={styles.sideItem}>Activity</div>
                                    <div className={styles.sideItem}>Contact</div>
                                </div>
                                <div className={styles.mainContent}>
                                    <div className={styles.boardHeader}>
                                        <h3>Downtown Renovation</h3>
                                        <div className={styles.badges}>
                                            <span className={styles.badgePending}>3 Pending</span>
                                            <span className={styles.badgeDone}>12 Done</span>
                                        </div>
                                    </div>
                                    <div className={styles.taskCards}>
                                        <motion.div className={styles.mockCard} whileHover={{ y: -5 }}>
                                            <div className={styles.cardTop}><CheckCircle size={20} color="var(--secondary-green)" strokeWidth={1.5} /> Review wiring plan</div>
                                            <div className={styles.cardBottom}>Due Today</div>
                                        </motion.div>
                                        <motion.div className={styles.mockCard} whileHover={{ y: -5 }}>
                                            <div className={styles.cardTop}><CheckCircle size={20} color="var(--grey-04)" /> Inspect concrete pour</div>
                                            <div className={styles.cardBottom}>Tomorrow</div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tabletBase}></div>
                    </div>

                    {/* Floating elements around mockup */}
                    <motion.div
                        className={styles.floatCard1}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                        <div className={styles.fcCheck}><CheckCircle size={24} fill="var(--secondary-green)" color="var(--grey-01)" /></div>
                        <div className={styles.fcText}>Assigned to Mike</div>
                    </motion.div>

                    <motion.div
                        className={styles.floatCard2}
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    >
                        <div className={styles.fcCheck}><CheckCircle size={24} fill="currentColor" color="var(--grey-01)" /></div>
                        <div className={styles.fcText}>Photo Uploaded</div>
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

export default HeroA;
