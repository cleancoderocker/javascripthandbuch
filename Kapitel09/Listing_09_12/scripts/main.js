'use strict';
function init() {
  let request = new XMLHttpRequest();               // Erstellen des XMLHttpRequest-Objekts
  request.onload = (e) => {                         // Wenn Ergebnis geladen wurde ...
    if(request.status === 200) {
      let html = request.responseText;              // HTML-Antwort als Zeichenkette
    }
  };
  request.open(
    'GET',                                          // Laden der ...
    'content/snippet.html',                         // ... HTML-Datei
  );
  request.responseType = '';                        // Antwort als Zeichenkette ...
  request.setRequestHeader('Accept', 'text/html');  // ... nur vom Typ HTML
  request.send();                                   // Absenden der Anfrage
}

document.addEventListener('DOMContentLoaded', init);
