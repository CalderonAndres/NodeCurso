const empleados = [
    {    id: 1, nombre: 'AAndres'  },
    {    id: 2, nombre: 'BBB' },
    {    id: 3, nombre: 'CCC' } ];
    
    const salarios = [
    { id: 1, salario: 123  },
    { id: 2, salario:  234 },
    { id: 3, salario: 456 } ];
    
    const id=1;

    //cambio
    const getEmpleado = (id) =>{
      
     const promesa = new Promise((resolve, reject)=>{

        const empleado = empleados.find( e=>e.id ==id )?.nombre
            if(empleado){
                resolve(empleado);
            }
            else{
                reject(`no existe ${id}`);
            }
        });    
        return promesa;
    } 

    getEmpleado(id).then(empleado =>
         console.log(empleado)
    ).catch(err=> console.log(err));    // | 
    
    
    //-----------------------------------
    