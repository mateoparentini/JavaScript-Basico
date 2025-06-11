//Objetos
const producto= {
    nombreProducto: "PC",
    precio: 200,
    disponible : true
}

Object.freeze(producto)//No deja añadir mas var otro es "seal"
producto.imagen = "imagen.jop";

console.log(Object.isFrozen(producto))

console.log(producto)
