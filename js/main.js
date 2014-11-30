(function() {

    var $cover = document.getElementById('cover')
        $intro = document.getElementsByClassName('intro');

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

            });
        }, 1500);
    }

    init();


}());