'use strict';
let request = new XMLHttpRequest();                          // Erstellen des XMLHttpRequest-Objekts
request.onreadystatechange = () => {                         // Wenn Ergebnis geladen wurde ...
  if (request.readyState === 4 && request.status === 200) {  // ... und die Anfrage erfolgreich war ...
    let data;
    if (request.responseType === 'json') {
      result = request.response;
    } else {
      result = JSON.parse(request.responseText);
    }
    for (let i = 0; i < data.entries.length; i++) {
      /* JSON einbauen */
    }
  }
};
request.open('GET', 'content/data.json', true);         // Konfiguration der Anfrage
request.send(null);                                     // Absenden der Anfrage
