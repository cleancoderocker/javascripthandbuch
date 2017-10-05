function handleLinkClicked(e) {
  console.log('Link geklickt');
  e.preventDefault();
}

function init() {
  let element = document.getElementById('link');
  element.addEventListener(
    'click',
    handleLinkClicked,
    false
  );
}

document.addEventListener('DOMContentLoaded', init);