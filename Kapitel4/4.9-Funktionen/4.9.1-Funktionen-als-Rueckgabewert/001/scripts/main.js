function init() {
  function createAddFunction() {
    return function(x, y) {
      return x + y;
    }
  }

  let addFunction1 = createAddFunction();
  let addFunction2 = createAddFunction();

  console.log(addFunction1(22, 55));  // 77
  console.log(addFunction2(33, 66));  // 99
}

document.addEventListener('DOMContentLoaded', init);