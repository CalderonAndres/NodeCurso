/* function sumar(a,b){  //Funcion tradicional que se usa para cosillas especificas con un motivo
return a+b;

}
console.log( sumar(5,8)); */


//---- lo mismo a flecha

/*const sumar =(a,b=2) => {
    return a+b;
}
console.log( sumar(5)); 
*/
// es equivalente con 
const sumar =(a,b) =>a+b ; // (argumentos) => variables     
console.log( sumar(5, 9)); 

const saludar =() =>"Holamundo"; // (argumentos) => variables     
console.log( saludar()); 