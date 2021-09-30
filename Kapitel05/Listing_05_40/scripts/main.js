function init() {
  const element = document.getElementById('home');
  element.removeAttribute('class');
  element.removeAttribute('href');
  console.log(element.getAttribute('class'));   // null
  console.log(element.getAttribute('href'));    // null
}

document.addEventListener('DOMContentLoaded', init);
