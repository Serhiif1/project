const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuLinks = document.querySelectorAll(".menu ul li a");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    menu.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    menu.classList.add("hidden");
    overlay.classList.add("hidden");
}
