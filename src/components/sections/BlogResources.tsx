import React from 'react';
import styles from './BlogResources.module.css';

const BlogResources: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.banner}>
                    {/* Background Patterns */}
                    <div className={styles.dots} />
                    <div className={styles.glow} />

                    <div className={styles.content}>
                        <h2 className={styles.title}>Learn & Build Better.</h2>
                        <p className={styles.subtitle}>
                            Discover construction insights or learn to use TaskTag like a pro.
                        </p>

                        <div className={styles.btnGroup}>
                            <a
                                href="https://portal.tasktag.com/blog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.secondaryBtn}
                            >
                                Read The Blog
                            </a>
                            <a
                                href="https://portal.tasktag.com/product"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryBtn}
                            >
                                Explore Resources
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogResources;
