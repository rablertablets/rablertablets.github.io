document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');

    // Toggle menu and navbar visibility
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    // Remove active classes on scroll
    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});
