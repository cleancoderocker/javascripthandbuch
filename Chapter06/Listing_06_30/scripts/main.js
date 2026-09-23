function handler(ev) {
  const e = ev || window.event;
  const target = e.target || e.srcElement;
  this.classList.toggle('selected');
  console.log(
    `Clicked on node with ID "${target.id}"`
  );
  console.log(
    `Event at node with ID "${this.id}"`
  );
  if(this.classList.contains('level2')) {          // Once level 2 has been reached ...
    e.stopPropagation();                           // ... the event will not ...
  }                                                // ... be forwarded.
}
function init() {
  const elements = document.querySelectorAll('.level1, .level2, .level3');
  for(let i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', handler);
  }
}
document.addEventListener('DOMContentLoaded', init);
