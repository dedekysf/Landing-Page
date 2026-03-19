/**
 * Smooth scroll: Lenis + hash navigation
 */
function initSmoothScroll() {
    // Init Lenis
    if (typeof Lenis !== 'undefined') {
        var lenis = new Lenis({
            duration: 2,
            easing: function (t) { return 1 - Math.pow(1 - t, 4); },
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            lerp: 0.06
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Hash link navigation via Lenis
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var href = this.getAttribute('href');
                if (!href || href === '#') return;

                var target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();
                lenis.scrollTo(target, { offset: -80 });
            });
        });

        window.__lenis = lenis;
    }
}
