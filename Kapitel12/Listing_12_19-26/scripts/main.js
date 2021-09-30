(function() {
  // Werte im Browserspeicher speichern
  localStorage.setItem('firstname', 'Max');
  localStorage.setItem('lastname', 'Mustermann');

  sessionStorage.setItem('firstname', 'Max');
  sessionStorage.setItem('lastname', 'Mustermann');

  const user = {
    firstname: 'Max',
    lastname: 'Mustermann'
  }
  localStorage.setItem(
    'user',
    user                   // Falsch: die Zeichenkette [object Object] wird gespeichert
  );
  localStorage.setItem(
    'user',
    JSON.stringify(user)  // Richtig: das Objekt wird im JSON-Format gespeichert
  );
})();

(function() {
  // Werte aus dem Browserspeicher lesen
  const firstname = localStorage.getItem('firstname');
  const lastname = localStorage.getItem('lastname');
  console.log(firstname);                             // Max
  console.log(lastname);                              // Mustermann

  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  console.log(user.firstname);                        // Max
  console.log(user.lastname);                         // Mustermann
})();

(function() {
  // Werte im Browserspeicher aktualisieren
  localStorage.setItem('firstname', 'Max');
  localStorage.setItem('lastname', 'Mustermann');
  const firstname = localStorage.getItem('firstname');
  const lastname = localStorage.getItem('lastname');
  console.log(firstname);                             // Max
  console.log(lastname);                              // Mustermann
  localStorage.setItem('firstname', 'Moritz');
  localStorage.setItem('lastname', 'Peterson');
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');
  console.log(firstname);                             // Moritz
  console.log(lastname);                              // Peterson
})();

(function() {
  // Auf Änderungen im Browserspeicher reagieren
  window.addEventListener('storage', function(event) {
    console.log(event.key);
    console.log(event.oldValue);
    console.log(event.newValue);
    console.log(event.url)
    console.log(event.storageArea);
  });
  localStorage.setItem('firstname', 'Max');
  localStorage.setItem('lastname', 'Mustermann');
  let firstname = localStorage.getItem('firstname');
  let lastname = localStorage.getItem('lastname');
  console.log(firstname);                             // Max
  console.log(lastname);                              // Mustermann
  localStorage.setItem('firstname', 'Moritz');
  localStorage.setItem('lastname', 'Peterson');
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');
  console.log(firstname);                             // Moritz
  console.log(lastname);                              // Peterson
})();