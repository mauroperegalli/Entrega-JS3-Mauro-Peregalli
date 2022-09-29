const pizzas = [
  {
      id : 1,
      nombre : "Napolitana",
      ingredientes:["Muzzarella", "Tomate", "Ajo"],
      precio: 500,
      foto : "./img/muzza.jpg"
  },
  {
      id : 2,
      nombre : "Hawaiana",
      ingredientes:["Muzzarella", "Anana", "Jamon"],
      precio: 700,
      foto : "./img/hawaiana.jpg"
  },
  {
      id : 3,
      nombre : "Rucula",
      ingredientes:["Muzzarella", "Jamon", "Rucula"],
      precio: 750,
      foto : "./img/rucula.jpg"
  },
  {
      id : 4,
      nombre : "Jamon y morron",
      ingredientes:["Muzzarella", "Jamon", "Morron Verde", "Morron Rojo"],
      precio: 550,
      foto : "./img/jamonymorron.jpg"
  },
  {
      id : 5,
      nombre : "Fugazzeta",
      ingredientes:["Muzzarella", "Cebolla"],
      precio: 700,
      foto : "./img/fugazzeta.jpg"
  },
  {
      id : 6,
      nombre : "De la casa",
      ingredientes:["Muzzarella", "Cheddar", "Salchichas","Panceta"],
      precio: 900,
      foto : "./img/lacasa.jpg"
  }
];

const input = document.getElementById('input-number');
const submitbtn = document.getElementById('submit');
const nombre = document.getElementById('nombre');
const imagen = document.getElementById('imagen');
const ingredientes = document.getElementById('ingredientes');
const precio = document.getElementById('precio');

const ultimapizza = JSON.parse(localStorage.getItem('ultimapizza')) || [];

const saveLocalStorage = (e) => {
  localStorage.setItem("ultimapizza", JSON.stringify(e));
};

window.addEventListener("DOMContentLoaded", () => {
    showpizza(ultimapizza.id);
});

function showpizza (idnumber){
  const Lapizzaelegida = pizzas.filter((pizza) => pizza.id == idnumber)
  for (pizza of Lapizzaelegida){
          nombre.innerHTML = `${pizza.nombre}`;
          precio.innerHTML = `$${pizza.precio}`;
          ingredientes.innerHTML = `${pizza.ingredientes}`;
          imagen.innerHTML = `<img src="${pizza.foto}" alt="Imagen de la pizza ${pizza.nombre} ">`;
          nombre.classList.remove('error');
          precio.classList.remove('error');
          saveLocalStorage(pizza);
  }
}


function showError () {
  nombre.innerHTML = 'Id Invalido';
  precio.innerHTML = `Escoja otro entre 1 y ${pizzas.length}`;
  ingredientes.innerHTML = ``;
  imagen.innerHTML = ``;
  nombre.classList.add('error');
  precio.classList.add('error');
  saveLocalStorage([]);
}

submitbtn.addEventListener('click', submit);

function submit  (e) {
  e.preventDefault();
  var idnumber = input.value.trim();
  if(idnumber <= pizzas.length && idnumber > 0){
      showpizza(idnumber);
  }
  else{
      showError();
  }
}