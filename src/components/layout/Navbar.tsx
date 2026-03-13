import React, { useState, useEffect } from 'react';
import logoUrl from '../../assets/Logo-TaskTag.svg';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.logo}>
                        <a href="#">
                            <img src={logoUrl} alt="TaskTag Logo" style={{ height: '32px', width: 'auto' }} />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <a href="#features" className={styles.navLink}>Features</a>
                        <a href="https://tasktag.com/pricing" className={styles.navLink}>Pricing</a>
                        <a href="https://portal.tasktag.com/blog" className={styles.navLink} target="_blank" rel="noopener noreferrer">Blog</a>
                        <a href="https://portal.tasktag.com/product" className={styles.navLink} target="_blank" rel="noopener noreferrer">Resources</a>
                    </div>

                    <div className={styles.desktopActions}>
                        <a href="https://app.tasktag.com/login" className={styles.loginLink} target="_blank" rel="noopener noreferrer">Log In</a>
                        <a href="https://app.tasktag.com/register/signup-with-email" className={styles.navbarBtn} target="_blank" rel="noopener noreferrer">Start For Free</a>
                    </div>

                    {/* Mobile Header Actions */}
                    <div className={styles.mobileHeaderActions}>
                        {!mobileMenuOpen && (
                            <a href="https://app.tasktag.com/register/signup-with-email" className={styles.navbarBtn} target="_blank" rel="noopener noreferrer">Start For Free</a>
                        )}
                        {/* Mobile Toggle */}
                        <button
                            className={styles.mobileToggle}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {mobileMenuOpen && (
                        <div
                            className={styles.mobileOverlay}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-hidden="true"
                        />
                    )}

                    {/* Mobile Menu */}
                    <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                        <a href="#features" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Features</a>
                        <a href="https://tasktag.com/pricing" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                        <a href="https://portal.tasktag.com/product" className={styles.mobileNavLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Resources</a>
                        <hr className={styles.divider} />
                        <div className={styles.mobileCta}>
                            <a href="https://app.tasktag.com/register/signup-with-email" className={styles.navbarBtn} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Start For Free</a>
                            <a href="https://app.tasktag.com/login" className={styles.navbarSecondaryBtn} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
