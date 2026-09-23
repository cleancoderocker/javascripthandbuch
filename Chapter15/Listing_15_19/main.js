'use strict';
import {               // Import ...
  info as i,           // ... of the 'info' function under alias 'i'
  debug as d,          // ... of the 'debug' function under alias 'd'
  warn as w,           // ... of the 'warn' function under alias 'w'
  error as e           // ... of the 'error' function under alias 'e'
} from './logger.js'

e(4711); // Call the error function of the 'logger' module
