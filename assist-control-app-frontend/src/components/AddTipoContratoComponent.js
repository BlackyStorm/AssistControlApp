import React, { useEffect, useState } from 'react'
import TipoContratoService from '../services/TipoContratoService';
import { useNavigate } from 'react-router-dom';

export const AddTipoContratoComponent = () => {

    const [nombreTipo,setNombre] = useState('');
    const [caracteristica,setCaracteristica] = useState('');

    const [contratos,setContratos]= useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        TipoContratoService.getAllTipoContrato().then(response => {
            setContratos(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const saveTipoContrato = (e) => {
        e.preventDefault();
        const tipoContrato = {nombreTipo,caracteristica}
        TipoContratoService.saveTipoContrato(tipoContrato).then((response)=> {
            console.log(response.data);
            
            navigate('/');
        }).catch(error => {
            console.log(error);
        })
        
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
                                    value={nombreTipo}
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
            <div className='row'>
            <h2>Contratos existentes</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>
                         Contratos
                    </th>
                    <th>
                         Característica
                    </th>
                </thead>
                <tbody>
                        {
                            contratos.map(
                                contrato =>
                                <tr key={contrato.id}>
                                    <td>{contrato.nombreTipo}</td> 
                                    <td>{contrato.caracteristica}</td> 
                                </tr>
                            )
                        }

                    </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}


export default AddTipoContratoComponent;