//Metodos de propiedad

const reproductor = {
    reporducir: function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },
    pausar: function(){
        console.log("Pausamos,,,")
    },
    crearPlaylist : function(nombre){
        console.log(`Creando playlist con el nombre: ${nombre}`)
    },
    reporducirPlaylist : function(nombre){
        console.log(`Creando playlist con el nombre: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando cancion con el ID: ${id}`)

}

reproductor.reporducir(2030);
reproductor.pausar();
reproductor.borrarCancion(19);
reproductor.crearPlaylist("Indie");
reproductor.reporducirPlaylist("Indie");