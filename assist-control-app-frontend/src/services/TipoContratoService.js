import axios from "axios";

const TIPO_CONTRATO_BASE_REST_API_URL = "http://localhost:8080/api/tipoContrato";

class TipoContratoService{

        getAllTipoContrato(){
            return axios.get(TIPO_CONTRATO_BASE_REST_API_URL);
        }

        saveTipoContrato(tipoContrato){
            return axios.post(TIPO_CONTRATO_BASE_REST_API_URL,tipoContrato)
        }
        
}

export default new TipoContratoService();