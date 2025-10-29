function handleLinkClicked(event) {
  console.log('Link geklickt');
  stopDefault(event);
}

function init() {
  const element = document.getElementById('link');
  element.onclick = handleLinkClicked;
  const element2 = document.getElementById('link2');
  element2.addEventListener(
    'click',
    handleLinkClicked,
    false
  );
}

function stopDefault(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  } else if (window.event && window.event.returnValue) {
    window.event.returnValue = false;
  }
}

document.addEventListener('DOMContentLoaded', init);