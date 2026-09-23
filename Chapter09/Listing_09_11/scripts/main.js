'use strict';
function init() {
  const request = new XMLHttpRequest();              // Create the XMLHttpRequest
  // object
  request.onload = (e) => {                          // When result is loaded ...
    if (request.status === 200) {
      const html = request.responseText;             // HTML response as a string.
    }
  };
  request.open(
    'GET',                                           // Load the ...
    'content/snippet.html',                          // ... HTML file
  );
  request.responseType = '';                         // Response as a string ...
  request.setRequestHeader('Accept', 'text/html');   // ... only of type HTML
  request.send();                                    // Send request
}

document.addEventListener('DOMContentLoaded', init);
