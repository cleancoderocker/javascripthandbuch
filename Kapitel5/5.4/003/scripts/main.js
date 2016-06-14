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
  var items = tableBody.children;
  var itemsArray = [];
  for (var i = 0; i < items.length; i++) {
    itemsArray.push(items[i]);
  }
  itemsArray.sort(function(contactElement1, contactElement2) {
    var firstNameElement1 = contactElement1.children[0];
    var firstNameElement2 = contactElement2.children[0];
    return firstNameElement2.innerHTML.localeCompare(firstNameElement1.innerHTML);
  });
  for (i = 0; i < itemsArray.length; i++) {
    tableBody.appendChild(itemsArray[i]);
  }
}

fetch('./api/projects',
  {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Beispielprojekt',
      url: 'http://www.example.com',
    })
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });