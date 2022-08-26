
class Persona{
    nombre;
    apellido;
    edad;

    getDetalles(){
        return this.nombre + " " + this.apellido + ", " +this.edad ;
    }

    constructor(nombre= "Jhon", apellido= "Doe", edad= 20){
        this.nombre=nombre;
        this.apellido=apellido; 
         this.edad=edad;
    }
}

class Empleado extends Persona{
    empleadoconfianza;
    empleadosindicato;

    getDetalles(){
        return super.getDetalles() + " " +this.empleadoconfianza + " " + this.empleadosindicato;

    }
     constructor( empleadoconfianza= "C", empleadosindicato="S"){
        
       
         super( "jhon", "Doe", 20);
         this.empleadoconfianza=empleadoconfianza;
         this.empleadosindicato=empleadosindicato;
    }
}

class Nomina extends Empleado{
    arregloempleado=[];

    getDetalles(){
        return super.getDetalles() + " " +this.arregloempleado;

    }

    calcularNomina(){
        return this.arregloempleado;
    }

    constructor(arregloempleado= []){
       super( "jhon", "Doe", 20, "C", "S");
        this.arregloempleado=arregloempleado;
    }

}
const empleado1= new Persona("Maria", "Lopez", 50); 
console.log(empleado1.getDetalles());
console.log(new Empleado().getDetalles());
console.log(new Nomina().getDetalles());
