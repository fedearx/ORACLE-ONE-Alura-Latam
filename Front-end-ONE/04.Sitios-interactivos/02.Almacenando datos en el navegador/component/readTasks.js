// importo el modulo para escribir en l apagina

import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

// quiero leer lo que ya tengo en el LocalStorage
export const displayTasks = () => {

    // console.log(uuid.v4());             // veo el uuid

    const list = document.querySelector("[data-list]");  // lista donde queremos agregar nuestras listas ya almacenadas

    // nos devolveria un objeto JSON
    // const taskList = localStorage.getItem("tasks");
    // entonces lo convertimos en un objeto de js
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];  // por si viene nulo le asignamos un array vacio
    // console.log(taskList);

    const dates = uniqueDates(taskList);
    const order = orderDates(dates);
//    console.log(order);

//    console.log(dates);

    dates.forEach( date => {
        //console.log(date);
        const dateMoment = moment(date, "DD/MM/YYYY");
        // console.log(dateMoment);
        list.appendChild(dateElement(date));
        // recoerremos lo guardado
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            //console.log(taskDate);

            const diff = dateMoment.diff(taskDate);
//            console.log(diff);
            if ( diff === 0 ) {
                // list.appendChild(dateElement(task.dateFormat));
                list.appendChild(createTask(task));  // createtask recibe cada uno de los elem que tenemos almacenados
            }
        });
    });




}