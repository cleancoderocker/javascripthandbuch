(function() {
  var selectElement = document.getElementById('grade');    // Die Auswahlliste
  var options = [                                          // Eine Liste mit Werten
    'Sehr gut',
    'Gut',
    'Befriedigend',
    'Ausreichend',
    'Mangelhaft',
    'Ungenügend'
  ];
  for(var i=0; i<options.length; i++) {                   // Für jeden Wert in der Liste
    var optionElement = document.createElement('option'); // erstelle ein Auswahlelement,
    var optionText = document.createTextNode(options[i]); // erstelle den entsprechenden Text,
    optionElement.appendChild(optionText);                // füge den Text an das Element
    selectElement.appendChild(optionElement);             // und füge das Element an die
                                                          // Auswahlliste
  }
})();