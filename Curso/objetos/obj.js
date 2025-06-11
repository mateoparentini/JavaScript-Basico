//Un onj su funcion es crear 1 objt que contiene muchas variables

//const nombreProducto = "PC";
//const precio = 200;
//const disponible = true;

//Objetos
const producto= {
    nombreProducto: "PC",
    precio: 200,
    disponible : true
}

console.log(producto);

//console.log(producto.nombreProducto); //Imprime solo nombreProducto
//console.log(producto["precio"]) //es menos usada esta, la de arriba es mas sencilla


//Agregar nuevas propiedades
producto.imagen = "imagen.jop";
console.log(producto)

delete producto.disponible;
console.log(producto)