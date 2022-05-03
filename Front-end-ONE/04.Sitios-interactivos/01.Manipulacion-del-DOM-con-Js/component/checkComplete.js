const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  //  i.classList.add('fa-check-square');
  //   i.classList.add('icon');
  i.addEventListener('click', completeTask);
  return i;
};

const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');              // toggle si no existe la crea, si existe la saca
  element.classList.toggle('completeIcon');    // esta en ccs y da el color azul
  element.classList.toggle('far');
};

export default checkComplete;
