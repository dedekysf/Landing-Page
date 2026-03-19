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

        // Fade out downward
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';

        setTimeout(function () {
            if (badge.type === 'loading') {
                el.innerHTML =
                    '<div class="hero__loading-dots" style="padding:0 8px;">' +
                        '<span class="hero__loading-dot"></span>' +
                        '<span class="hero__loading-dot hero__loading-dot--2"></span>' +
                        '<span class="hero__loading-dot hero__loading-dot--3"></span>' +
                    '</div>';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            } else {
                // Icon wrapper (hidden initially)
                var iconWrapper = document.createElement('div');
                iconWrapper.className = 'hero__badge-icon-wrapper';
                iconWrapper.style.cssText = '--badge-bg:' + badge.bg + ';opacity:0;transform:translateY(8px);transition:opacity 0.3s ease,transform 0.3s ease;';
                iconWrapper.innerHTML = '<i data-lucide="' + badge.icon + '" style="width:16px;height:16px;"></i>';

                // Text (hidden initially)
                var textSpan = document.createElement('span');
                textSpan.className = 'hero__badge-text';
                textSpan.style.cssText = 'color:' + badge.bg + ';opacity:0;transform:translateY(8px);transition:opacity 0.3s ease,transform 0.3s ease;';
                textSpan.textContent = badge.text;

                var content = document.createElement('div');
                content.className = 'hero__badge-content';
                content.appendChild(iconWrapper);
                content.appendChild(textSpan);

                el.innerHTML = '';
                el.appendChild(content);

                if (typeof lucide !== 'undefined') {
                    lucide.createIcons({ nodes: [el] });
                }

                // Show container
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';

                // Icon appears first (from bottom to top)
                requestAnimationFrame(function () {
                    iconWrapper.style.opacity = '1';
                    iconWrapper.style.transform = 'translateY(0)';
                });

                // Text appears 0.4s after icon
                setTimeout(function () {
                    textSpan.style.opacity = '1';
                    textSpan.style.transform = 'translateY(0)';
                }, 400);
            }
        }, 300);
    }

    // Visibility-aware badge cycling (pause when off-screen)
    var heroVisible = true;
    var topRightTimer = null;
    var bottomLeftTimer = null;

    var heroObserver = new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
        if (heroVisible) {
            if (!topRightTimer) topRightTimer = setTimeout(cycleTopRight, 1200);
            if (!bottomLeftTimer) bottomLeftTimer = setTimeout(cycleBottomLeft, 1200);
        }
    }, { threshold: 0 });

    var heroEl = document.getElementById('hero-section');
    if (heroEl) heroObserver.observe(heroEl);

    function cycleTopRight() {
        topRightTimer = null;
        if (!heroVisible) return;
        var limit = isMobile ? topRightBadges.length : 4;
        topRightIdx = (topRightIdx + 1) % limit;
        var badge = topRightBadges[topRightIdx];
        renderBadge(topRightEl, badge);
        var duration = badge.type === 'loading' ? 1200 : 3500;
        topRightTimer = setTimeout(cycleTopRight, duration);
    }

    function cycleBottomLeft() {
        bottomLeftTimer = null;
        if (!heroVisible) return;
        bottomLeftIdx = (bottomLeftIdx + 1) % bottomLeftBadges.length;
        var badge = bottomLeftBadges[bottomLeftIdx];
        renderBadge(bottomLeftEl, badge);
        var duration = badge.type === 'loading' ? 1200 : 4500;
        bottomLeftTimer = setTimeout(cycleBottomLeft, duration);
    }

    // Add transition styles to badge inners
    if (topRightEl) {
        topRightEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
    if (bottomLeftEl) {
        bottomLeftEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    // Start cycling after initial loading
    topRightTimer = setTimeout(cycleTopRight, 1200);
    bottomLeftTimer = setTimeout(cycleBottomLeft, 1200);

    // Scroll-based scaling via Lenis (no extra lerp — Lenis already smooths)
    var heroSection = document.getElementById('hero-section');
    var scalingWrapper = document.getElementById('hero-scaling-wrapper');

    if (heroSection && scalingWrapper) {
        var heroTop = heroSection.offsetTop;
        var heroHeight = heroSection.offsetHeight;

        // will-change is handled in CSS now

        var resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                heroTop = heroSection.offsetTop;
                heroHeight = heroSection.offsetHeight;
            }, 200);
        }, { passive: true });

        function updateScale(scrollY) {
            var scrolled = scrollY - heroTop;
            var progress = Math.max(0, Math.min(scrolled / (heroHeight * 0.5), 1));
            var scale = 1 + progress * 0.12;
            scalingWrapper.style.transform = 'scale3d(' + scale + ',' + scale + ',1)';
        }

        // Use Lenis scroll callback (already smoothed, no double-dampening)
        if (window.__lenis) {
            window.__lenis.on('scroll', function (e) {
                // Do not defer to next frame (causes judder/desync)
                updateScale(e.scroll);
            });
        } else {
            // Fallback if Lenis not available
            window.addEventListener('scroll', function () {
                requestAnimationFrame(function () {
                    updateScale(window.pageYOffset);
                });
            }, { passive: true });
        }
    }
}
