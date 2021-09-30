'use strict';
import { // Import ...
  info as i, // ... der Funktion 'info' unter Alias 'i'
  debug as d, // ... der Funktion 'debug' unter Alias 'd'
  warn as w, // ... der Funktion 'warn' unter Alias 'w'
  error as e // ... der Funktion 'error' unter Alias 'e'
  } from './logger.js'

e(4711); // Aufruf der Funktion error des Moduls 'logger'