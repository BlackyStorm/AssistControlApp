import React, { useEffect, useState } from 'react'
import EmpleadoService from '../services/EmpleadoService';
import { Link } from 'react-router-dom';

export const ListEmpleadosComponent = () => {

    const [empleados,setEmpleados] = useState([]);

    const [searchPosition,setSearchPosition]= useState("");
    const [searchContract,setSearchContract]= useState("");
    const [searchName,setSearchName]= useState("");
    const [searchSurname,setSearchSurname]= useState("");
    const [searchEmail,setSearchEmail]= useState("");
    const [resultados,setResultados]= useState([]);

    useEffect(()=>{
        EmpleadoService.getAllEmpleadosWithPositionAndContract().then(response => {
            setEmpleados(response.data);
            setResultados(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])


    const searcherPosition= (e) =>{
        setSearchPosition(e.target.value)
    }

    const searcherContract= (e) =>{
        setSearchContract(e.target.value)
        //console.log(e.target.value);
    }

    const searcherName= (e) =>{
        setSearchName(e.target.value)
    }
    
    const searcherSurname= (e) =>{
        setSearchSurname(e.target.value)
    }

    const searcherEmail= (e) =>{
        setSearchEmail(e.target.value)
    }


           


    useEffect(()=>{
        let copyResultados =!searchPosition ? empleados: empleados.filter((emple) =>emple.cargo.toLowerCase().includes(searchPosition.toLocaleLowerCase()));
        copyResultados= !searchContract? copyResultados:copyResultados.filter((emple)=> emple.tipoContrato.toLowerCase().includes(searchContract.toLocaleLowerCase()));
        copyResultados=!searchEmail ? copyResultados: copyResultados.filter((emple) =>emple.correo.toLowerCase().includes(searchEmail.toLocaleLowerCase()));
        copyResultados=!searchSurname ? copyResultados: copyResultados.filter((emple) =>emple.apellido.toLowerCase().includes(searchSurname.toLocaleLowerCase()));
        copyResultados=!searchName ? copyResultados: copyResultados.filter((emple) =>emple.nombre.toLowerCase().includes(searchName.toLocaleLowerCase()))

        setResultados(copyResultados);
        
    },[searchPosition,searchContract,searchName,searchSurname,searchEmail])
    
    

  return (
    <div className='container'>
            <h2 className='text-center'>Lista de Empelados</h2>
            <Link to='/add-empleados' className='btn btn-primary mb-2' style={{margin:3}} >Agregar empleado</Link>
            <Link to='/add-cargo' className='btn btn-primary mb-2'  style={{margin:3}}>Agregar nuevo cargo</Link>
            <Link to='/add-tipo-contrato' className='btn btn-primary mb-2' style={{margin:3}}  >Agregar nuevo tipo de contrato</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>
                        Nombre
                        
                    </th>
                    <th>
                        Apellido
                    </th>
                    <th>
                        Correo
                    </th>
                    <th>
                        Cargo
                    </th>
                    <th>
                        Tipo de contrato
                    </th>
                    <th>
                        Acciones
                    </th>
                </thead>
                <tbody>
                    <th>
                        <input value={searchName} onChange={searcherName} type='text' placeholder='filtrar' className='form-control'/>
                    </th>
                    <th>
                        <input value={searchSurname} onChange={searcherSurname} type='text' placeholder='filtrar'  className='form-control'/>
                    </th>
                    <th>
                        <input value={searchEmail} onChange={searcherEmail} type='text' placeholder='filtrar'  className='form-control'/>
                    </th>
                    <th>
                        <input value={searchPosition} onChange={searcherPosition} type='text' placeholder='filtrar'  className='form-control'/>
                    </th>
                    <th>
                        <input value={searchContract} onChange={searcherContract} type='text' placeholder='filtrar'  className='form-control'/>
                    </th>
                    <th>
                        
                    </th>
                        {
                            resultados.map(
                                empleado =>
                                <tr key={empleado.id}>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.correo}</td>
                                    <td>{empleado.cargo}</td>
                                    <td>{empleado.tipoContrato}</td>
                                    <td></td>
                                    
                                </tr>
                            )
                        }

                    </tbody>
            </table>

    </div>
  )
}


export default ListEmpleadosComponent;