/*          Programación Web
            -Proyecto WebPy-     
    López Carranza - Medina Sifuentes 
              (Grupo 14)             
*/

document.querySelector('.menu-boton').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cartas', {delay: 500});
ScrollReveal().reveal('.cartas-banner-uno', {delay: 500});
ScrollReveal().reveal('.cartas-banner-dos', {delay: 500});
