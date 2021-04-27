
//creando objeto
const deadpool = {
    nombre: 
    'wade',
    ape: 
    'Winston',
    poder: 
    'inmortal',

    getNombre(){
        return  `${this.nombre} ${this.ape} ${this.poder}`
    }
}
/* console.log(deadpool.getNombre()); // aca se imprime la clase con la función

const nombre = deadpool.nombre;  // aqui se extrae de la clase en variable
const ape = deadpool.ape;
const poder = deadpool.poder;
console.log(nombre, ape, poder);

//LA desectructuración reduce codigo --------------
const{nombre, ape, poder, edad= 85} = deadpool;
console.log(nombre, ape, poder, edad);*/

/*
function verheroe(heroe) { //opción básica
const{nombre, ape, poder, edad= 85} = deadpool; //con la const mantengo el valor de la clase
console.log(nombre, ape, poder, edad);
}
verheroe(deadpool);*/

//llevando la desestructuración como argumento -----------
/*
function verheroe({nombre, ape, poder, edad= 85}) { //opción básica
    
    console.log(nombre, ape, poder, edad);
    }
    verheroe(deadpool); */

    //con arreglos ------------------------
const hero = ['dead', 'super', 'bat'];

const[h1,h2,h3] = hero; // <<<<<< creo las variable desde el formato del array
console.log(h1,h2,h3);
    