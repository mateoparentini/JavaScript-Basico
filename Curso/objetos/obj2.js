
//Objetos
const producto= {
    nombreProducto: "PC",
    precio: 200,
    disponible : true
}

//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto)

//Destructuring

const {precio, nombreProducto}= producto;  //Extrae el valor y crea la variable

console.log(nombreProducto)
console.log(precio)