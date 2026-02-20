import React from 'react';
import Button from '../common/Button';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
    return (
        <section className={styles.cta}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Ready to build better?</h2>
                <p className={styles.subtitle}>
                    Join thousands of construction pros who manage their jobsites with TaskTag.
                </p>
                <div className={styles.actions}>
                    <Button size="lg" variant="primary">Start Free Project</Button>
                    <Button size="lg" variant="outline" className={styles.demoBtn}>Request Demo</Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
