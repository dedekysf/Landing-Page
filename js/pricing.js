/* Pricing Page Interactivity */

document.addEventListener('DOMContentLoaded', () => {
    // Billing Toggle Logic
    const toggleContainer = document.getElementById('billing-toggle-container');
    const toggleOptions = document.querySelectorAll('.pricing-toggle__option');
    const teamPrice = document.getElementById('team-price');
    const teamBillingText = document.getElementById('team-billing-text');

    if (toggleContainer && teamPrice && teamBillingText) {
        const slider = document.querySelector('.pricing-toggle__slider');
        
        // Function to update prices based on billing period
        const updatePrices = (period) => {
            teamPrice.classList.add('price-updating');
            setTimeout(() => {
                if (period === 'yearly') {
                    teamPrice.textContent = '$16';
                    teamBillingText.textContent = 'Member/Mo billed yearly';
                } else {
                    teamPrice.textContent = '$20';
                    teamBillingText.textContent = 'Member/Mo billed monthly';
                }
                teamPrice.classList.remove('price-updating');
            }, 150);
        };

        // Update prices based on billing toggle
        toggleOptions.forEach((btn) => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                toggleOptions.forEach(opt => opt.classList.remove('active'));
                // Add to current
                btn.classList.add('active');
                
                // Move slider - offsetLeft includes container padding (4px), subtract it
                if (slider) {
                    slider.style.width = `${btn.offsetWidth}px`;
                    slider.style.transform = `translateX(${btn.offsetLeft - 4}px)`;
                }
                
                const billingType = btn.getAttribute('data-billing');
                updatePrices(billingType);
            });
        });

        // Set initial slider position
        const activeOption = document.querySelector('.pricing-toggle__option.active');
        if (activeOption && slider) {
            slider.style.transition = 'none';
            slider.style.width = `${activeOption.offsetWidth}px`;
            slider.style.transform = `translateX(${activeOption.offsetLeft - 4}px)`;
            setTimeout(() => {
                slider.style.transition = '';
            }, 50);
        }
    }

    // Previous animatePrice is no longer needed with the CSS-based fade

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't toggle if clicking a link or inside a link
            if (e.target.closest('a')) return;

            const isActive = item.classList.contains('active');
            const content = item.querySelector('.faq-item__content');
            
            if (isActive) {
                content.style.maxHeight = null;
                item.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                item.classList.add('active');
            }
        });
    });

    // Initialize Lucide icons (already in main.js, but just in case for new elements)
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // sync equality height for Free and Enterprise
    const syncCardHeights = () => {
        if (window.innerWidth > 992) {
            const freeCard = document.querySelector('.pricing-card:first-child');
            const enterpriseCard = document.querySelector('.pricing-card:last-child');
            
            if (freeCard && enterpriseCard) {
                freeCard.style.height = 'auto';
                enterpriseCard.style.height = 'auto';
                const maxHeight = Math.max(freeCard.offsetHeight, enterpriseCard.offsetHeight);
                freeCard.style.height = `${maxHeight}px`;
                enterpriseCard.style.height = `${maxHeight}px`;
            }
        } else {
            document.querySelectorAll('.pricing-card').forEach(card => card.style.height = 'auto');
        }
    };

    // Testimonial Carousel Logic
    const testimonialVideo = document.querySelector('.testimonial-video__element');
    const playBtn = document.querySelector('.testimonial-video__play-btn');
    const videoContainer = document.querySelector('.testimonial-video');

    const testimonialData = [
        {
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: "assets/foreman.jpg",
            quote: "TaskTag helped us reach a 95% completion rate. With real-time tracking and verification from the field, our team closes jobs much faster without chasing anyone.",
            author: "SOSA Construction",
            logo: "assets/client/Sosa.png"
        },
        {
            video: "https://www.w3schools.com/html/movie.mp4",
            poster: "assets/bento_img_1.jpg",
            quote: "Since switching to TaskTag, we cut rework by 40%. When everyone's pulling from the same approved photos and plans, you stop paying for the same job twice — it's the fastest way to protect your margins.",
            author: "Zerodraft",
            logo: "assets/client/Logo-Zerodraft.png"
        },
        {
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: "assets/bento_img_2.jpg",
            quote: "TaskTag is the first tool our crews actually want to use. The mobile-first approach means daily reports are done before the foremen even leave the site — no more chasing paperwork at the end of the day.",
            author: "Swenson",
            logo: "assets/client/Swenson-Logo.png"
        }
    ];

    let currentTestimonial = 0;
    const nextBtn = document.querySelector('.testimonial-nav__btn--next');
    const prevBtn = document.querySelector('.testimonial-nav__btn--prev');
    const pagination = document.querySelector('.testimonial-pagination');
    const testimonialQuoteText = document.querySelector('.testimonial-quote-text');
    const testimonialAuthorName = document.querySelector('.testimonial-author__name');
    const testimonialAuthorLogo = document.querySelector('.testimonial-author__logo img');

    if (testimonialVideo && playBtn) {
        const togglePlay = () => {
            if (testimonialVideo.paused) {
                testimonialVideo.play();
                videoContainer.classList.add('is-playing');
            } else {
                testimonialVideo.pause();
                videoContainer.classList.remove('is-playing');
            }
        };

        playBtn.addEventListener('click', togglePlay);
        testimonialVideo.addEventListener('click', togglePlay);

        testimonialVideo.addEventListener('ended', () => {
            videoContainer.classList.remove('is-playing');
        });
    }

    if (nextBtn && prevBtn && testimonialVideo) {
        const updateTestimonial = (index) => {
            // Add fade and skeleton classes
            const testimonialQuoteMark = document.querySelector('.testimonial-quote-mark');
            const elementsToFade = [
                testimonialVideo, 
                testimonialQuoteText, 
                testimonialQuoteMark,
                testimonialAuthorName, 
                testimonialAuthorLogo
            ];

            const skeletonElements = [
                videoContainer, 
                testimonialQuoteText, 
                testimonialQuoteMark,
                testimonialAuthorName, 
                testimonialAuthorLogo.parentElement
            ];
            
            elementsToFade.forEach(el => el && el.classList.add('testimonial-fading'));
            skeletonElements.forEach(el => el && el.classList.add('is-loading-skeleton'));

            setTimeout(() => {
                const data = testimonialData[index];

                // Update content
                testimonialVideo.src = data.video;
                testimonialVideo.poster = data.poster;
                testimonialVideo.pause();
                videoContainer.classList.remove('is-playing');

                if (testimonialQuoteText) testimonialQuoteText.textContent = data.quote;
                if (testimonialAuthorName) testimonialAuthorName.textContent = data.author;
                if (testimonialAuthorLogo) {
                    testimonialAuthorLogo.src = data.logo;
                    testimonialAuthorLogo.alt = `${data.author} Logo`;
                }
                if (pagination) {
                    pagination.innerHTML = `0${index + 1} / <span class="testimonial-pagination__total">0${testimonialData.length}</span>`;
                }

                // Remove fade and skeleton classes
                elementsToFade.forEach(el => el && el.classList.remove('testimonial-fading'));
                skeletonElements.forEach(el => el && el.classList.remove('is-loading-skeleton'));
            }, 600);
        };

        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonialData.length;
            updateTestimonial(currentTestimonial);
        });

        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonialData.length) % testimonialData.length;
            updateTestimonial(currentTestimonial);
        });
    }

    // Recalculate slider on resize
    const syncSlider = () => {
        const active = document.querySelector('.pricing-toggle__option.active');
        const slider = document.querySelector('.pricing-toggle__slider');
        if (active && slider) {
            slider.style.width = `${active.offsetWidth}px`;
            slider.style.transform = `translateX(${active.offsetLeft - 4}px)`;
        }
    };

    window.addEventListener('resize', syncCardHeights);
    window.addEventListener('resize', syncSlider);
    syncCardHeights();

    // Testimonial nav visibility (mobile only)
    const testimonialVideoEl = document.querySelector('.testimonial-video');
    const testimonialNavEl = document.querySelector('.testimonial-nav');
    const testimonialQuoteCard = document.querySelector('.testimonial-quote-card');

    if (testimonialVideoEl && testimonialNavEl) {
        let videoVisible = false;
        let quoteVisible = false;

        const updateNavVisibility = () => {
            testimonialNavEl.classList.toggle('testimonial-nav--active', videoVisible || quoteVisible);
        };

        // Show when video is ~fully visible
        new IntersectionObserver(([entry]) => {
            videoVisible = entry.isIntersecting;
            updateNavVisibility();
        }, { threshold: 0.95 }).observe(testimonialVideoEl);

        // Also show when quote card is visible — nav settles below it naturally
        if (testimonialQuoteCard) {
            new IntersectionObserver(([entry]) => {
                quoteVisible = entry.isIntersecting;
                updateNavVisibility();
            }, { threshold: 0.2 }).observe(testimonialQuoteCard);
        }
    }

    // Sticky shadow for compare nav
    const compareNavSentinel = document.querySelector('.compare-mobile-nav-sentinel');
    const compareNav = document.querySelector('.compare-mobile-nav');
    if (compareNavSentinel && compareNav) {
        const stickyObserver = new IntersectionObserver(([entry]) => {
            compareNav.classList.toggle('compare-mobile-nav--stuck', !entry.isIntersecting);
        }, { rootMargin: '-88px 0px 0px 0px', threshold: 0 });
        stickyObserver.observe(compareNavSentinel);
    }

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

                // Update table class
                compareTable.classList.remove('show-free', 'show-team', 'show-enterprise');
                compareTable.classList.add(`show-${plan}`);

                // Update plan header
                planHeaderItems.forEach(item => item.classList.remove('active'));
                document.querySelector(`.compare-mobile-plan-header__item[data-plan="${plan}"]`)?.classList.add('active');
            });
        });
    }
});
