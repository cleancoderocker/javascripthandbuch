'use strict';
const today = new Date();
console.log(today.getMonth());    // Gibt den aktuellen Monat (0-11) zurück
console.log(today.getFullYear()); // Gibt das Jahr im Format YYYY zurück
console.log(today.getDate());     // Gibt den aktuellen Tag im Monat (1-31) zurück
console.log(today.getDay());      // Gibt den Wochentag zurück (startet
                                  // Sonntag mit 0)
console.log(today.getHours());    // Gibt die aktuelle Stunde am Tag (0-23) zurück
console.log(today.getTime());     // Gibt die Millisekunden seit dem 1.1.1970 zurück