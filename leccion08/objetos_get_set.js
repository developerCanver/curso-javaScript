let x = 10;
console.log(x.length);

let persona ={
    nombre: 'Juan',
    apellido: 'Ruiz',
    edad: 10,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
        //cambiar de minusculas a mayusculas 
    },

    set lang(lang){
         this.idioma = lang.toUpperCase();
        //cambiar de minusculas a mayusculas 
    },

    // renombrar funcition con get sinifica que se envia resultado 
    get nombreCompleto(){
    return this.nombre+' ' +this.apellido;
    }

}

console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = 'en';
//se llama en metodo  set lang(lang){ por que tiene igual 'en' es el parametro que se envia 
console.log(persona)