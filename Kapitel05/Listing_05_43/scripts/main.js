function init() {
  const element = document.getElementById('home');
  console.log(element.classList);                     // ["link"]
  element.classList.add('active');                    // Klasse hinzufügen
  console.log(element.classList);                     // ["link", "active"]
  element.classList.remove('active');                 // Klasse entfernen
  console.log(element.classList);                     // ["link"]
  element.classList.toggle('active');                 // Klasse umschalten
  console.log(element.classList);                     // ["link", "active"]
  element.classList.toggle('active');                 // Klasse umschalten
  console.log(element.classList);                     // ["link"]
  console.log(element.classList.contains('link'));    // true
  console.log(element.classList.contains('active'));  // false
  let i = 5;
  const condition = i > 0;
  element.classList.toggle('active', condition);      // Klasse umschalten
  console.log(element.classList);                     // ["link", "active"]
}

document.addEventListener('DOMContentLoaded', init);
