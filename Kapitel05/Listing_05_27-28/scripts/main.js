let contacts = [
  {
    firstName: 'Max ',
    lastName: 'Mustermann',
    email: 'max.mustermann@javascripthandbuch.de'
  },
  {
    firstName: 'Moritz',
    lastName: 'Mustermann',
    email: 'moritz.mustermann@javascripthandbuch.de'
  },
  {
    firstName: 'Peter ',
    lastName: 'Mustermann',
    email: 'peter.mustermann@javascripthandbuch.de'
  }
];

function createTable() {
  let tableBody = document.querySelector('#contact-table tbody');
  for(let i=0; i<contacts.length; i++) {
    // Für den aktuellen Kontakt ...
    let contact = contacts[i];
    // ... wird eine neue Zeile erzeugt.
    // (1)
    let tableRow = document.createElement('tr');
    // Innerhalb der Zeile werden verschiedene Zellen erstellt ...
    // (2)
    let tableCellFirstName = document.createElement('td');
    // ... und jeweils mit Werten befüllt.
    // (3)
    let firstName = document.createTextNode(contact.firstName);
    // (4)
    tableCellFirstName.appendChild(firstName);
    // (5)
    let tableCellLastName = document.createElement('td');
    // (6)
    let lastName = document.createTextNode(contact.lastName);
    // (7)
    tableCellLastName.appendChild(lastName);
    // (8)
    let tableCellEmail = document.createElement('td');
    // (9)
    let email = document.createTextNode(contact.email);
    // (10)
    tableCellEmail.appendChild(email);
    // (11)
    tableRow.appendChild(tableCellFirstName);
    // (12)
    tableRow.appendChild(tableCellLastName);
    // (13)
    tableRow.appendChild(tableCellEmail);
    // (14)
    tableBody.appendChild(tableRow);
  }
}
