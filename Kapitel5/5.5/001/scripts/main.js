var contacts = [
  {
    firstName: 'Max ',
    lastName: ' Mustermann',
    email: 'max.mustermann@javascripthandbuch.de'
  },
  {
    firstName: 'Moritz',
    lastName: ' Mustermann',
    email: 'moritz.mustermann@javascripthandbuch.de'
  },
  {
    firstName: 'Peter ',
    lastName: ' Mustermann',
    email: 'peter.mustermann@javascripthandbuch.de'
  }
];

function createTable() {
  var tableBody = document.querySelector('#contact-table tbody');
  for(var i=0; i<contacts.length; i++) {
    var contact = contacts[i];
    var tableRow = document.createElement('tr');
    var tableCellFirstName = document.createElement('td');
    tableCellFirstName.appendChild(document.createTextNode(contact.firstName));
    var tableCellLastName = document.createElement('td');
    tableCellLastName.appendChild(document.createTextNode(contact.lastName));
    var tableCellEmail = document.createElement('td');
    tableCellEmail.appendChild(document.createTextNode(contact.email));
    tableRow.appendChild(tableCellFirstName);
    tableRow.appendChild(tableCellLastName);
    tableRow.appendChild(tableCellEmail);
    tableBody.appendChild(tableRow);
  }
}

function sortByFirstName() {
  var tableBody = document.querySelector('#contact-table tbody');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  contacts.sort(function(contact1, contact2) {
    return contact1.firstName.localeCompare(contact2);
  })
  createTable();
}
