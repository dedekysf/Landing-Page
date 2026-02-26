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
        [0, 0.12, 0.2, 0.35, 0.45, 0.6, 0.7, 0.85, 1],
        [
            '#FFFFFF',   // Hero
            '#FFFFFF',   // Hero → Features transition
            '#FFFFFF',   // Features (cool grey)
            '#FFFFFF',   // BentoResults
            '#F5F7FA',   // ActivationSteps (warm beige)
            '#F5F7FA',   // Templates transition
            '#F3F8F6',   // Templates (green-tinted)
            '#FFFFFF',   // FinalCta
            '#FFFFFF',   // Footer
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
