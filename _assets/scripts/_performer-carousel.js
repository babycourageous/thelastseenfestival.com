'use strict';
var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function() {
  console.log('slick');
  // On Breakpoint hit
  $('#performer-slick').on('breakpoint', function(event, slick, breakpoint){
    console.log('the' + breakpoint + ' breakpoint was hit');
  });

  $("#performer-slick").slick({
    // normal options...
    infinite: false,
    mobileFirst: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,

  });


})
