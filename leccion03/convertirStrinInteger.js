let miNumero = "10";

//console.log(typeof miNumero);

let edad = Number(miNumero);//convertir Stroing a numero

console.log(typeof edad);
if ( isNaN(edad)) {
   console.log('No es un numero');  
} else {
    if (edad >= 18) {
      console.log("puede votar");
    } else {
      console.log("menor de edad");
    }
}

let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

res  = 4 + 5 * 6 / 3;
console.log(res);

res  = ((4 + 5) * 6) / 3;
console.log(res);
