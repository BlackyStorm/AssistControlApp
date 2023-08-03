import React, { useEffect, useState } from 'react'
import TipoContratoService from '../services/TipoContratoService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export const AddTipoContratoComponent = () => {

    const [nombreTipo,setNombre] = useState('');
    const [caracteristica,setCaracteristica] = useState('');
    const [idC, setIdC]= useState (-1);
    const [contratos,setContratos]= useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        TipoContratoService.getAllTipoContrato().then(response => {
            setContratos(response.data);
        }).catch(error => {
            console.log(error);
        })
        setNombre("");
        setCaracteristica("");
    },[idC])

    const saveTipoContrato = (e) => {
        e.preventDefault();
        const tipoContrato = {nombreTipo,caracteristica}
        TipoContratoService.saveTipoContrato(tipoContrato).then((response)=> {
            setIdC(response.data.id)
            console.log(response.data);
            swal({
                text: "El nuevo tipo de contrato fue agregado exitosamente",
                icon: "success",
                button: "Aceptar",
                timer: "2000"
            })
        }).catch(error => {
            swal({
                text: "Ocurrio un error, intenta mas tarde",
                icon: "error",
                button: "Aceptar",
                timer: "2000"
            })
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
                            &nbsp;&nbsp;
                            <Link to='/empleados' className='btn btn-danger'>Cancelar</Link>
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