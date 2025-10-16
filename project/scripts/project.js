document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});