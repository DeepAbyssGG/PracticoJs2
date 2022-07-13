let resultado = "";
do {
    let cadena = prompt("introduce texto");
    if (resultado == "") {
        resultado = resultado + cadena;
    } else {
        resultado = resultado + "-" + cadena;
    }
    } while (confirm("Desea seguir escribiendo?"));
    document.write(resultado);