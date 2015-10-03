function enterWebsite() {
  var age = document.getElementById('age').value;
  try {
    checkAge(age);
  } catch (error) {
    document.getElementById('message').textContent = error.message;
    return;
  }
  document.getElementById('message').textContent = 'Sie sind alt genug.';
}

function checkAge(age) {
  if (age < 18) {
    throw new Error('Sie müssen über 18 sein.')
  }
}