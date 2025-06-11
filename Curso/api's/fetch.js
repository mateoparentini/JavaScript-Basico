//Igual que AJAX permite enciar informacion al servidor u obtener informacion de un servidor
// Puedes obtner un archivo local o una respuesta de un servidor (Texto o JSON(Js Object Notation, es un lenguaje de transporte de datos))
// Al igual que todas las APIS Modernas de JS utiliza Promises o tambien async / await

function obtenerEmpleados () {
    const archivo = "empleados.json";

    fetch(archivo).then(resultado => resultado.json())
    .then(datos => {
        // console.log(datos);
        
        // Destructuring

        const {empleados} = datos;
        // console.log(empleados);

        empleados.forEach(empleado => {
            console.log(empleado);
            
        });
        
    })
}

obtenerEmpleados()