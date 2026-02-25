import React from 'react';
import { Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
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
                        <div className={styles.column} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>

                            <div className={styles.socials}>
                                <a href="mailto:info@tasktag.com" className={styles.socialIcon}><Mail size={18} strokeWidth={1.5} /></a>
                                <a href="https://www.instagram.com/tasktagapp/" className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><Instagram size={18} strokeWidth={1.5} /></a>
                                <a href="https://www.linkedin.com/company/tasktagapp/posts/?feedView=all" className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><Linkedin size={18} strokeWidth={1.5} /></a>
                                <a href="https://www.youtube.com/channel/UC95-ZfL7LHxYAtcLqAAkDOw" className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><Youtube size={18} strokeWidth={1.5} /></a>
                            </div>
                        </div>

                        {/* Right column: Social Media & Links */}
                        <div className={styles.column} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>

                            <a href="https://apps.apple.com/us/app/tasktag-how-to-project/id1635406641" className={styles.storeLink} target="_blank" rel="noopener noreferrer">
                                <img src={appStoreUrl} alt="Download on the App Store" style={{ height: '36px', width: 'auto' }} />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.eloveit.TaskTag&pcampaignid=web_share" className={styles.storeLink} target="_blank" rel="noopener noreferrer">
                                <img src={playStoreUrl} alt="Get it on Google Play" style={{ height: '36px', width: 'auto' }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomLinks}>
                        <a href="https://tasktag.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        <a href="https://tasktag.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                        <a href="https://tasktag.com/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
                    </div>
                    <p className={styles.copyright}>©2024 TaskTag. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
