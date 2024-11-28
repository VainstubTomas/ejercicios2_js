//Crea una variable llamada nombreUsuario y asígnale un nombre. Luego, verifica si el nombre tiene más de 6 caracteres e imprime un mensaje correspondiente.

let userName = prompt("Ingrese su nombre");

if(userName.length > 6){
    alert("Tu nombre tiene más de 6 caracteres");
} else {
    alert("Su nombre tiene menos de 6 caracteres");
}