const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {

  evento.preventDefault();          // detiene el funcionamiento por defecto

  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const task = document.querySelector("[data-task]");
  input.value = '';
  // backticks
  const content = `
  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML = content;         // lo copio en el html

  console.log(value);
}


//  funcion normal
// btn.addEventListener("click", function (evento) {
// funcion flecha o funcion anonima
btn.addEventListener("click", createTask);