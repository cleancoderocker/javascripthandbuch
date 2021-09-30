'use strict';
function init() {
  const request = new XMLHttpRequest();
  request.onload = (event) => {
    console.log('Antwort geladen');
  }
  request.open(
    'GET',
    'content/data.xml'
  );
  request.setRequestHeader('Accept', 'text/html');
  request.send();
}

document.addEventListener('DOMContentLoaded', init);
