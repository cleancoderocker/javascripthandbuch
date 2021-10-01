'use strict';
function Item(name, price, author, isbn) {
  this.name = name;
  this.price = price;
  this.author = author;
  this.isbn = isbn;
  this.printDescription = function() {
    console.log(`${this.author}: ${this.name}`);
  }
}