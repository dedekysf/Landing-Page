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
                    </div>

                    <div className={styles.linksSection}>
                        <div className={styles.column}>
                            <h4>Pages</h4>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.socials}>
                                <a href="#" className={styles.socialIcon}><Facebook size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Twitter size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Instagram size={18} strokeWidth={1.5} /></a>
                                <a href="#" className={styles.socialIcon}><Linkedin size={18} strokeWidth={1.5} /></a>
                            </div>
                            <div className={styles.contactInfo}>
                                <p style={{ fontWeight: 'bold' }}>2410 Polk Street,<br />Houston, Texas</p>
                                <p><a href="mailto:info@tasktag.com" style={{ color: 'var(--secondary-green)', textDecoration: 'none' }}>info@tasktag.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>©2024 TaskTag. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
