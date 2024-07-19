//Object creation and access
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  getInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  updateYear: function (newyear) {
    this.year = newyear;
    console.log(`Year updated to ${this.year}`);
  },
  getDetails: function () {
    return `${this.title} (${this.year})`;
  },
};
console.log(book);
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);

console.log(book.getInfo());
book.updateYear(2024);

//Nested obj
let library = {
  name: "Kashish",
  books: [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
  ],
};
console.log(library);
console.log(library.name);
library.books.forEach((book) => {
  console.log(book.title);
});

console.log(book.getDetails());
for (let prop in book) {
  console.log(`${prop}: ${book[prop]}`);
}
console.log("Properties of the book object:");
Object.keys(book).forEach((key) => {
  console.log(`${key}: ${book[key]}`);
});
console.log("\nValues of properties:");
Object.values(book).forEach((value) => {
  console.log(value);
});
