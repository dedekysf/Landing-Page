import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logoUrl from '../../assets/Logo-TaskTag.svg';
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
                        </div>
                    </div>

                    <div className={styles.linksSection}>

                        <div className={styles.column} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <div className={styles.socials}>
                                <a href="#" className={styles.socialIcon}><Facebook size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Twitter size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Instagram size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Linkedin size={18} strokeWidth={1.5} /></a>
                            </div>
                            <div className={styles.emailContact}>
                                <p><a href="mailto:info@tasktag.com" style={{ color: 'var(--secondary-green)', textDecoration: 'none', fontWeight: 600 }}>info@tasktag.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomLinks}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Support</a>
                        <a href="#">FAQ</a>
                    </div>
                    <p className={styles.copyright}>©2024 TaskTag. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
