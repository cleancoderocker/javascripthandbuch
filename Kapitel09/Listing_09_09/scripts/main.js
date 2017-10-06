'use strict';
function init() {
  let request = new XMLHttpRequest();
  request.addEventListener('loadstart', (event) => {
      console.log('Anfrage gestartet');
  });
  request.addEventListener('progress', (event) => {
    console.log('Fortschritt');
  });
  request.addEventListener('abort', (event) => {
    console.log('Anfrage abgebrochen');
  });
  request.addEventListener('error', (event) => {
    console.log('Fehler bei der Anfrage');
  });
  request.addEventListener('load', (event) => {
    console.log('Antwort geladen');
  });
  request.addEventListener('timeout', (event) => {
    console.log('Anfrage wegen Timeout abgebrochen');
  });
  request.addEventListener('loadend', (event) => {
    console.log('Anfrage beendet');
  });
  request.open(
    'GET',
    'content/data.xml'
  );
  request.setRequestHeader('Accept', 'text/html');
  request.send();
}

document.addEventListener('DOMContentLoaded', init);
