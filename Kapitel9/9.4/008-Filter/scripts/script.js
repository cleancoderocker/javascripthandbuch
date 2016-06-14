'use strict';
function init() {
  let searchField = document.getElementById('search');
  searchField.addEventListener('input', (e) => {
    let searchValue = searchField.value;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        let result;
        if (xhttp.responseType === 'json') {
          result = xhttp.response;
        } else {
          result = JSON.parse(xhttp.responseText);
        }
        let table = initTable();
        let artists = result.artists.filter((artist) => {
          return artist.name.indexOf(searchValue) >= 0;
        });
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
        let container = document.getElementById('artists-container');
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
        container.appendChild(table);
      }
    };
    xhttp.open('GET', 'artists.json', true);
    xhttp.responseType = 'json';
    xhttp.send();
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
window.addEventListener('DOMContentLoaded', init);
