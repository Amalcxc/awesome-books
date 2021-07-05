class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const books = [];

const form = document.getElementById('form');

function addBook(event) {
  books.push(new Book(form[0].value, form[1].value));
  event.preventDefault();
}

form.addEventListener('submit', addBook);



