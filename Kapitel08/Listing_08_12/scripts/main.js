function init() {
  window.history.length;    // Anzahl der Einträge
  window.history.back();    // zurück in der Historie
  window.history.forward(); // weiter in der Historie
  window.history.go(-2);    // zwei Einträge zurück
  window.history.go(2);     // zwei Einträge weiter
  window.history.go(0);     // aktuelle Webseite erneut laden
}

document.addEventListener('DOMContentLoaded', init);