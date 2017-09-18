'use strict';
LED1.set(); // rote LED an
LED1.read(); // Ausgabe: true
LED1.reset(); // rote LED aus
LED1.read(); // Ausgabe: false
LED1.write(1); // rote LED an
LED1.write(0); // rote LED aus
LED1.write(true); // rote LED an
LED1.write(false); // rote LED aus
LED1.write(HIGH); // rote LED an, Konstante HIGH hat Wert 1
LED1.write(LOW); // rote LED aus, Konstante LOW hat Wert 0
LED2.write(1); // grüne LED an
LED3.write(1); // blaue LED an