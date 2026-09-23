function handleLinkClicked(e) {
  console.log('Link clicked');
  e.preventDefault();
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
