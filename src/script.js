 // Menu-toggle button

 $(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

  // Or with jQuery

//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });
//   $(document).on("scroll", function() {
//     if($(document).scrollTop()) {
//           $('.container').addClass('black');
//     }

//     else {
//           $('.container').removeClass('black');
//     }
// });

$('.carousel').carousel({
      interval: 2000
    })


