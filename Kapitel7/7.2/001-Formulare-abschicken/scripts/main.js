function init() {
  let loginForm = document.getElementById('login');
  let loginButton = document.getElementById('submit');
  loginButton.addEventListener('click', (e) => {
    loginForm.submit();
  });
}

document.addEventListener('DOMContentLoaded', init);
