//Utilizando un if else, verifica si un año ingresado por el usuario es bisiesto o no, e imprime un mensaje correspondiente.

//año bisiesto: posee un dia ad.

//VALIDACION - if año = bi, año se puede / 4.

let año = parseInt(prompt("Ingrese un año"));
let validacion = año / 4;

if(Number.isInteger(validacion)){
    alert("BISIESTO");
} else {
    alert("NOP");
}