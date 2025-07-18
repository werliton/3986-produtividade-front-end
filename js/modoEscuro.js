const switchInput = document.querySelector(".cabecalho__switch-input");
const body = document.body;
const logo = document.querySelector(".cabecalho__logo-image");

switchInput.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
  const isDarkmode = this.checked;

  logo.src = isDarkmode
    ? "../img/modo_escuro/vidflow-logo-dark-mode.png"
    : "../img/modo_claro/vidflow-logo-light-mode.png";
});
