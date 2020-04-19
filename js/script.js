(function($) {
  'use strict'; // Start of use strict

  const OFFSET = 60;

  // Add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#main-navbar',
    offset: OFFSET
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - (OFFSET - 2))
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  const activateNavbar = function() {
    let $mainNavbar = $("#main-navbar");
    if ($mainNavbar.offset().top > OFFSET) {
      $mainNavbar.addClass('active');
    } else {
      $mainNavbar.removeClass('active');
    }
  };
  // Collapse now if page is not at top
  activateNavbar();
  // Collapse the navbar when page is scrolled
  $(window).scroll(activateNavbar);
})(jQuery); // End of use strict
