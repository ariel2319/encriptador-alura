
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
  /*  let textAreaTexto = document.getElementById("texto");
   textAreaTexto.placeholder = "newww"; */
  document.getElementById("resultado").value = " ";
}
/* 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
}) */

// Preguntamos qué tema tiene el usuario
// true = dark
// false = light
/* const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches */
// Preguntamos si el usuario tiene tema dark
// En caso de que sí, lo activamos
/* if (userHasDarkTheme) document.body.classList.add(darkTheme) */
// Botón para activar el tema
const themeButton = document.getElementById('theme-button')
// Nombre de la clase con la que activamos el tema dark
const darkTheme = 'dark-theme'
// Tema seleccionado por el usuario anteriormente (si es que lo hizo)
const selectedTheme = localStorage.getItem('selected-theme')
// Preguntamos qué tema tiene el usuario en su sistema
// true = dark
// false = light


const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// Validamos si el usuario anteriormente elegió un tema
if (selectedTheme) {
  // Si se cumple la validación, preguntamos cuál fue el tema para saber si activamos o desactivamos el dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
} else {
  // Preguntamos si el usuario tiene tema dark en su sistema
  // En caso de que sí, lo activamos en la interfaz
  if (userHasDarkTheme) document.body.classList.add(darkTheme)
}

/* if (getCurrentTheme !== 'dark') {
  themeButton.textContent = 'sol';
} else {
  themeButton.textContent = 'luna';
} */
// Activar/desactivar el tema manualmente con el botón
themeButton.addEventListener('click', () => {
  // Agregamos o quitamos el tema dark
  document.body.classList.toggle(darkTheme)
  // Guardamos el tema actual que eligió el usuario
  localStorage.setItem('selected-theme', getCurrentTheme())
})