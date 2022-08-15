"use strict";

let myLibrary = [];
const newBookBtn = document.querySelector(".newBookBtn");
const libraryContainer = document.querySelector(".container");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const hasRead = document.querySelector(".hasRead");
const submitBtn = document.querySelector(".submit");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, Has read : ${this.read}`;
  };
}

function createBook() {
  let newBook = new Book(
    title.value,
    author.value,
    pages.value,
    hasRead.checked
  );
  myLibrary.push(newBook);
}

newBookBtn.addEventListener("click", createBook);
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
