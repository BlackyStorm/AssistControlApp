import axios from "axios";

const TIPO_CONTRATO_BASE_REST_API_URL = "http://localhost:8080/api/tipoContrato";

class TipoContratoService{

        getAllTipoContrato(){
            return axios.get(TIPO_CONTRATO_BASE_REST_API_URL);
        }
        
}

export default new TipoContratoService();