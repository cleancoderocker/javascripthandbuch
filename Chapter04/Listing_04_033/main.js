'use strict';
const item = {};
item['name'] = 'JavaScript: The Comprehensive Guide';
item['price'] = 59.95;
item['author'] = 'Philip Ackermann';
item['isbn'] = '978-1-4932-2286-5';
item['printDescription'] = function() {
  console.log(`${this.author}: ${this.name}`);
}
