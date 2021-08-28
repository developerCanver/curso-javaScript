//referencia aun objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Ruiz',
    //atributos del objeto persona
}

function cambiarValorObj(p1){
    p1.nombre= 'Maria';
    p1.apellido ='Ortiz';
}

console.log(persona)

cambiarValorObj(persona);

console.log(persona)