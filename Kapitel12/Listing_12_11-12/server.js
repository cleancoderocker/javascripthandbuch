'use strict';
const fs = require('fs');
const http = require('http');
const MIN = 1;
const MAX = 20;

const server = http.createServer((request, response) => {
  if (request.headers.accept && request.headers.accept === 'text/event-stream') {
    // URL für die Event-Quelle
    if (request.url === '/events') {
      sendEvent(request, response);
    } else {
      response.writeHead(404);
      response.end();
    }
  } else {
    // URL für die HTML-Datei
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(fs.readFileSync(__dirname + '/index.html'));
    response.end();
  }
})
server.listen(8000, () => {
  console.log('Server gestartet unter http://localhost:8000')
});

function sendEvent(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const id = (new Date()).toLocaleTimeString();

  setInterval(() => {
    createServerSendEvent(response, id);
  }, 5000);

  createServerSendEvent(response, id);
}

function createServerSendEvent(response, id) {
  const exercise = createRandomExercise();
  response.write('id: ' + id + '\n');
  response.write("data: " + exercise + '\n\n');
}

function createRandomExercise() {
  const number1 = Math.floor(Math.random() * MAX) + MIN;
  const number2 = Math.floor(Math.random() * MAX) + MIN;
  const exercise = number1 + ' + ' + number2 + ' = ';
  return exercise;
}
