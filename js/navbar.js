/**
 * Navbar: mobile menu toggle, body scroll lock, overlay dismiss
 */
function initNavbar() {
    var toggle = document.querySelector('.navbar__mobile-toggle');
    var menu = document.querySelector('.navbar__mobile-menu');
    var overlay = document.querySelector('.navbar__mobile-overlay');
    var hamburger = document.querySelector('.navbar__hamburger');
    var startBtn = document.querySelector('.navbar__mobile-start-btn');

    if (!toggle || !menu || !overlay || !hamburger) return;

    var isOpen = false;

    function openMenu() {
        isOpen = true;
        menu.classList.add('navbar__mobile-menu--open');
        overlay.classList.add('navbar__mobile-overlay--visible');
        hamburger.classList.add('navbar__hamburger--open');
        if (startBtn) startBtn.style.display = 'none';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        isOpen = false;
        menu.classList.remove('navbar__mobile-menu--open');
        overlay.classList.remove('navbar__mobile-overlay--visible');
        hamburger.classList.remove('navbar__hamburger--open');
        if (startBtn) startBtn.style.display = '';
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
        isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    menu.querySelectorAll('.navbar__mobile-nav-link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
}
