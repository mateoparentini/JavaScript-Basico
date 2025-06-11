const { act } = require("react");

let frameworks = ["Angular","React","Vue","Astro","NodeJS"]

//Acceso con bucles

for(let i = 0; i<frameworks.length;i++){
    console.log(frameworks[i])
}


// Mostrar en pantalla(pagina web)

/*document.write("<h1>Listado de Frameworks</h1>")
document.write("<ul>")

for(let i = 0; i<frameworks.length;i++){
    document.write("<li>"+frameworks[i]+"</li>");
}
document.write("</ul>")
*/
//Bucles para recorrer arrys

console.log("******************")

let actores = ["Mateo","Kilos","Mnuato","Minumino"];

console.log("Listado de actores:");

//Bucle for

for(let contador = 0; contador < actores.length; contador++){
    //console.log(actores[contador]);  
}

//Bucle For Of

for(let actor of actores){
    //console.log(actor)
}

//Bucle For in

for(let indice in actores){
   // console.log(indice, actores[indice])
}

//Bucle ForEach

//actores.forEach(actor => {
  //  console.log(actor)
//});

//Bucle Map

let nuevoActores = actores.map(actori => {
    console.log(actori)

    return actori + "Holiwud";
})

console.log(nuevoActores); //Agrega la palabra holiwud al array actores
