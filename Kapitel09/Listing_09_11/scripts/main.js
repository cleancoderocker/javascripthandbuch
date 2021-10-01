'use strict';
function init() {
  const request = new XMLHttpRequest();               // Erstellen des XMLHttpRequest-Objekts
  request.onload = (e) => {                         // Wenn Ergebnis geladen wurde ...
    if(request.status === 200) {
      const html = request.responseText;              // HTML-Antwort als Zeichenkette.
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
