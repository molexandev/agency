$(function () {
    // slow transition

    $("#menu").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
    });

    // menu

    $(".header__nav-btn, #menu a").on("click", function () {
        $(".header__nav").toggleClass("header__nav--active");
        $(".header__nav-btn").toggleClass("header__nav-btn--active");
        $("body").toggleClass("lock");
    });

    // FooterSlideToggle

    $(".footer-info__title--click").on("click", function () {
        $(this).toggleClass("footer-info__title--active");
        $(this).next().slideToggle();
    });


    // WOW ANIMATION

    wow = new WOW(
        {
        boxClass:     'wow',      
        animateClass: 'animate__animated', 
        offset:       0,   
        mobile:       true,
        live:         true       
      }
      )
      wow.init();

});
