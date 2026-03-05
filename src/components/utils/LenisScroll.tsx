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

        // Intercept hash links for smooth scrolling
        const handleHashLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link && link.hash && link.origin === window.location.origin) {
                const targetElement = document.querySelector(link.hash);
                if (targetElement) {
                    e.preventDefault();
                    lenis.scrollTo(targetElement as HTMLElement, {
                        offset: -80, // Offset for navbar height if needed
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard easeOutExpo
                    });

                    // Update URL hash without jumping
                    window.history.pushState(null, '', link.hash);
                }
            }
        };

        document.addEventListener('click', handleHashLinkClick);

        // Clean up when unmounting
        return () => {
            document.removeEventListener('click', handleHashLinkClick);
            lenis.destroy();
        };
    }, []);

    return null;
}
