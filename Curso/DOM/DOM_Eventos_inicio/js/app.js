//Seleccionar contenido: Query selector

const heading = document.querySelector(".header__texto h2"); //Retorna 0 o 1 elementos   //Selecciona el h2 dentro del header texto, no todos los h2
heading.textContent= "Mateo"; //Cambia el valor del texto en HTML
// heading.classList.add("nueva-clase"); //Añade nueva clase 



//Queryselectorall

const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces[0]); //Imprime el primer elace

enlaces[0].textContent = "Nuevo texto para enlace(Nosotros)";
// enlaces[0].href = "google.com" //No lleva a la pagina de nosotros, lleva al url indicado
// enlaces.classList.add("nueva-clase"); //Añade nueva clase 
// enlaces[0].classList.remove("nueva-clase") //Borra la clase 


//getElementById

const heading2 = document.getElementById("heading");  //No es necesario el numeral
console.log(heading2);

//Gener un nuevo enlace

const nuevoEnlace = document.createElement("A");//Etiqueta recomendada en mayusculas

//Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

//Agregar texto
nuevoEnlace.textContent = "Un nuevo enlace";

// Agregar la clase
nuevoEnlace.classList.add("nueva-clase");

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion'); //Hay mas de una clase de navegacion, pero como queryselector agarra max 1 valor, el primero que encuentra es navegacion que esta arriba
navegacion.appendChild(nuevoEnlace); //Agrega como enlace

console.log(nuevoEnlace);


//Eventos

// console.log(1);

// window.addEventListener("load", function(){ //Load espera a que js y los archivos de HTML esten listos 
//     console.log(2);
// })

// window.onload = function(){
//     console.log(3);
    
// }

// document.addEventListener("DOMContentLoaded",function(){   //Espera que se descargue SOLO el html, no espera CSS o IMGs
//     console.log(4);
    
// })

// console.log(5);

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector(".boton--primario");

// btnEnviar.addEventListener("click",function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     console.log("enviado formulario");
    
// });



//Eventos de los Inputs y Text areas

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

// nombre.addEventListener("input", function(e){ //Change es para q se muestre al perder focus de el formularip
//     console.log(e.target.value); //Muestra en consola lo q se escribe en el form
    
// });
// email.addEventListener("input", function(e){ 
//     console.log(e.target.value); 
    
// });
// mensaje.addEventListener("input", function(e){ 
//     console.log(e.target.value); 
    
// });

//Simplificando codigo

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}
//Los datos tienen que tener mismo valor o id
nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(datos);
    
};
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P")
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto")
    }
    formulario.appendChild(alerta)
    
    setTimeout(() => {
       error.remove() 
    }, 5000);
}

//El evento de Sumbit

const formulario = document.querySelector(".formulario");
formulario.addEventListener("sumbit",function(evento){
    evento.preventDefault();

    //Validar form

    const {nombre,email,mensaje}= datos;
    
    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if(nombre ==="" || email === "" || mensaje === ""){
        mostrarAlerta("Todos los campos son obligatorios", "error");
        return; //Corta ejecucion del codigo   
    } else {
        mostrarAlerta("Formulario envidado")
    }
    

    //Enviar form

});

//Se cambia a mostrarAlerta haciendo el codigo mas corto

// function mostrarError(mensaje) {
//     const error = document.createElement("P");
//     error.textContent(mensaje);
//     error.classList.add("error")
    
//     formulario.appendChild(error);

//     //Desaparezca despues de 5s

//     setTimeout(() => {
//        error.remove() 
//     }, 5000);
    
// }
// function mostrarCorrecto(mensaje) {
//     const correcto = document.createElement("P");
//     correcto.textContent(mensaje);
//     correcto.classList.add("correcto")
    
//     formulario.appendChild(correcto);

//     //Desaparezca despues de 5s

//     setTimeout(() => {
//        correcto.remove() 
//     }, 5000);
    
// }

