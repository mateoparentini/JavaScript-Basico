// IF
// Si A es igual a B entonces haz algo

let estaLloviendo = true;

if(estaLloviendo == true){
    //Se ejecutta esto si la condicion cumple
    console.log("Agarra el paraguaska")
} else {
   //Si no se ejecuta esto
    console.log("No hay parawaska")
}

//IF ELSE

let nombre = "Mateo";
let edad = 95;

if(edad >=18) {
    console.log("Eres mayor de edad")

if (edad <=20){
        console.log("Eres un adolescente")

}else if (edad >= 70) {
        console.log("Eres viejo")

} else {
        console.log("Eres un adulto")

}

}else {
        console.log("Eres un niño")

}



//Ejemplo 

let year = 2020;

if (year >= 2000 && year<= 2030){
        console.log("Estamos en la era moderna")
}else if (year > 2030){
        console.log("Estamos en la era POST moderna")
} else {
        console.log("Estas en la era vieja")
}


