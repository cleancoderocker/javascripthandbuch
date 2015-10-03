function handler(e) {
  var e = e || window.event;
  this.classList.toggle('selected');
  e.stopPropagation();
}
function handler2(e) {
  var e = e || window.event;
  this.classList.toggle('selected-border');
  e.stopPropagation();
}
function init() {
  var elements = document.querySelectorAll('.level1, .level2, .level3');
  for(var i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', handler);
    elements[i].addEventListener('click', handler2);
  }
}
