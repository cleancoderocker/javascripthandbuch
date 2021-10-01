'use strict';
$(document).ready(() => {
  const inputElements = $('input');         // alle <input>-Elemente
  const max = $('#max');                    // Element mit ID "max"
  const oddElements = $('.odd');            // Elemente mit Klasse "odd"
  const elements = $('td, th');             // alle <td>- und <th>-Elemente
  const inputMax = $('input[name="max"]');  // <input>-Elemente, deren
                                            // name-Attribut den Wert "max" hat
  const oddRows = $('tr').odd();            // alle "ungeraden" <tr>-Elemente
  const evenRows = $('tr').even();          // alle "geraden" <tr>-Elemente
  const listItemsAtIndex = $('li:eq(2)');   // alle <li>-Elemente an Index 2
  const allOthers = $(':not(li)');          // alle Nicht-<li>-Elemente
  const notExample = $(':not(.example)');   // alle Elemente ohne CSS-Klasse "example"
});
