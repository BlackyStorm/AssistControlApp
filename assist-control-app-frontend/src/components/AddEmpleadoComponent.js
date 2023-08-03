import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CargoService from '../services/CargoService';
import TipoContratoService from '../services/TipoContratoService';
import ContratoService from '../services/ContratoService';
import EmpleadoService from '../services/EmpleadoService';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const AddEmpleadoComponent = () => {

    const [nombre,setNombre] =useState('');
    const [apellido,setApellido] =useState('');
    const [correo,setCorreo] =useState('');
    const [idCargo,setIdCargo] =useState('');
    const [idContrato,setIdContrato] =useState('');
    const [sueldo,setSueldo] =useState('');

    const [idTipoContrato,setTipoContrato] =useState('');
    const [fecha,setFecha]= useState('');

    const [cargos,setCargos]= useState([]);
    const [tiposContrato, setTiposContrato]= useState([]);

    const navigate = useNavigate();
    
        // crea un nuevo objeto `Date`
    var today = new Date();
        
        // obtener la fecha de hoy en formato `MM/DD/YYYY`
    var now = today.toLocaleDateString('es-ES');

    useEffect(()=>{
         CargoService.getAllCargos().then(response => {
            setCargos(response.data);
            setFecha(now);
        }).catch(error => {
            console.log(error);
        })
    },[])

    useEffect(()=>{
        TipoContratoService.getAllTipoContrato().then(response => {
           setTiposContrato(response.data);
       }).catch(error => {
           console.log(error);
       })
   },[])

    const saveEmpleado = (e) => {
        e.preventDefault();
        setFecha(new Date(now));
        const contrato = {sueldo,idTipoContrato,fecha}
        ContratoService.saveContrato(contrato).then((response)=>{
            console.log(response.data.id);
            setIdContrato(response.data.id)
        }).catch(error =>{
            swal({
                text: "Ocurrio un error, intenta mas tarde",
                icon: "error",
                button: "Aceptar",
                timer: "2000"
            })
            console.log(error);
        })  

    }

    useEffect(()=> {
        if(idContrato!=''){
            const empleado = {nombre, apellido, correo, idCargo,idContrato}
        EmpleadoService.saveEmpelado(empleado).then((response)=>{
            console.log(response.data);
            swal({
                text: "El nuevo empleado fue agregado exitosamente",
                icon: "success",
                button: "Aceptar",
                timer: "2000"
            })
            navigate('/');
        }).catch(error =>{
            swal({
                text: "Ocurrio un error, intenta mas tarde",
                icon: "error",
                button: "Aceptar",
                timer: "2000"
            })
            console.log(error);
        })
        }
    },[idContrato,idCargo,nombre,apellido,correo])

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2>Registro de empleados</h2>
                    <div className='card-body'>
                        <form>
                            <div className='formgroup mb-2'>
                                
                                <label className='form-label'>Nombre</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre del empleado'
                                    name='nombre'
                                    className='form-control'
                                    value={nombre}
                                    onChange={ (e)=> setNombre(e.target.value)}
                                />

                                <label className='form-label'>Apellido</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el apellido del empleado'
                                    name='apellido'
                                    className='form-control'
                                    value={apellido}
                                    onChange={ (e)=> setApellido(e.target.value)}
                                />

                                <label className='form-label'>Correo</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el correo del empleado'
                                    name='apellido'
                                    className='form-control'
                                    value={correo}
                                    onChange={ (e)=> setCorreo(e.target.value)}
                                />

                                <div className='formgroup mb-2' >
                                    <label className='form-label'>Cargo</label>
                                    <select 
                                        onChange={(e)=> setIdCargo(e.target.value)} 
                                        className='form-control'>
                                        <option key={0} value={0}>Seleccione una opcion</option>
                                        {
                                            cargos.map(
                                                c=>
                                                <option key={c.id} value={c.id}>{c.nombreCargo} </option>
                                            )
                                        }
                                    </select>


                                    <label className='form-label'>Tipo de Contrato</label>
                                    <select 
                                        onChange={(e)=> setTipoContrato(e.target.value)} 
                                        className='form-control'>
                                        <option key={0} value={0}>Seleccione una opcion</option>
                                        {
                                            tiposContrato.map(
                                                c=>
                                                <option key={c.id} value={c.id}>{c.nombreTipo} </option>
                                            )
                                        }
                                    </select>

                                    <label className='form-label'>Sueldo</label>
                                    <input
                                        type='text'
                                        placeholder='Ingrese el sueldo del empleado'
                                        name='apellido'
                                        className='form-control'
                                        value={sueldo}
                                        onChange={ (e)=> setSueldo(e.target.value)}
                                    />
                                    
                                
                                </div>

                               



                            </div>
                            <button className='btn btn-success' onClick={(e=>saveEmpleado(e))}>Guardar</button>
                            
                            &nbsp;&nbsp;
                            <Link to='/empleados' className='btn btn-danger'>Cancelar</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}


export default AddEmpleadoComponent;