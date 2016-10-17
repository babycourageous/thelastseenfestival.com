'use strict';
var $ = require('jquery');
require('magnific-popup');

$(document).ready(function() {
  $('.performer__link').magnificPopup({type:'ajax'});
});
