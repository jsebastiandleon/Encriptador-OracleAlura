function desencriptador (palabra){
    switch (palabra) {
        case "ai":
            //console.log("a");
            //alert("a");
            return "a";
            break;
        case 'enter':
            //console.log("e");
            //alert("e");
            return "e";
            break;
        case 'imes':
            //console.log("i");
            //alert("i");
            return "i";
            break;
        case 'ober':
            //console.log("o");
            //alert("o");
            return "o";
            break;
        case 'ufat':
            //console.log("u");
            return "u";
            break;
        default:
            //console.log(palabra);
            return palabra;
    }
}
function concatenadorDesencriptador (palabra){
    var fraseDesencriptada = "";
    var indicadorPosicion = 0;

    while (indicadorPosicion < palabra.length){

        if(palabra[indicadorPosicion] == "a"  && palabra[indicadorPosicion+1] == "i"){
            fraseDesencriptada =  fraseDesencriptada + desencriptador("ai");
            //console.log("encontré una ai");
            //console.log("decodificacion es una a ");
            //console.log(palabra[indicadorPosicion]+ " por el if")
            indicadorPosicion=indicadorPosicion+2;
        } 
        else if(palabra[indicadorPosicion] == "e"  && palabra[indicadorPosicion+1] == "n" && palabra[indicadorPosicion+2] == "t" && palabra[indicadorPosicion+3] == "e" && palabra[indicadorPosicion+4] == "r"){
            fraseDesencriptada =  fraseDesencriptada + desencriptador("enter");
            //console.log("decodificacion es una e ");
            //console.log(palabra[indicadorPosicion]+ " por el if")
            indicadorPosicion=indicadorPosicion+5;
        }
        else if(palabra[indicadorPosicion] == "i"  && palabra[indicadorPosicion+1] == "m" && palabra[indicadorPosicion+2] == "e" && palabra[indicadorPosicion+3] == "s"){
            fraseDesencriptada =  fraseDesencriptada + desencriptador("imes");
            //console.log("encontré un imes");
            //console.log("decodificacion es una i ");
            //console.log(palabra[indicadorPosicion]+ " por el if")
            indicadorPosicion=indicadorPosicion+4;
        }
        else if(palabra[indicadorPosicion] == "o"  && palabra[indicadorPosicion+1] == "b" && palabra[indicadorPosicion+2] == "e" && palabra[indicadorPosicion+3] == "r"){
            fraseDesencriptada =  fraseDesencriptada + desencriptador("ober");
            //console.log("encontré un ober");
            //console.log("decodificacion es una i ");
            //console.log(palabra[indicadorPosicion]+ " por el if")
            indicadorPosicion=indicadorPosicion+4;
        }
        else if(palabra[indicadorPosicion] == "u"  && palabra[indicadorPosicion+1] == "f" && palabra[indicadorPosicion+2] == "a" && palabra[indicadorPosicion+3] == "t"){
            fraseDesencriptada =  fraseDesencriptada + desencriptador("ufat");
            //console.log("encontré un ufat");
            //console.log("decodificacion es una i ");
            //console.log(palabra[indicadorPosicion]+ " por el if")
            indicadorPosicion=indicadorPosicion+4;
        }
        else {
            fraseDesencriptada =  fraseDesencriptada + desencriptador(palabra[indicadorPosicion]);
            //console.log(palabra[indicadorPosicion]+ " : por el else y va en : " + indicadorPosicion)
            indicadorPosicion++;
        }
    }
    return fraseDesencriptada;
}
function escrituraFormularioDesencriptador (textoFormularioentrada){
    var frasecompleta = concatenadorDesencriptador(textoFormularioentrada);
    document.getElementById('salidaTexto').value = frasecompleta;
    ocultadorElementos(textoFormularioentrada,frasecompleta);
    if(textoFormularioentrada === frasecompleta){
        reveladorElementos();
        document.getElementById('salidaTexto').value = "";
    }
}