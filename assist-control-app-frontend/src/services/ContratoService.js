import axios from "axios";

const CONTRATO_BASE_REST_API_URL = "http://localhost:8080/api/contratos";

class ContratoService{

        getAllContrato(){
            return axios.get(CONTRATO_BASE_REST_API_URL);
        }

        saveContrato(contrato){
            return axios.post(CONTRATO_BASE_REST_API_URL,contrato)
        }
        
}

export default new ContratoService();