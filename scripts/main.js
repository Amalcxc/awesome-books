class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let books = [];

const form = document.getElementById('form');


if ('booksData' in localStorage) {
  books = JSON.parse(localStorage.booksData);
}

function addBook(event) {
  books.push(new Book(form[0].value, form[1].value));
  localStorage.setItem('booksData', JSON.stringify(books));

}

form.addEventListener('submit', addBook);

const bookList = document.getElementById('listed-books');

for(let i = 0; i < books.length; i+=1){
  let bookTitle = document.createElement('p');
  bookTitle.textContent = books[i].title;
  bookList.appendChild(bookTitle);
}

