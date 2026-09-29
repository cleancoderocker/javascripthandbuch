function handleLinkClicked(event) {
  console.log('Link clicked');
  event.preventDefault();
}

function init() {
  const element = document.getElementById('link');
  element.addEventListener(
    'click',
    handleLinkClicked,
    false
  );
}

document.addEventListener('DOMContentLoaded', init);
