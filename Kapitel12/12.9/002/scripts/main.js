(function () {
  if (!!window.Worker) {
    for(var i=0; i<10; i++) {
      var worker = new Worker("scripts/worker.js");
      worker.id = i;
      var message = 'Hallo Worker';
      console.log('Hauptthread: Sende Nachricht: ' + message);
      worker.postMessage(message);
      worker.onmessage = function (event) {
        console.log('Hauptthread: Antwort von Worker erhalten: ' + event.data);
      }
    }
  }
})();