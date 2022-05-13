import { addTask } from "./component/addTask.js";

// Immediately invoked function expression IIFE
// funciones que se declarna y ejecutan
//(() => {

const btn = document.querySelector("[data-form-btn]");


//  funcion normal
// btn.addEventListener("click", function (evento) {
// funcion flecha o funcion anonima
btn.addEventListener("click", addTask);       // cuando se hace click se agrega la tarea

//})();     // los () la invocan inmediatamente



