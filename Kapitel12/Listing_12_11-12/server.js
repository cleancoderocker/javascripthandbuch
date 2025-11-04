'use strict';
import fs from 'fs';
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
server.listen(8000);

function sendEvent(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const id = (new Date()).toLocaleTimeString();

 const intervalId = setInterval(() => {
    createServerSendEvent(response, id);
  }, 5000);

  createServerSendEvent(response, id);

  request.on('close', () => {
    console.log("Client-Verbindung getrennt");
    clearInterval(intervalId);
  });
}

function createServerSendEvent(response, id) {
  const exercise = createRandomExercise();
  response.write('id: ' + id + '\n');
  response.write('data: ' + exercise + '\n\n');
}

function createRandomExercise() {
  const number1 = Math.floor(Math.random() * MAX) + MIN;
  const number2 = Math.floor(Math.random() * MAX) + MIN;
  const exercise = number1 + ' + ' + number2 + ' = ';
  return exercise;
}
