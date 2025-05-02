// Skel.
skel.init({
    reset: 'full',
    breakpoints: {
        'global': {
            range: '*',
            href: 'css/style.css',
            containers: 1140,
            viewport: {
                scalable: true,
                initial: 1
            }
        },
        'wide': {
            range: '-1680',
            href: 'css/style-wide.css',
            containers: 960
        },
        'normal': {
            range: '-1280',
            href: 'css/style-normal.css',
            containers: 960
        },
        'mobile': {
            range: '-736',
            href: 'css/style-mobile.css',
            containers: '100%'
        },
        'mobilep': {
            range: '-480',
            href: 'css/style-mobilep.css',
            containers: '100%'
        }
    }
});

// Events (JS).

// Remove "loading" class once the page has fully loaded.
window.onload = function () {
    document.body.className = '';
}

// Handle touch events more gracefully
if ('ontouchstart' in window) {
    document.body.classList.add('touch');

    // Allow scrolling on mobile 
    window.ontouchmove = function (e) {
        // Only prevent default if not a scrollable element
        var target = e.target;
        while (target !== null) {
            if (target.classList && target.classList.contains('scrollable')) {
                return true;
            }
            target = target.parentElement;
        }
        return false;
    };
}

// Fix scroll position on orientation change.
window.onorientationchange = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*

// Events (jQuery).
// Aerial doesn't need jQuery, but if you're going to use it anyway remove the
// block of JS events above and use the jQuery-based ones below instead.

    $(window)

        // Remove "loading" class once the page has fully loaded.
            .on('load', function() {
                $('body').removeClass('loading');
            })

        // Prevent scrolling on touch.
            .on('touchmove', function() {
                return false;
            })

        // Fix scroll position on orientation change.
            .on('orientationchange', function() {
                $('body').scrollTop(0);
            });

*/
