import React from 'react';
import styles from './HowItWorks.module.css';

const STEPS = [
    {
        number: "01",
        title: "Start a Project",
        description: "Create a dedicated workspace for your jobsite. Invite your team, subcontractors, and clients in seconds."
    },
    {
        number: "02",
        title: "Chat to Task",
        description: "Discuss details in the chat. specific instructions? Turn that message into a tracked task with one click."
    },
    {
        number: "03",
        title: "Track & Complete",
        description: "Assign owners, set due dates, and get notified when work is done. Photos and updates are saved automatically."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>How TaskTag Works</h2>
                    <p className={styles.subtitle}>From conversation to completion in three simple steps.</p>
                </div>

                <div className={styles.steps}>
                    {STEPS.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                            {/* Connector line for desktop, except last item */}
                            {index < STEPS.length - 1 && <div className={styles.connector}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
