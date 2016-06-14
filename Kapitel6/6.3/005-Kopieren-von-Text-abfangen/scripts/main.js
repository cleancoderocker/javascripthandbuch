function init() {
  window.addEventListener('cut', (event) => {
    console.log(event);
  });
}

document.addEventListener('DOMContentLoaded', init);