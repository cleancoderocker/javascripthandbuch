onmessage = function(event) {
  console.log('Worker' + self.id + ' : Nachricht erhalten: ' + event.data);
  var workerResult = 'Hallo Hauptthread';
  console.log('Worker: Sende Antwort zurück: ' + workerResult);
  postMessage(workerResult);
}