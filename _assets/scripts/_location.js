'use strict';
var $ = require('jquery');

// Google Map
function googleMap() {
  var map = document.getElementById('location__map');

  var map_options = {
    center: new google.maps.LatLng(33.793404,-84.4051962),
    scrollwheel: false,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      featureType: "all",
      stylers: [{saturation: -100}, {gamma: .5}]
    }]

  };
  var map = new google.maps.Map(map, map_options)

  // Map Marker
  var myLatlng = new google.maps.LatLng(33.793404,-84.4051962);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<b>Highwire Comedy Co.</b><br/>451 Bishop St NW<br/> Atlanta"
  });
  google.maps.event.addListener(marker, "click", function() {
    infowindow.open(map, marker)
  });
  infowindow.open(map, marker)
  }
  google.maps.event.addDomListener(window, 'load', googleMap);
