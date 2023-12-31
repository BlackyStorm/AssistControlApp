import axios from "axios";

const EMPLEADO_BASE_REST_API_URL = "http://localhost:8080/api/empleados";


class EmpleadoService{

    getAllEmpleados(){
        return axios.get(EMPLEADO_BASE_REST_API_URL);
    }

    getAllEmpleadosWithPositionAndContract(){
        return axios.get(EMPLEADO_BASE_REST_API_URL+"/all")
    }

    saveEmpelado(empleado){
        return axios.post(EMPLEADO_BASE_REST_API_URL,empleado)
    }

}

export default new EmpleadoService();