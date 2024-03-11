


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