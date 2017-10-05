'use strict';
function init() {
  let request = new XMLHttpRequest();
  request.onload = () => {
    if(request.status === 200) {
      let json;
      if (request.responseType === 'json') {
        json = request.response;
      } else {
        json = JSON.parse(request.responseText);
      }
    }
  };
  request.open('GET', 'data/content.json', true);
  request.responseType = 'json';
  request.setRequestHeader('Accept', 'application/json');
  request.send();
}

document.addEventListener('DOMContentLoaded', init);
