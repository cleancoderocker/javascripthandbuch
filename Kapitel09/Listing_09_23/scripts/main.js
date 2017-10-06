'use strict';
function init() {
// 1.) Abfrage der Datei artists.json
  fetch('artists.json')
    .then(function(response) {
// 2.) Umwandeln der Antwort in ein JavaScript-Objekt
      return response.json();
    })
    .then(function(result) {
// 3.) Auswerten des umgewandelten JavaScript-Objekts
      let table = initTable();
      let artists = result.artists;
      for (let i = 0; i < artists.length; i++) {
        let artist = artists[i];
        let albums = artist.albums;
        for (let j = 0; j < albums.length; j++) {
          let album = albums[j];
          let row = createRow(
            artist.name,
            album.title,
            album.year
          );
          table.tBodies[0].appendChild(row);
        }
      }
      document.getElementById('artists-container').appendChild(table);
    })
    .catch(function(error) {
      console.error(error);
    });
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
