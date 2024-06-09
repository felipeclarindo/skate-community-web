const buttonMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral");

buttonMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral--ativo")
})