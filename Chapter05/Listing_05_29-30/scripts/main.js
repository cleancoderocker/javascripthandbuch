const contacts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@javascripthandbuch.de'
  },
  {
    firstName: 'James',
    lastName: 'Doe',
    email: 'james.doe@javascripthandbuch.de'
  },
  {
    firstName: 'Peter',
    lastName: 'Doe',
    email: 'peter.doe@javascripthandbuch.de'
  }
];

function createTable() {
  const tableBody = document.querySelector('#contact-table tbody');
  for(let i=0; i<contacts.length; i++) {
    // For the current contact ...
    const contact = contacts[i];
    // ... a new line is created.
    // (1)
    const tableRow = document.createElement('tr');
    // Within the row, different cells are created ... 
    // (2)
    const tableCellFirstName = document.createElement('td');
    // ... and filled with values.
    // (3)
    const firstName = document.createTextNode(contact.firstName);
    // (4)
    tableCellFirstName.appendChild(firstName);
    // (5)
    const tableCellLastName = document.createElement('td');
    // (6)
    const lastName = document.createTextNode(contact.lastName);
    // (7)
    tableCellLastName.appendChild(lastName);
    // (8)
    const tableCellEmail = document.createElement('td');
    // (9)
    const email = document.createTextNode(contact.email);
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
