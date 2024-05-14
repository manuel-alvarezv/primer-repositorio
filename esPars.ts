import * as rls from 'readline-sync';

let numero : number = rls.questionInt("ingrese un numero para comprobar si es par o impar : ")
//con let asigno la variable y despues de los 2 puntos el tipo de dato que es number// 
//alfinal le pido el valor de esa variable al usuario//

if(numero == 0){
    console.log("el numero elegido es", numero, ", no pertenece a los pares ni impares");
}
//me avisa si el numero es 0//
else if (numero % 2 == 0 && numero != 0){
    console.log("el numero",numero, "es par");
}
// si el numero tiene resto 0 entonces es par//
else{
    console.log("el numero", numero,"es impar" );
}
// si no cumple ninguno de los otros casos con if se ejecuta el else que quiere decir que es impar//
