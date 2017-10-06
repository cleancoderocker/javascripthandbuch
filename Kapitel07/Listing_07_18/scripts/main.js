function init() {
  let loginForm = document.getElementById('login');
  let resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', (e) => {
    loginForm.reset();
  });
}

document.addEventListener('DOMContentLoaded', init);
