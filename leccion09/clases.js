//esto no es posible antes de declarar la clase 
// no se aplica el concepto de hosting
//let persona2 = new Persona('Mario', 'Ortiz');
class Persona{
    constructor(nombre,apellido){
        //this.apellido nombre del atributo
            this._nombre=nombre;
            this._apellido=apellido;

    }

    //metodo get
    get nombre(){
        return this._nombre;
    }

    //metodo Set
    set nombre(nombre){
         this._nombre = nombre;
    }
}


//cre<r obketo
let persona1 = new Persona('Juan', 'Perez');

console.log(persona1)


let persona2 = new Persona('Carlos', 'Ruiz');

console.log(persona2)


//Metodo Get 

console.log(persona1.nombre)// llama el metodo GEt


//Metodo  Set
persona1.nombre = 'Maria';//llama el metodo set y se envia maria
console.log(persona1.nombre)
