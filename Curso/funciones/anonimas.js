//Funciones anonimas
//Una funcion "sin nombre"
//Son utiles en los callback y cuando no necesitas reutlizar esa funcion en muchas partes



const saludo = function(nombre=""){
    console.log("Hola" +nombre)
}
saludo();



//Funciones callback
//Se pasan como parametro de otra funcion, para que la otra funcion las ejecute


//  setInterval con funcion anonima


let veces = 0;

setTimeout(function(){
    veces++;
    console.log("Se ha ejecutado el timout: "+veces+ "  veces");
},1000)//1000 ms 
// 

// setInterval con funcion NO anonima

//setInterval(saludo("Mateo"), 1000) //Al ejecutarse se ejecuta sola 1 vez



//Funciones de CallBack "avanzadas"

function restame(n1,n2,mostrar,multiplicarPorTres){

    let resta = n1-n2;
    mostrar(resta);
    multiplicarPorTres(resta);
    
    return resta;

}

restame(20,5, function(resultado){
    console.log(resultado)

},function(resultado){
    console.log(resultado*3)

})


//Ambitos variables (scope)

//Global

let ruta = "mateo.com.uy/ruta";

function mostrarRuta(){
    console.log(ruta)

    let nombre = "Mateo"; //Declaro de manera local, no se lo puede llamar afuera de la funcion
    console.log(nombre)
}

console.log(ruta)
mostrarRuta()

if (true){
    var deporte = "Futbol"; //Se puede acceder desde afuera con let no sepuede
    console.log(deporte)
}
console.log(deporte)



// Hoisting o elevacion
console.log(coche); //Da undefined, si pongo al reves

var coche = "toyota";

//console.log(moto); //Da error, porq se declara mas de manera estricta
let moto = "hyndai";
console.log(moto); //Anda



//Funciones flecha

//Definir funcion

// let nuevoCurso = function(){}

//Se usa asi
let nuevoCurso = () => {
    console.log("Excel")
}
nuevoCurso()


//Utilizar en un callback
setTimeout(() => {
    console.log("Funcion flechoider")
},2000)