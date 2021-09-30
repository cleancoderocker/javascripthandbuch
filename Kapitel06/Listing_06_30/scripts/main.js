function handler(ev) {
  const e = ev || window.event;
  const target = e.target || e.srcElement;
  this.classList.toggle('selected');
  console.log(
    `Geklickt auf Knoten mit ID "${target.id}"`
  );
  console.log(
    `Event an Knoten mit ID "${this.id}"`
  );
  if(this.classList.contains('level2')) {             // Sobald Level 2 erreicht ist ...
    e.stopPropagation();                              // ... wird das Event nicht ...
  }                                                   // ... weitergereicht.
}
function init() {
  const elements = document.querySelectorAll('.level1, .level2, .level3');
  for(let i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', handler);
  }
}
document.addEventListener('DOMContentLoaded', init);
