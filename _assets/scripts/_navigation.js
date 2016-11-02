'use strict';
var $ = require('jquery');
var ss = require('smooth-scroll');

$(document).ready(function() {
  var toggle = $('#nav-toggle');

  /* Check to see where page is for header BG */
  if ($(".header").offset().top > 50) {
      $(".header").addClass("header--collapse")
  } else {
      $(".header").removeClass("header--collapse")
  }

  /* When user clicks the Hamburger Icon */
	toggle.click(function() {
		$(this).toggleClass('is-active');
		//$('.header-nav').toggleClass('open');
    $('.nav--primary').slideToggle(function() {
      // remove inline display:none
      // (Source: BOURBON REFILLS)
      if($(".nav--primary").is(":hidden")) {
        $(".nav--primary").removeAttr("style");
      }
  	});
    event.preventDefault();
	});

  /* SMOOTH SCROLL */
  ss.init({offset:50});

  $(window).load(function() {
    /* Check to see where page is for header BG */
    if ($(".header").offset().top > 50) {
        $(".header").addClass("header--collapse")
    } else {
        $(".header").removeClass("header--collapse")
    }
    $(window).scroll(function() {
        if ($(".header").offset().top > 50) {
            $(".header").addClass("header--collapse")
        } else {
            $(".header").removeClass("header--collapse")
        }
    })
});

})
