//Bucle while

/*

let contador = 0;

while (condicion){

    //Si se cumple se ejecuta infinitamente

    contador++;
}
*/

//Ejemplo :

let year = 1990;
let objetivo = 2100;
let interferencia = 2060;

while(year <= 2100){
    console.log("Estamos en el año: "+year)
    
    if(year === 2060){
        break;
    }

    year++
}

//Do while

//Primero ejecuta el codigo y despues se ve si se sigue ejecutando

let numero = 30;

do{
    console.log(numero);
    numero--;

}while(numero >= 0) // si llega a haber un numero mal x ejemplo 70 en vez de 0 se imprime el valor de numero(porque se recorre una vez)