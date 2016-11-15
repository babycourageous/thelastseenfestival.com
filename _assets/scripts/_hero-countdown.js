'use strict';
var $ = require('jquery');
global.jQuery = require("jquery");
var cd = require('./vendor/jquery.countdown.min');

$('#hero-countdown').countdown({
  showOnZeroYears: false,
  showOnZeroDays: false,
  showOnZeroHours: false,
  showOnZeroMinutes: false,
  showOnZeroSeconds: false,
});
