import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            lerp: 0.05, // Linear interpolation. Sangat halus dan terasa berat (default 0.1)
            wheelMultiplier: 0.75, // Merespons putaran scroll wheel lebih "soft"
            smoothWheel: true,
            touchMultiplier: 1.5,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            infinite: false,
        });

        // Request Animation Frame loop to update Lenis continuously
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Clean up when unmounting
        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
