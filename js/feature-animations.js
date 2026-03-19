/**
 * Feature Animations: Phase-based state machines for Feature1-5 mockups.
 * Generates HTML and manages animation phases for each feature.
 */

/* ============================================================
   Shared helpers
   ============================================================ */
function icon(name, size, extra) {
    size = size || 18;
    extra = extra || '';
    return '<i data-lucide="' + name + '" style="width:' + size + 'px;height:' + size + 'px;' + extra + '"></i>';
}

function refreshIcons(container) {
    if (typeof lucide !== 'undefined' && container) {
        lucide.createIcons({ nodes: [container] });
    }
}

/* ============================================================
   Feature 1: New Project Form
   ============================================================ */
function createFeature1(container, isMobile) {
    var drywallImages = [
        'assets/images/features/drywall-patch-1.png',
        'assets/images/features/drywall-patch-2.png',
        'assets/images/features/drywall-patch-3.png',
        'assets/images/features/drywall-patch-4.png'
    ];
    var displayImages = drywallImages.slice(0, 3);

    var galleryHTML = '';
    displayImages.forEach(function (src, idx) {
        galleryHTML +=
            '<div class="f1__gallery-item">' +
                '<div class="f1__gallery-loader"></div>' +
                '<img src="' + src + '" alt="Drywall Patch ' + (idx + 1) + '" class="f1__gallery-img" />' +
                '<button class="f1__remove-btn">' + icon('x', 10, 'stroke-width:3;') + '</button>' +
            '</div>';
    });

    container.innerHTML =
        '<div class="f1__wrapper">' +
            '<div class="f1__action-btn" data-f1="btn">New Project</div>' +
            '<div class="f1__ui" data-f1="ui">' +
                '<div class="f1__header">' +
                    '<h4 class="f1__title" data-f1="title">Raintree Hollow</h4>' +
                    '<div class="f1__address" data-f1="address">' +
                        '<div class="f1__icon">' + icon('map-pin', 18, 'stroke-width:2;') + '</div>' +
                        '<div class="f1__skeleton-line" style="flex:1;height:14px;margin-top:2px;"></div>' +
                    '</div>' +
                    '<div class="f1__desc-wrapper" data-f1="desc">' +
                        '<div class="f1__skeleton-line" style="width:calc(100% - 32px);height:14px;"></div>' +
                        '<div class="f1__skeleton-line" style="width:60%;height:14px;margin-top:8px;"></div>' +
                    '</div>' +
                    '<div class="f1__gallery" data-f1="gallery">' + galleryHTML + '</div>' +
                '</div>' +
                '<div class="f1__footer">' +
                    '<div class="f1__toolbar">' +
                        '<div class="f1__toolbar-content">' +
                            '<div class="f1__toolbar-icons" data-f1="icons">' +
                                '<div class="f1__icon">' + icon('paperclip', 24, 'stroke-width:2;') + '</div>' +
                                '<div class="f1__icon">' + icon('file-text', 24, 'stroke-width:2;') + '</div>' +
                                '<div class="f1__icon">' + icon('camera', 24, 'stroke-width:2;') + '</div>' +
                                '<div class="f1__icon">' + icon('map-pin', 24, 'stroke-width:2;') + '</div>' +
                            '</div>' +
                            '<div class="f1__toolbar-avatar" data-f1="avatarWrap">' +
                                '<div class="f1__user-icon" data-f1="userIcon">' + icon('user', 20, 'color:#9CA3AF;') + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="f1__action-row">' +
                        '<div class="f1__project-selector" data-f1="project">' +
                            '<div class="f1__project-icon"><div class="f1__icon" style="width:60%;height:60%;">' + icon('building', 18, 'stroke-width:2;') + '</div></div>' +
                            '<span>TaskTag Team</span>' +
                            '<div class="f1__icon" style="width:20px;height:20px;">' + icon('chevron-down', 18, 'stroke-width:2;') + '</div>' +
                        '</div>' +
                        '<button class="f1__send-btn" data-f1="send">' +
                            '<div class="f1__icon" style="color:white;" data-f1="sendIcon">' + icon('arrow-up', 24, 'stroke-width:2;') + '</div>' +
                        '</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    refreshIcons(container);

    var btn = container.querySelector('[data-f1="btn"]');
    var ui = container.querySelector('[data-f1="ui"]');
    var title = container.querySelector('[data-f1="title"]');
    var address = container.querySelector('[data-f1="address"]');
    var desc = container.querySelector('[data-f1="desc"]');
    var gallery = container.querySelector('[data-f1="gallery"]');
    var galleryItems = gallery.querySelectorAll('.f1__gallery-item');
    var iconsWrap = container.querySelector('[data-f1="icons"]');
    var avatarWrap = container.querySelector('[data-f1="avatarWrap"]');
    var project = container.querySelector('[data-f1="project"]');
    var sendBtn = container.querySelector('[data-f1="send"]');
    var sendIcon = container.querySelector('[data-f1="sendIcon"]');

    var phase = 8;
    var timer = null;

    function setPhase(p) {
        phase = p;
        render();
        schedule();
    }

    function render() {
        var isLoading = phase === 7;

        // Button vs UI
        if (phase === 0) {
            btn.style.display = '';
            ui.style.display = 'none';
            ui.classList.remove('f1__ui--visible');
            
            // Soft fade-in for the button
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(10px) scale(1)';
            requestAnimationFrame(function() {
                btn.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0) scale(1)';
            });

            // Pressing animation
            btn.classList.remove('f1__action-btn--pressing');
            setTimeout(function () { 
                btn.style.transform = ''; // let CSS class handle transform
                btn.style.transition = 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'; // snappier press
                btn.classList.add('f1__action-btn--pressing'); 
            }, 900);
        } else if (phase === 9) {
            btn.style.display = 'none';
            ui.style.display = '';
            ui.classList.remove('f1__ui--visible');
        } else {
            btn.style.display = 'none';
            ui.style.display = '';
            if (phase !== 8) {
                // Animate in
                setTimeout(function () { ui.classList.add('f1__ui--visible'); }, 50);
            } else {
                ui.classList.add('f1__ui--visible');
            }
        }

        // Progressive reveals
        title.classList.toggle('f1__title--visible', phase >= 1);
        title.classList.toggle('f1__title--loading', isLoading);
        address.classList.toggle('f1__address--visible', phase >= 2);
        desc.classList.toggle('f1__desc-wrapper--visible', phase >= 3);
        gallery.classList.toggle('f1__gallery--visible', phase >= 4);

        galleryItems.forEach(function (item, i) {
            var delay = i * 150;
            if (phase >= 4) {
                setTimeout(function () { item.classList.add('f1__gallery-item--visible'); }, delay);
            } else {
                item.classList.remove('f1__gallery-item--visible');
            }
        });

        // Loading states
        iconsWrap.classList.toggle('f1__text-loading', isLoading);
        avatarWrap.classList.toggle('f1__avatar-loading', isLoading);
        project.querySelector('span').classList.toggle('f1__text-loading', isLoading);

        // Avatar: show real avatar at phase >= 5
        if (phase >= 5 || phase === 8) {
            if (!avatarWrap.querySelector('.f1__avatar-img')) {
                avatarWrap.innerHTML =
                    '<img src="assets/avatar_foreman.png" alt="User" class="f1__avatar-img" />' +
                    '<span class="f1__avatar-badge">3</span>';
            }
        } else {
            if (!avatarWrap.querySelector('.f1__user-icon')) {
                avatarWrap.innerHTML =
                    '<div class="f1__user-icon">' + icon('user', 20, 'color:#9CA3AF;') + '</div>';
                refreshIcons(avatarWrap);
            }
        }

        // Send button icon
        if (isLoading) {
            sendIcon.innerHTML = '<div class="f1__spinner">' + icon('loader-2', 24, 'stroke-width:2;') + '</div>';
            sendBtn.style.transform = 'scale(0.92)';
        } else {
            sendIcon.innerHTML = icon('arrow-up', 24, 'stroke-width:2;');
            sendBtn.style.transform = '';
        }
        refreshIcons(sendIcon);

        // Full frame static
        if (phase === 8) {
            title.classList.add('f1__title--visible');
            address.classList.add('f1__address--visible');
            desc.classList.add('f1__desc-wrapper--visible');
            gallery.classList.add('f1__gallery--visible');
            galleryItems.forEach(function (item) { item.classList.add('f1__gallery-item--visible'); });
            // Reset animations for static display
            gallery.querySelectorAll('.f1__gallery-img').forEach(function (img) {
                img.style.opacity = '1';
                img.style.animation = 'none';
            });
            gallery.querySelectorAll('.f1__remove-btn').forEach(function (b) {
                b.style.opacity = '1';
                b.style.animation = 'none';
            });
            gallery.querySelectorAll('.f1__gallery-loader').forEach(function (l) {
                l.style.display = 'none';
            });
        } else if (phase >= 4) {
            gallery.querySelectorAll('.f1__gallery-img').forEach(function (img) {
                img.style.opacity = '';
                img.style.animation = '';
            });
            gallery.querySelectorAll('.f1__remove-btn').forEach(function (b) {
                b.style.opacity = '';
                b.style.animation = '';
            });
            gallery.querySelectorAll('.f1__gallery-loader').forEach(function (l) {
                l.style.display = '';
            });
        }
    }

    function schedule() {
        clearTimeout(timer);
        var delays = { 0: 1400, 1: 400, 2: 500, 3: 600, 4: 1500, 5: 800, 6: 800, 7: 3000 };

        if (phase === 9) {
            timer = setTimeout(function () { setPhase(0); }, 500); // Wait for UI to fade out
        } else if (delays[phase] !== undefined) {
            timer = setTimeout(function () {
                var next = phase + 1;
                if (phase === 7) next = 9;
                setPhase(next);
            }, delays[phase]);
        }
    }

    // Initialize
    setPhase(8);

    return {
        activate: function () { clearTimeout(timer); setPhase(0); },
        deactivate: function () { clearTimeout(timer); setPhase(8); }
    };
}

/* ============================================================
   Feature 2: Search + Task Assignment
   ============================================================ */
function createFeature2(container, isMobile) {
    container.innerHTML =
        '<div class="f2__wrapper">' +
            '<div class="f2__ui" data-f2="ui">' +
                // Search bar
                '<div class="f2__search-bar">' +
                    '<div class="f2__search-input">' +
                        '<div class="f2__search-hash">#</div>' +
                        '<div data-f2="searchText" style="display:flex;align-items:center;color:var(--text-secondary);font-size:15px;flex:1;">Drywall patch</div>' +
                    '</div>' +
                    '<div class="f2__cancel-text">Cancel</div>' +
                '</div>' +
                // List
                '<div class="f2__list-container" data-f2="list">' +
                    '<div class="f2__item-list">' +
                        '<div class="f2__list-item">' +
                            '<div class="f2__item-left">' +
                                '<div class="f2__tt-icon">' + icon('building-2', 14, 'color:#fff;') + '</div>' +
                                '<span class="f2__item-title">TaskTag Project</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="f2__list-item" data-f2="drywallItem">' +
                            '<div class="f2__item-left">' +
                                '<div class="f2__hash-icon">#</div>' +
                                '<span class="f2__item-title" data-f2="drywallTitle">Drywall patch</span>' +
                            '</div>' +
                            '<div class="f2__item-right">' +
                                '<div class="f2__avatar-stack">' +
                                    '<img src="assets/avatar_foreman.png" class="f2__avatar" alt="James" />' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="f2__list-item">' +
                            '<div class="f2__item-left">' +
                                '<div class="f2__hash-icon">#</div>' +
                                '<span class="f2__item-title">Set Water Meter</span>' +
                            '</div>' +
                            '<div class="f2__item-right">' +
                                '<div class="f2__avatar-stack">' +
                                    '<img src="assets/avatar_foreman.png" class="f2__avatar" alt="User" />' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                // FAB
                '<div class="f2__fab-container" data-f2="fab">' +
                    '<div class="f2__fab">' + icon('plus', 18) + ' New Task</div>' +
                '</div>' +
                // Chat Members Screen
                '<div class="f2__cm-screen" data-f2="cmScreen">' +
                    '<div class="f2__cm-header">' +
                        '<div class="f2__cm-search">' + icon('search', 16) + '<span>Search</span></div>' +
                        '<div class="f2__cm-cancel">Cancel</div>' +
                    '</div>' +
                    '<div class="f2__cm-content">' +
                        '<div data-f2="cmSelected" class="f2__cm-selected-row">' +
                            '<div class="f2__cm-title-row" style="background:transparent;padding:0 0 12px 0;">Selected Member (1)</div>' +
                            '<div>' +
                                '<div class="f2__cm-selected-user">' +
                                    '<div class="f2__cm-selected-avatar">' +
                                        '<div class="f2__cm-initials" style="background-color:var(--dark-magenta);color:var(--white);">OG</div>' +
                                        '<div class="f2__cm-remove-badge">' + icon('x', 10, 'stroke-width:4;') + '</div>' +
                                    '</div>' +
                                    '<span class="f2__cm-selected-text">Oscar Gilberto</span>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="f2__cm-title-row">Suggested</div>' +
                        '<div class="f2__cm-list">' +
                            '<div class="f2__cm-item">' +
                                '<img src="assets/avatar_foreman.png" class="f2__member-avatar" alt="James" />' +
                                '<div class="f2__cm-info">' +
                                    '<span class="f2__cm-email">James Smith</span>' +
                                    '<div class="f2__cm-role-row"><span class="f2__cm-role">Owner</span></div>' +
                                '</div>' +
                                '<div class="f2__check-circle f2__check-circle--selected">' + icon('check', 12, 'stroke-width:4;color:var(--white);') + '</div>' +
                            '</div>' +
                            '<div class="f2__cm-item">' +
                                '<div class="f2__cm-initials" style="background-color:var(--dark-magenta);color:var(--white);">OG</div>' +
                                '<div class="f2__cm-info"><span class="f2__cm-email">Oscar Gilberto</span></div>' +
                                '<div class="f2__check-circle" data-f2="oscarCheck"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="f2__cm-footer">' +
                        '<div class="f2__cm-button" data-f2="confirmBtn">Confirm</div>' +
                    '</div>' +
                '</div>' +
                // Chat Overlay
                '<div class="f2__chat-overlay" data-f2="chatOverlay">' +
                    '<div class="f2__chat-scroll-area">' +
                        '<div class="f2__gerald-group" data-f2="chatMsg">' +
                            '<div class="f2__message-row">' +
                                '<img src="assets/avatar_foreman.png" class="f2__msg-avatar" alt="James" />' +
                                '<div class="f2__msg-content">' +
                                    '<div class="f2__msg-header">' +
                                        '<span class="f2__msg-sender">James Smith</span>' +
                                        '<span class="f2__msg-time">12:21 PM</span>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="f2__indented-row">' +
                                '<div class="f2__ta-bubble">' +
                                    '<div class="f2__ta-header" style="background-color:var(--light-purple);">' +
                                        '<div class="f2__ta-header-left" style="color:var(--dark-magenta);">' +
                                            icon('clipboard-list', 16) + ' Task Assigned' +
                                        '</div>' +
                                        '<div class="f2__ta-header-date" style="color:var(--dark-magenta);">Feb 21, 2026</div>' +
                                    '</div>' +
                                    '<div class="f2__ta-body">' +
                                        '<div class="f2__ta-pills">' +
                                            '<div class="f2__tag-pill f2__tag-project">' + icon('folder', 14) + ' <span>Raintree Hollow</span></div>' +
                                            '<div class="f2__tag-pill f2__tag-task">' + icon('hash', 14) + ' <span>Drywall patch</span></div>' +
                                        '</div>' +
                                        '<div class="f2__ta-footer">' +
                                            '<div class="f2__ta-due">Due: Feb 22</div>' +
                                            '<div class="f2__ta-avatar-initials" style="background-color:var(--dark-magenta);color:var(--white);margin-left:0;">OG</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="f2__input-area">' +
                        '<div style="color:var(--text-secondary);">' + icon('plus', 18) + '</div>' +
                        '<div class="f2__input-text">Type message here...</div>' +
                        '<div class="f2__input-actions">' +
                            '<div>' + icon('smile', 18) + '</div>' +
                            '<div>' + icon('mic', 18) + '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    refreshIcons(container);

    var ui = container.querySelector('[data-f2="ui"]');
    var drywallItem = container.querySelector('[data-f2="drywallItem"]');
    var drywallTitle = container.querySelector('[data-f2="drywallTitle"]');
    var cmScreen = container.querySelector('[data-f2="cmScreen"]');
    var cmSelected = container.querySelector('[data-f2="cmSelected"]');
    var oscarCheck = container.querySelector('[data-f2="oscarCheck"]');
    var confirmBtn = container.querySelector('[data-f2="confirmBtn"]');
    var chatOverlay = container.querySelector('[data-f2="chatOverlay"]');
    var fab = container.querySelector('[data-f2="fab"]');

    var phase = 3;
    var timer = null;

    function setPhase(p) {
        phase = p;
        render();
        schedule();
    }

    function render() {
        ui.classList.add('f2__ui--visible');

        // Highlight drywall item
        drywallTitle.classList.toggle('f2__highlight-text', phase >= 2 && phase <= 4);

        // Tap effect on drywall
        drywallItem.classList.toggle('f2__list-item--tapped', phase === 4);

        // Member screen
        cmScreen.classList.toggle('f2__cm-screen--visible', phase >= 5);

        // Hide FAB on subsequent screens
        if (fab) {
            fab.style.opacity = (phase >= 5) ? '0' : '1';
            fab.style.pointerEvents = (phase >= 5) ? 'none' : 'auto';
            fab.style.transition = 'opacity 0.3s ease';
        }

        // Oscar selected
        if (phase >= 6) {
            cmSelected.classList.add('f2__cm-selected-row--visible');
            oscarCheck.classList.add('f2__check-circle--selected');
            oscarCheck.innerHTML = icon('check', 12, 'stroke-width:4;color:var(--white);');
            confirmBtn.classList.add('f2__cm-button--active');
            refreshIcons(oscarCheck);
        } else {
            cmSelected.classList.remove('f2__cm-selected-row--visible');
            oscarCheck.classList.remove('f2__check-circle--selected');
            oscarCheck.innerHTML = '';
            confirmBtn.classList.remove('f2__cm-button--active');
        }

        // Confirm tap
        confirmBtn.classList.toggle('f2__cm-button--tapped', phase === 7);

        // Chat overlay
        chatOverlay.classList.toggle('f2__chat-overlay--visible', phase >= 8);
    }

    function schedule() {
        clearTimeout(timer);
        var delays = { 3: 2000, 4: 500, 5: 2000, 6: 2000, 7: 500, 8: 2500 };

        if (phase === 9) {
            timer = setTimeout(function () { 
                chatOverlay.classList.add('f2__resetting');
                cmScreen.classList.add('f2__resetting');
                
                setTimeout(function() {
                    chatOverlay.style.transition = 'none';
                    cmScreen.style.transition = 'none';
                    
                    setPhase(3);
                    
                    chatOverlay.classList.remove('f2__resetting');
                    cmScreen.classList.remove('f2__resetting');
                    
                    // Force reflow to prevent animations jumping
                    void chatOverlay.offsetHeight;
                    
                    chatOverlay.style.transition = '';
                    cmScreen.style.transition = '';
                }, 300); // 300ms fade duration
            }, 1700); // 1.7s wait + 0.3s fade = 2s total reset wait
        } else if (delays[phase] !== undefined) {
            timer = setTimeout(function () {
                setPhase(phase + 1);
            }, delays[phase]);
        }
    }

    setPhase(3);

    return {
        activate: function () { clearTimeout(timer); setPhase(3); },
        deactivate: function () { clearTimeout(timer); setPhase(3); }
    };
}

/* ============================================================
   Feature 3: Chat + Compose
   ============================================================ */
function createFeature3(container, isMobile) {
    var fullText = 'Drywall patch done. Photos and notes attached.';

    container.innerHTML =
        '<div class="f3__wrapper">' +
            '<div class="f3__ui" data-f3="ui">' +
                // Chat window (messages appear after send)
                '<div class="f3__chat-window" data-f3="chatWindow"></div>' +
                // Input area (compose mode)
                '<div class="f3__input-area" data-f3="inputArea">' +
                    '<div class="f3__tags-grid">' +
                        '<div class="f3__tag-pill f3__project-color">' + icon('folder', 14) + ' <span>Raintree Hollow</span></div>' +
                        '<div class="f3__tag-pill f3__task-color">' + icon('hash', 14) + ' <span>Drywall patch</span></div>' +
                    '</div>' +
                    '<div class="f3__attachment-list">' +
                        '<div class="f3__attachment-grid">' +
                            '<div class="f3__thumbnail-wrapper">' +
                                '<img src="assets/drywall.png" class="f3__thumbnail-img" alt="Attachment" />' +
                                '<div class="f3__remove-thumb">' + icon('x', 12, 'stroke-width:3;') + '</div>' +
                            '</div>' +
                            '<div class="f3__file-attachment">' +
                                '<div class="f3__file-icon"><img src="assets/pdf_icon.png" alt="PDF" /></div>' +
                                '<span class="f3__file-name">drywall_notes.pdf</span>' +
                                '<div class="f3__remove-thumb">' + icon('x', 12, 'stroke-width:3;') + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="f3__input-text" data-f3="inputText">Type message here...</div>' +
                    '<div class="f3__actions-row">' +
                        '<div class="f3__left-actions">' +
                            '<div class="f3__action-icon">' + icon('plus', 18) + '</div>' +
                            '<div class="f3__transparent-icon">' + icon('hash', 18) + '</div>' +
                            '<div class="f3__transparent-icon">' + icon('camera', 18) + '</div>' +
                            '<div class="f3__transparent-icon">' + icon('image', 18) + '</div>' +
                            '<div class="f3__transparent-icon">' + icon('mic', 18) + '</div>' +
                        '</div>' +
                        '<div class="f3__send-btn" data-f3="sendBtn">' + icon('send', 18) + '</div>' +
                    '</div>' +
                '</div>' +
                // Chat input (after send mode)
                '<div class="f3__chat-input-row" data-f3="chatInput" style="display:none;">' +
                    '<div style="color:var(--text-secondary);">' + icon('plus', 18) + '</div>' +
                    '<div class="f3__placeholder-text">Type message here...</div>' +
                    '<div style="display:flex;gap:16px;color:var(--text-secondary);">' +
                        '<div>' + icon('smile', 18) + '</div>' +
                        '<div>' + icon('mic', 18) + '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    refreshIcons(container);

    var ui = container.querySelector('[data-f3="ui"]');
    var chatWindow = container.querySelector('[data-f3="chatWindow"]');
    var inputArea = container.querySelector('[data-f3="inputArea"]');
    var inputText = container.querySelector('[data-f3="inputText"]');
    var sendBtnEl = container.querySelector('[data-f3="sendBtn"]');
    var chatInput = container.querySelector('[data-f3="chatInput"]');

    var phase = 8;
    var timer = null;
    var typingInterval = null;
    var timeoutIds = [];

    var messages = [
        { sender: 'Oscar', senderColor: 'var(--dark-magenta)', avatar: 'assets/avatar_foreman.png', time: '12:20 PM', text: fullText, hasAttachments: true },
        { sender: 'Melissa', senderColor: '', avatar: 'https://i.pravatar.cc/150?img=5', time: '12:21 PM', text: 'How many coats of compound?' },
        { sender: 'Oscar', senderColor: 'var(--dark-magenta)', avatar: 'assets/avatar_foreman.png', time: '12:24 PM', text: "It's in the repair notes on the task." },
        { sender: 'Melissa', senderColor: '', avatar: 'https://i.pravatar.cc/150?img=5', time: '12:30 PM', text: 'Found it, thanks.' }
    ];

    function createMessageHTML(msg) {
        var html = '<div class="f3__message-row">' +
            '<img src="' + msg.avatar + '" class="f3__msg-avatar" alt="' + msg.sender + '" />' +
            '<div class="f3__msg-content">' +
                '<div class="f3__msg-header">' +
                    '<span class="f3__msg-sender"' + (msg.senderColor ? ' style="color:' + msg.senderColor + '"' : '') + '>' + msg.sender + '</span>' +
                    '<span class="f3__msg-time">' + msg.time + '</span>' +
                '</div>' +
                '<div class="f3__msg-text">' + msg.text + '</div>';

        if (msg.hasAttachments) {
            html += '<div class="f3__attachment-list" style="margin-top:8px;">' +
                '<div class="f3__attachment-grid">' +
                    '<div class="f3__thumbnail-wrapper"><img src="assets/drywall.png" class="f3__thumbnail-img" alt="Attachment" /></div>' +
                    '<div class="f3__file-attachment"><div class="f3__file-icon"><img src="assets/pdf_icon.png" alt="PDF" /></div><span class="f3__file-name">Drywall_Notes.pdf</span></div>' +
                '</div>' +
                '<div class="f3__tags-grid" style="margin-top:4px;">' +
                    '<div class="f3__tag-pill f3__project-color">' + icon('folder', 14) + ' <span>Raintree Hollow</span></div>' +
                    '<div class="f3__tag-pill f3__task-color">' + icon('hash', 14) + ' <span>Drywall patch</span></div>' +
                '</div>' +
            '</div>';
        }

        html += '</div></div>';
        return html;
    }

    function clearTimers() {
        clearTimeout(timer);
        clearInterval(typingInterval);
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
    }

    function setPhase(p) {
        phase = p;
        render();
    }

    function render() {
        ui.classList.add('f3__ui--visible');

        if (phase < 11) {
            // Compose mode
            inputArea.style.display = '';
            chatInput.style.display = 'none';
            chatWindow.innerHTML = '';

            if (phase === 9) {
                inputText.classList.add('f3__input-text--typing');
            } else if (phase === 10) {
                inputText.classList.remove('f3__input-text--typing');
                // keep the typed text during send button press
            } else {
                inputText.classList.remove('f3__input-text--typing');
                inputText.textContent = 'Type message here...';
            }

            if (phase === 10) {
                sendBtnEl.classList.add('f3__send-btn--pressed');
            } else {
                sendBtnEl.classList.remove('f3__send-btn--pressed');
            }
        } else {
            // Chat mode
            inputArea.style.display = 'none';
            chatInput.style.display = '';
        }
    }

    function runSequence() {
        clearTimers();
        setPhase(8);

        timeoutIds.push(setTimeout(function () {
            setPhase(9);
            // Type text
            var i = 0;
            var currentText = '';
            typingInterval = setInterval(function () {
                if (i < fullText.length) {
                    currentText += fullText[i];
                    inputText.textContent = currentText;
                    i++;
                } else {
                    clearInterval(typingInterval);
                    // Send sequence
                    timeoutIds.push(setTimeout(function () { setPhase(10); }, 500));
                    timeoutIds.push(setTimeout(function () {
                        setPhase(11);
                        // Add messages
                        showMessage(0);
                    }, 800));
                    timeoutIds.push(setTimeout(function () { showMessage(1); }, 2800));
                    timeoutIds.push(setTimeout(function () { showMessage(2); }, 4800));
                    timeoutIds.push(setTimeout(function () { showMessage(3); }, 6800));
                    timeoutIds.push(setTimeout(function () { runSequence(); }, 10000));
                }
            }, 30);
        }, 1200));
    }

    function showMessage(idx) {
        var html = createMessageHTML(messages[idx]);
        var div = document.createElement('div');
        div.innerHTML = html;
        var msgEl = div.firstChild;
        chatWindow.appendChild(msgEl);
        refreshIcons(chatWindow);
        // Animate in
        setTimeout(function () { msgEl.classList.add('f3__message-row--visible'); }, 50);
    }

    setPhase(8);

    return {
        activate: function () { runSequence(); },
        deactivate: function () { clearTimers(); setPhase(8); }
    };
}

/* ============================================================
   Feature 4: Task Completion
   ============================================================ */
function createFeature4(container, isMobile) {
    container.innerHTML =
        '<div class="f4__wrapper">' +
            '<div class="f4__ui" data-f4="ui">' +
                '<div class="f4__chat-window">' +
                    // Gerald message text
                    '<div class="f4__message-row f4__chat-anim" data-f4="msg1">' +
                        '<img src="assets/avatar_foreman.png" class="f4__msg-avatar" alt="Gerald" />' +
                        '<div class="f4__msg-content">' +
                            '<div class="f4__msg-header">' +
                                '<span class="f4__msg-sender" style="color:var(--dark-magenta);">Gerald</span>' +
                                '<span class="f4__msg-time">12:23 PM</span>' +
                            '</div>' +
                            '<div class="f4__msg-text">Drywall patch complete. Invoice attached.</div>' +
                        '</div>' +
                    '</div>' +
                    // Completed card
                    '<div class="f4__indented-row f4__chat-anim" data-f4="card">' +
                        '<div class="f4__completed-card">' +
                            '<div class="f4__card-header">' +
                                '<div class="f4__card-header-left">' + icon('check-circle-2', 20, 'fill:var(--secondary-green);color:#fff;') + ' TASK COMPLETED</div>' +
                                '<div class="f4__card-header-date">Feb 22, 2026</div>' +
                            '</div>' +
                            '<div class="f4__card-body">' +
                                '<div class="f4__card-pills">' +
                                    '<div class="f4__tag-pill f4__project-color">' + icon('folder', 14) + ' <span>Raintree Hollow</span></div>' +
                                    '<div class="f4__tag-pill f4__task-color">' + icon('hash', 14) + ' <span>Drywall patch</span></div>' +
                                '</div>' +
                                '<div class="f4__card-footer">' +
                                '<div class="f4__card-due">Due: Feb 22, 2026</div>' +
                                    '<img src="assets/avatar_foreman.png" class="f4__avatar" style="margin-left:auto;border:none;" alt="Avatar" />' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    // Attachments
                    '<div class="f4__indented-row f4__chat-anim" data-f4="attachments">' +
                        '<div class="f4__attachment-grid">' +
                            '<div style="width:100%;height:80px;">' +
                                '<img src="assets/drywall.png" class="f4__drywall-image" alt="Drywall" />' +
                            '</div>' +
                            '<div class="f4__file-attachment">' +
                                '<div class="f4__file-icon"><img src="assets/pdf_icon.png" alt="PDF" /></div>' +
                                '<span class="f4__file-name">Drywall_Invoice.pdf</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    // Melissa unified typing + reply block
                    '<div class="f4__message-row f4__chat-anim" data-f4="msg2">' +
                        '<img src="https://i.pravatar.cc/150?img=5" class="f4__msg-avatar" alt="Melissa" />' +
                        '<div class="f4__msg-content">' +
                            '<div class="f4__msg-header">' +
                                '<span class="f4__msg-sender">Melissa</span>' +
                                '<span class="f4__msg-time">12:30 PM</span>' +
                            '</div>' +
                            '<div style="display:grid; grid-template-columns:100%; align-items:start;">' +
                                '<div class="f4__typing-bubbles" data-f4="typingIndicator" style="grid-area:1/1; opacity:1; transition:opacity 0.3s ease; margin-top:2px;">' +
                                    '<span class="f4__typing-dot"></span>' +
                                    '<span class="f4__typing-dot"></span>' +
                                    '<span class="f4__typing-dot"></span>' +
                                '</div>' +
                                '<div class="f4__msg-text" data-f4="msg2Text" style="grid-area:1/1; opacity:0; transition:opacity 0.3s ease; pointer-events:none; padding-top:2px;">Approved. Sending to accounting.</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                // Input
                '<div class="f4__input-area">' +
                    '<div style="color:var(--text-secondary); width:28px; display:flex; justify-content:center;">' + icon('plus', 18) + '</div>' +
                    '<div class="f4__input-text">Type message here...</div>' +
                    '<div class="f4__input-actions" style="display:flex; gap:12px; color:var(--text-secondary);">' +
                        icon('smile', 20) +
                        icon('mic', 20) +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';

    refreshIcons(container);

    var ui = container.querySelector('[data-f4="ui"]');
    var msg1 = container.querySelector('[data-f4="msg1"]');
    var card = container.querySelector('[data-f4="card"]');
    var completedCard = card.querySelector('.f4__completed-card');
    var attachments = container.querySelector('[data-f4="attachments"]');
    var typingIndicator = container.querySelector('[data-f4="typingIndicator"]');
    var msg2 = container.querySelector('[data-f4="msg2"]');
    var msg2Text = container.querySelector('[data-f4="msg2Text"]');

    var phase = 1;
    var timeoutIds = [];

    function clearTimers() {
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
    }

    function show(el) {
        el.style.maxHeight = el.scrollHeight + 'px';
        el.style.marginTop = '16px';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }

    function hide(el) {
        el.style.maxHeight = '0';
        el.style.marginTop = '0';
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    }

    function reset() {
        hide(msg1);
        hide(card);
        hide(attachments);
        hide(msg2);
        if(typingIndicator) {
             typingIndicator.style.opacity = '1';
             msg2Text.style.opacity = '0';
        }
    }

    function runSequence() {
        clearTimers();
        ui.classList.add('f4__ui--visible');
        reset();

        // Phase 1: Gerald message
        timeoutIds.push(setTimeout(function () { show(msg1); }, 100));
        // Phase 2: Completed card
        timeoutIds.push(setTimeout(function () { show(card); }, 1200));
        // Phase 3: Attachments
        timeoutIds.push(setTimeout(function () { show(attachments); }, 2200));
        // Phase 3.5: Typing starts at 3200ms
        timeoutIds.push(setTimeout(function () { 
            show(msg2); // Slides in with avatar & typing bubble active
        }, 3200));
        // Phase 4: Melissa finishes typing
        timeoutIds.push(setTimeout(function () { 
            typingIndicator.style.opacity = '0';
            msg2Text.style.opacity = '1';
        }, 5200));
        // Loop
        timeoutIds.push(setTimeout(function () { runSequence(); }, 10000));
    }

    // Show default state
    ui.classList.add('f4__ui--visible');
    show(msg1);

    return {
        activate: function () { runSequence(); },
        deactivate: function () {
            clearTimers();
            reset();
            show(msg1);
        }
    };
}

/* ============================================================
   Feature 5: Activity Feed
   ============================================================ */
function createFeature5(container, isMobile) {
    var feedItems = [
        {
            name: 'Melissa Johnson', avatar: 'https://i.pravatar.cc/150?img=5', time: '08:45 AM',
            badgeClass: 'f5__badge-blue', badgeIcon: icon('plus', 10, 'stroke-width:3;'),
            action: 'Created this task',
            project: 'Raintree Hollow', task: 'Drywall patch'
        },
        {
            name: 'Melissa Johnson', avatar: 'https://i.pravatar.cc/150?img=5', time: '08:45 AM',
            badgeClass: 'f5__badge-blue', badgeIcon: icon('user-plus', 10, 'stroke-width:3;'),
            action: 'Added <span class="f5__mention">@Oscar Gilberto</span> as Task Assignee',
            project: 'Raintree Hollow', task: 'Drywall patch'
        },
        {
            name: 'Melissa Johnson', avatar: 'https://i.pravatar.cc/150?img=5', time: '09:20 AM',
            badgeClass: 'f5__badge-red', badgeIcon: icon('user-minus', 10, 'stroke-width:3;'),
            action: 'Unassigned <span class="f5__mention">@Gerald Oliver</span> from this task',
            project: '1320 Smith Street Road', task: 'Foundation Inspection'
        },
        {
            name: 'Oscar Gilberto', avatar: 'assets/avatar_foreman.png', time: '15:44 PM',
            badgeClass: 'f5__badge-green', badgeIcon: icon('check', 10, 'stroke-width:3;'),
            action: 'Completed this task',
            project: 'Raintree Hollow', task: 'Drywall patch'
        }
    ];

    var html = '<div class="f5__wrapper"><div class="f5__ui" data-f5="ui"><div class="f5__feed-container">';

    feedItems.forEach(function (item, idx) {
        html += '<div class="f5__feed-item" data-f5-item="' + idx + '">' +
            '<div class="f5__avatar-wrap">' +
                '<img src="' + item.avatar + '" class="f5__avatar" alt="' + item.name + '" />' +
                '<div class="f5__avatar-badge ' + item.badgeClass + '">' + item.badgeIcon + '</div>' +
            '</div>' +
            '<div class="f5__item-content">' +
                '<div class="f5__item-header">' +
                    '<div class="f5__user-name">' + item.name + '</div>' +
                    '<div class="f5__time-text">' + item.time + '</div>' +
                '</div>' +
                '<div class="f5__action-text">' + item.action + '</div>' +
                '<div class="f5__pills-row">' +
                    '<div class="f5__tag-pill f5__project-color">' + icon('folder', 12) + ' <span>' + item.project + '</span></div>' +
                    '<div class="f5__tag-pill f5__task-color">' + icon('hash', 12) + ' <span>' + item.task + '</span></div>' +
                '</div>' +
            '</div>' +
        '</div>';
    });

    html += '</div></div></div>';
    container.innerHTML = html;
    refreshIcons(container);

    var ui = container.querySelector('[data-f5="ui"]');
    var items = [];
    feedItems.forEach(function (_, idx) {
        var el = container.querySelector('[data-f5-item="' + idx + '"]');
        el.style.order = -idx; 
        items.push(el);
    });

    var content0 = items[0].querySelector('.f5__item-content');
    if(content0) {
        content0.style.borderBottom = 'none';
        content0.style.paddingBottom = '0';
    }

    var timeoutIds = [];

    function clearTimers() {
        timeoutIds.forEach(clearTimeout);
        timeoutIds = [];
    }

    function showItem(el) {
        el.style.transition = 'none';
        el.style.paddingTop = '16px';
        el.style.maxHeight = 'none';
        var targetH = el.offsetHeight;
        
        el.style.paddingTop = '0';
        el.style.maxHeight = '0';
        el.style.opacity = '0';
        el.style.transform = 'translateX(40px)';
        void el.offsetHeight; // force reflow
        
        // 1. Expand layout smoothly
        el.style.transition = 'max-height 0.6s ease-in-out, padding-top 0.6s ease-in-out';
        el.style.maxHeight = targetH + 'px';
        el.style.paddingTop = '16px';
        
        // 2. Slide horizontally purely after vertical shift is dominated
        timeoutIds.push(setTimeout(function() {
            el.style.transition = 'max-height 0.6s ease-in-out, padding-top 0.6s ease-in-out, opacity 0.5s ease-out, transform 0.5s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
        }, 400));
    }

    function hideAllButFirst() {
        items.forEach(function (el, idx) {
            if (idx === 0) return;
            el.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
            el.style.opacity = '0';
            el.style.transform = 'translateX(40px)';
        });
        
        timeoutIds.push(setTimeout(function() {
            items.forEach(function (el, idx) {
                if (idx === 0) return;
                el.style.transition = 'max-height 0.6s ease-in-out, padding-top 0.6s ease-in-out';
                el.style.maxHeight = '0';
                el.style.paddingTop = '0';
            });
        }, 500));
    }

    function resetOtherItems() {
        items.forEach(function (el, idx) {
            if (idx === 0) return;
            el.style.transition = 'none';
            el.style.maxHeight = '0';
            el.style.paddingTop = '0';
            el.style.opacity = '0';
            el.style.transform = 'translateX(40px)';
        });
    }

    var hasShownFirstItem = false;

    function resetAllItemsInstantly() {
        items.forEach(function (el) {
            el.style.transition = 'none';
            el.style.maxHeight = '0';
            el.style.paddingTop = '0';
            el.style.opacity = '0';
            el.style.transform = 'translateX(40px)';
        });
    }

    function runSequence() {
        clearTimers();
        ui.classList.add('f5__ui--visible');
        
        if (!hasShownFirstItem) {
            resetAllItemsInstantly();
            hasShownFirstItem = true;
            timeoutIds.push(setTimeout(function() { showItem(items[0]); }, 100));
        } else {
            resetOtherItems();
        }

        // Show succeeding items with stagger
        items.forEach(function (el, idx) {
            if (idx === 0) return;
            timeoutIds.push(setTimeout(function () {
                showItem(el);
            }, idx * 1200));
        });

        // Hold, then hide upper items so anchor slides back up
        timeoutIds.push(setTimeout(function () {
            hideAllButFirst();
            timeoutIds.push(setTimeout(function () {
                runSequence();
            }, 1400));
        }, 6500));
    }

    // Default: show first item only statically
    ui.classList.add('f5__ui--visible');
    items[0].style.transition = 'none';
    items[0].style.maxHeight = 'none';
    items[0].style.paddingTop = '16px';
    items[0].style.opacity = '1';
    items[0].style.transform = 'translateX(0)';
    resetOtherItems();

    return {
        activate: function () { runSequence(); },
        deactivate: function () {
            clearTimers();
            hasShownFirstItem = false;
            items[0].style.transition = 'none';
            items[0].style.maxHeight = 'none';
            items[0].style.paddingTop = '16px';
            items[0].style.opacity = '1';
            items[0].style.transform = 'translateX(0)';
            resetOtherItems();
        }
    };
}

/* ============================================================
   Init: Create all feature animators
   ============================================================ */
function initFeatureAnimations() {
    var creators = [createFeature1, createFeature2, createFeature3, createFeature4, createFeature5];
    var desktopAnimators = [];

    // Desktop mockups
    for (var i = 0; i < 5; i++) {
        var el = document.getElementById('feature-mockup-' + i);
        if (el) {
            var isMobile = false;
            desktopAnimators[i] = creators[i](el, isMobile);
        }
    }

    window.featureAnimators = desktopAnimators;

    // Mobile mockups: always active when in view
    var mobileObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var idx = parseInt(entry.target.dataset.mobileFeature);
            var animator = entry.target._animator;
            if (!animator) return;
            if (entry.isIntersecting) {
                animator.activate();
            } else {
                animator.deactivate();
            }
        });
    }, {
        rootMargin: '-60px',
        threshold: 0.1
    });

    for (var j = 0; j < 5; j++) {
        var mobileEl = document.getElementById('feature-mobile-' + j);
        if (mobileEl) {
            var animator = creators[j](mobileEl, true);
            mobileEl.dataset.mobileFeature = j;
            mobileEl._animator = animator;
            mobileObserver.observe(mobileEl);
        }
    }
}
