function init() {
  const element = document.getElementById('home');
  console.log(element.getAttribute('id'));    // home
  console.log(element.getAttribute('class')); // link
  console.log(element.getAttribute('href'));  // index.html

  console.log(element.id);        // home
  console.log(element.className); // link
  console.log(element.href);      // index.html

  const button = document.getElementById('create');
  console.log(button.onclick);                        // Ausgabe der Funktion
  console.log(typeof button.onclick);                 // Ausgabe: function
  console.log(button.getAttribute('onclick'));        // createContact()
  console.log(typeof button.getAttribute('onclick')); // Ausgabe: string
  console.log(button.style);                          // Ausgabe der CSSStyleDeclaration
  console.log(typeof button.style);                   // Ausgabe: object
  console.log(button.getAttribute('style'));          // background-color: green
  console.log(typeof button.getAttribute('style'));   // Ausgabe: string
}

function createContact() {
  console.log('Kontakt anlegen');
}

document.addEventListener('DOMContentLoaded', init);
