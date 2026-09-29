'use strict';
function init() {
  const items = document.getElementsByClassName('contact');
  for(let i=0; i<items.length; i++) {
    const item = items[i];
    item.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/html', event.target.outerHTML);
    });
  }
  const target = document.getElementById('target');
  target.addEventListener('dragover', function(event) {
    event.preventDefault();
    return false;
  });
  target.addEventListener('dragenter', function(event) {
	const targetElement = event.target || event.srcElement;
	targetElement.classList.add('dragover');
  });
  function onLeave(event) {
	const targetElement = event.target || event.srcElement;
	targetElement.classList.remove("dragover");
  }
  target.addEventListener('dragleave', onLeave);
  target.addEventListener('drop', function(event) {
	const targetElement = event.target || event.srcElement;
	if(targetElement.id === 'target') {
	  targetElement.innerHTML += event.dataTransfer.getData('text/html');
    }
    onLeave(event);
  })
}
document.addEventListener('DOMContentLoaded', init);