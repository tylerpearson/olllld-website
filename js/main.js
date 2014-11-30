(function() {

    var $cover = document.getElementById('cover'),
        $loadingIcon = document.getElementById('loading-icon');

    function fadeOut(el, ms, callback) {
        var opacity = 1,
            interval = 50,
            gap = interval / ms;

        function fade() {
            opacity -= gap;
            el.style.opacity = opacity;

            if(opacity <= 0) {
                clearInterval(fading);
                el.style.display = 'none';
                callback.apply();
            }
        }

        var fading = setInterval(fade, interval);
    }

    function init() {
        setTimeout(function() {
            fadeOut($cover, 1750, function() {
                $loadingIcon.style.display = 'none';
            });
        }, 1500);
    }

    init();


}());