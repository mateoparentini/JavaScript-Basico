//POO

//Objeto literal
// const producto= {
//     nombreProducto: "PC",
//     precio: 200,
//     disponible : true
// }
function Cliente(nombre,apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function(){
    return ` producto 2 ${this.nombre} y es ${this.apellido}`;

}

//Object Constructor

//Una clase es una forma de alamcenar los datos q tiene un obj en especifico

function Producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}
//El prototype permite crear funciones que solo se utilizan en un objeto especifico

Producto.prototype.formatearProducto = function(){
    return ` producto 2 ${this.nombre} y cale ${this.precio}`;

}

//Creando instancia
const producto2 = new Producto("Monitor",322);
const producto3 = new Producto("Monitor 144hz",342);

const nCliente = new Cliente("Luis","Rojas")

function formatearProducto(producto){
    return ` producto 2 ${producto.nombre}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(nCliente.formatearCliente());



