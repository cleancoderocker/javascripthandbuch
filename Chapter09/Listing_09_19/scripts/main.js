'use strict';
function init() {
  const newArtist = {
    "name": "Deltron 3030",
    "albums": [
      {
        "title": "Deltron 3030",
        "year": 2000
      },
      {
        "title": "Event 2",
        "year": 2013
      }
    ]
  }
  const request = new XMLHttpRequest();
  request.onload = () => {
    if(request.status === 200) {
      console.log('Data successfully sent.');
    }
  };
  request.open('POST', 'artists/create');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(newArtist);
}
document.addEventListener('DOMContentLoaded', init);
