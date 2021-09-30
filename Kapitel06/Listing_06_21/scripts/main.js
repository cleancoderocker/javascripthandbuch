function init() {
  window.addEventListener('keydown', (event) => {
    if (event.key !== undefined) {
      // Enthalten in aktuellem Entwurf der DOM Events API
      // Unterstützt beispielsweise von Firefox und Internet Explorer
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
    } else if (event.keyIdentifier !== undefined) {
      // Enthalten in ältererem Entwurf der DOM Events API
      // Unterstützt beispielsweise von Chrome und Safari
      console.log(event.keyIdentifier);
      switch (event.keyIdentifier) {
        case 'Up':
          moveUp();
          break;
        case 'Left':
          moveLeft();
          break;
        case 'Right':
          moveRight();
          break;
        case 'Down':
          moveDown();
          break;
        default: return;
      }
    } else if (event.keyCode !== undefined) {
      // Veraltet
    }
  });

  const circle = document.getElementById('circle');
  const position = [0, 0];
  function move() {
    circle.style.top = position[0] + 'px';
    circle.style.left = position[1] + 'px';
  }
  function moveUp() {
    position[0] -= 10;
    move();
  }

  function moveRight() {
    position[1] += 10;
    move();
  }

  function moveLeft() {
    position[1] -= 10;
    move();
  }

  function moveDown() {
    position[0] += 10;
    move();
  }
}

document.addEventListener('DOMContentLoaded', init);