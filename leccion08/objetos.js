let x = 10;
console.log(x.length);

let persona ={
    nombre: 'Juan',
    apellido: 'Ruiz',
    edad: 10,
    nombreCompleto: function(){
    return this.nombre+' ' +this.apellido;
    }
}
console.log(persona)
console.log(persona.nombreCompleto())

let persona2 = new Object(); //se crea un objeto vacio y se puede agregar mas atributos || new Object -> reserbar un espacion en memoria vacio 
persona2.nombre = 'Carlos';
persona2.direccion = 'Calle 12';


//acceder otra manera 
console.log(persona['nombre'])

for (nombrePropieda in persona){
    console.log(nombrePropieda)
    console.log(persona[nombrePropieda])
}


//eliminar propiedades del onjetp
delete persona.apellido;

//agregar un propierda
persona.tel='321';
console.log(persona)

//imprimir el objetp

//con for
for (nombrePropieda in persona){
  
    console.log(persona[nombrePropieda])
}

//otra manera de imprimir

let personaArray = Object.values(persona)
console.log(personaArray)