 /*
comparador de operaciones 

== si son valores iguales
=== si son valores iguales y tipos de variables
! = si son diferentes los valores
!== si son diferentes los valores y tipos
>=

 */
let a=3, b=2,c="3";
let z = a == b;
console.log(z);
z = a === c;
console.log(z);
//verifica sis vlos valores son iguales y tambien los tipos


a = 3, b = 2, c = "3";
z = a < b;
console.log(z);

if (a % 2 == 0) {
  console.log("Es numero par");
}else{
  console.log("El numero es impar");
}

let valMin = 0, valMax = 10;
if (a >= valMin && a <= valMax) {
  console.log("Dentro del rango");
} else {
  console.log("Fuera del rango");
}



let vacaciones = false, diaDescanso = false;
if ( vacaciones || diaDescanso) {
  console.log("falso");
} else {
  console.log("falso");
}


let res = (3>2) ? 'Verdadero' : 'Falso';
console.log(res);

let numero = 9;
res = (numero % 2 ==0) ? "Numero par " : " Numero Impar";
console.log(res)