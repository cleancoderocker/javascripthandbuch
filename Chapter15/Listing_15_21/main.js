'use strict';
const loadModule = true;
 
if (loadModule) {
  const moduleSpecifier = './logger.js';
  import(moduleSpecifier)
    .then(module => {
      // Calling the info function of the 'logger' module
      module.info('Module loaded dynamically!');
      // Calling the debug function of the 'logger' module
      module.debug('Module loaded dynamically!');
      // Calling the warn function of the 'logger' module
      module.warn('Module loaded dynamically!');
      // Calling the error function of the 'logger' module
      module.error('Module loaded dynamically!');
    }).catch(error => {
        console.error('Error loading the module')
    });
}
