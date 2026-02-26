import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import ActivationSteps from '../components/sections/ActivationSteps';
import BentoResults from '../components/sections/BentoResults';
import Templates from '../components/sections/Templates';
import FinalCta from '../components/sections/FinalCta';
import ScrollBackground from '../components/layout/ScrollBackground';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            {/* Content wrapper with scroll-driven background */}
            <ScrollBackground>
                <div className={styles.contentWrapper}>
                    <Hero />
                    <Features />
                    <BentoResults />
                    <ActivationSteps />
                    <Templates />
                    <FinalCta />
                    <Footer />
                </div>
            </ScrollBackground>
        </div>
    );
};

export default Home;
