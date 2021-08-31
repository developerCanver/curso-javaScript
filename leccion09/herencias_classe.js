
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

        //metodo get
        get apellido(){
            return this._apellido;
        }
    
        //metodo Set
        set apellido(apellido){
             this._apellido = apellido;
        }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        //llmar la clase padre
        super(nombre, apellido);
        this._departamento=departamento;
    }
            //metodo get
            get departamento(){
                return this._departamento;
            }
        
            //metodo Set
            set departamento(departamento){
                 this._departamento = departamento;
            }
}
//cre<r obketo
let persona1 = new Persona('Juan', 'Perez');

console.log(persona1)

let empleado1 = new Empleado('Maycol','Orlando','Nariño');

console.log(empleado1)