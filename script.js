document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');

        // Actualiza el atributo aria-expanded para accesibilidad
        const isActive = menu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isActive);
    });
});
