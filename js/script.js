// Desplazamiento suave al hacer clic en los enlaces del menú

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();

        const seccion = document.querySelector(this.getAttribute('href'));

        if (seccion) {
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});