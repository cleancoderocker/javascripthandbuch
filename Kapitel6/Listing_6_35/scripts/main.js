function handleLinkClicked(e) {
  console.log('Link geklickt');
  return false;
}

function init() {
  let element = document.getElementById('link');
  element.onclick = handleLinkClicked;
}

document.addEventListener('DOMContentLoaded', init);