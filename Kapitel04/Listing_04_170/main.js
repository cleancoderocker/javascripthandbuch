function logNames() {
  Array.prototype.forEach.apply(arguments, [
    function(argument) {
      console.log(argument);
    }
  ]);
}
logNames("Max", "Moritz");
