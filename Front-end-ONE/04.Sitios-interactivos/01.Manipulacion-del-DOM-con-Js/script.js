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
  taskContent.appendChild(checkComplete());

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);

  // backticks
  const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  // task.innerHTML = content;         // lo copio en el html

  task.appendChild(taskContent);
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

}





