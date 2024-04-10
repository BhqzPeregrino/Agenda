import { controller } from './src/controller.js';

document.getElementById('agregarBtn').addEventListener('click', controller.agregarCita);
document.getElementById('verBtn').addEventListener('click', controller.mostrarProximaCita);
