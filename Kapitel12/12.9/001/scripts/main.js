(function () {
  if (!!window.Worker) {
    var worker = new Worker("scripts/worker.js");
    var message = 'Hallo Worker';
    console.log('Hauptthread: Sende Nachricht: ' + message);
    worker.postMessage(message);
    worker.onmessage = function (event) {
      console.log('Hauptthread: Antwort von Worker erhalten: ' + event.data);
    }
  }
})();