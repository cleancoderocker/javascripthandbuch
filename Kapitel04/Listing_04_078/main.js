'use strict';
let date1 = new Date();               // aktuelles Datum und aktuelle Zeit
                                      // Hier: Sat Aug 15 2015
                                      // 17:34:25 GMT+0200 (CEST)
                                      console.log(date1);
let date2 = new Date(1438654000000);  // Datum basierend auf Millisekunden
                                      // seit dem 01.01.1970
                                      // Hier: Tue Aug 04 2015
                                      // 04:06:40 GMT+0200 (CEST)
let date3 = new Date("02 08 2015");   // Datum basierend auf Zeichenkette
                                      // Hier: Sun Feb 08 2015
                                      // 00:00:00 GMT+0100 (CET)
let date4 = new Date(                 // Datum basierend auf ...
  2015,                               // ... Jahr ...
  8,                                  // ... Monat ...
  15,                                 // ... Tag ...
  17,                                 // ... Stunden ...
  36,                                 // ... Minuten ...
  30,                                 // ... Sekunden ...
  30                                  // ... und Millisekunden
);                                    // Hier: Tue Sep 15 2015
                                      // 17:36:30 GMT+0200 (CEST)