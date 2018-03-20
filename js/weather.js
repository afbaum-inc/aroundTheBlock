jQuery(document).ready(function($) {
  $.ajax({
    // weather underground key with Colorado Springs location
  url : "http://api.wunderground.com/api/2bd019677ba3cc78/geolookup/conditions/q/CO/Colorado_Springs.json",
  dataType : "jsonp",
  success : function(parsed_json) {
    // get the location, temp and current conditions from the api
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var weather = parsed_json['current_observation']['weather'];
    // create a https link for the current conditions image
  var weatherlower = weather.toLowerCase();
  weatherlower = weatherlower.split(" ").join("")
  var urlimage = "<img src = https://icons.wxug.com/i/c/f/" + weatherlower + ".gif "
  + 'alt="current weather conditions">'
    // put the information on the home page
  $('.weather').html(urlimage);
  $('.temp').text(temp_f + "°F");
  }
  });
});
