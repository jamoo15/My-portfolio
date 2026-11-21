console.log("Welcome to my developer portfolio!");

const project = document.querySelector(".project-card");

project.addEventListener("click", function () {
    alert("Welcome to my Personal Profile Tracker project!");
});
/* MOBILE MENU */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});