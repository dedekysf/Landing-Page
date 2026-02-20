import React from 'react';
import styles from './Features.module.css';
import { MessageCircle, Zap, Camera, Search } from 'lucide-react';

const FEATURES = [
    {
        title: "Chat-First Management",
        description: "Manage your entire project without leaving the chat. Create tasks, assign work, and track progress directly from your messages.",
        icon: <MessageCircle size={32} strokeWidth={1.5} />
    },
    {
        title: "Instant Action Items",
        description: "Convert any message into a tracked work item with a single tap. No more lost requests or forgotten to-dos.",
        icon: <Zap size={32} strokeWidth={1.5} />
    },
    {
        title: "Visual Documentation",
        description: "Snap photos and attach them to tasks instantly. Every image is indexed and searchable by location or trade.",
        icon: <Camera size={32} strokeWidth={1.5} />
    },
    {
        title: "Smart Search",
        description: "Find any decision, photo, or task in seconds. Stop digging through endless email chains and text threads.",
        icon: <Search size={32} strokeWidth={1.5} />
    }
];

const Features: React.FC = () => {
    return (
        <section id="features" className={styles.features}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Constructed for Clarity</h2>
                    <p className={styles.subtitle}>
                        Stop the chaos of scattered texts and emails. TaskTag brings everything together.
                    </p>
                </div>

                <div className={styles.grid}>
                    {FEATURES.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
