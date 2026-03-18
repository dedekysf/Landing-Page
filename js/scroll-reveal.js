/**
 * Scroll reveal system using IntersectionObserver
 * Elements with [data-reveal] attribute fade in when scrolled into view
 */
function initScrollReveal() {
    var revealElements = document.querySelectorAll('[data-reveal]');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var delay = parseInt(entry.target.dataset.revealDelay) || 0;
                if (delay > 0) {
                    setTimeout(function () {
                        entry.target.classList.add('reveal-visible');
                    }, delay);
                } else {
                    entry.target.classList.add('reveal-visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-60px'
    });

    revealElements.forEach(function (el) {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
}
