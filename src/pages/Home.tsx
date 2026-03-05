import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import ClientProof from '../components/sections/ClientProof';
import Templates from '../components/sections/Templates';
import CallToAction from '../components/sections/CallToAction';
import BlogResources from '../components/sections/BlogResources';
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
                    <Features />
                </ScrollReveal>
                <ScrollReveal>
                    <Templates />
                </ScrollReveal>
                <ScrollReveal>
                    <ClientProof />
                </ScrollReveal>
                <Pricing />

                <BlogResources />

                <ScrollReveal>
                    <div className={styles.bottomUnifiedWrapper}>
                        <CallToAction />
                        <Footer />
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Home;
