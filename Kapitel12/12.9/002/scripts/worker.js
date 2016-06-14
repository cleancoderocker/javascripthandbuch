'use strict';
let randomNumber = Math.random();
self.addEventListener('connect', (event) => {
  let port = event.ports[0];
  port.addEventListener('message', (event) => {
    console.log('Worker: Nachricht erhalten: ' + event.data);
    console.log('Worker: Sende Antwort zurück: ' + randomNumber);
    port.postMessage(randomNumber);
  });
  port.start();
});
