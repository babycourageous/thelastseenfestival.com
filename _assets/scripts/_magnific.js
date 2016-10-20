'use strict';
var $ = require('jquery');
require('magnific-popup');

$(document).ready(function() {
  $('.workshop__link').magnificPopup({type:'ajax'});
  $('.schedule__link').magnificPopup({type:'ajax'});
});
