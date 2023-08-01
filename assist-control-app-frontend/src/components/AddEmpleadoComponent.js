import React, { useState } from 'react'

export const AddEmpleadoComponent = () => {

    const [nombre,setNombre] =useState('');
    const [apellido,setApellido] =useState('');
    const [correo,setCorreo] =useState('');
    const [id_cargo,setIdCargo] =useState('');
    const [sueldo,setSueldo] =useState('');
    const [tipo_contrato,setTipoContrato] =useState('');


    const saveEmpleado = (e) => {
        e.preventDefault();
        const empleado = {nombre, apellido, correo, id_cargo}
        console.log(empleado);
    }

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


                            </div>
                            <button className='btn btn-success' onClick={(e=>saveEmpleado(e))}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}


export default AddEmpleadoComponent;