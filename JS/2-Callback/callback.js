//setTimeout( function() {console.log("hola")},  1000);

// setTimeout(    () =>  {console.log("hola2")},  1000);

const getUsuarioById = (id, callback) => {
    const usuario = { 
        id, 
        nombre:"andres"}

setTimeout( () =>   callback(usuario)  , 1500);
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id)
    console.log("usuario")
    console.log(usuario.nombre.toUpperCase())
});
/*
uno de los argumentos es callback, el que se pasa en el getUD.
 entonces en el settime se dispara el callback
como función 
y la función encargada de */ 