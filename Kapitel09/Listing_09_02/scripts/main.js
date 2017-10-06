'use strict';
function init() {
  let xmlString = '<?xml version="1.0" encoding="ISO-8859-1"?>' +
                  '<artists>' +
                    '<artist name="Kyuss">' +
                      '<albums>' +
                        '<album>' +
                          '<title>Wretch</title>' +
                          '<year>1991</year>' +
                        '</album>' +
                      '</albums>' +
                    '</artist>' +
                  '</artists>';
  let domParser = new DOMParser();
  let xmlDOM = domParser.parseFromString(xmlString, 'text/xml');
  let firstArtist = xmlDOM.querySelector('artist');
  console.log(firstArtist.getAttribute('name'));                  // "Kyuss"
  console.log(firstArtist.querySelector('title').textContent);    // "Wretch"
  console.log(firstArtist.querySelector('year').textContent);     // 1991
}

document.addEventListener('DOMContentLoaded', init);
