// importo el modulo para escribir en l apagina

import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

// quiero leer lo que ya tengo en el LocalStorage
export const readTasks = () => {

    const list = document.querySelector("[data-list]");  // lista donde queremos agregar nuestras listas ya almacenadas

    // nos devolveria un objeto JSON
    // const taskList = localStorage.getItem("tasks");
    // entonces lo convertimos en un objeto de js
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];  // por si viene nulo le asignamos un array vacio
    // console.log(taskList);

    const dates = uniqueDates(taskList);

    console.log(dates);

    dates.forEach( date => {
        console.log(date);
    });



    // recoerremos lo guardado
    taskList.forEach((task) => {
        list.appendChild(dateElement(task.dateFormat));
        list.appendChild(createTask(task));  // createtask recibe cada uno de los elem que tenemos almacenados
    });
}