import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento) => {
    evento.preventDefault();          // detiene el funcionamiento por defecto

    // elem padre donde voy a insertar el content
    const list = document.querySelector('[data-list]');
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    // console.log(dateFormat);

    if ( value === "" || date === "") {
        //console.log("No crear la tarea");
        return;                          // regresa y no continua ejecutabndo el codigo que sigue
    }

    // inicializo los datos, despues de ingresar algo
    input.value = '';
    calendar.value = '';    

    // para que gusra si esta marcada o no la tarea
    const complete = false;

    const taskObj = {
        // value: value,
        value,
        // dateFormat: dateFormat
        dateFormat,
        complete,
        id: uuid.v4(),
    };

    // lo incializo a vacio
    list.innerHTML = "";

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];   // || indica qsi lo que esta adelante es nulo, le da un valor por defecto

    // no le mando el obj sino los valores.
    //taskList.push({value, dateFormat, complete});             // le añado taskObj al array
    taskList.push(taskObj);
    // si cierro la pesrtaña, la informacion desaparece, no persiste
    // sessionStorage.setItem("tasks", JSON.stringify(taskObj));
    // esti si guarda la info aunque se cierre la pestaña
    // localStorage.setItem(llave, valor);
    //  solo se almacena la ultima tarea que estoy registrando
    localStorage.setItem("tasks", JSON.stringify(taskList));   // lo convierte a formato JSON

    displayTasks();        // para que la ordene

//    const task = createTask(taskObj);
//    // al elem list quiero agregarle un hijo
//    list.appendChild(task);
};
  
  // con {le indicamos los valores que vamos a recibir}
export const createTask = ({ value, dateFormat, complete, id }) => {
      // creo un elemento
    const task = document.createElement('li');
    task.classList.add('card');     // le agrego la clase card a li

    const taskContent = document.createElement('div');
//    console.log(complete);

    const check = checkComplete(id);

    if (complete) {
      console.log('completada');
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }
    

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;         // lo copio en el html

    const dateElement = document.createElement("span");   // la etiqueta que vamos a crear
            dateElement.innerHTML = dateFormat                    // creo la linea del contenido

            task.appendChild(taskContent);
            task.appendChild(dateElement);            // escribo el elemento en la pagina
            task.appendChild(deleteIcon());
  
    return task;
  
  };
  