function init() {
  const inputElementsForGenre = document
  .getElementsByName('genre');                          // Select all elements 
                                                        // by name.
if(inputElementsForGenre.length > 0) {                  // If at least one 
                                                        // element is found.
  for(let i=0; i<inputElementsForGenre.length; i++) {   // Iterate all elements.
    const inputElement = inputElementsForGenre[i];      // Assign element to a 
                                                        // variable.
    console.log(inputElement.value);                    // Output: Stonerrock, 
                                                        // Spacerock, Hardrock
  }
}

}

document.addEventListener('DOMContentLoaded', init);