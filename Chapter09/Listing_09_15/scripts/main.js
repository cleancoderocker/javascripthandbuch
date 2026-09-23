'use strict';
function init() {
  const request = new XMLHttpRequest();
  request.onload = (e) => {
    if(request.status === 200) {
      const xml = request.responseXML;
      // here further processing of the XML data
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
