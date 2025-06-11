//Funciones
//Agrupa una serie de instrucciones pa poder usarlas varias veces
//Es una agrupacion reutilizxable de un conjunto de instrucciones

function saludo(){
    console.log("Hola")
   
}
//saludo()


//Funcion con parametros

function saludo(nombre, plato){
    console.log("Hola " +nombre)
    console.log("Vas a cocinar: " +plato)
}
//saludo("Mateo","Papas")


//Parametros opcionales

function saludo(nombre="Mateo", plato = "Tortilla"){
    console.log("Hola " +nombre)
    console.log("Vas a cocinar: " +plato)
}
//saludo()



//Funciones dentro de otras

function calculadora(num1,num2){

    console.log("Suma: "+(num1+num2))
    console.log("Resta: "+(num1-num2))
    console.log("Multi: "+(num1*num2))
    console.log("Division: "+(num1/num2))

    return true;
}

calculadora(10,2)

//Parametros ...REST

function misPeliculas(peli1,peli2, ...resto_de_peli){
    console.log(peli1)
    console.log(peli2)
    console.log(resto_de_peli)

}

misPeliculas("M","S","Z","X")


//Operador SPREAD

let numeros = [1,2,3,4];

let mis_numeros = [...numeros, 5,6,7,8,9,10] //spread ...

console.log(mis_numeros)

let misPelisFav = ["Matrix","Termina"];
misPeliculas(...misPelisFav, "Ts1","TWD") // se estaria poniendo en el valor de resto_de_peli y se entra en un array