//establecemos el tpo de datos que va tener el arreglo, que es un arreglo y los datos que va tener el arreglo
let nombres: string[]=['Juan','pedro','mario']

interface Persona {
    nombre: string;
    grupo: string;
    edad: number;
    materias:string[];
    activo?:string
}

//creacion de objeto apartir de la interface
const alumno:Persona= {
    nombre:'Juan Daniel de Jesus',
    grupo:'IDGS902',
    edad:21,
    materias:['Español','Matematicas','Geografia']

}
alumno.activo="inscrito"
console.table(alumno)

let vector1:Array<number>=[9,8,7,6]
vector1.push(10)
vector1[1]=22
for (let temp of vector1)
    console.log(temp)
//----------------------------------------------------------

let tem2:(number | string)[]=[]
tem2.push('mario')
tem2.push(123)
//----------------------------------------------------------
