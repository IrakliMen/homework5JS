// button
let button = document.querySelector(".button");

button.addEventListener("click", () => {
    let paragraph = document.createElement("p");
    paragraph.textContent = "Hello, Dynamic World!"
    document.body.appendChild(paragraph);
  });



//burger menu
let burger = document.querySelector(".burger");
let menu = document.querySelector(".nav_header");

burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });


//   edit paragraph text
let editText = document.querySelector("p");
editText.textContent = "New Text Content";

