import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <Link to="/version-a" className={`${styles.card} ${styles.cardA}`}>A</Link>
                <Link to="/version-b" className={`${styles.card} ${styles.cardB}`}>B</Link>
                <Link to="/version-c" className={`${styles.card} ${styles.cardC}`}>C</Link>
                <Link to="/version-d" className={`${styles.card} ${styles.cardD}`}>D</Link>
            </div>
        </div>
    );
};

export default Home;
