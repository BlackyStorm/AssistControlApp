import React, { useState } from 'react'

export const AddCargoComponent = () => {

    const [nombre,setNombre] = useState('');

    const saveCargo = (e) => {
        e.preventDefault();
        const cargo = {nombre}
        console.log(cargo);
    }

  return (
   <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2>Registro de un nuevo cargo</h2>
                    <div className='card-body'>
                        <form>
                            <div className='formgroup mb-2'>
                                <label className='form-label'>Nombre del cargo</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre del nuevo cargo'
                                    name='nombre'
                                    className='form-control'
                                    value={nombre}
                                    onChange={ (e)=> setNombre(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e=>saveCargo(e))}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default AddCargoComponent;