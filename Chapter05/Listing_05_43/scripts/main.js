function init() {
  const element = document.getElementById('home');
  console.log(element.classList);                     // ["link"]
  element.classList.add('active');                    // Add class
  console.log(element.classList);                     // ["link", "active"]
  element.classList.remove('active');                 // Remove class
  console.log(element.classList);                     // ["link"]
  element.classList.toggle('active');                 // Toggle class
  console.log(element.classList);                     // ["link", "active"]
  element.classList.toggle('active');                 // Toggle class
  console.log(element.classList);                     // ["link"]
  console.log(element.classList.contains('link'));    // true
  console.log(element.classList.contains('active'));  // false
  const i = 5;
  const condition = i > 0;
  element.classList.toggle('active', condition);      // Toggle class
  console.log(element.classList);                     // ["link", "active"]
}

document.addEventListener('DOMContentLoaded', init);
