//Crea una variable llamada hora y asígnale un valor numérico que represente una hora del día. Luego, utilizando un if else, imprime un mensaje que indique si es mañana, tarde o noche.

let hora = parseInt(prompt("Ingrese un nro entre 0 y 23 (hs)"));

if( hora > 0 && hora <= 12){
    alert("MAÑANA");
} else if( hora > 12 && hora <= 18 ) {
    alert("TARDE");
} else {
    alert("NOCHE");
}