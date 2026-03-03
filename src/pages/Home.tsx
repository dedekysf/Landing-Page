import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FeaturesV2 from '../components/sections/FeaturesV2';
import ActivationSteps from '../components/sections/ActivationSteps';
import BentoResults from '../components/sections/BentoResults';
import TemplatesV2 from '../components/sections/TemplatesV2';
import FinalCta from '../components/sections/FinalCta';
import ScrollReveal from '../components/ui/ScrollReveal';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            {/* Content wrapper */}
            <div className={styles.contentWrapper}>
                <Hero />
                <ScrollReveal>
                    <FeaturesV2 />
                </ScrollReveal>
                <ScrollReveal>
                    <TemplatesV2 />
                </ScrollReveal>
                <ScrollReveal>
                    <BentoResults />
                </ScrollReveal>
                <ActivationSteps />

                <ScrollReveal>
                    <div className={styles.bottomUnifiedWrapper}>
                        <FinalCta />
                        <Footer />
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Home;
