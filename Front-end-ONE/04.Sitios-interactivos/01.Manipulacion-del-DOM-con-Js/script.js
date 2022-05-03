const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {

  evento.preventDefault();          // detiene el funcionamiento por defecto

  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  // elem padre donde voy a insertar el content
  const list = document.querySelector('[data-list]');

  // creo un elemento
  const task = document.createElement('li');
  task.classList.add("card");     // le agrego la clase card a li
  input.value = '';
  // backticks
  const content = `
  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML = content;         // lo copio en el html

  // al elem list quiero agregarle un hijo
  list.appendChild(task);


  
}


//  funcion normal
// btn.addEventListener("click", function (evento) {
// funcion flecha o funcion anonima
btn.addEventListener("click", createTask);