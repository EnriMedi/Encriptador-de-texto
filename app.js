// Función para encriptar un texto
function encriptar(texto) {
  // Sustituciones según las reglas dadas
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  return texto;
}

// Función para desencriptar un texto encriptado
function desencriptar(textoEncriptado) {
  // Revertir las sustituciones
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/enter/g, "e");

  return textoEncriptado;
}

// Función para mostrar el resultado encriptado o desencriptado
function mostrarResultado(resultado) {
  // Mostrar el resultado encriptado o desencriptado
  let textoResultadoElement = document.getElementById("textoResultado");
  textoResultadoElement.textContent = resultado;
  textoResultadoElement.style.display = "block"; // Mostrar el resultado

  // Ocultar la imagen y el texto de nota
  document.querySelector(".output-image").style.display = "none";
  document.querySelector(".nota").style.display = "none";
}

function encriptarTexto() {
  let textoOriginal = document.getElementById("inputTexto").value;

  // Verificar que hay texto en el campo de entrada
  if (textoOriginal.trim() === "") {
    alert("El campo de texto no puede estar vacío.");
    return; // Detener la ejecución si el campo está vacío
  }

  // Validar que el texto original solo contenga letras minúsculas con expresion regular
  if (!/^[a-z]+$/.test(textoOriginal)) {
    alert(
      "El texto ingresado debe contener solo letras minúsculas y sin acentos."
    );
    // Borrar el texto ingresado y restablecer el placeholder
    document.getElementById("inputTexto").value = ""; // Borra el contenido del campo de entrada
    document.getElementById("inputTexto").placeholder = "Ingrese el texto aquí"; // Restablece el placeholder
    return; // Detener la ejecución si el texto no es válido
  }

  textoOriginal = textoOriginal.toLowerCase();

  let textoEncriptado = encriptar(textoOriginal);

  // Ocultar el texto inicial "Ningún mensaje fue encontrado"
  document.getElementById("textoInicial").style.display = "none";
  document.getElementById("textoInicial2").style.display = "none";

  // Mostrar el botón de copiar
  document.querySelector(".desencriptar-btn2").style.display = "block";

  // Mostrar el resultado encriptado
  mostrarResultado(textoEncriptado);

  // Borrar el texto ingresado y restablecer el placeholder
  document.getElementById("inputTexto").value = ""; // Borra el contenido del campo de entrada
  document.getElementById("inputTexto").placeholder = "Ingrese el texto aquí"; // Restablece el placeholder
}

// Función para desencriptar el texto encriptado ingresado en el campo de entrada
function desencriptarTexto() {
  let textoEncriptado = document
    .getElementById("inputTexto")
    .value.toLowerCase();
  let textoDesencriptado = desencriptar(textoEncriptado);

  // Verificar que hay texto en el campo de entrada
  if (textoEncriptado.trim() === "") {
    alert("No hay texto para desencriptar .");
    return; // Detener la ejecución si el campo está vacío
  }
  // Verificar si el texto contiene alguna secuencia encriptada
  if (!/ufat|ober|ai|imes|enter/.test(textoEncriptado)) {
    alert(
      "No se puede desencriptar el texto. No contiene secuencias encriptadas."
    );
    // Borrar el texto ingresado y restablecer el placeholder
    document.getElementById("inputTexto").value = ""; // Borra el contenido del campo de entrada
    document.getElementById("inputTexto").placeholder = "Ingrese el texto aquí"; // Restablece el placeholder
    return textoEncriptado;
  }

  mostrarResultado(textoDesencriptado);
  // Ocultar el texto inicial "Ningún mensaje fue encontrado"
  document.getElementById("textoInicial").style.display = "none";

  // Borrar el texto ingresado y restablecer el placeholder
  document.getElementById("inputTexto").value = ""; // Borra el contenido del campo de entrada
  document.getElementById("inputTexto").placeholder = "Ingrese el texto aquí"; // Restablece el placeholder
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
  // Seleccionar el texto resultado encriptado
  let textoEncriptado = document.getElementById("textoResultado").textContent;

  // Crear un elemento de textarea temporal para copiar el texto
  let textarea = document.createElement("textarea");
  textarea.value = textoEncriptado;
  document.body.appendChild(textarea);

  // Seleccionar y copiar el texto
  textarea.select();
  document.execCommand("copy");

  // Eliminar el elemento de textarea temporal
  document.body.removeChild(textarea);
}
