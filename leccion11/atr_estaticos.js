//clase padre Persona

class Persona{


    static contadorPersona =0;
    
    //metodo para solo ver no editar
    static get MAX_OBJ(){
        return 5;
    }


    constructor(nombre,apellido){
        //this.apellido nombre del atributo
            this._nombre=nombre;
            this._apellido=apellido;
            this.idPersona=Persona.contadorPersona++;

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
        nombreCompleeto(){
            return this._nombre+ ' '+this._apellido+ ' '+this.idPersona;
        }
        //sobrescribiendo el metodo de la clase ´padre polismorfismo (multiples formas en tiemoi de ejecucion)

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

            //sobre escritura tiene que llamarse el mismo metodo del padre
            nombreCompleeto(){
                //return this._nombre+ ' '+this._apellido+ ', '+this._departamento;
                //super es par aceder metodo padre
                return super.nombreCompleeto()+ ', '+this._departamento;
            }
}
//cre<r obketo
let persona1 = new Persona('Juan', 'Perez');
let persona2 = new Persona('Marlosn', 'Ordoñez');

console.log(persona1)

let empleado1 = new Empleado('Maycol','Orlando','Nariño');

console.log(empleado1)



console.log(Persona.MAX_OBJ)





