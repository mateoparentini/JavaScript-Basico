//This

const reservacion = {
    nombre: "Mateo",
    apellido:"Parentini",
    total:2000,
    pagado: false,
    informacion: function(){   //La funcion flecha no funciona aca
        console.log(`El cliente ${this.nombre} reservi y tiene q pagar ${this.total}`)
    }
}
const reservacion2 = {
    nombre: "Matianp",
    apellido:"Pare",
    total:24000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservi y tiene q pagar ${this.total}`)
    }
}

reservacion.informacion();
reservacion2.informacion()