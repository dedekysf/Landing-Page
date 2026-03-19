/**
 * Main orchestrator: initialize all modules on DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons from CDN
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Core modules
    if (typeof initSmoothScroll === 'function') initSmoothScroll();
    if (typeof initScrollReveal === 'function') initScrollReveal();
    if (typeof initNavbar === 'function') initNavbar();

    // Section modules
    if (typeof initHero === 'function') initHero();
    if (typeof initFeatureAnimations === 'function') initFeatureAnimations(); 
    if (typeof initFeatures === 'function') initFeatures();
    if (typeof initTemplates === 'function') initTemplates();
    if (typeof initClientProof === 'function') initClientProof();
});
