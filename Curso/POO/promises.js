const usuarioAutenticado = new Promise((resolve,reject)=>{
    const auth = false;

    if(auth){
        resolve("Usuario autenticado"); //EL PROMISE SE CUMPLE
    }else{
        reject("Usuario no conocido"); // EL PROMISE NO SE CUMPLE
    }
})

// usuarioAutenticado.then(function(resultado){
//     console.log(resultado);
    
// })
// .catch(function(error){
//     console.log(error);
    
// })  Acortando codigo

usuarioAutenticado
                .then(resultado => console.log(resultado)) //No se pone parentesis xq es solo un parametro
                .catch(error => console.log(error))
            



//En los promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se complio
//Rejected: Se ha rechazado o no se pudo cumplir