function getPosition() {
  function successHandler(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
    document.getElementById('accuracy').value = position.coords.accuracy;
    document.getElementById('altitudeAccuracy').value = position.coords.altitudeAccuracy;
    document.getElementById('heading').value = position.coords.heading;
    document.getElementById('speed').value = position.coords.speed;
    document.getElementById('timestamp').value = position.timestamp;
    const mapOptions = {
      zoom: 6
    };
    const map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    const googlePosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    const infowindow = new google.maps.InfoWindow({
      map: map,
      position: googlePosition,
      content: 'Sie befinden sich hier.'
    });
    map.setCenter(googlePosition);
  }
  function errorHandler(error) {
    // Nutzer verweigert Positionsermittlung.
  }
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }
}