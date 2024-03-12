
let textArea = document.getElementById("texto");
textArea.addEventListener("input", function (event) {
  let texto = event.target.value;
  let textoMinusculas = texto.toLowerCase().replace(/[áéíóúÁÉÍÓÚüÜñÑ1234567890¨´]/g, "");

  if (texto !== textoMinusculas) {
    event.target.value = textoMinusculas;
  }
});

function encriptar() {
  let texto = document.getElementById("texto").value;
  let resultado = document.getElementById("resultado");

  resultado.value = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let resultado = document.getElementById("resultado");

  resultado.value = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
}

function copiar() {
  let resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
}

function pegarTexto() {
  navigator.clipboard.readText().then(text => {
    document.getElementById("texto").value = text;
  }).catch(err => {
    console.error('Error al pegar texto: ', err);
  });
}

function limpiar() {
  document.getElementById("texto").value = " ";
  document.getElementById("resultado").value = " ";
}


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