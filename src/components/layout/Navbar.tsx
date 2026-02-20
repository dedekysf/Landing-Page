import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import logoUrl from '../../assets/Logo-TaskTag.svg';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.inner} ${scrolled ? styles.innerScrolled : ''}`}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.logo}>
                        <a href="#">
                            <img src={logoUrl} alt="TaskTag Logo" style={{ height: '32px', width: 'auto' }} />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <a href="#features" className={styles.navLink}>Features</a>
                        <a href="#pricing" className={styles.navLink}>Pricing</a>
                        <a href="#blog" className={styles.navLink}>Blog</a>
                        <a href="#resources" className={styles.navLink}>Resources</a>
                    </div>

                    <div className={styles.desktopActions}>
                        <a href="#" className={styles.loginLink}>Log In</a>
                        <a href="#" className={styles.navbarBtn}>Get Started</a>
                    </div>

                    {/* Mobile Filter */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburger}></span>
                    </button>

                    {/* Mobile Menu */}
                    <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                        <a href="#features" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Features</a>
                        <a href="#pricing" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                        <a href="#resources" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Resources</a>
                        <hr className={styles.divider} />
                        <a href="#" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Log In</a>
                        <div className={styles.mobileCta}>
                            <Button fullWidth>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
