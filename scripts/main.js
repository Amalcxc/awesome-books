/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class ListedBooks {
  constructor() {
    this.books = [];
  }

  addBook(ev) {
    listedBooks.books.push(new Book(ev.srcElement[0].value, ev.srcElement[1].value));
    localStorage.setItem('booksData', JSON.stringify(listedBooks.books));
  }

  filterBooks(ev) {
    if (ev.target && ev.target.nodeName === 'BUTTON') {
      listedBooks.books = listedBooks.books.filter(
        (book) => book !== listedBooks.books[ev.target.className],
      );
      localStorage.setItem('booksData', JSON.stringify(listedBooks.books));
      window.location.reload();
    }
  }
}

let listedBooks = new ListedBooks();

if ('booksData' in localStorage) {
  listedBooks.books = JSON.parse(localStorage.getItem('booksData'));
}

const abSection = document.getElementById('books');
const form = document.getElementById('form');

const bookList = document.createElement('ul');
bookList.className = 'listed-books';
abSection.appendChild(bookList);

for (let i = 0; i < listedBooks.books.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.className = 'book-list-item';
  listItem.innerHTML = `<p>${listedBooks.books[i].title} by ${listedBooks.books[i].author}</p>
  <button class="${i}">Remove</button>`;
  bookList.appendChild(listItem);
}

form.addEventListener('submit', listedBooks.addBook);
bookList.addEventListener('click', listedBooks.filterBooks);

// Remove Book List

const bookItem = document.getElementsByClassName('book-list-item');

if (bookItem.length === 0) {
  bookList.remove();
}

// Time

var DateTime = luxon.DateTime;
const time = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const timeSection = document.getElementById('time');
timeSection.innerText = time;