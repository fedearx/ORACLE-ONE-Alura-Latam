export class Cuenta {
  // atributos privados
  #cliente;
  #saldo;

  // construimos la pieza
  constructor(cliente, numero, agencia, saldo) {

    // objeto de tipo cuenta
    if (this.constructor == Cuenta) {
      throw new Error('No se debe instanciar objetos de la clase Cuenta');
      // console.error('No se debe instanciar objetos de la clase Cuenta');
    }

    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }

    // asigna atributo privado
    set cliente(valor) {  /* lo llama igual al atributo */
    if (valor instanceof Cliente)     // sol si es una instancia de cliente, le asigno el valor. asi no se daña la referebcia a cliente
      this.#cliente = valor;
    }
  
      // muestra atributo privado
    get cliente() {
      return this.#cliente;
    }  

  depositoEnCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
    return this.#saldo;
  }

  // metodo abstarcto, solo tiene la definicion pero no tiene la implementacion
  retirarDeCuenta(valor) {
    // this._retirarDeCuenta(valor, 0);
    throw new Error('Debe implementar el método retirtarDeCuenta en su clase');
  }

  // indico que es un metodo privado
  _retirarDeCuenta(valor, comision) {
    valor = valor * (1 + (comision/100));
    if (this.#saldo >= valor)
      this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);

    valor = 200;
    valor = valor * 1000;
  }

  prueba() {
    console.log('Método padre');
  }
}