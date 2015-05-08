var request = new XMLHttpRequest();                     // Erstellen des XMLHttpRequest-Objekts
request.onload = function () {                          // Wenn Ergebnis geladen wurde ...
  if (request.status === 200) {                         // ... und die Anfrage erfolgreich war ...
    var data = request.responseXML;
    var entries = data.getElementsByTagName('entry');
    for (var i = 0; i < entries.length; i++) {
      /* XML einbauen */
    }
  }
};
request.open('GET', 'content/data.xml', true);          // Konfiguration der Anfrage
request.send(null);                                     // Absenden der Anfrage