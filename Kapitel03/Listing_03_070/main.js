'use strict';
const selectElement = document.getElementById('grade'); // die Auswahlliste
const options = [ // eine Liste mit Werten
  'Sehr gut',
  'Gut',
  'Befriedigend',
  'Ausreichend',
  'Mangelhaft',
  'Ungenügend'
];
for(let i=0; i<options.length; i++) { // Für jeden Wert in
// der Liste
  const optionElement = document.createElement('option'); // erstelle ein
// Auswahlelement,
  const optionText = document.createTextNode(options[i]); // erstelle den
// entsprechenden Text,
  optionElement.appendChild(optionText); // füge den Text an
// das Element
  selectElement.appendChild(optionElement); // und füge das Element
// an die Auswahlliste.
}