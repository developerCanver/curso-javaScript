miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
//funcion calback llamar una funcion dentro de otra funcion
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    //funcionCallback ingresa la funcion
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
    //envia el atriburo qye es espra la funcion imp
}
//imp nombre de a¿la funcion asignada a una variable
sumar(5,3, imp);