
//Longitud
let nombre = "Mateo";

console.log(nombre.length);

//Conversion a texto

let numero = 10;

//numero.toString();  //Si lo uso aca sigue siendo el valor number

console.log(typeof numero.toString())

//Convertir texto a mays

let web = "mateo.com";

let webMayus = web.toUpperCase();

console.log(webMayus)

//Convertir texto a minusculas

let txt = "MATEO.COM";

//let txtmin = txt.toLowerCase()

console.log(txt.toLowerCase())

//Conseguir una letra concreta
let frase = "Soy mateo";
console.log(frase.charAt(2))

//Conseguir si una cadena tiene dentro otra

let eslogan = "Sandia grande come mas de uno"

if(eslogan.includes("Sandia")){ //Busca en eslogan
    console.log("La palabra Sandia existe en el eslogan")
}else{
    console.log("No existe")
}

//Busca la posicion de una palabra

let mensaje = "Hola Mateo Parentini"
console.log(mensaje.indexOf("Parentini"))

//Extraer parte de un texto

let curso = "Excel Basico";
console.log(curso.slice(0,5)) //Saca excel

//Remplazar parte de un texto

let pelis = "Scar face";
console.log(pelis.replace("face", "skibidi"))


//Trim o eliminar espacios en blanco

let email = "   mateo@gmail.com   "

console.log(email.trim())

//Separar cadena por partes

let listaCompras = "huevo,leche,papa,frutilla,laga";

let listaArray = listaCompras.split(",");  //Split y el valor q separa los valores

console.log(listaArray)


//Extraer parte de un texto

let curso2 = "Master Excel";

console.log(curso2.substring(0,6));

//Concatenar o unir cadenas de texto

let ciudad = "Perukistan";
let pais = "Peru";

//let fraseFinal = "Ciudad " + ciudad +" y esta en "+pais;
  
//let fraseFinal = `Ciudad ${ciudad} y esta en ${pais}`;

let fraseFinal = "".concat("Mi ciudad es ",ciudad,"y esta en ",pais)

console.log(fraseFinal)


//Comienza por una palabra especifica 

let frase2 = "Bienvenidos a la guerra";

console.log(frase2.startsWith("Bienvenido"))//Devuelve true, de lo contrario false

//Acaba por una palabra especifica 

let frase3 = "Bienvenidos a la guerra";

console.log(frase3.endsWith("guerra"))//Devuelve true, de lo contrario false


//Repetir palabras

let mensajito = "Js mola tio joder \n"; //\n salta de linea

console.log(mensajito.repeat(4))

//Buscar texto en una cadena

let miCadena = "Pablo fue a buscar leche leche";

console.log(miCadena.search("leche")) //Imnprime en que posicion empieza //-1 si no existe

//En match devuele la info mas completa(palabra buscada,indice, la frase general)
console.log(miCadena.match(/leche/g)) //Si no pongo asi, busca y encuentra 1 pastabase, epro si pongo /g, busca de manera global (2 pastabase)