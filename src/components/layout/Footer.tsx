import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import logoUrl from '../../assets/Logo-TaskTag.svg';
import appStoreUrl from '../../assets/app_store.svg';
import playStoreUrl from '../../assets/playstore.svg';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brandSection}>
                        <div className={styles.logo}>
                            <img src={logoUrl} alt="TaskTag Logo" style={{ height: '40px', width: 'auto' }} />
                        </div>
                        <div className={styles.contactInfo}>
                            <p>2410 Polk Street, Houston, Texas</p>
                            <p className={styles.emailAddress}><a href="mailto:info@tasktag.com" style={{ textDecoration: 'none' }}>info@tasktag.com</a></p>
                        </div>
                    </div>

                    <div className={styles.linksSection}>

                        {/* Middle column: App Store & Play Store */}
                        <div className={styles.column} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="#" className={styles.storeLink}>
                                <img src={appStoreUrl} alt="Download on the App Store" style={{ height: '36px', width: 'auto' }} />
                            </a>
                            <a href="#" className={styles.storeLink}>
                                <img src={playStoreUrl} alt="Get it on Google Play" style={{ height: '36px', width: 'auto' }} />
                            </a>
                        </div>

                        {/* Right column: Social Media & Links */}
                        <div className={styles.column} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap: '1rem' }}>
                            <div className={styles.socials}>
                                <a href="mailto:info@tasktag.com" className={styles.socialIcon}><Mail size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Instagram size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Linkedin size={18} strokeWidth={1.5} /></a>
                            </div>
                            <div className={styles.bottomLinks}>
                                <a href="#">Privacy</a>
                                <a href="#">Terms</a>
                                <a href="#">Support</a>
                                <a href="#">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>©2024 TaskTag. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
