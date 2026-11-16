/* ============================================
            HTML Element Selection
   ============================================
*/
const hamburgerIcon = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

const registButtonNav = document.querySelector('.nav-register')

const navLinks = document.querySelectorAll('.main-nav a');

/* ============================================
              Hamburger Icon
   ============================================
*/
hamburgerIcon.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
    registButtonNav.classList.toggle('nav-register-active')   
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
        registButtonNav.classList.toggle('nav-register-active')           
    });
});


