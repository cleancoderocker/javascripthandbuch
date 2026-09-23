'use strict';
alert("Hello World");
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
  const firstArtist = xmlDOM.querySelector('artist');
  console.log(firstArtist.getAttribute('name'));                  // "Kyuss"
  console.log(firstArtist.querySelector('title').textContent);    // "Wretch"
  console.log(firstArtist.querySelector('year').textContent);     // 1991
}

document.addEventListener('DOMContentLoaded', init);
