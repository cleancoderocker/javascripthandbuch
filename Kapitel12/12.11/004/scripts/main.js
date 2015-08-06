function getPosition() {
  function successHandler(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
    document.getElementById('accuracy').value = position.coords.accuracy;
    document.getElementById('altitudeAccuracy').value = position.coords.altitudeAccuracy;
    document.getElementById('heading').value = position.coords.heading;
    document.getElementById('speed').value = position.coords.speed;
    document.getElementById('timestamp').value = position.timestamp;

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var mapOptions = {
      zoom: 6
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var travel = {
      origin : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      destination : "Alexanderplatz, Berlin",
      travelMode : google.maps.DirectionsTravelMode.DRIVING
    };
    var googlePosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(googlePosition);
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("map-directions"));
    directionsService.route(travel, function(result, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });
  }
  function errorHandler(error) {
    // Nutzer verweigert Positionsermittlung
  }
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }
}