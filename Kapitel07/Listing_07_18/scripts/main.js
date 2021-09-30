function init() {
  const loginForm = document.getElementById('login');
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', (e) => {
    loginForm.reset();
  });
}

document.addEventListener('DOMContentLoaded', init);
