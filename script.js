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

  