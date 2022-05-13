const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  //  i.classList.add('fa-check-square');
  //   i.classList.add('icon');
  i.addEventListener('click', (event) => completeTask(event, id));
  return i;
};

const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');              // toggle si no existe la crea, si existe la saca
  element.classList.toggle('completeIcon');    // esta en ccs y da el color azul
  element.classList.toggle('far');
  // console.log('check id', id);

  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // console.log(tasks);

  const index = tasks.findIndex((item) => item.id === id );
  //console.log(index);
  tasks[index]["complete"] = !tasks[index]["complete"];
  //console.log(tasks);

  localStorage.setItem('tasks', JSON.stringify(tasks));

};

export default checkComplete;
