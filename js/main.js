(function() {
    var $cover = $('.cover'),
        $intro = $('.intro');

    $cover.delay(1500).fadeOut(1750, function() {
        $intro.css('display', 'none');
    })
}());
