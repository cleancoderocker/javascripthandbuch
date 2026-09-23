'use strict';
function init() {
  const request = new XMLHttpRequest();
  request.addEventListener('loadstart', (event) => {
    console.log('Request started');
  });
  request.addEventListener('progress', (event) => {
    console.log('Progress');
  });
  request.addEventListener('abort', (event) => {
    console.log('Request aborted');
  });
  request.addEventListener('error', (event) => {
    console.log('Error during request');
  });
  request.addEventListener('load', (event) => {
    console.log('Response loaded');
  });
  request.addEventListener('timeout', (event) => {
    console.log('Request aborted due to timeout');
  });
  request.addEventListener('loadend', (event) => {
    console.log('Request finished');
  });  
  request.open(
    'GET',
    'content/data.xml'
  );
  request.setRequestHeader('Accept', 'text/html');
  request.send();
}

document.addEventListener('DOMContentLoaded', init);
