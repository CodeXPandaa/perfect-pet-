document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const navbarRight = document.getElementById('navbar-right');

    hamburger.addEventListener('click', function() {
        navbarRight.classList.toggle('active');
    });
});