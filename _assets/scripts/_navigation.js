'use strict';
var $ = require('jquery');

$(document).ready(function() {
  var toggle = $('#nav-toggle');

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

  $(window).load(function() {
    $(window).scroll(function() {
        if ($(".header").offset().top > 50) {
            $(".header").addClass("header--collapse")
        } else {
            $(".header").removeClass("header--collapse")
        }
    })
});

})
