$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('home').addClass('black');
    }

    else {
          $('home').removeClass('black');
    }
});

var scroll = new SmoothScroll('a[href*="#"]');