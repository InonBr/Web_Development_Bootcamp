let lastInList = document.querySelectorAll(".item")[2];
let title = document.getElementById("title");
let checkbox = document.getElementById("checkbox");
let button = document.querySelector(".btn");

const checkboxClick = () => {
  checkbox.addEventListener('click', (event) => {
    title.classList.toggle('big-blue-text');

    if (title.classList.contains("big-blue-text")) {
      title.innerHTML = 'Good bye!';
    } else {
      title.innerHTML = 'Hello world!';
    }
  });
};

const btnClick = () => {
  button.addEventListener('click', (event) => {
    button.classList.toggle("lightblue-btn");

    if (button.classList.contains("lightblue-btn")) {
      button.innerHTML = 'Clicked!';
    } else {
      button.innerHTML = 'Click me!';
    }
  });
};

lastInList.innerHTML = 'Somthing else...';
lastInList.style.color = "lightblue";

checkboxClick();
btnClick();
