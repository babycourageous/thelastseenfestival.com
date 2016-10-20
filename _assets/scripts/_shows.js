'use strict';
var $ = require('jquery');
var m = require('masonry-layout');
var il = require('imagesloaded');

var grid = $('.shows__container').imagesLoaded( function() {
  console.log('imagesLoaded called');
  // init Masonry after all images have loaded
  new m( '.shows__container', {itemSelector: '.show', columnWidth: '.show'});
});
