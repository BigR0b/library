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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title},  ${this.author}, ${this.pages} pages Has Read : ${this.read}`;
  };
}

function addBookToLibrary() {
  let newBook = new Book(
    title.value,
    author.value,
    pages.value,
    hasRead.checked
  );
  myLibrary.push(newBook);
}

function displayBooks(arr) {
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }
  arr.forEach((element) => {
    let book = document.createElement("div");
    let removeBookBtn = document.createElement("button");
    removeBookBtn.innerText = "Remove";
    book.innerText = element.info();
    libraryContainer.appendChild(book);
    book.appendChild(removeBookBtn);
  });
}
function displayForm() {
  bookForm.classList.toggle("hidden");
}
newBookBtn.addEventListener("click", displayForm);
createBookBtn.addEventListener("click", addBookToLibrary);
createBookBtn.addEventListener("click", function () {
  displayBooks(myLibrary);
  displayForm();
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
