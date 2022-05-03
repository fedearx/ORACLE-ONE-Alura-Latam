// Immediately invoked function expression IIFE
// funciones que se declarna y ejecutan
(() => {

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {

  evento.preventDefault();          // detiene el funcionamiento por defecto

  const input = document.querySelector("[data-form-input]");
  const value = input.value;

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

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
//  i.classList.add('fa-check-square');
//   i.classList.add('icon');
i.addEventListener('click', completeTask);
  return i;
}

const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');              // toggle si no existe la crea, si existe la saca
  element.classList.toggle('completeIcon');    // esta en ccs y da el color azul
  element.classList.toggle('far');
};

  const deleteIcon = () => {
    // backticks
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener('click', deleteTask)

    return i
  }

  const deleteTask = (event) => {
    // console.log(event.taget);
    //console.log(event.target.parentElement);  // veo el elemento padre, que me contiene

    const parent = event.target.parentElement;
    parent.remove();

  }





})();     // los () la invocan inmediatamente



