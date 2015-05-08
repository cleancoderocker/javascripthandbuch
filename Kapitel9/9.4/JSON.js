var request = new XMLHttpRequest();                     // Erstellen des XMLHttpRequest-Objekts
request.onload = function () {                          // Wenn Ergebnis geladen wurde ...
  if (request.status === 200) {                         // ... und die Anfrage erfolgreich war ...
    var data = JSON.parse(request.responseText);
    for (var i = 0; i < data.entries.length; i++) {
      /* JSON einbauen */
    }
  }
};
request.open('GET', 'content/data.json', true);         // Konfiguration der Anfrage
request.send(null);                                     // Absenden der Anfrage
