function init() {
  window.addEventListener('keydown', (event) => {
    if (event.key !== undefined) {
      // Included in current draft of DOM Events API.
      // Supported by Firefox and Internet Explorer, for example. 
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
      // Included in older draft of DOM Events API.
      // Supported by Chrome and Safari, for example.
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
      // obsolete
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
