import React, { useEffect, useState } from 'react'
import CargoService from '../services/CargoService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

export const AddCargoComponent = () => {


    const [cargos,setCargos] = useState([]);

    const [nombreCargo,setNombreCargo] = useState('');

    const [idC, setIdC]= useState(-1);

    const navigate = useNavigate();

    

    useEffect(()=>{
        CargoService.getAllCargos().then(response => {
            setCargos(response.data);
        }).catch(error => {
            console.log(error);
        })
        setNombreCargo("");
    },[idC])

    const saveCargo = (e) => {
        e.preventDefault();
        const cargo = {nombreCargo}
        CargoService.saveCargo(cargo).then((response)=> {
            setIdC(response.data.id);
            console.log(response.data);
            swal({
                text: "El cargo fue agregado exitosamente",
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
            
        }).finally(()=>{
            setIdC(2);
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
                            &nbsp;&nbsp;
                            <Link to='/empleados' className='btn btn-danger'>Cancelar</Link>
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