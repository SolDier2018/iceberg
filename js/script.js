(function($) {
    $('.archive__wrapper__slider').slick({
        infinity: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        slidesPerRow: 2,
        arrows: false,
        dots: true
    });

    $(window).on("load", function(){
        $(".projects__wrapper").mCustomScrollbar({
            axis: "x",
            setHeight: true,
            setWidth: true
        });
    });

    // $('#kid1').on('click', function(){
    //    $('#kid2').css('display', 'none')
    // })
})(jQuery);