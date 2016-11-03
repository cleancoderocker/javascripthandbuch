function handleClickEvent1(e) {
  let e = e || window.event;
  this.classList.toggle('selected');
  e.stopImmediatePropagation();
}
function handleClickEvent2(e) {
  let e = e || window.event;
  this.classList.toggle('selected-border');
  e.stopPropagation();
}
function init() {
  let elements = document.querySelectorAll('.level1, .level2, .level3');
  for(let i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', handleClickEvent1);
    elements[i].addEventListener('click', handleClickEvent2);
  }
}
