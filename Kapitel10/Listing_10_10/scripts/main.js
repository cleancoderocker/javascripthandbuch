'use strict';
$(document).ready(() => {
  let inputElements = $('input');        // alle <input>-Elemente
  let max = $('#max');                   // Element mit ID "max"
  let oddElements = $('.odd');           // Elemente mit Klasse "odd"
  let elements = $('td, th');            // alle <td>- und <th>-Elemente
  let inputMax = $('input[name="max"]'); // <input>-Elemente, deren
                                         // name-Attribut den Wert "max" hat
  let oddRows = $('tr').odd();            // alle "ungeraden" <tr>-Elemente
  let evenRows = $('tr').even();          // alle "geraden" <tr>-Elemente
  let listItemsAtIndex = $('li:eq(2)');   // alle <li>-Elemente an Index 2
  let allOthers = $(':not(li)');          // alle Nicht-<li>-Elemente
  let notExample = $(':not(.example)');   // alle Elemente ohne CSS-Klasse "example"
});
