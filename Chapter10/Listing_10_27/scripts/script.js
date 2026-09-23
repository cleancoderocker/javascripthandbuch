'use strict';
$(document)
  .ajaxStart(() => {
    console.log('Request started.');
  })
  .ajaxSend((event, request, settings) => {
    console.log('Request sent.');
  })
  .ajaxSuccess((event, request, settings, data) => {
    console.log('Request completed successfully');
  })
  .ajaxError((event, request, settings, error) => {
    console.log('Error on request: ' + error);
  })
  .ajaxComplete((event, request, settings) => {
    console.log('Request completed.');
  })
  .ajaxStop(() => {
    console.log('All requests completed.');
  });

$(document).ready(() => {
  $.ajax({
    url: 'artists.json',
    dataType: 'json',
    type: 'GET'
  })
    .done((data) => {
      const table = initTable();
      const artists = data.artists;
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
          $(table).find('tbody').append(row);
        }
      }
      $('#artists-container').append(table);
    })
    .fail((jqXHR, errorMessage, error) => {
    });
});
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