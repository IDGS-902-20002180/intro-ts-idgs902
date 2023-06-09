class PilaEnteros{
    private vec: number[] = [];
    insertar(x: number){
        this.vec.push(x);
    }
    extraer(){
        if (this.vec.length > 0)
            return this.vec.pop();
        else 
        return null
    }
}
class PilaString{
    private vec: string[] = [];
    insertar(x: string){
        this.vec.push(x);
    }
    extraer(){
        if (this.vec.length > 0)
            return this.vec.pop();
        else 
        return null
    }
}

let pila1 = new PilaEnteros();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());

//Cadenas 
let pila2 = new PilaString();
pila2.insertar("Hola");
pila2.insertar("Mundo");
pila2.insertar("!!");
console.log(pila2.extraer());

//las clases genericas nos va permitir crear clases que puedan trabajar con diferentes tipos de datos
//de manera generica 

//clase generica
class PilaGenerica<T>{
    private vec: T[] = [];
    insertar(x: T){
        this.vec.push(x);
    }
    extraer(){
        if (this.vec.length > 0)
            return this.vec.pop();
        else 
        return null
    }
}

let pila3 = new PilaGenerica<number>();
pila3.insertar(23);
pila3.insertar(28);
pila3.insertar(2);
console.log(pila3.extraer());
let pila4 = new PilaGenerica<string>();
pila4.insertar("Hola");
pila4.insertar("Mundo");
pila4.insertar("!!");
console.log(pila4.extraer());
