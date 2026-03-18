/**
 * Client Proof section: CountUp animated counters, mobile scroll-to-right
 */
function initClientProof() {
    // CountUp animation
    var countElements = document.querySelectorAll('[data-countup]');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        once: true,
        rootMargin: '-100px'
    });

    countElements.forEach(function (el) {
        observer.observe(el);
    });

    function animateCount(el) {
        var target = parseInt(el.dataset.countup);
        var suffix = el.dataset.suffix || '';
        var duration = 1000;
        var startTime = performance.now();

        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function step(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = easeOutCubic(progress);
            var current = Math.round(eased * target);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    // Mobile: scroll row1 to far right
    if (window.innerWidth <= 768) {
        var row1 = document.getElementById('client-proof-row1');
        if (row1) {
            row1.scrollLeft = 9999;
        }
    }
}
