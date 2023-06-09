// desestructuracion de objetos

interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumnno2:Alumno1={
matricula1:12345,
nombre:'Mario',
edad:23,
correo:'mario@gmail.com',
grupo:{
    grupo:'IDGS902',
    year:2023,
}
}
//cuaando queremos imprimir el valor de la propiedad es colocar el nombre de la propiedad y signo de pesos y llaves
console.log(`La matricula es: ${alumnno2.matricula1}`)
console.log(`El año es: ${alumnno2.grupo.year}`)

//aqui lo que hacemos es desestructurar el objeto


const {matricula1,grupo:xx}=alumnno2
const {grupo}=xx

console.log(`la Matricula es: ${matricula1}`)
console.log(`El grupo es: ${grupo}`)

//desestructuracion de arreglos
const gps:string[]=['IDGS902','IDGS901','IDGS903'];
console.log(`Grupo 1: ${gps[0]}`)
console.log(`Grupo 2: ${gps[1]}`)
console.log(`Grupo 3: ${gps[2]}`)

const[a,,b]=gps;
console.log(`Grupo 1: ${a}`)