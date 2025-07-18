const switchInput = document.querySelector(".cabecalho__switch-input");
const body = document.body;
const logo = document.querySelector(".cabecalho__logo-image");

switchInput.addEventListener("change", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    logo.src = "../img/modo_escuro/vidflow-logo-dark-mode.png";
  } else {
    logo.src = "../img/modo_claro/vidflow-logo-light-mode.png";
  }
});
