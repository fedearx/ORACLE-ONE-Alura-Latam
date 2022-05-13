import { displayTasks } from "./readTasks.js";

const deleteIcon = (id) => {
  // backticks
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener('click', () =>  deleteTask(id))
  return i
};

const deleteTask = (id) => {
  const li = document.querySelector('[data-list]');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // console.log(tasks);
  // console.log('id', id);
  const index = tasks.findIndex( (item) => item.id === id);
  tasks.splice(index, 1);       // 1 es la cantidad de elemen a eliminar desde la posisicon de index
  // lo vuelvo a almacebnar en el localStorage
  li.innerHTML = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // // console.log(event.taget);
  // //console.log(event.target.parentElement);  // veo el elemento padre, que me contiene
  // const parent = event.target.parentElement;
  // parent.remove();
  displayTasks();
};

export default deleteIcon;