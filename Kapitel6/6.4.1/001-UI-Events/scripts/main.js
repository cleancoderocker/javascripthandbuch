function clearMessage() {
  showMessage('');
}

function showMessage(message) {
  var output = document.getElementById('output');
  output.value = message + '\n' + output.value;
}

function init() {
  window.addEventListener('load', function(event) {
    showMessage('Dokument geladen: ' + event.type);
  });
  window.addEventListener('resize', function(event) {
    showMessage('Browserfenster verändert: ' + event.type);
  });
  window.addEventListener('scroll', function(event) {
    showMessage('Browserfenster gescrollt: ' + event.type);
  });
  window.addEventListener('select', function(event) {
    showMessage('Auswahl getroffen: ' + event.type);
  });
}

document.addEventListener('DOMContentLoaded', init);