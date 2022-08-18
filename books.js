"use strict";

let myLibrary = [];
const newBookBtn = document.querySelector(".newBookBtn");
const createBookBtn = document.querySelector(".create");

const libraryContainer = document.querySelector(".container");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const hasRead = document.querySelector(".hasRead");
const submitBtn = document.querySelector(".submit");
const bookForm = document.querySelector(".form-container");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = false;
  this.info = function () {
    return `${this.title}\n  ${this.author}\n Pages: ${this.pages}`;
  };
}

function addBookToLibrary() {
  let newBook = new Book(
    title.value,
    author.value,
    pages.value
    // hasRead.checked
  );
  myLibrary.push(newBook);
}
// Display books to the DOM
function displayBooks(arr) {
  let bookIndex = 0;
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }
  arr.forEach((element) => {
    let book = document.createElement("div");
    let removeBookBtn = document.createElement("button");
    let readBookBtn = document.createElement("button");

    removeBookBtn.innerText = "Remove";
    readBookBtn.innerText = "Read";
    book.innerText = element.info();
    libraryContainer.appendChild(book);
    book.appendChild(readBookBtn);
    book.appendChild(removeBookBtn);
    removeBookBtn.classList.add("removeBtn");
    readBookBtn.classList.add("readBookBtn");
    book.classList.add("book");
    if (!myLibrary[bookIndex].hasRead) {
      book.classList.add("notRead");
    }
    book.dataset.index = bookIndex;
    bookIndex++;
    //Remove button
    removeBookBtn.addEventListener("click", function () {
      libraryContainer.removeChild(book);
      myLibrary.splice(myLibrary[myLibrary.indexOf(book)], 1);
    });
    //Read button
    readBookBtn.addEventListener("click", function () {
      if (myLibrary[book.dataset.index].hasRead === false) {
        myLibrary[book.dataset.index].hasRead = true;
        book.classList.toggle("notRead");
      } else {
        myLibrary[book.dataset.index].hasRead = false;
        book.classList.toggle("notRead");
      }
    });
  });
}
//Toggle Form
function displayForm() {
  bookForm.classList.toggle("hidden");
}

newBookBtn.addEventListener("click", displayForm);
createBookBtn.addEventListener("click", addBookToLibrary);
createBookBtn.addEventListener("click", function () {
  displayBooks(myLibrary);
  displayForm();
});

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());
