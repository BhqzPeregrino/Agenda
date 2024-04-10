import { agenda } from './model.js';
import { view } from './view.js';

export const controller = {
    agregarCita: function() {
        const nombre = document.getElementById('nombre').value;
        const numero = document.getElementById('numero').value;
        if (nombre && numero) {
            agenda.encolar(nombre, numero);
            view.mostrarCita(nombre, numero);
        }
    },

    mostrarProximaCita: function() {
        const proximaCita = agenda.primero;
        if (proximaCita) {
            const nombre = proximaCita.nombre;
            const numero = proximaCita.numero;
            alert(`Próxima cita: Nombre: ${nombre}, Número: ${numero}`);
            this.eliminarProximaCita();
        } else {
            alert('No hay citas pendientes.');
        }
    },

    eliminarProximaCita: function() {
      const nodoDesencolado = agenda.desencolar();

      if (agenda.primero) {
          view.limpiarCitas();

          let nodo = agenda.primero;
          while (nodo) {
              view.mostrarCita(nodo.nombre, nodo.numero);
              nodo = nodo.siguiente;
          }
      } else {
          view.limpiarCitas();
      }

      const citasDiv = document.getElementById('citas');
      citasDiv.removeChild(citasDiv.firstChild);
  }
};
