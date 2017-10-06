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
  let xmlSerializer = new XMLSerializer();
  let xmlStringSerialized = xmlSerializer.serializeToString(xmlDOM);
  console.log(xmlStringSerialized);
}

document.addEventListener('DOMContentLoaded', init);
