

function encriptar(){
    var texto = document.getElementById("texto").value.toLowerCase();
   
    //i es para que cambie mayusculas y minusculas
    //g es para toda la linea
    //m es para que aplica a multiples lineas o parrafos

    if(texto.length != 0){ 
    var textoCifrado = texto.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm, "ai");
    var textoCifrado = textoCifrado.replace(/o/igm, "ober");
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat");
    
    document.getElementById("imagenEnc").style.visibility = "hidden";
    document.getElementById("tituloMensaje").style.visibility = "hidden";
    document.getElementById("parrafo").value = textoCifrado;
    document.getElementById("parrafo").style.top = "10%";
    document.getElementById("parrafo").style.height = "45%";
    document.getElementById("botonCopiar").style.visibility = "visible";
    document.getElementById("texto").value = "";
    } else{
        alert("Ingrese el texto");
    }
}

function copiar(){
    var txt = document.querySelector("#parrafo");
    txt.select();
    console.log(txt.select());
    document.execCommand("copy");
    document.getElementById("imagenEnc").style.visibility = "visible";
    document.getElementById("tituloMensaje").style.visibility = "visible";    
    document.getElementById("parrafo").style.top = "80%";
    document.getElementById("parrafo").style.height = "15%";
    document.getElementById("botonCopiar").style.visibility = "hidden";
    document.getElementById("parrafo").value = "";
}

function desencriptar(){
    var texto = document.getElementById("texto").value.toLowerCase();
   
    //i es para que cambie mayusculas y minusculas
    //g es para toda la linea
    //m es para que aplica a multiples lineas o parrafos

    if(texto.length != 0){ 
    var textoCifrado = texto.replace(/enter/igm, "e");
    var textoCifrado = textoCifrado.replace(/imes/igm, "i");
    var textoCifrado = textoCifrado.replace(/ai/igm, "a");
    var textoCifrado = textoCifrado.replace(/ober/igm, "o");
    var textoCifrado = textoCifrado.replace(/ufat/igm, "u");
    
    document.getElementById("imagenEnc").style.visibility = "hidden";
    document.getElementById("tituloMensaje").style.visibility = "hidden";
    document.getElementById("parrafo").value = textoCifrado;
    document.getElementById("parrafo").style.top = "10%";
    document.getElementById("parrafo").style.height = "45%";
    document.getElementById("botonCopiar").style.visibility = "visible";
    document.getElementById("texto").value = "";
    } else{
        alert("Ingrese el texto");
    }
}
