import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

interface ScrollBackgroundProps {
    children: React.ReactNode;
}

const ScrollBackground: React.FC<ScrollBackgroundProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    // Transition through colors as user scrolls through the page
    // White → soft warm grey → white → cool light → white → warm tone → soft end
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.12, 0.2, 0.35, 0.45, 0.6, 0.8, 0.95, 1],
        [
            'var(--white)',   // Hero
            'var(--white)',   // Hero → Features transition
            'var(--white)',   // Features
            '#F5F7FA',   // BentoResults (Real Results)
            'var(--white)',   // ActivationSteps
            'var(--white)',   // Templates transition
            'var(--white)',   // Templates
            'rgba(var(--light-peach-rgb), 1)',   // FinalCta (Start Free)
            'rgba(var(--light-peach-rgb), 1)',   // Footer (shares CTA bg logically via css)
        ]
    );

    return (
        <motion.div
            ref={ref}
            style={{ backgroundColor }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollBackground;
