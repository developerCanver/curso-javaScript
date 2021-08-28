
let persona ={
    nombre: 'Juan',
    apellido: 'Ruiz',
    edad: 10,
    nombreCompleto: function(titulo, tel){
    return titulo+ ' '+this.nombre+' ' +this.apellido+ ' '+ tel;
    }
}

let persona1 ={
    nombre: 'Juan',
    apellido: 'Ruiz',
    edad: 10,
    nombreCompleto: function(){
    return this.nombre+' ' +this.apellido;
    }
}

let persona2 ={
    nombre: 'Maia',
    apellido: 'Ortiz',
    edad: 10,

}

console.log(persona.nombreCompleto())
console.log(persona.nombreCompleto.call(persona1,'til','312'))
console.log(persona.nombreCompleto.call(persona2,'Ing' , '12345'))

//pasar parametro con metodo apply
let arreglo = ['Ing', '000']
console.log(persona.nombreCompleto.call(persona2,arreglo))
