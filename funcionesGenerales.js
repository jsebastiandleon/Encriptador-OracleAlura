function copiarTexto(textoSalida){
    // Copiar el contenido del textarea al portapapeles
    navigator.clipboard.writeText(textoSalida).then(function() {  
        alert("Contenido copiado al portapapeles"); // Alerta para notificar que el contenido ha sido copiado
  }
  , function() {
        alert("No se pudo copiar el contenido al portapapeles"); // Manejo de errores
  });
}
function ocultadorElementos(textoFormularioentrada,frasecompleta){
      if (textoFormularioentrada != frasecompleta){
            document.getElementById("imagenMunieco").style.visibility = "hidden";
            document.getElementById("lemasNoEncontado").style.visibility = "hidden";
        }
}
function reveladorElementos(){
      document.getElementById("imagenMunieco").style.visibility = "visible";
      document.getElementById("lemasNoEncontado").style.visibility = "visible";
}
function comprobadorCaracteres(num,frase){

      let acentuaciones = /[áéíóú]/;
      let encontrarAcentuacion = acentuaciones.test(frase);
      let encontarNumeros = /\d/.test(frase);
      let mayusculas = /[A-Z]/;
      let encontrarMayusculas = mayusculas.test(frase);
      
      if (encontarNumeros){
            document.getElementById('salidaTexto').value = "";
            reveladorElementos();
            alert("Tiene numeros, intente de nuevo, por favor");
      }else if (encontrarAcentuacion){
            document.getElementById('salidaTexto').value = "";
            reveladorElementos();
            alert("Tiene acentos, intente de nuevo, por favor");
      }else if(encontrarMayusculas){
            document.getElementById('salidaTexto').value = "";
            reveladorElementos();
            alert("Tiene mayusculas intente de nuevo, porfavor");
      }else if (num === 1){
            escrituraFormularioEncriptador(frase);
      }else if(num === 2){
            escrituraFormularioDesencriptador(frase);
      } else{
            alert("entró por el no");
      }
}