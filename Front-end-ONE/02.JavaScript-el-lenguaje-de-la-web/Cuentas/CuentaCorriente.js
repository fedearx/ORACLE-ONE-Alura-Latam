// import { Cliente } from "../Cliente.js";
import { Cuenta } from "./Cuenta.js"

export class CuentaCorriente extends Cuenta 
{
  static cantidadCuentas = 0;   // con static indico que este atributo es comun para todas las cuentas

  constructor(cliente, numero, agencia) {
    // toma cosas del padre
    super(cliente, numero, agencia, 0);  // referencia al constructor de la clase padre
    CuentaCorriente.cantidadCuentas++;  // en cada momento que se crea un obj se aumenta el contador, indico la Clase no con this, porque seria para el obj que se crea actualmente
  }

  retirarDeCuenta(valor) {
    super._retirarDeCuenta(valor, 5);
  }


}
