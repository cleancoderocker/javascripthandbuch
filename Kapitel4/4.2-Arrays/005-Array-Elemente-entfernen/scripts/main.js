(function () {
  var todoList = [
    'Bad putzen',
    'Einkaufen',
    'Aufräumen',
    'Rasen mähen'
  ];
  var item1 = todoList.pop();
  console.log(item1);             // Ausgabe: Rasen mähen
  var item2 = todoList.pop();
  console.log(item2);             // Ausgabe: Aufräumen
  var item3 = todoList.pop();
  console.log(item3);             // Ausgabe: Einkaufen
  var item4 = todoList.pop();
  console.log(item4);             // Ausgabe: Bad putzen
  var item5 = todoList.pop();
  console.log(item5);             // Ausgabe: undefined
})();