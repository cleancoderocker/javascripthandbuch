'use strict';
const loadModule = true;

if (loadModule) {
  const moduleSpecifier = './logger.js';
  import(moduleSpecifier)
    .then(module => {
      // Aufruf der Funktion info des Moduls 'logger'
      module.info('Modul dynamisch geladen!');
      // Aufruf der Funktion debug des Moduls 'logger'
      module.debug('Modul dynamisch geladen!');
      // Aufruf der Funktion warn des Moduls 'logger'
      module.warn('Modul dynamisch geladen!');
      // Aufruf der Funktion error des Moduls 'logger'
      module.error('Modul dynamisch geladen!');
    })
    .catch(error => {
        console.error('Fehler beim Laden des Moduls')
    });
}

