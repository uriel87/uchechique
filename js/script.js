
$( document ).ready(function() {

    $(".mobile-nav-icon").click(function() {
        $(".main-menu").toggleClass("show-nav");
        $(".background-mainNav-mobile").toggleClass("show-background-mainNav-mobile");
    });

    $(".main-menu  li").click(function() {
        $(".main-menu").removeClass("show-nav");
        $(".background-mainNav-mobile").removeClass("show-background-mainNav-mobile");
    });

    $(window).scroll(function() {
        if($( window ).width() > 627) {
            var scroll = $(window).scrollTop();
            var objectPosition = $("#header").offset().top + 60;
            if (scroll < objectPosition) {
                $("#go-to-top").hide();
            } else {
                $("#go-to-top").show();
            }
        }
    });

    $('a[href*="#"]').click(function(event) {
        // if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')  && location.hostname == this.hostname
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top -  60
            }, 1000);
        }
    });
});