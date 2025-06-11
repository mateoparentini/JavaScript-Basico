//Clases

class Producto{
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto es ${this.nombre} y vale ${this.precio}`;

    }
    precioProducto(){
        return `El precio del producto es ${this,this.precio}`
    }
}

const producto2 = new Producto("Monitor",322);
const producto3 = new Producto("Monitor 144hz",342);

//Herencia

class Libro extends Producto{  //hereda lo de producto
    constructor(nombre,precio,id){ 
        super(nombre,precio);   
        this.id = id;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su id es ${this.id}`;

    }
}

const libro = new Libro ("JS",120,"33424234234234")
console.log(producto2.formatearProducto());
console.log(libro.formatearProducto());
