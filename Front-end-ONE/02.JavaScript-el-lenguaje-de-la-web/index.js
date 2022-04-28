/* Importación de clases */
import { Cliente } from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

// const cliente2 = new Cliente('Maria', '98765432', '8989');

const empleado = new Empleado('Juan Perez', '1234343', 10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, '12345'));  // dene retornar true o false

const gerente = new Gerente('Pedro Rivas', '232344', 12000);
gerente.asignarClave('6556');
console.log(SistemaAutenticacion.login(gerente, '6556'));  // dene retornar true o false

// const director = new Director('Elena Moreno', '232323', 15000);

const cliente = new Cliente('Federico', '12345678', '123224');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente, '01111'));  // dene retornar true o false
