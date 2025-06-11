const boton = document.querySelector("#boton");
boton.addEventListener("click",function(){
    Notification.requestPermission()  
    .then(resultado => console.log(resultado));
     
})

if (Notification.permission == "granted"){
    new Notification("Esta es una noti",{
        icon:"/curso/api's/ig.png",
        body:"Mateo" 
    })
}