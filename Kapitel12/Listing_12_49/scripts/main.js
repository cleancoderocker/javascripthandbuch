function getPosition() {
  function successHandler(position) {
    document.getElementById('latitude').value = position.coords.latitude;
    document.getElementById('longitude').value = position.coords.longitude;
    document.getElementById('altitude').value = position.coords.altitude;
    document.getElementById('accuracy').value = position.coords.accuracy;
    document.getElementById('altitudeAccuracy').value = position.coords.altitudeAccuracy;
    document.getElementById('heading').value = position.coords.heading;
    document.getElementById('speed').value = position.coords.speed;
    document.getElementById('timestamp').value = position.timestamp;
  }
  function errorHandler(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert('Geolokalisierung durch Nutzer nicht erlaubt.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Jeine Lokalisierunginformationen verfügbar.');
        break;
      case error.TIMEOUT:
        alert('Timeout für die Lokalisierungsanfrage wurde überschritten.');
        break;
      default:
        alert('Unbekannter Fehler (#' + error.code + ': ' + error.message + ')');
        break;
    }
  }
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }
}