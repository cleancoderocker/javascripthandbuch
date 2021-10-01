'use strict';
function init() {
// 1.) Abfrage der Datei artists.json
  fetch('artists.json')
    .then((response) => {
      console.log(response.status);     // 200
      console.log(response.statusText); // "OK"
      console.log(response.type);       // "basic"
      console.log(response.bodyUsed);   // false
      console.log(response.headers);    // []
      console.log(response.ok);         // true
      console.log(response.redirected); // false
      console.log(response.url);        // "http://localhost:8080/artists.json"
                                        // (abhängig vom Wurzelverzeichnis des Webservers)

// 2.) Umwandeln der Antwort in ein JavaScript-Objekt
      return response.json();
    })
    .then((result) => {
// 3.) Auswerten des umgewandelten JavaScript-Objekts
      const table = initTable();
      const artists = result.artists;
      for (let i = 0; i < artists.length; i++) {
        const artist = artists[i];
        const albums = artist.albums;
        for (let j = 0; j < albums.length; j++) {
          const album = albums[j];
          const row = createRow(
            artist.name,
            album.title,
            album.year
          );
          table.tBodies[0].appendChild(row);
        }
      }
      document.getElementById('artists-container').appendChild(table);
    })
    .catch((error) => {
      console.error(error);
    });
}

function initTable() {
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerColumnArtistName = document.createElement('th');
  const headerColumnAlbumTitle = document.createElement('th');
  const headerColumnAlbumYear = document.createElement('th');
  const tableBody = document.createElement('tbody');
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
  const row = document.createElement('tr');
  const columnName = document.createElement('td');
  const columnTitle = document.createElement('td');
  const columnYear = document.createElement('td');
  columnName.appendChild(document.createTextNode(artistName));
  columnTitle.appendChild(document.createTextNode(albumTitle));
  columnYear.appendChild(document.createTextNode(albumYear));
  row.appendChild(columnName);
  row.appendChild(columnTitle);
  row.appendChild(columnYear);
  return row;
}
document.addEventListener('DOMContentLoaded', init);
