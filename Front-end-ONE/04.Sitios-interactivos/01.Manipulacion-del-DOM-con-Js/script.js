const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {

  evento.preventDefault();          // detiene el funcionamiento por defecto

  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
}


//  funcion normal
// btn.addEventListener("click", function (evento) {
// funcion flecha o funcion anonima
btn.addEventListener("click", createTask);