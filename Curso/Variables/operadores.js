// Operadores artimeticos (matematicos)

let num1 = 10;
let num2 = 2;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let resto = num1 % num2;
let division = num1 / num2;
let potencia = num1 ** 2;


console.log("Suma: "+ suma, "Resta: "+ resta, "Multi: "+ multiplicacion,"Resto: "+ resto,"Division: "+ division,"Division: "+ division,"Potencia: "+ potencia);

//Operadores de asignacion
console.log("*************************Asignacion****************************");

let numero = 10; //Esto es asignacion, le damos el valor a la varible

// numero = 17 + 3 //me da 20
numero += 3;

console.log("Numero: "+ numero)

console.log("*************************Comparacion****************************");

let numerito = 31;

console.log(numerito == "31"); //Tiene que salir TRUE, siendo string o int(siendo 31)

console.log(numerito === "31"); // Esta es FALSE, ya que el triple = compara todo

console.log(numerito != 32); //Distinto a

console.log(numerito > 20); //Mayor que
console.log(numerito >= 20); //Mayor o igual
console.log(numerito < 20); // Menor que
console.log(numerito <= 20);  // Menor o igual

console.log("*************************Logicos****************************");

let mayorEdad = true;
let tieneEntrada = true;

console.log(mayorEdad && tieneEntrada); //&& = y 
console.log(mayorEdad || tieneEntrada); // || = o
console.log(!mayorEdad); // ! = negacion, invierte la variable


console.log("*************************Cadenas****************************");
let mensaje1 = "Hola";
let mensaje2 = "Mundo";

let mensaje = mensaje1 + " " + mensaje2;

mensaje += "Mateo"; //Agrega 

console.log(mensaje)

console.log("*************************Incremento****************************");

let cifra = 100;

//cifra = cifra + 1;
//cifra = 100 + 1;

cifra++;
cifra++;
cifra++;
cifra--;
cifra--;


console.log(cifra)