(function() {
  var todoList = [];
  var length;
  length = todoList.push('Bad putzen');
  console.log(length);  // 1
  length = todoList.push('Einkaufen');
  console.log(length);  // 2
  length = todoList.push('Aufräumen', 'Rasen mähen');
  console.log(length);  // 4
  console.log(todoList); // ["Bad putzen", "Einkaufen", "Aufräumen", "Rasen mähen"]
})();

(function() {
  var todoList = [];
  var length;
  length = todoList.unshift('Bad putzen');
  console.log(length);  // 1
  length = todoList.unshift('Einkaufen');
  console.log(length);  // 2
  length = todoList.unshift('Aufräumen', 'Rasen mähen');
  console.log(length);  // 4
  console.log(todoList); // ["Aufräumen", "Rasen mähen", "Einkaufen", "Bad putzen"]
})();

(function() {
  var todoList = [
    'Bad putzen',
    'Einkaufen',
    'Aufräumen',
    'Rasen mähen'
  ];
  todoList.splice(
    2,                  // Index, ab dem eingefügt werden soll.
    0,                  // Anzahl an zu löschenden ELemente.
    'Garage streichen'  // Element, das hinzugefügt werden soll.
  );
  console.log(todoList);
  // [
  //   "Bad putzen",
  //   "Einkaufen",
  //   "Garage streichen",
  //   "Aufräumen",
  //   "Rasen mähen"
  // ]
  todoList.splice(
    2,                      // Index, ab dem eingefügt werden soll.
    0,                      // Anzahl an zu löschenden ELemente.
    'Rollrasen verlegen',   // Elemente, die hinzugefügt ...
    'Gemüsebeet anlegen'    // ... werden sollen.
  );
  console.log(todoList);
  // [
  //   "Bad putzen",
  //   "Einkaufen",
  //   "Rollrasen verlegen",
  //   "Gemüsebeet anlegen",
  //   "Garage streichen",
  //   "Aufräumen",
  //   "Rasen mähen"
  // ]
})();