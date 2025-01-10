// Mobile Dropdown Toggle Script
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        navLinks.style.left = '0';
    } else {
        navLinks.style.left = '-100%';
    }
});
