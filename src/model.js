export class Nodo {
  constructor(nombre, numero) {
      this.nombre = nombre;
      this.numero = numero;
      this.siguiente = null;
  }
}

export class Cola {
  constructor() {
      this.primero = null;
      this.ultimo = null;
  }

  encolar(nombre, numero) {
      const nuevoNodo = new Nodo(nombre, numero);
      if (!this.primero) {
          this.primero = nuevoNodo;
          this.ultimo = nuevoNodo;
      } else {
          this.ultimo.siguiente = nuevoNodo;
          this.ultimo = nuevoNodo;
      }
  }

  desencolar() {
      if (!this.primero) return null;
      const nodoDesencolado = this.primero;
      this.primero = this.primero.siguiente;
      return nodoDesencolado;
  }
}

export const agenda = new Cola();
