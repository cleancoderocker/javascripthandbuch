function init() {
  var today = new Date();
  console.log(today.getMonth());    // Gibt den aktuellen Monat (0 - 11) zurück
  console.log(today.getFullYear()); // Gibt das Jahr im Format YYYY zurück
  console.log(today.getDate());     // Gibt den aktuellen Tag im Monat (1 - 31) zurück
  console.log(today.getDay());      // Gibt den Wochentag zurück (startet Sonntag mit 0)
  console.log(today.getHours());    // Gibt die aktuelle Stunde am Tag (0 - 23) zurück
  console.log(today.getTime());     // Gibt die Millisekunden seit dem 1.1.1970 zurück

  var date1 = new Date();               // Aktuelles Datum und aktuelle Zeit
                                        // Hier: Sat Aug 15 2015 17:34:25 GMT+0200 (CEST)
  var date2 = new Date(1438654000000);  // Datum basierend auf Millisekunden seit dem 1.1.1970
                                        // Hier: Tue Aug 04 2015 04:06:40 GMT+0200 (CEST)
  var date3 = new Date("02 08 2015");   // Datum basierend auf Zeichenkette
                                        // Hier: Sun Feb 08 2015 00:00:00 GMT+0100 (CET)
  var date4 = new Date(                 // Datum basierend auf ...
    2015,                               // ... Jahr ...
    8,                                  // ... Monat ...
    15,                                 // ... Tag ...
    17,                                 // ... Stunden ...
    36,                                 // ... Minuten ...
    30,                                 // ... Sekunden ...
    30                                  // ... und Millisekunden.
  );                                    // Hier: Tue Sep 15 2015 17:36:30 GMT+0200 (CEST)
}