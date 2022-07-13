let calificacion = parseInt(prompt("ingrese una nota"))
if (calificacion >= 0 <= 10) {

    if (calificacion > 0 && calificacion <= 2) {
        alert ("Muy deficiente")    
}
    else if (calificacion >= 3 && calificacion <= 4) {
        alert ("insuficiente")
    }
    else if (calificacion >= 5 && calificacion <= 6) {
        alert ("Suficiente")
    }
    else if (calificacion == 7) {
        alert ("Bien")
    }
    else if (calificacion >= 8 && calificacion <= 9) {
        alert ("Notable")
    }
    else if (calificacion == 10) {
        alert ("Sobresaliente")
    }
else {
    alert("El numero ingresado no es correcto, introduce un numero valido")
}
}