// Función para validar el texto ingresado
function validarEntrada(event) {
    // Obtener el valor del campo de texto
    let texto = event.target.value;

    // Eliminar caracteres no permitidos (mayúsculas, acentos y caracteres especiales)
    texto = texto.replace(/[^a-z\s]/g, "");

    // Actualizar el campo de texto con el valor validado
    event.target.value = texto;

    // Habilitar el botón "Encriptar" si el campo de texto no está vacío
    habilitarBotones();
}

// Función para habilitar o deshabilitar botones según el texto ingresado
function habilitarBotones() {
    const inputText = document.getElementById("input-text").value;
    const encriptarBtn = document.getElementById("encriptar-btn");
    encriptarBtn.disabled = inputText.trim() === "";
}

// Función para encriptar el texto
function encriptarTexto() {
    let mensaje = document.getElementById("input-text").value;
    let encriptado = mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = encriptado;
    document.getElementById("input-text").value = "";
    document.getElementById("encriptar-btn").disabled = true;
    document.getElementById("copiar-btn").disabled = false;
}

// Función para copiar el texto encriptado
function copiarTexto() {
    let outputText = document.getElementById("output-text").value;
    navigator.clipboard.writeText(outputText).then(() => {
        document.getElementById("input-text").value = outputText;
        document.getElementById("output-text").value = "";
        document.getElementById("copiar-btn").disabled = true;
        document.getElementById("desencriptar-btn").disabled = false;
    });
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let mensajeEncriptado = document.getElementById("input-text").value;
    let desencriptado = mensajeEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = desencriptado;
    document.getElementById("input-text").value = "";
    document.getElementById("desencriptar-btn").disabled = true;
    document.getElementById("encriptar-btn").disabled = false;
}
function habilitarBotones() {
    let mensaje = document.getElementById("input-text").value;
    document.getElementById("encriptar-btn").disabled = mensaje.trim() === "";
    actualizarContador();
}

function encriptarTexto() {
    let mensaje = document.getElementById("input-text").value;
    let encriptado = mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("input-text").value = "";  // Borrar el texto original
    document.getElementById("output-text").value = encriptado;

    // Deshabilitar encriptar y habilitar copiar
    document.getElementById("encriptar-btn").disabled = true;
    document.getElementById("copiar-btn").disabled = false;
    document.getElementById("desencriptar-btn").disabled = true;

    agregarAlHistorial("Encriptado: " + encriptado);
}

function copiarTexto() {
    let texto = document.getElementById("output-text").value;
    document.getElementById("input-text").value = texto;  // Copiar el texto encriptado a la caja de texto inicial
    document.getElementById("output-text").value = "";  // Limpiar la caja de salida

    // Deshabilitar copiar y habilitar desencriptar
    document.getElementById("copiar-btn").disabled = true;
    document.getElementById("desencriptar-btn").disabled = false;
    document.getElementById("encriptar-btn").disabled = true;

    // Copiar al portapapeles
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

function desencriptarTexto() {
    let mensajeEncriptado = document.getElementById("input-text").value;
    let desencriptado = mensajeEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = desencriptado;
    document.getElementById("input-text").value = "";  // Borrar el texto encriptado

    // Deshabilitar desencriptar y habilitar encriptar
    document.getElementById("desencriptar-btn").disabled = true;
    document.getElementById("encriptar-btn").disabled = false;
    document.getElementById("copiar-btn").disabled = true;

    agregarAlHistorial("Desencriptado: " + desencriptado);
}

function actualizarContador() {
    let mensaje = document.getElementById("input-text").value;
    document.getElementById("char-count").textContent = `${mensaje.length}/100 caracteres`;
}

function agregarAlHistorial(mensaje) {
    let historial = document.getElementById("message-history");
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = mensaje;
    historial.appendChild(nuevoItem);
}
