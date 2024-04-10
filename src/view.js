import { agenda } from './model.js';

export const view = {
    mostrarCita: function(nombre, numero) {
        const citasDiv = document.getElementById('citas');
        const citaP = document.createElement('p');
        citaP.textContent = `Nombre: ${nombre}, Número: ${numero}`;
        citasDiv.appendChild(citaP);
    },

    limpiarCitas: function() {
        const citasDiv = document.getElementById('citas');
        citasDiv.innerHTML = '';
    }
};
