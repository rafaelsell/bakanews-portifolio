const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const header = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu);

