let edad = parseInt(prompt("ingrese su edad"));
if (edad >= 18) {
  document.write("ya puede conducir");
}
else if (edad < 18) {
    document.write("Ud. es menor de edad, no puede conducir");
  }
else {
  document.write("la edad ingresada no es valida");
}
