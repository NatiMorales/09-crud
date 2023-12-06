import Contacto from "./classContacto.js";

//variables globales
//const contactoNuevo = new Contacto(1, "algun nombre", "apellido", "skjdkfj@jf.com", 734789);
const agenda = JSON.parse(localStorage.getItem("agendaKey"));
const formularioContacto = document.querySelector("form");
const nombre = document.querySelector("#nombre"),
  apellido = document.querySelector("#apellido"),
  email = document.querySelector("#email"),
  telefono = document.querySelector("#telefono");
console.log(formularioContacto);

//funciones
const crearContacto = (e) => {
  e.preventDefault();
  console.log("desde la funcion crear contacto");
  //crear el objeto con los datos del formulario
  const contactoNuevo = new Contacto(
    1,
    nombre.value,
    apellido.value,
    email.value,
    telefono.value
  );
  //guardar el objeto en un array agenda
  agenda.push(contactoNuevo);
  //guardar la agenda en localstorage
  guardarEnLocalStorage();
  console.log(agenda); 
  limpiarFormulario();
};
const guardarEnLocalStorage = () => {
    localStorage.setItem("agendaKey",JSON.stringify(agenda));
};

const limpiarFormulario = () => {
    formularioContacto.reset();
}

//logica
formularioContacto.addEventListener("submit", crearContacto);
