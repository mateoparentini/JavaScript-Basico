
//Condicional switch

let miDesayuno = 3; // se pueden evaluar numeros y strings

switch(miDesayuno) {
    
    case 1:
        //Se ejecuta un bloque de instrucciones
        console.log("Huevo frito")

        break;

    case 2:
console.log("Leche")
        break;
    
    case 3:
console.log("Arroz")
        break;

    default:
        console.log("No existe esa opcion")
}


//Condicional ternario

let nombre = "Mateo";
let edad = 18;

let resultado = (edad >= 18) ? "Mayor" : "Menor";    // ? en caso q se cumpla, : en caso q no

console.log(resultado)

//Diferencia entre var y let (alcance /bloques)

//let curso = "Js";

if ("hola" == "hola"){
   var curso = "Python"   //Let no se puede usar, se debe intsanciar afuera
}
console.log(curso)

