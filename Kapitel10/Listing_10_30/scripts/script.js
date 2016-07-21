'use strict';
$(document).ready(() => {
  $.get({
    url: 'artists.xml',
    dataType: 'xml'
  }).done((data) => {
    let table = initTable();
    let artists = $(data).find('artist');
    artists.each((index, artist) => {
      let albums = $(artist).find('album');
      albums.each((index, album) => {
        let row = createRow(
          artist.getAttribute('name'),
          $(album).find('title').text(),
          $(album).find('year').text()
        );
        $(table).find('tbody').append(row);
      });
    });
    $('#artists-container').append(table);
  });
});

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