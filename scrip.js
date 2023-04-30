function encriptar(){
    var mensaje = document.getElementById("textoEncriptado").value.tolowerCase();

    var mensajeEncriptado = mensaje.replace(/e/img, "enter");
    var mensajeEncriptado = mensaje.replace(/i/img, "imes");
    var mensajeEncriptado = mensaje.replace(/a/img, "ai");
    var mensajeEncriptado = mensaje.replace(/o/img, "ober");
    var mensajeEncriptado = mensaje.replace(/u/img, "ufat");
}