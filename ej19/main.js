//Declara una variable llamada temperatura y asígnale un valor numérico que represente la temperatura actual. Luego, utilizando un if, imprime un mensaje que indique si hace frío, templado o caliente.

var temperatura = 23;

if(temperatura < 10){
    alert("Hace frio");
} else if (temperatura >= 10 || temperatura < 25){
    alert("Templado");
} else {
    alert("Que calor!");
}