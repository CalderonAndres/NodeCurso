const nombre = 'deadpool';
const real = 'wade wilson';
const normal = nombre +' ' + real;

const template = `Fernando Herrera`;   //backticks

console.log(normal);
console.log(template);

const template2 = `${1+5} Fernando Herrera`; //Los num a string directamente
console.log(template2);

const template3 = `${nombre} +${real} `; 
console.log(template3);

console.log(template3 == template2);