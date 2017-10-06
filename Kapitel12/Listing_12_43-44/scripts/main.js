'use strict';
function init() {
  let items = document.getElementsByClassName('contact');
  for(let i=0; i<items.length; i++) {
    let item = items[i];
    item.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/html', event.target.outerHTML);
    });
  }
  let target = document.getElementById('target');
  target.addEventListener('dragover', function(event) {
    event.preventDefault();
    return false;
  });
  target.addEventListener('dragenter', function(event) {
	let targetElement = event.target || event.srcElement;
	targetElement.classList.add('dragover');
  });
  function onLeave(event) {
	let targetElement = event.target || event.srcElement;
	targetElement.classList.remove("dragover");
  }
  target.addEventListener('dragleave', onLeave);
  target.addEventListener('drop', function(event) {
	let targetElement = event.target || event.srcElement;
	if(targetElement.id === 'target') {
	  targetElement.innerHTML += event.dataTransfer.getData('text/html');
    }
    onLeave(event);
  })
}
document.addEventListener('DOMContentLoaded', init);