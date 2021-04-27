const empleados = [
{    id: 1, nombre: 'AAndres'  },
{    id: 2, nombre: 'BBB' },
{    id: 3, nombre: 'CCC' } ];

const salarios = [
{ id: 1, salario: 123  },
{ id: 2, salario:  234 },
{ id: 3, salario: 456 } ];

const id=1;
const getEmpleado = (id, callback) =>{

    const empleado = empleados.find( e=>e.id ==id)
    if (empleado) {
        callback(  null, empleado);} //<<<<<<<<<<<<<<<<<<
    else {                                         //  |
        callback (`el empleado ${id} no existe`);}  // |
                                                   //  |
}                                                   // | 


//-----------------------------------
const getSalario = (id, callback) =>{

    const salario = salarios.find( s=>s.id ==id )?.salario;
    if (salario) {
        callback( null, salario);} //<<<<<<<<<<<<<<<<<<
    else {                                         //  |
        callback (`no hay salario para el id ${id} > no existe<`);}  // |
                                                   //  |
}

//mando a ejecutar un callback para la impresión del empleado
//a la hora que se llama el call, se evalua con el null
getEmpleado (id, (err, empleado)=>{
    
    if(err) { 
        console.log ('ERROR');
        return console.log (err);
    }

    getSalario (id, (err, salario) =>{
        if(err) {
            return console.log.apply(err);
        }
        console.log('El empleado ',empleado.nombre, 'empleado gana ', salario);
    });
}); 


