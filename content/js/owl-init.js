$(document).ready(function () {
  function initializeOwlCarousel() {
    const lang = $("html").attr("dir");

    $(".evaluation_slider_class").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      rtl: lang === "rtl" ? true : false,
    //   navText: [
    //     "<i class='fas fa-angle-left'></i>",
    //     "<i class='fas fa-angle-right'></i>",
    //   ],
      dots: true,
      responsiveClass: true,
      responsiveRefreshRate: 200,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });



    $(".home_client_testimonial_slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      rtl: lang === "rtl" ? true : false,
    //   navText: [
    //     "<i class='fas fa-angle-left'></i>",
    //     "<i class='fas fa-angle-right'></i>",
    //   ],
      dots: true,
      responsiveClass: true,
      responsiveRefreshRate: 200,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // var owl = $(".owl-carousel").owlCarousel({
    //   loop: true,
    //   margin: 20,
    //   nav: false,
    //   items: 1,
    //   autoplay: true,
    //   autoplayTimeout: 2000,
    //   autoplayHoverPause: true,
    //   rtl: true, // Enable RTL mode
    //   dots: true,
    //   responsive: {
    //     0: {
    //       items: 1.4,
    //     },
    //     600: {
    //       items: 2.1,
    //     },
    //     1000: {
    //       items: 3,
    //     },
    //   },
    // });
  }

  initializeOwlCarousel();
});
