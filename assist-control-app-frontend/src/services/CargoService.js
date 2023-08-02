import axios from "axios";

const CARGO_BASE_REST_API_URL = "http://localhost:8080/api/cargos";

class CargoService{

    getAllCargos(){
        return axios.get(CARGO_BASE_REST_API_URL);
    }

    saveCargo(cargo){
        return axios.post(CARGO_BASE_REST_API_URL,cargo)
    }


}

export default new CargoService();