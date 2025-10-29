function init() {
  window.addEventListener('keydown', (event) => {
    console.log(event.key);
    switch (event.key) {
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowDown':
        moveDown();
        break;
      default: return;
    }
  });

  const circle = document.getElementById('circle');
  const position = [0, 0];
  const offset = 10;

  function move() {
    circle.style.top = position[0] + 'px';
    circle.style.left = position[1] + 'px';
  }

  function moveUp() {
    position[0] -= offset;
    move();
  }

  function moveRight() {
    position[1] += offset;
    move();
  }

  function moveLeft() {
    position[1] -= offset;
    move();
  }

  function moveDown() {
    position[0] += offset;
    move();
  }
}

document.addEventListener('DOMContentLoaded', init);
