//Async /await

function descargarClientes(){
    return new Promise(resolve =>{
        console.log("descargando"); // Mensaje que indica que la descarga ha comenzado
        
        setTimeout(()=>{         // Simula una espera de 2 segundos (como si estuviera descargando datos)

        resolve("descargado..");
    
        },3000)

    });
}
function descargarUltimosPedidos(){
    return new Promise(resolve =>{
        console.log("descargando pedidos..."); // Mensaje que indica que la descarga ha comenzado
        
        setTimeout(()=>{         // Simula una espera de 2 segundos (como si estuviera descargando datos)

        resolve("pedidos descargado...");
    
        },2000)

    });
}
// Función asincrónica que llama a descargarClientes usando async/await
async function app(){
    try {
    //   const clientes =await descargarClientes();  // Espera a que la promesa de descargarClientes se resuelva
    //   const pedidos = await descargarUltimosPedidos()
    //   console.log(clientes);
        
    const resultado = await Promise.all([descargarClientes(),descargarUltimosPedidos()]);  //Asi empiezan a la vez, em la opcion de arriba primero iba clientes y despues pedidos
    console.log(resultado[0]); //Se saca el valor del arreglo para que no se imprima entre []
    console.log(resultado[1]);
    
    
    } catch (error) {
        console.log(error);
        
    }
}
app()
