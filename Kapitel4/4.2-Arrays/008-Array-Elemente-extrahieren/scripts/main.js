(function () {
  var todoList = [
    'Bad putzen',
    'Einkaufen',
    'Aufräumen',
    'Rasen mähen'
  ];
  var sliced1 = todoList.slice(1);    // Ab zweitem Element
  var sliced2 = todoList.slice(2);    // Ab drittem Element
  var sliced3 = todoList.slice(0, 2); // Erstes und zweites Element
  var sliced4 = todoList.slice(2, 4); // Drittes und viertes Element
  console.log(sliced1);   // ["Einkaufen", "Aufräumen", "Rasen mähen"]
  console.log(sliced2);   // ["Aufräumen", "Rasen mähen"]
  console.log(sliced3);   // ["Bad putzen", "Einkaufen"]
  console.log(sliced4);   // ["Aufräumen", "Rasen mähen"]
  console.log(todoList);  // ["Bad putzen", "Einkaufen", "Aufräumen", "Rasen mähen"]
})();

(function () {
  var todoList = [
    'Bad putzen',
    'Einkaufen',
    'Aufräumen',
    'Rasen mähen'
  ];
  var sliced5 = todoList.slice(-2);     // Die letzten beiden Elemente.
  var sliced6 = todoList.slice(1,       // Zweites Element von vorne bis ...
                              -1);      // ... zweites Element von hinten.
  var sliced7 = todoList.slice(1,       // Zweites Element von vorne bis ...
                              -2);      // ... bis drittes Element von hinten.
  var sliced8 = todoList.slice(1,       // Zweites Element von vorne bis ...
                              -3);      // ... viertes Element von hinten.
  console.log(sliced5);   // ["Aufräumen", "Rasen mähen"]
  console.log(sliced6);   // ["Einkaufen", "Aufräumen"]
  console.log(sliced7);   // ["Einkaufen"]
  console.log(sliced8);   // []
})();