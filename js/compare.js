/* Compare Page specific scripts */

document.addEventListener('DOMContentLoaded', () => {
    // Compare Plans Mobile Switcher Logic
    const compareMobileBtns = document.querySelectorAll('.compare-mobile-nav__btn');
    const compareTable = document.getElementById('compare-table');
    const planHeaderItems = document.querySelectorAll('.compare-mobile-plan-header__item');
    const compareNavSlider = document.querySelector('.compare-mobile-nav__slider');

    const moveCompareSlider = (btn) => {
        if (!compareNavSlider) return;
        compareNavSlider.style.width = `${btn.offsetWidth}px`;
        compareNavSlider.style.transform = `translateX(${btn.offsetLeft - 4}px)`;
    };

    if (compareMobileBtns.length > 0 && compareTable) {
        // Initialize slider on active button
        const activeComparBtn = document.querySelector('.compare-mobile-nav__btn.active');
        if (activeComparBtn && compareNavSlider) {
            compareNavSlider.style.transition = 'none';
            moveCompareSlider(activeComparBtn);
            setTimeout(() => { compareNavSlider.style.transition = ''; }, 50);
        }

        compareMobileBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const plan = btn.getAttribute('data-plan');

                // Update active button
                compareMobileBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Animate slider
                moveCompareSlider(btn);

                // Update table class (remove all possible plans, then add target)
                compareTable.classList.remove('show-tasktag', 'show-companycam');
                compareTable.classList.add(`show-${plan}`);

                // Update plan header
                planHeaderItems.forEach(item => item.classList.remove('active'));
                document.querySelector(`.compare-mobile-plan-header__item[data-plan="${plan}"]`)?.classList.add('active');
            });
        });
    }

    // Sticky shadow for compare nav
    const compareNavSentinel = document.querySelector('.compare-mobile-nav-sentinel');
    const compareNav = document.querySelector('.compare-mobile-nav');
    if (compareNavSentinel && compareNav) {
        const stickyObserver = new IntersectionObserver(([entry]) => {
            if (entry.boundingClientRect.top < 0) {
                // Sentinel scrolled past viewport top
                compareNav.classList.add('compare-mobile-nav--stuck');
            } else {
                compareNav.classList.remove('compare-mobile-nav--stuck');
            }
        }, { rootMargin: '-88px 0px 0px 0px', threshold: 0 });
        stickyObserver.observe(compareNavSentinel);
    }
});
