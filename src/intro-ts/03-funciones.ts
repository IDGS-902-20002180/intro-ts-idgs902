//Funciones

//si queremos agregare un tipo de dato a una funcion se le realiza con : y enseguida el tipo de dato
//en typescript tenemos que decirle el tipo de dato de entrada y el de salida, por eso en la funcion definimos los tipos de datos int para los paramrtros y para el return de la function
function sumar(a:number,b:number):number {
    return a+b
}
//esta es una funcion flecha, no tiene el nombre de function 
const sumaFlecha=(a:number,b:number):number => {
    return a+b
}

function multiplicar(numero1:number,numero2?:number,base:number=2):number{
    return numero1*base;
}
const resultado2=multiplicar(5,0,10)
//console.log(resultado2)
const resultado=sumar(3,5)
console.log(resultado2)


//podemos crear funcione que reciba objetos
interface Persona4{
    nombre:string;
    edad:number;
    grupo:()=>void;
}
//parametros de tipo objeto
function UTL(alumno:Persona4,cuatrimestre:number):void{
    alumno.edad=28;
    console.log(alumno);
}
const NuevoAlumno:Persona4={
    nombre:'Mario',
    edad:21,
    grupo(){
        console.log('IDGS902',this.edad);
    }
}
UTL(NuevoAlumno,44);

//funcion anonima
//una funcion anomina es una funcion que no tiene nombre
const funcSumar=function(n1:number,n2:number):number{
return n1+n2;
}
console.log(funcSumar(4,9));

//funcion con parametros opcionales
function calcular(n1:number,n2:number,n3?:number):number{
if(n3){
    return n1+n2+n3;

}
else{
    return n1+n2;
}
}
console.log(calcular(3,2,5));
console.log(calcular(3,2));
//----------------------------------------------------------

//Parametros Rest en funciones
function calcular2(...valores:number[]){
let suma=0;
for(let i=0;i<valores.length;i++)
    suma+=valores[i];
return suma;

}
console.log(calcular2(10,2,3,4));
console.log(calcular2(1,2));
