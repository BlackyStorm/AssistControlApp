import React, { useEffect, useState } from 'react'
import CargoService from '../services/CargoService';
import { useNavigate } from 'react-router-dom';

export const AddCargoComponent = () => {


    const [cargos,setCargos] = useState([]);

    const [nombreCargo,setNombreCargo] = useState('');

    const navigate = useNavigate();

    

    useEffect(()=>{
        CargoService.getAllCargos().then(response => {
            setCargos(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const saveCargo = (e) => {
        e.preventDefault();
        const cargo = {nombreCargo}
        CargoService.saveCargo(cargo).then((response)=> {
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
                                    value={nombreCargo}
                                    onChange={ (e)=> setNombreCargo(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e=>saveCargo(e))}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
            <h2>Cargos existentes</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>
                         Cargos
                    </th>
                </thead>
                <tbody>
                        {
                            cargos.map(
                                cargo =>
                                <tr key={cargo.id}>
                                    <td>{cargo.nombreCargo}</td> 
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


export default AddCargoComponent;