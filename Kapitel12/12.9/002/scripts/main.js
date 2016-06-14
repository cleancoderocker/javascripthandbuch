'use strict';
function init() {
  document.getElementById('message').addEventListener('click', sendMessage);
}
function sendMessage() {
  let worker = new SharedWorker("scripts/worker.js");
  let message = 'Hallo Worker';
  console.log('Hauptthread: Sende Nachricht: ' + message);
  worker.port.addEventListener('message', (event) => {
    console.log('Hauptthread: Antwort von Worker erhalten: ' + event.data);
  });
  worker.port.start();
  worker.port.postMessage(message);
}
document.addEventListener('DOMContentLoaded', init)