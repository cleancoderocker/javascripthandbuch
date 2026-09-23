'use strict';
function init() {
  const xmlString = `<?xml version="1.0" encoding="ISO-8859-1"?>
                  <artists>
                    <artist name="Kyuss">
                      <albums>
                        <album>
                          <title>Wretch</title>
                          <year>1991</year>
                        </album>
                      </albums>
                    </artist>
                  </artists>`;
  const domParser = new DOMParser();
  const xmlDOM = domParser.parseFromString(xmlString, 'text/xml');
  const xmlSerializer = new XMLSerializer();
  const xmlStringSerialized = xmlSerializer.serializeToString(xmlDOM);
  console.log(xmlStringSerialized);
}

document.addEventListener('DOMContentLoaded', init);
