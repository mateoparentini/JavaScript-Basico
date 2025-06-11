//Objetos
const producto= {
    nombreProducto: "PC",
    precio: 200,
    disponible : true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

const nuevoProducto = {...medidas,...producto};


console.log(nuevoProducto);