function handleLinkClicked(e) {
  console.log('Link geklickt');
  stopDefault(e);
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

function stopDefault(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  } else if (window.event && window.event.returnValue) {
    window.event.returnValue = false;
  }
}

document.addEventListener('DOMContentLoaded', init);