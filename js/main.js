/**
 * Main orchestrator: initialize all modules on DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons from CDN
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Core modules
    initSmoothScroll();
    initScrollReveal();
    initNavbar();

    // Section modules
    initHero();
    initFeatureAnimations(); // Must come before initFeatures so animators are ready
    initFeatures();
    initTemplates();
    initClientProof();
});
