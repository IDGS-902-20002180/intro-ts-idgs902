//herencia 
//declaraicon normal de una clase con dos paramteros
class Persona5{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
    console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}
//heredar o extender es pasarle los parametros que tiene a una clase hijo
class Empleado extends Persona5{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre,edad);
        this.sueldo=sueldo;
    }
    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`)
    }
}