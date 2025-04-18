// script.js
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderemos pronto.");
    this.reset();
  });


  // 🍔 Toggle del menú hamburguesa
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});




// 🎞️ Carrusel automático de ejemplos
const imagenes = document.querySelectorAll('.carrusel-imagenes img');
const flechaIzq = document.querySelector('.flecha.izquierda');
const flechaDer = document.querySelector('.flecha.derecha');
let indice = 0;
let intervalo;

function mostrarImagen(i) {
  imagenes.forEach(img => img.classList.remove('activo'));
  imagenes[i].classList.add('activo');
}

function siguienteImagen() {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
}

function anteriorImagen() {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
}

function iniciarCarrusel() {
  intervalo = setInterval(siguienteImagen, 3000);
}

function detenerCarrusel() {
  clearInterval(intervalo);
}

flechaDer.addEventListener('click', () => {
  siguienteImagen();
  detenerCarrusel();
  iniciarCarrusel();
});

flechaIzq.addEventListener('click', () => {
  anteriorImagen();
  detenerCarrusel();
  iniciarCarrusel();
});

mostrarImagen(indice);
iniciarCarrusel();

  