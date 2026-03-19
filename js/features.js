/**
 * Features section: IntersectionObserver for scrollytelling,
 * active text block tracking, feature mockup swapping, frame color update
 */
var featureFrameColors = [
    'var(--light-sky)',
    'var(--light-lavender)',
    'var(--light-mint)',
    'var(--light-peach)',
    'var(--light-cream)'
];

var featureTitleColors = [
    'var(--blue)',
    'var(--dark-magenta)',
    'var(--secondary-green)',
    'var(--orange)',
    'var(--vivid-yellow)'
];

function initFeatures() {
    var textBlocks = document.querySelectorAll('.features__text-block');
    var mockupContainers = document.querySelectorAll('.features__mockup-container');
    var frame = document.getElementById('features-frame');
    var activeIndex = 0;

    if (!textBlocks.length || !frame) return;

    // IntersectionObserver for desktop scrollytelling
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var idx = parseInt(entry.target.dataset.featureIndex);
                if (!isNaN(idx) && idx !== activeIndex) {
                    setActiveFeature(idx);
                }
            }
        });
    }, {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
    });

    textBlocks.forEach(function (el) {
        observer.observe(el);
    });

    function setActiveFeature(idx) {
        // Update text block active states
        textBlocks.forEach(function (block, i) {
            if (i === idx) {
                block.classList.add('features__text-block--active');
                var title = block.querySelector('.features__title');
                if (title) title.style.color = featureTitleColors[i];
            } else {
                block.classList.remove('features__text-block--active');
                var title = block.querySelector('.features__title');
                if (title) title.style.color = '';
            }
        });

        // Update mockup visibility (crossfade via grid stack)
        mockupContainers.forEach(function (container, i) {
            if (i === idx) {
                container.classList.add('features__mockup-container--visible');
            } else {
                container.classList.remove('features__mockup-container--visible');
            }
        });

        // Update frame background color
        frame.style.background = featureFrameColors[idx];

        // Notify feature animations
        var oldIndex = activeIndex;
        activeIndex = idx;

        if (window.featureAnimators) {
            if (window.featureAnimators[oldIndex]) {
                window.featureAnimators[oldIndex].deactivate();
            }
            if (window.featureAnimators[idx]) {
                window.featureAnimators[idx].activate();
            }
        }
    }

    // Initialize first feature as active
    setActiveFeature(0);
}
