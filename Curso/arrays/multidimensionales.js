//Arrays multidimensionales

let categorias = ["Lucha","Deporte","Accion","Carreas"];
let videojuegos = ["Tekken","Fifa","Pes","GTA"];

let union = [categorias, videojuegos]

console.log(union)

console.log(union[1][1])


//Arrays bidimensionales

let tabla=[
    ["Producto", "Cantidad", "Precio"],
    ["PC", 2,120],
    ["Celu",1,422],
    ["Impresora",20,230]
]


console.table(tabla) //muestra en formato de tabla en conosla
//console.log(tabla[2][0],tabla[2][2])

tabla.forEach(fila =>{
    fila.forEach(elemento =>{
        console.log(elemento)
    })
})


let cartaRestaurante=[
    ["Plato", "Cantidad", "Precio",],
    ["PC", 2,120],
    ["Celu",1,422],
    ["Impresora",20,230]
]

