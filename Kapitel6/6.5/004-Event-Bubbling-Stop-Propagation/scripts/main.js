function handler(e) {
  var e = e || window.event;
  var target = e.target || e.srcElement;
  this.classList.toggle('selected');
  console.log('Geklickt auf Knoten mit ID "' + target.id + '"');
  console.log('Event an Knoten mit ID "' + this.id + '"');
  if(this.classList.contains('level3')) {
    e.stopPropagation();
  }
}
function init() {
  var elements = document.querySelectorAll('.level1, .level2, .level3');
  for(var i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', handler);
  }
}
