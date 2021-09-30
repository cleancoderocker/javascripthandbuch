function init() {
  // Selektion nach Namen
  const inputElementsForGenre = document
    .getElementsByName('genre');                          // Selektiere alle Elemente mit Namen
  if(inputElementsForGenre.length > 0) {                  // Wenn mindestens ein Element gefunden wurde
    for(let i=0; i<inputElementsForGenre.length; i++) {   // Gehe alle Elemente durch
      const inputElement = inputElementsForGenre[i];        // Weise Element einer Variablen zu
      console.log(inputElement.value);                    // Ausgabe: Stonerrock, Spacerock, Hardrock
    }
  }
}

document.addEventListener('DOMContentLoaded', init);