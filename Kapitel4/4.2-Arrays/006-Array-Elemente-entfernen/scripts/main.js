(function () {
  var todoList = [
    'Bad putzen',
    'Einkaufen',
    'Aufräumen',
    'Rasen mähen'
  ];
  var item1 = todoList.shift();
  console.log(item1);             // Ausgabe: Bad putzen
  var item2 = todoList.shift();
  console.log(item2);             // Ausgabe: Einkaufen
  var item3 = todoList.shift();
  console.log(item3);             // Ausgabe: Aufräumen
  var item4 = todoList.shift();
  console.log(item4);             // Ausgabe: Rasen mähen
  var item5 = todoList.shift();
  console.log(item5);             // Ausgabe: undefined
})();