'use strict';
for (let i = 1; i < 15; i++) {
    console.log(`${i}`.padStart(3, '0'));
}
// Ausgabe hintereinander:
// "001", "002", "003", "004", "005"
// "006", "007", "008", "009", "010"
// "011", "012", "013", "014"
for (let i = 1; i < 15; i++) {
    console.log(`${i}`.padEnd(3, '0'));
}
// Ausgabe hintereinander:
// "100", "200", "300", "400", "500"
// "600", "700", "800", "900", "100"
// "110", "120", "130", "140"