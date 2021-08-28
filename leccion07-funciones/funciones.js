function miFuncion(a,b){
    console.log(arguments.length )//cuenta las variabñes que em¿ntran por la funcion
     console.log(" Suma: " + ( a + b ));
     return a + b;
}

//llamando la funcion
const res = miFuncion(2,30);
console.log(res)

//declaracion una funcion de tipo exprecion
let sumar = function (a,b) {return a + b}; //se añade punto y coma 

resultado = sumar(10,2);
console.log(resultado);

//funcion anonima
(function (){
    console.log('Ejecutando la Funcion');
});
//})(); -> () se añade esto de ultimo para que la funcion se llama sola pero solo una vez se ejecuta 

console.log( typeof miFuncion);// typeof me dice que es

//convertir de funcion a texto

console.log(miFuncion.toString())
