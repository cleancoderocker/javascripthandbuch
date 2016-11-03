function handleClickEvent1(e) {
  var e = e || window.event;
  this.classList.toggle('selected');
  e.stopPropagation();
}
function handleClickEvent2(e) {
  var e = e || window.event;
  this.classList.toggle('selected-border');
  e.stopPropagation();
}
function init() {
  var elements = document.querySelectorAll('.level1, .level2, .level3');
  for(var i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', handleClickEvent1);
    elements[i].addEventListener('click', handleClickEvent2);
  }
}
