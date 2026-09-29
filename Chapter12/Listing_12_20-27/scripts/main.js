(function () {
  localStorage.setItem('firstname', 'John');
  localStorage.setItem('lastname', 'Doe');

  sessionStorage.setItem('firstname', 'John');
  sessionStorage.setItem('lastname', 'Doe');

  const user = {
    firstname: 'John',
    lastname: 'Doe'
  }
  localStorage.setItem(
    'user',
    user                  // Incorrect: The string [object Object] is stored.
  );
  localStorage.setItem(
    'user',
    JSON.stringify(user)  // Correct: The object is stored in JSON format.
  );

})();

(function () {
  const firstname = localStorage.getItem('firstname');  // Reading the value 
  // of the "firstname" property
  const lastname = localStorage.getItem('lastname'); // Reading the value 
  // of the "lastname" property
  console.log(firstname);                               // John
  console.log(lastname);                                // Doe

  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  console.log(user.firstname);                        // John
  console.log(user.lastname);                         // Doe

})();

(function () {
  localStorage.setItem('firstname', 'John');
  localStorage.setItem('lastname', 'Doe');
  let firstname = localStorage.getItem('firstname');
  let lastname = localStorage.getItem('lastname');
  console.log(firstname);                             // John
  console.log(lastname);                              // Doe
  localStorage.setItem('firstname', 'James');
  localStorage.setItem('lastname', 'Peterson');
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');
  console.log(firstname);                             // James
  console.log(lastname);                              // Peterson  
})();

(function () {
  localStorage.setItem('firstname', 'John');
  localStorage.setItem('lastname', 'Doe');
  const firstname = localStorage.getItem('firstname');
  const lastname = localStorage.getItem('lastname');
  console.log(firstname);     // John
  console.log(lastname);      // Doe
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');

})();

(function () {
  window.addEventListener('storage', (e) => {
    console.log(e.key);             // Key of the updated entry
    console.log(e.oldValue);        // old value
    console.log(e.newValue);        // new value
    console.log(e.url)              // the URL of the document for which an entry ...
                                    // ... was changed
    console.log(e.storageArea);     // the storage object that was changed
  });  
})();