'use strict';
function init() {
  const request = new XMLHttpRequest();                 // Erstellen des XMLHttpRequest-Objekts
  request.onload = () => {                            // Wenn Ergebnis geladen wurde ...
    if(request.status === 200) {
      const html = request.responseXML.body.innerHTML;  // HTML-Antwort als geparstes Objekt.
    }
  };
  request.open(
    'GET',                                            // Laden der ...
    'content/snippet.html'                            // ... HTML-Datei
  );
  request.responseType = 'document';                  // Antwort als geparstes Objekt ...
  request.setRequestHeader('Accept', 'text/html');    // ... nur vom Typ HTML
  request.send();                                     // Absenden der Anfrage
}

document.addEventListener('DOMContentLoaded', init);
