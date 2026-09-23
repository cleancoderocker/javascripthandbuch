'use strict';
function init() {
  const request = new XMLHttpRequest();                // Create the XMLHttpRequest
  // object
  request.onload = () => {                             // Wenn result is loaded ...
    if (request.status === 200) {
      const html = request.responseXML.body.innerHTML; // HTML response as parsed 
      // object.
    }
  };
  request.open(
    'GET',                                         // Load the ...
    'content/snippet.html'                         // ... HTML file
  );
  request.responseType = 'document';               // Response as parsed object ...
  request.setRequestHeader('Accept', 'text/html'); // ... only of type HTML
  request.send();                                  // Send request
}

document.addEventListener('DOMContentLoaded', init);
