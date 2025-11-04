'use strict';
self.addEventListener('message', (event) => {
  console.log(`Worker: Nachricht erhalten: ${event.data}`);
  const workerResult = 'Hallo Hauptthread';
  console.log(`Worker: Sende Antwort zurück: ${workerResult}`);
  self.postMessage(workerResult);
});