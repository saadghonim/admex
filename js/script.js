$(document).ready(function() {
  
      /***************************
     ***************************
    *button menu mob*
    ***************************
    ***************************/

    $(".hamburger").click(function() {
      $(".nav-links").toggleClass("open");
    });

/***************************
 ***************************
slider
***************************
***************************/
  $('.slider_main .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    animateOut: 'fadeOut',
    autoplayHoverPause:true,
    responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
    }
  });

/* ************
start news
************* */
$(".news .owl-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  nav: false,
  dots: false,
  margin: 15,
  center: true,
  responsive: {
      0: {
          items: 1,
          dots: true
      },
      480: {
          items: 2,
          dots: true
      },
      768: {
          items: 3,
          dots: true
      },
      992: {
        items: 4,
        center: true,
        
    }

  }

  
});
/* ************
end news
************* */

/* ************
start gallery
************* */
$('.gallery .owl-carousel').owlCarousel({
  margin:10,
  loop:true,
  autoWidth:true,
  items:4,
  responsive: {
    0: {
        items: 1,
        dots: true
    },
    480: {
        items: 2,
        dots: true
    },
    768: {
        items: 3,
        dots: true
    },
    992: {
      items: 4,
      center: true,
      
  }

}
})
/* ************
end gallery
************* */



});

