'use strict';
function init() {
  let request = new XMLHttpRequest();
  request.onload = () => {
    let xmlDoc = request.responseXML;
    let table = initTable();
    let artists = xmlDoc.getElementsByTagName('artist');
    for (let i = 0; i < artists.length; i++) {
      let artist = artists[i];
      let albums = artist.getElementsByTagName('album');
      for (let j = 0; j < albums.length; j++) {
        let album = albums[j];
        let row = createRow(
          artist.getAttribute('name'),
          album.getElementsByTagName('title')[0].childNodes[0].nodeValue,
          album.getElementsByTagName('year')[0].childNodes[0].nodeValue
        );
        table.tBodies[0].appendChild(row);
      }
    }
    document.getElementById('artists-container').appendChild(table);
  };
  request.open('GET', 'artists.xml', true);
  request.addEventListener('loadstart', (event) => {
    console.log('Anfrage gestartet');
  });
  request.addEventListener('progress', (event) => {
    console.log('Fortschritt');
  });
  request.addEventListener('abort', (event) => {
    console.log('Anfrage abgebrochen');
  });
  request.addEventListener('error', (event) => {
    console.log('Fehler bei der Anfrage');
  });
  request.addEventListener('load', (event) => {
    console.log('Antwort geladen');
  });
  request.addEventListener('timeout', (event) => {
    console.log('Anfrage wegen Timeout abgebrochen');
  });
  request.addEventListener('loadend', (event) => {
    console.log('Anfrage beendet');
  });
  request.send();
}

function initTable() {
  let table = document.createElement('table');
  let tableHeader = document.createElement('thead');
  let headerRow = document.createElement('tr');
  let headerColumnArtistName = document.createElement('th');
  let headerColumnAlbumTitle = document.createElement('th');
  let headerColumnAlbumYear = document.createElement('th');
  let tableBody = document.createElement('tbody');
  headerColumnArtistName.appendChild(document.createTextNode('Name'));
  headerColumnAlbumTitle.appendChild(document.createTextNode('Titel'));
  headerColumnAlbumYear.appendChild(document.createTextNode('Jahr'));
  headerRow.appendChild(headerColumnArtistName);
  headerRow.appendChild(headerColumnAlbumTitle);
  headerRow.appendChild(headerColumnAlbumYear);
  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  table.className = 'table table-striped';
  return table;
}

function createRow(artistName, albumTitle, albumYear) {
  let row = document.createElement('tr');
  let columnName = document.createElement('td');
  let columnTitle = document.createElement('td');
  let columnYear = document.createElement('td');
  columnName.appendChild(document.createTextNode(artistName));
  columnTitle.appendChild(document.createTextNode(albumTitle));
  columnYear.appendChild(document.createTextNode(albumYear));
  row.appendChild(columnName);
  row.appendChild(columnTitle);
  row.appendChild(columnYear);
  return row;
}
document.addEventListener('DOMContentLoaded', init);
