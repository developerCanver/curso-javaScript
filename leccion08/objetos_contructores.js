//metodo contructor 
function Persona(nombre,apellido, email){
    this.nombre= nombre;
    this.apellido= apellido;
    this.email= email;
    this.nombreCompleto = function(){
        return this.nombre+' ' +this.apellido;
        //cambiar de minusculas a mayusculas 
    }

}

// crear varios obhetos con el mismo contructor
let padre = new Persona('Juan', 'Perez', 'gmail.com');// es un metodo
console.log(padre)

let madre = new Persona('carlos', 'ruiz', 'gmail.com');// es un metodo
console.log(madre)


//cambiar el on¿bj padre nombre

padre.nombre=('Carloss')
console.log(padre)

console.log(padre.nombreCompleto())

//crear objetos 
let miObjeto = new Object();
let miObjeto2 = {}; // la mas comun

//crear un array 
let miarray = new Array();
let miarray2 =[];  // la mas comun

//crear un array 
let mifuncion = new function(){};
let mifuncion2 = function(){};  // la mas comun




//agregar un atributo al contructor
Persona.prototype.tel='12345';
console.log(padre)