var c = parseInt(prompt("Ingrese numero de cantidades a sumar"));
var arreg = [c];
var total = 0;
for(var i = 1; i <= c; i++){
  arreg[i] = parseInt(prompt("Ingresa el numero" +i));
  total += arreg[i]
}
console.log("La suma de tus cantidades es: " +total);