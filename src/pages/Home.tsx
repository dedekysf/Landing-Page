import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import ActivationSteps from '../components/sections/ActivationSteps';
import BentoResults from '../components/sections/BentoResults';
import Templates from '../components/sections/Templates';
import FinalCta from '../components/sections/FinalCta';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            {/* Content wrapper */}
            <div className={styles.contentWrapper}>
                <Hero />
                <Features />
                <BentoResults />
                <ActivationSteps />
                {/* <InviteMoment />
                <Pricing /> */}

                {/* new Templates section replacing the old CTA block */}
                <Templates />
                <FinalCta />
                <Footer />
            </div >
        </div >
    );
};

export default Home;
