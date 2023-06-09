//declaramos variables con tipos de datos


//debemos defirnir variable utilizando un tipo de dato para referenciar esa variable


let nombre: string = "RCR"
//nombre = 35

let datos : string |number=95 
datos = "IDSG902"
let vivo:boolean=false 
//objetos, arreglos, interfaces 
// tipo de dato que nos permite colocar en el cualquier tipo de dato 'any'

let mascotas=['perro','gato',100,true]
//aqui establecemos que tipos de datos queremos que tenga nuestro arreglo
let tem:(boolean|number|string)[]=['aaaa',100]

//console.log(alumno)

// aqui lo que hacemos es crear un objeto con la interface y lo que hacemos 
//es crear un objeto con la interface
let vector:number[]=[1,2,3];
vector[2]=8;
vector.push(9);
for( let elemento of vector )
    console.log(elemento)

console.log(vector)