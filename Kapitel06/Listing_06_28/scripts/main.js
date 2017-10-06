function handler(ev) {
  let e = ev || window.event;
  let target = e.target || e.srcElement;
  this.classList.toggle('selected');
  console.log('Geklickt auf Knoten mit ID "' + target.id + '"');
  console.log('Event an Knoten mit ID "' + this.id + '"');
}
function init() {
  let elements = document.querySelectorAll('.level1, .level2, .level3');
  for(let i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', handler, true);
    // elements[i].onclick = handler;              // Immer Bubbling-Phase
    // elements[i].attachEvent('click', handler);  // IE<9 immer Bubbling-Phase
  }
}
document.addEventListener('DOMContentLoaded', init);
