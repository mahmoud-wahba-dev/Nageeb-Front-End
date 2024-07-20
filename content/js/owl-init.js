const lang = $("html").attr("dir");

$(".owl-carousel__login").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  rtl: lang === "rtl" ? true : false,
});

$(".owl-carousel__hallsCard").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  items: 1,
  rtl: lang === "rtl" ? true : false,
});

$(".owl-carousel__hallsHero").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  items: 1,
  rtl: lang === "rtl" ? true : false,
});
