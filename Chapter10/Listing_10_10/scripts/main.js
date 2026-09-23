'use strict';
$(document).ready(() => {
  const inputElements = $('input');          // all <input> elements
  const john = $('#john');                   // element with the ID "john"
  const oddElements = $('.odd');             // elements of the class "odd"
  const elements = $('td, th');              // all <td>- und <th> elements
  const inputJohn = $('input[name="john"]'); // <input> elements the
                                             // name attribute of which has the value "john"
  const oddRows = $('tr').odd();              // all "odd" <tr> elements
  const evenRows = $('tr').even();            // all "even" <tr> elements
  const listItemsAtIndex = $('li:eq(2)');     // all <li> elements at index 2
  const allOthers = $(':not(li)');            // all elements other than <li>
  const notExample = $(':not(.example)');     // all elements without the CSS 
                                              // class "example"
});

