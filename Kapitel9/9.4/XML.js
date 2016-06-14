'use strict';
let request = new XMLHttpRequest();                          // Erstellen des XMLHttpRequest-Objekts
request.onreadystatechange = () => {                         // Wenn Ergebnis geladen wurde ...
  if (request.readyState === 4 && request.status === 200) {  // ... und die Anfrage erfolgreich war ...
    let data = request.responseXML;
    let entries = data.getElementsByTagName('entry');
    for (let i = 0; i < entries.length; i++) {
      /* XML einbauen */
    }
  }
};
request.open('GET', 'content/data.xml', true);          // Konfiguration der Anfrage
request.send(null);                                     // Absenden der Anfrage