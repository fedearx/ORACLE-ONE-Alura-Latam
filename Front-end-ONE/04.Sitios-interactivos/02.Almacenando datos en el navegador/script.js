import checkComplete from "./component/checkComplete.js";
import deleteIcon from "./component/deleteIcon.js";

// Immediately invoked function expression IIFE
// funciones que se declarna y ejecutan
//(() => {

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {

  evento.preventDefault();          // detiene el funcionamiento por defecto

  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const calendar = document.querySelector('[data-form-date]');
  const date = calendar.value;
  console.log(date);



  // elem padre donde voy a insertar el content
  const list = document.querySelector('[data-list]');

  // creo un elemento
  const task = document.createElement('li');
  task.classList.add('card');     // le agrego la clase card a li
  input.value = '';


  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);

  // task.innerHTML = content;         // lo copio en el html
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  // al elem list quiero agregarle un hijo
  list.appendChild(task);
}

//  funcion normal
// btn.addEventListener("click", function (evento) {
// funcion flecha o funcion anonima
btn.addEventListener("click", createTask);

//})();     // los () la invocan inmediatamente



