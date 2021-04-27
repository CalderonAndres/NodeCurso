const empleados = [
    {    id: 1, nombre: 'AAndres'  },
    {    id: 2, nombre: 'BBB' },
    {    id: 3, nombre: 'CCC' } ];
    
    const salarios = [
    { id: 1, salario: 123  },
    { id: 2, salario:  234 },
    { id: 3, salario: 456 } ];
    
    const id=11;
    //cambio
    const getEmpleado = (id) =>{   
    return new Promise((resolve, reject)=>{

        const empleado = empleados.find( e=>e.id ==id )?.nombre;
            (empleado)
                ? resolve(empleado)
                : reject(`no existe ${id}`);
            
        });   }   
      //  return promesa;
    const getSalario = (id) =>{   
    return new Promise((resolve, reject)=>{
        const salario = salarios.find( s=>s.id ==id )?.salario;
            (salario)
             ? resolve (salario)
             : reject ("no tiene salario");
        });   }
             //  return promesa;  
       
    let nombre;
    getEmpleado(id).then(empleado =>{
        nombre = empleado;
         return getSalario(id);
    })
         //como este callback regresa una promesa, puedo concatenar otro then
    .then(salario => console.log('El empleado ', nombre, 'gana: ', salario))
    .catch(err => console.log(err));
    