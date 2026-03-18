/**
 * Templates section: generate template cards, scroll-based width/radius animation
 */
var templateData = {
    col1: [
        {
            title: 'Before & After Photo Log',
            tasks: ['Complete scope of work', 'Mark task as complete', 'Take after photo', 'Take before photo of work area', 'Upload before and after photos']
        },
        {
            title: 'Punch List Tracker',
            tasks: ['Add due dates for punch items', 'Assign punch items to trades', 'Confirm fixes are complete', 'Mark punch list as resolved', 'Upload after photos', 'Upload issue photos', 'Walk space and identify punch items']
        },
        {
            title: 'Submittal Tracker',
            tasks: ['Archive approved submittal', 'Assign reviewer', 'Log submittal item and spec section', 'Notify field team of approval', 'Track approval status', 'Upload submittal file']
        }
    ],
    col2: [
        {
            title: 'Delivery Photo Proof',
            tasks: ['Assign follow-up if needed', 'Inspect items for accuracy and damage', 'Log delivery details', 'Mark delivery as verified', 'Tag missing or damaged items', 'Upload delivery photos']
        },
        {
            title: 'Timesheet Tracker',
            tasks: ['Approve or flag entry', 'Enter hours worked', 'Log crew and trade', 'Note overtime or special conditions', 'Submit for approval', 'Upload photo of timesheet (if applicable)']
        },
        {
            title: 'Daily Field Report',
            tasks: ['Log weather and site conditions', 'Note delays or safety incidents', 'Record crew counts by trade', 'Submit daily report', 'Track deliveries received', 'Upload progress photos']
        }
    ]
};

function createTemplateCardHTML(template) {
    var displayTasks = template.tasks.slice(0, 5);
    var moreCount = template.tasks.length - 5;
    var html = '<div class="templates__card">';
    html += '<div class="templates__card-header"><h3 class="templates__card-title">' + template.title + '</h3></div>';
    html += '<ul class="templates__checklist">';
    displayTasks.forEach(function (task) {
        html += '<li class="templates__checklist-item">';
        html += '<i data-lucide="check-square" style="width:14px;height:14px;color:var(--secondary-green);stroke-width:1.6;flex-shrink:0;"></i>';
        html += '<span>' + task + '</span></li>';
    });
    if (moreCount > 0) {
        html += '<li class="templates__checklist-item templates__more-item">+ ' + moreCount + ' more items</li>';
    }
    html += '</ul></div>';
    return html;
}

function initTemplates() {
    var col1El = document.getElementById('tpl-col1');
    var col2El = document.getElementById('tpl-col2');

    if (!col1El || !col2El) return;

    // Generate cards (duplicate for seamless loop)
    var col1HTML = '';
    var col2HTML = '';
    templateData.col1.forEach(function (t) { col1HTML += createTemplateCardHTML(t); });
    templateData.col2.forEach(function (t) { col2HTML += createTemplateCardHTML(t); });

    col1El.innerHTML = col1HTML + col1HTML;
    col2El.innerHTML = col2HTML + col2HTML;

    // Create icons in generated cards
    if (typeof lucide !== 'undefined') {
        lucide.createIcons({ nodes: [col1El, col2El] });
    }

    // Scroll-based width and border-radius animation
    var section = document.querySelector('.templates');
    var bg = document.getElementById('templates-bg');
    if (!section || !bg) return;

    var currentWidth = 90;
    var currentRadius = 24;
    var targetWidth = 90;
    var targetRadius = 24;
    var ticking = false;

    function updateTarget() {
        var rect = section.getBoundingClientRect();
        var viewH = window.innerHeight;
        // Progress: 0 when top of section hits middle of screen, 1 when further scrolled
        var start = rect.top - viewH * 0.5;
        var range = rect.height * 0.4;
        var progress = Math.max(0, Math.min(-start / range, 1));

        // Width: 90% -> 100%
        targetWidth = 90 + progress * 10;
        // Border-radius: 24px -> 0px
        targetRadius = 24 * (1 - progress);
    }

    function lerp(current, target, factor) {
        return current + (target - current) * factor;
    }

    function animate() {
        currentWidth = lerp(currentWidth, targetWidth, 0.08);
        currentRadius = lerp(currentRadius, targetRadius, 0.08);

        bg.style.width = currentWidth + '%';
        bg.style.borderRadius = currentRadius + 'px';

        if (Math.abs(currentWidth - targetWidth) > 0.01 || Math.abs(currentRadius - targetRadius) > 0.01) {
            requestAnimationFrame(animate);
        } else {
            ticking = false;
        }
    }

    window.addEventListener('scroll', function () {
        updateTarget();
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(animate);
        }
    }, { passive: true });

    // Initial calculation
    updateTarget();
}
