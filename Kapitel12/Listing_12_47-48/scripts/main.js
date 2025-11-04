'use strict';
function init() {
  document.getElementById('message').addEventListener('click', sendMessage);
}
function sendMessage() {
  const worker = new Worker("scripts/worker.js");
  const message = 'Hallo Worker';
  console.log(`Hauptthread: Sende Nachricht: ${message}`);
  worker.postMessage(message);
  worker.addEventListener('message', (event) => {
    console.log(`Hauptthread: Antwort von Worker erhalten: ${event.data}`);
  });
}
document.addEventListener('DOMContentLoaded', init)