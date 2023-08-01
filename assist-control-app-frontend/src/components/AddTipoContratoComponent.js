import React, { useState } from 'react'

export const AddTipoContratoComponent = () => {

    const [nombre,setNombre] = useState('');
    const [caracteristica,setCaracteristica] = useState('');

    const saveTipoContrato = (e) => {
        e.preventDefault();
        const tipoContrato = {nombre,caracteristica}
        console.log(tipoContrato);
    }


  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2>Registro de un nuevo tipo de contrato</h2>
                    <div className='card-body'>
                        <form>
                            <div className='formgroup mb-2'>
                                <label className='form-label'>Nombre del contrato</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre del nuevo contrato'
                                    name='nombre'
                                    className='form-control'
                                    value={nombre}
                                    onChange={ (e)=> setNombre(e.target.value)}
                                />

                                <label className='form-label'>Característica del contrato</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese la caracteristica del nuevo contrato'
                                    name='nombre'
                                    className='form-control'
                                    value={caracteristica}
                                    onChange={ (e)=> setCaracteristica(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e=>saveTipoContrato(e))}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default AddTipoContratoComponent;