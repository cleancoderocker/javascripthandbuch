function getPosition() {
  function successHandler(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
    document.getElementById('accuracy').value = position.coords.accuracy;
    document.getElementById('altitudeAccuracy').value = position.coords.altitudeAccuracy;
    document.getElementById('heading').value = position.coords.heading;
    document.getElementById('speed').value = position.coords.speed;
    document.getElementById('timestamp').value = position.timestamp;

    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    let mapOptions = {
      zoom: 6
    };
    let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    let travel = {
      origin : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      destination : "Alexanderplatz, Berlin",
      travelMode : google.maps.DirectionsTravelMode.DRIVING
    };
    let googlePosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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