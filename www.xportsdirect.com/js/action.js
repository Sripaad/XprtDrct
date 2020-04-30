$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $('.exim-navbar').addClass('full-nav');
  } else {
    $('.exim-navbar').removeClass('full-nav');
  }
});