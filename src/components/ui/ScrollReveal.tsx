import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    distance = 40
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: distance }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
