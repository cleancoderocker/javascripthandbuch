function init() {
  let scrollPosition = window.scrollY;
  const nameElement = document.getElementById('name');

  function handleScrollEvent(e) {
    scrollPosition = window.scrollY;
    if(scrollPosition > 10) {
      nameElement.classList.remove('hide');
      nameElement.classList.add('show');
    }
    else {
      nameElement.classList.remove('show');
      nameElement.classList.add('hide');
    }
  }
  window.addEventListener('scroll', handleScrollEvent);
}

document.addEventListener('DOMContentLoaded', init);