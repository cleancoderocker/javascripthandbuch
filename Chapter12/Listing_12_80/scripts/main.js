const names = [
  'Mustermann, Max',
  'Müller, Max',
  'Mustermann, Moritz',
  'Mueller, Moritz',
  'Meier, Petra',
  'Meier, Peter'
  ];
const nameCollator = new Intl.Collator('en', {usage: 'sort'});
console.log(names.sort(nameCollator.compare));
// [
// "Meier, Peter",
// "Meier, Petra,
// "Mueller, Moritz",
// "Müller, Max",
// "Mustermann, Max",
// "Mustermann, Moritz"
//]
