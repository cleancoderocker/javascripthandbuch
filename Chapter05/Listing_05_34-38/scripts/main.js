function init() {
  const element = document.getElementById('home');
  console.log(element.getAttribute('id'));    // home
  console.log(element.getAttribute('class')); // link
  console.log(element.getAttribute('href'));  // index.html

  console.log(element.id);        // home
  console.log(element.className); // link
  console.log(element.href);      // index.html

  const button = document.getElementById('create');
  console.log(button.onclick);                        // Output of the 
                                                      // function object
  console.log(typeof button.onclick);                 // Output: function
  console.log(button.getAttribute('onclick'));        // createContact()
  console.log(typeof button.getAttribute('onclick')); // Output: string
  console.log(button.style);                          // Output of 
                                                      // CSSStyleDeclaration
  console.log(typeof button.style);                   // Output: object
  console.log(button.getAttribute('style'));          // background-color: green
  console.log(typeof button.getAttribute('style'));   // Output: string
  
}

function createContact() {
  console.log('Create contact');
}

document.addEventListener('DOMContentLoaded', init);
