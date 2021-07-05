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
bookList.style.listStyle = 'none'
bookList.style.padding = '0';

for(let i = 0; i < books.length; i+=1){
  const listItem = document.createElement('li');
  listItem.style.marginBottom = '10px'
  bookList.appendChild(listItem);
  let para = document.createElement('p');
  para.style.display = 'block'
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
  const divider = document.createElement('hr');
  listItem.appendChild(divider);
}

const remBtnList = Array.from(document.getElementsByClassName('remove-button'));

const filterBooks = (i) => {
  books = books.filter(book => book !== books[i]);
  localStorage.setItem('booksData', JSON.stringify(books));
  location.reload();
};

for (let i = 0; i < remBtnList.length; i += 1) {
  remBtnList[i].addEventListener('click', () => {
    filterBooks(i);
  });
}

