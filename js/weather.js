jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/2bd019677ba3cc78/geolookup/conditions/q/CO/Colorado_Springs.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var weather = parsed_json['current_observation']['weather'];
  $('.weather').text( weather);
  $('.temp').text(temp_f + "°F");
  }
  });
});
