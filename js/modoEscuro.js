const switchInput = document.querySelector(".cabecalho__switch-input");
const body = document.body;

switchInput.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
});
