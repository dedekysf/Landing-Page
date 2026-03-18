/**
 * Hero section: badge cycling, scroll-based image scaling
 */
function initHero() {
    var topRightBadges = [
        { type: 'loading' },
        { type: 'text', text: 'Track Updates', icon: 'activity', bg: 'var(--blue)' },
        { type: 'loading' },
        { type: 'text', text: 'Stay Organized', icon: 'list-checks', bg: 'var(--secondary-green)' },
        { type: 'loading' },
        { type: 'text', text: 'Close Faster', icon: 'zap', bg: 'var(--orange)' },
        { type: 'loading' },
        { type: 'text', text: 'Proof Billing', icon: 'image', bg: 'var(--purple)' }
    ];

    var bottomLeftBadges = [
        { type: 'loading' },
        { type: 'text', text: 'Close Faster', icon: 'zap', bg: 'var(--orange)' },
        { type: 'loading' },
        { type: 'text', text: 'Proof Billing', icon: 'image', bg: 'var(--purple)' }
    ];

    var isMobile = window.innerWidth < 768;
    window.addEventListener('resize', function () { isMobile = window.innerWidth < 768; });

    var topRightEl = document.getElementById('badge-top-right');
    var bottomLeftEl = document.getElementById('badge-bottom-left');

    var topRightIdx = 0;
    var bottomLeftIdx = 0;

    function renderBadge(el, badge) {
        if (!el) return;

        // Fade out
        el.style.opacity = '0';
        el.style.transform = 'translateY(-10px)';

        setTimeout(function () {
            if (badge.type === 'loading') {
                el.innerHTML =
                    '<div class="hero__loading-dots" style="padding:0 8px;">' +
                        '<span class="hero__loading-dot"></span>' +
                        '<span class="hero__loading-dot hero__loading-dot--2"></span>' +
                        '<span class="hero__loading-dot hero__loading-dot--3"></span>' +
                    '</div>';
            } else {
                el.innerHTML =
                    '<div class="hero__badge-content">' +
                        '<div class="hero__badge-icon" style="--badge-bg:' + badge.bg + '">' +
                            '<i data-lucide="' + badge.icon + '" style="width:16px;height:16px;"></i>' +
                        '</div>' +
                        '<span class="hero__badge-text" style="color:' + badge.bg + '">' + badge.text + '</span>' +
                    '</div>';
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons({ nodes: [el] });
                }
            }

            // Fade in
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300);
    }

    function cycleTopRight() {
        var limit = isMobile ? topRightBadges.length : 4;
        topRightIdx = (topRightIdx + 1) % limit;
        var badge = topRightBadges[topRightIdx];
        renderBadge(topRightEl, badge);
        var duration = badge.type === 'loading' ? 1200 : 3500;
        setTimeout(cycleTopRight, duration);
    }

    function cycleBottomLeft() {
        bottomLeftIdx = (bottomLeftIdx + 1) % bottomLeftBadges.length;
        var badge = bottomLeftBadges[bottomLeftIdx];
        renderBadge(bottomLeftEl, badge);
        var duration = badge.type === 'loading' ? 1200 : 4500;
        setTimeout(cycleBottomLeft, duration);
    }

    // Add transition styles to badge inners
    if (topRightEl) {
        topRightEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
    if (bottomLeftEl) {
        bottomLeftEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    // Start cycling after initial loading
    setTimeout(cycleTopRight, 1200);
    setTimeout(cycleBottomLeft, 1200);

    // Scroll-based scaling
    var heroSection = document.getElementById('hero-section');
    var scalingWrapper = document.getElementById('hero-scaling-wrapper');

    if (heroSection && scalingWrapper) {
        var ticking = false;

        function updateScale() {
            var rect = heroSection.getBoundingClientRect();
            var scrolled = -rect.top;
            var progress = Math.max(0, Math.min(scrolled / (rect.height * 0.5), 1));
            var scale = 1 + progress * 0.12;
            scalingWrapper.style.transform = 'scale(' + scale + ')';
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    updateScale();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
}
