document.addEventListener('DOMContentLoaded', function() {
    Scrollbar.init(document.querySelector('body'), {
        damping: 0.1,
        renderByPixels: true,
        continuousScrolling: true
    });
});
