 if ("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(function(position) {
     loadWeather(position.coords.latitude + ',' + position.coords.longitude);
   });

   function loadWeather(location, woeid) {
     $.simpleWeather({
       location: location,
       woeid: woeid,
       unit: 'f',
       success: function(weather) {
         $("#city").html(weather.city);
         $("#weather-icon").html('<i class="icon-' + weather.code + '"></i>');
         $("#temp").html('<p id="temp-f">' + weather.temp + '&deg;' + ' ' + weather.units.temp + '</p>');
         $("#tempalt").html('<p id="temp-c">' + weather.alt.temp + '&deg;' + ' ' + weather.alt.unit + '</p>');
         $("#wind").html('<p>' + weather.wind.direction + " " + weather.wind.speed + " " + weather.units.speed + '</p>');
       },
       error: function(error) {
         $("#weather").html('<p>' + error + '</p>');
       }
     });

   }
 };

 $(document).ready(function() {
   loadWeather();
 });

 /* Temperature toggle */
 function switchTemp() {
   if (document.getElementById('temp-f')) {
     if (document.getElementById('temp-f').style.display == 'none') {
       document.getElementById('temp-f').style.display = 'block';
       document.getElementById('temp-c').style.display = 'none';
     } else {
       document.getElementById('temp-f').style.display = 'none';
       document.getElementById('temp-c').style.display = 'block';
     }
   }
 }