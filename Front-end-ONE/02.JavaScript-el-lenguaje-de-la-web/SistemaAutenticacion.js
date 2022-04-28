export class SistemaAutenticacion {

  static login(usuario, clave) {
    // console.log(clave);
    // console.log(empleado.clave);

    // autenticable esta dentro del objeto y autenticable es una funcion
    if ("autenticable" in usuario && usuario.autenticable instanceof Function)     // si no existe, no ejecuta
      // autenticable es una interface
      return usuario.autenticable(clave);
    else
      return false;

    //return usuario.clave == clave;
  }

}