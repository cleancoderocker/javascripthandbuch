'use strict';
function init() {
  let request = new XMLHttpRequest();
  request.onload = (e) => {
    if(request.status === 200) {
      let xml = request.responseXML;
      // hier Weiterverarbeitung der XML-Daten
      console.log(xml);
    }
  };
  request.open(
    'GET',
    'content/data.xml'
  );
  request.responseType = 'document';
  request.setRequestHeader('Accept', 'text/xml');
  request.send(null);
}
document.addEventListener('DOMContentLoaded', init);
