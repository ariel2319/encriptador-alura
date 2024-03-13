document.getElementById("resultado").value = " Aquí el texto encriptado... ";

let label = document.getElementById("rules");
let textArea = document.getElementById("texto");
let copy = document.getElementById("copy");

/* Manejo de eventos */

textArea.addEventListener("input", function (event) {
  let texto = event.target.value;
  let textoMinusculas = texto.toLowerCase().replace(/[áéíóúÁÉÍÓÚüÜñÑ1234567890¨´]/g, "");

  if (texto !== textoMinusculas) {
    event.target.value = textoMinusculas;
    label.style.color = "crimson";
    label.style.fontSize = "medium";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 850) {
    document.getElementById("resultado").style.backgroundImage = "url(searching.png)";
  } else {
    document.getElementById("resultado").style.backgroundImage = "none";
  }
})

/* funciones */

function encriptar() {
  let texto = document.getElementById("texto").value;
  let resultado = document.getElementById("resultado");

  if (texto != "") {
    resultado.value = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("resultado").style.backgroundImage = "none";
    copy.disabled = false;
  } else {
    label.style.color = "crimson";
    label.style.fontSize = "medium";
  }
}

function desencriptar() {
  var texto = document.getElementById("texto").value;
  var resultado = document.getElementById("resultado");

  if (texto !== "") {
    resultado.value = texto.replace(/\benter\b/g, "e").replace(/\bimes\b/g, "i").replace(/\bai\b/g, "a").replace(/\bober\b/g, "o").replace(/\bufat\b/g, "u");
  } else {
    label.style.color = "crimson";
    label.style.fontSize = "medium";
  }
}

function copiar() {
  let resultado = document.getElementById("resultado");
  if (copy.disabled === false) {
    resultado.select();
    document.execCommand("copy");
  }
}

function pegarTexto() {
  navigator.clipboard.readText().then(text => {
    document.getElementById("texto").value = text;
  }).catch(err => {
    console.error('Error al pegar texto: ', err);
  });
}

function limpiar() {
  textArea.value = "";
  document.getElementById("resultado").value = " Aquí el texto encriptado... ";
  label.style.color = "var(--text-color)";
  label.style.fontSize = "0.7rem";
  copy.disabled = true;
  /* console.log(window.innerWidth, 'ancho'); */
  if (window.innerWidth > 850) {
    document.getElementById("resultado").style.backgroundImage = "url(searching.png)";
  } else {
    document.getElementById("resultado").style.backgroundImage = "none";
  }
}

/* DARK MODE */

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const selectedTheme = localStorage.getItem('selected-theme');

const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
} else {
  if (userHasDarkTheme) document.body.classList.add(darkTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
})