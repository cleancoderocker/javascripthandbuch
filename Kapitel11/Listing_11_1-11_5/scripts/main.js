function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext){
    let context = canvas.getContext('2d');
  }
}
document.addEventListener('DOMContentLoaded', draw);