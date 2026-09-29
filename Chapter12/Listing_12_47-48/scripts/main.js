'use strict';
function init() {
  document.getElementById('message').addEventListener('click', sendMessage);
}
function sendMessage() {
  const worker = new Worker("scripts/worker.js");
  const message = 'Hello worker';
  console.log(`main thread: Send message: ${message}`);
  worker.postMessage(message);
  worker.addEventListener('message', (event) => {
    console.log(`main thread: Response received from worker: ${event.data}`);
  });
  worker.addEventListener('error', (event) => {
    console.log('Error occurred');
  });
}
document.addEventListener('DOMContentLoaded', init)