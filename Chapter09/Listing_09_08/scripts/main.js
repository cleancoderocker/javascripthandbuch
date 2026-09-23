'use strict';
function init() {
  const request = new XMLHttpRequest();  // 1.) Create the XMLHttpRequest object
  request.onload = (event) => {          // 2.) Definition of the event handler
    console.log('Response loaded');
  }
  request.open(                          // 3.) Start the request ...
    'GET',                               // ... specifying the HTTP method...
    'content/data.xml'                   // ... and URL
  );
  request.setRequestHeader('Accept', 'text/html'); // 4.) Configure the request
  request.send();                                  // 5.) Send the request
  
}

document.addEventListener('DOMContentLoaded', init);
