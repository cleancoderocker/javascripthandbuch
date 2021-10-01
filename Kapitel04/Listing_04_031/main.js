'use strict';'use strict';
'use strict';
const item = {
  isbn: '',
  _name: '',
  /* Hier die anderen Eigenschaften */
  set name(newName) {
    if(typeof newName === 'string') {
      console.log('Neuen Namen setzen');
      this._name = newName;
    } else {
      throw new TypeError('Name muss eine Zeichenkette sein.')
    }
  },
  get name() {
    console.log('Namen zurückgeben');
    return this._name;
  }
  /* Analog für die anderen Eigenschaften. */
}
item.publisher = 'Galileo Press';
item.order = function() {
  console.log('Das Buch wurde erfolgreich bestellt.');
}
console.log(item.publisher); // Ausgabe: Galileo Press
item.order();                // Ausgabe: Das Buch wurde erfolgreich bestellt.
// Überschreiben der Eigenschaft
item.publisher = 'Rheinwerk Verlag';
// Überschreiben der Methode
item.order = function() {
  console.log(`Das Buch wurde bei ${this.publisher} erfolgreich bestellt.`);
}
console.log(item.publisher);  // Ausgabe: Rheinwerk Verlag
item.order();                 // Ausgabe: Das Buch wurde bei Rheinwerk Verlag erfolgreich bestellt.