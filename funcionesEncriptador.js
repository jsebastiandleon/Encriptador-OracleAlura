function encriptador (letra){
   switch (letra) {
       case "a":
           //console.log("ai");
           //alert("ai")
           return "ai";
           break;
       case 'e':
           //console.log("enter");
           //alert("enter")
           return "enter";
           break;
       case 'i':
           //console.log("imes");
           //alert("imes")
           return "imes";
           break;
       case 'o':
           //console.log("ober");
           //alert("ober")
           return "ober";
           break;
       case 'u':
           //console.log("ufat");
           //alert("ufat");
           return "ufat";
           break;
       default:
           //alert("letra");
           //console.log(letra);
           return letra;
   }
}
function separadorEncriptador(palabra,posicionLetra){
   return encriptador (palabra[posicionLetra]);
}
function concatenadorEncriptador (palabra){
    var fraseConcatenada = "";
    for (var posicionLetra=0 ; posicionLetra<palabra.length ; posicionLetra++){
        fraseConcatenada = fraseConcatenada + separadorEncriptador(palabra,posicionLetra);
    }
    return fraseConcatenada;
}
function escrituraFormularioEncriptador (textoFormularioentrada){
    var frasecompleta = concatenadorEncriptador(textoFormularioentrada);
    document.getElementById('salidaTexto').value = frasecompleta;
    if (textoFormularioentrada !== frasecompleta){
        ocultadorElementos(textoFormularioentrada,frasecompleta);
    }else{
        document.getElementById('salidaTexto').value = "";
    }
}