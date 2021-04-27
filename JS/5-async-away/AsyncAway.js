const empleados = [
    {    id: 1, nombre: 'AAndres'  },
    {    id: 2, nombre: 'BBB' },
    {    id: 3, nombre: 'CCC' } ];
    
    const salarios = [
    { id: 1, salario: 123  },
    { id: 2, salario:  234 },
    { id: 3, salario: 456 } ];
    
    const id=12;
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

    getInfoUser = async(id)=>{  //transforma la función para devolver una promesa
       try{
        const empleado = await getEmpleado(id);
       const salario = await getSalario(id);
       return `el salario del empleado ${empleado} es de ${salario} `;
    }catch(error){
        throw error;
                }
    }    
    
    getInfoUser(id)
    .then(msg=> {
        console.log("todo bien")
        console.log(msg)})
    .catch(err=>{
        console.log("todo Mal")
        console.log(err);
    });
    