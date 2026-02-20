import React from 'react';
import Button from '../common/Button';
import styles from './CTAB.module.css';

const CTAB: React.FC = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <h2 className={styles.headline}>START YOUR NEXT PROJECT THE RIGHT WAY</h2>
                <p className={styles.subheadline}>Create a project. Invite your crew. Manage everything in one organized chat.</p>
                <div className={styles.btnWrapper}>
                    <Button size="lg" className={styles.ctaBtn}>START FREE - CREATE YOUR PROJECT</Button>
                </div>
            </div>
        </section>
    );
};

export default CTAB;
