import checkComplete from "./component/checkComplete.js";
import deleteIcon from "./component/deleteIcon.js";

// Immediately invoked function expression IIFE
// funciones que se declarna y ejecutan
//(() => {

const btn = document.querySelector("[data-form-btn]");

const addTask = (evento) => {
  // elem padre donde voy a insertar el content
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  // al elem list quiero agregarle un hijo
  list.appendChild(task);
}

// creo un array
const taskList = [];



const createTask = (evento) => {

  evento.preventDefault();          // detiene el funcionamiento por defecto

  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const calendar = document.querySelector('[data-form-date]');
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  // console.log(dateFormat);




  // creo un elemento
  const task = document.createElement('li');
  task.classList.add('card');     // le agrego la clase card a li
  input.value = '';


  const taskContent = document.createElement('div');

  const taskObj = {
    // value: value,
    value,
    // dateFormat: dateFormat
    dateFormat,
  };

  taskList.push(taskObj);             // le añado taskObj al array





  // si cierro la pesrtaña, la informacion desaparece, no persiste
  // sessionStorage.setItem("tasks", JSON.stringify(taskObj));
  // esti si guarda la info aunque se cierre la pestaña
  // localStorage.setItem(llave, valor);
  //  solo se almacena la ultima tarea que estoy registrando
  localStorage.setItem("tasks", JSON.stringify(taskList));


  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;         // lo copio en el html

  const dateElement = document.createElement("span");   // la etiqueta que vamos a crear
  dateElement.innerHTML = dateFormat                    // creo la linea del contenido

  task.appendChild(taskContent);
  task.appendChild(dateElement);            // escribo el elemento en la pagina
  task.appendChild(deleteIcon());

  return task;

}

//  funcion normal
// btn.addEventListener("click", function (evento) {
// funcion flecha o funcion anonima
btn.addEventListener("click", addTask);       // cuando se hace click se agrega la tarea

//})();     // los () la invocan inmediatamente



