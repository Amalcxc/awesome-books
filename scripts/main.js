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

  filterBooks (ev) {
    listedBooks.books = listedBooks.books.filter((book) => book !== listedBooks.books[ev.target]);
    localStorage.setItem('booksData', JSON.stringify(listedBooks.books));
    window.location.reload();
  }
}

let listedBooks = new ListedBooks();

if ('booksData' in localStorage) {
  listedBooks.books = JSON.parse(localStorage.getItem('booksData'));
}

const form = document.getElementById('form');
form.addEventListener('submit', listedBooks.addBook);


const bookList = document.getElementById('listed-books');
bookList.style.listStyle = 'none';
bookList.style.padding = '0';

for (let i = 0; i < listedBooks.books.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.style.marginBottom = '10px';
  bookList.appendChild(listItem);
  let para = document.createElement('p');
  para.style.display = 'block';
  para.style.margin = '0';
  para.textContent = listedBooks.books[i].title;
  listItem.appendChild(para);
  para = document.createElement('p');
  para.style.display = 'block';
  para.style.margin = '0';
  para.textContent = listedBooks.books[i].author;
  listItem.appendChild(para);
  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  removeButton.textContent = 'Remove';
  listItem.appendChild(removeButton);
  const divider = document.createElement('hr');
  listItem.appendChild(divider);
}