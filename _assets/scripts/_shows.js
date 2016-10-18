'use strict';
var $ = require('jquery');
var m = require('masonry-layout');

var msnry = new m( '.shows__container', {itemSelector: '.show', columnWidth: '.show'});
