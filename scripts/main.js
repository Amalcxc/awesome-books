class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let books = [];

const form = document.getElementById('form');

if ('booksData' in localStorage) {
  books = JSON.parse(localStorage.getItem('booksData'));
}

const addBook = () => {
  books.push(new Book(form[0].value, form[1].value));
  localStorage.setItem('booksData', JSON.stringify(books));
};

const filterBooks = (i) => {
  books = books.filter((book) => book !== books[i]);
  localStorage.setItem('booksData', JSON.stringify(books));
  window.location.reload();
};

form.addEventListener('submit', addBook);

const bookList = document.getElementById('listed-books');
bookList.style.listStyle = 'none';
bookList.style.padding = '0';

for (let i = 0; i < books.length; i += 1) {
  const listItem = document.createElement('li');
  listItem.style.marginBottom = '10px';
  bookList.appendChild(listItem);
  let para = document.createElement('p');
  para.style.display = 'block';
  para.style.margin = '0';
  para.textContent = books[i].title;
  listItem.appendChild(para);
  para = document.createElement('p');
  para.style.display = 'block';
  para.style.margin = '0';
  para.textContent = books[i].author;
  listItem.appendChild(para);
  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  removeButton.textContent = 'Remove';
  listItem.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    filterBooks(i);
  });
  const divider = document.createElement('hr');
  listItem.appendChild(divider);
}