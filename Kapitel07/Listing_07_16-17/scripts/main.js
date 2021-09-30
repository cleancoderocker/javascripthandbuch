function init() {
  const loginForm = document.getElementById('login');
  const loginButton = document.getElementById('submit');
  loginButton.addEventListener('click', (e) => {
    loginForm.submit();
  });
}

document.addEventListener('DOMContentLoaded', init);
