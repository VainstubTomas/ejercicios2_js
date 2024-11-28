//Pide al usuario que ingrese tres números utilizando prompt, luego verifica si la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.

let numA = parseInt(prompt("Ingrese un nro"));
let numB = parseInt(prompt("Ingrese otro nro"));
let numC = parseInt(prompt("Otro nro"));

let suma = numA + numB;

if(suma === numC){
    alert("La suma arroja un valor igual a " + numC);
} else {
    alert("La suma arroja un nro diferente a " + numC);
}