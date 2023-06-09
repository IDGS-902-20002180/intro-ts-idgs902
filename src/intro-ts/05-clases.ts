class Persona2{
    nombre: string='2';
    edad: number=2;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
    console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }

}
let persona:Persona2;
persona=new Persona2('Mario',21);
persona.imprimir();


//Modificadores de acceso
//un modificador de acceso es una palabra reservada que nos permite definir el nivel de acceso 
//que va tener una propiedad o un metodo de una clase
class Dado{
    private valor:number;
    constructor(){
        this.valor=1;
    }
    public tirar(){
       // 
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
        
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`)
    }
}

let dado1=new Dado;
dado1.tirar();
dado1.imprimir();

//clase 2
class Persona3{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}
let persona3:Persona3;
persona3=new Persona3('Daniel',23);
persona3.imprimir();