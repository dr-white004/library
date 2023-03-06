let myLibrary = [];

function Book(title, author, numberPages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numberPages = numberPages;
  this.read = read;
}

function toggleRead(read) {
  this.read = !this.read;
}

function addBookToLibrary() {
  // do stuff here
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const numberPages = document.querySelector('.numb').value;
  const read = document.querySelector('#rea').value;

  console.log(numberPages);
  let curBook = new Book(title, author, numberPages, read);
  myLibrary.push(curBook);
  console.log(myLibrary);
}

let executer = document.querySelector('#execute');
executer.addEventListener('click', function () {
  let theForm = document.querySelector('#formm');
  theForm.style.display = 'flex';
});

let paster = document.querySelector('#give');
paster.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
  apear();
});

let npage = document.createElement('button');
npage.addEventListener('click', function (index) {
  myLibrary[index].toggleRead();
  console.log('me');
  apear();
});

function apear() {
  let newlyCreated = document.querySelector('.newly-created');

  newlyCreated.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let onit = myLibrary[i];
    let present = document.createElement('div');
    present.classList.add('show');
    present.innerHTML = `<p>${onit.title}</p> <p>${onit.author}</p> 
    <p>${onit.numberPages}</p> `;

    npage.innerText = `${onit.read ? 'Read' : 'Not Read'} `;

    let press = document.createElement('button');
    press.innerText = 'remove';
    press.addEventListener('click', function removeBook(index) {
      myLibrary.splice(index, 1);
      apear();
    });

    present.appendChild(press);
    present.appendChild(npage);
    newlyCreated.appendChild(present);
  }
}

// let press = document.createElement('button');
// press.innerText = 'remove';
// press.addEventListener('click', function removeBook(index) {
//   myLibrary.splice(index, 1);
//   apear();
// });
