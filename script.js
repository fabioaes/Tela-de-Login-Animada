const login = document.querySelector("#login");

const senha = document.querySelector("#senha");
const img = document.querySelector("img");
const btn = document.getElementById("enter");

login.addEventListener("keyup", () => {
  if (login.value.length <= 7) {
    img.setAttribute("src", "https://raw.githubusercontent.com/fabioaes/Tela-de-Login-Animada/main/img/1.png");
  }
  if (login.value.length >= 8) {
    img.setAttribute("src", "https://raw.githubusercontent.com/fabioaes/Tela-de-Login-Animada/main/img/2.png");
  }
  if (login.value.length >= 13) {
    img.setAttribute("src", "https://raw.githubusercontent.com/fabioaes/Tela-de-Login-Animada/main/img/3.png");
  }
});
