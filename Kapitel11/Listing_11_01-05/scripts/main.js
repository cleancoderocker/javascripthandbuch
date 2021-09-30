function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext){
    const context = canvas.getContext('2d');
  }
}
document.addEventListener('DOMContentLoaded', draw);