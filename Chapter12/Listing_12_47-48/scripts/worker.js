'use strict';
self.addEventListener('message', (event) => {
  console.log(`Worker: Message received: ${event.data}`);
  const workerResult = 'Hello main thread';
  console.log(`Worker: Return response: ${workerResult}`);
  self.postMessage(workerResult);
});
