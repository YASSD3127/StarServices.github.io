/* ===========================================================================================
                                          SERVICES
=========================================================================================== */



$(function () {
    //animate on scroll
    new WOW().init();

});


/* ===========================================================================================
                                          Work
=========================================================================================== */

$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* ===========================================================================================
                                          TEAM
=========================================================================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }
    });

});
/* ===========================================================================================
                                          TESTIMONIALS
=========================================================================================== */
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/* ===========================================================================================
                                          Counter
=========================================================================================== */


$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/* ===========================================================================================
                                          CLIENTS
=========================================================================================== */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });

});
/* ===========================================================================================
                                          NAVIGATION
=========================================================================================== */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("star-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("star-top-nav");
            $("#back-to-top").fadeIn();
        }
    });

});


//  Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});
// Close mobile menu on click

$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});
