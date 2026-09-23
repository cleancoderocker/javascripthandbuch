'use strict';
LED1.set();           // Red LED on
LED1.read();          // Output: true
LED1.reset();         // Red LED off
LED1.read();          // Output: false
LED1.write(1);        // Red LED on
LED1.write(0);        // Red LED off
LED1.write(true);     // Red LED on
LED1.write(false);    // Red LED off
LED1.write(HIGH);     // red LED on, constant HIGH has value 1
LED1.write(LOW);      // red LED off, constant LOW has value 0
LED2.write(1);        // Green LED on
LED3.write(1);        // Blue LED on