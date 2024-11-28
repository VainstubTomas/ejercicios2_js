//Pide al usuario que ingrese dos números utilizando prompt, luego verifica si el primero es divisible por el segundo e imprime un mensaje correspondiente.

let numA = parseInt(prompt("Ingrese el 1er nro"));
let numB = parseInt(prompt("Ingrese el 2do nro"));

let result = numA / numB;

if(Number.isInteger(result)){
    alert("A es divisible por B, su resultado es INT");
} else {
    alert("A no es divisible por B, su resultado es FLOAT");
}