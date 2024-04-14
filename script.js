function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburguer-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
}
