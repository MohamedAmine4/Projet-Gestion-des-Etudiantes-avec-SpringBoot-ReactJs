import axios from "axios";

const DETAILProfMod_API_BASE_URL="http://localhost:8080/api/detailsProfsModules/";

class ProfesseurModuleService {

    getDetailsProfsModules(){
        return axios.get(DETAILProfMod_API_BASE_URL);
    }

    ajouterProfModule(profModule) {
        return axios.post(DETAILProfMod_API_BASE_URL, profModule);
    }

    getProfsModulesByCIN(cinProf, codeModule){
        return axios.get(DETAILProfMod_API_BASE_URL + '/' + cinProf + '/' + codeModule);
    }

    getDetailsProfsByCIN(cinProf){
        return axios.get(DETAILProfMod_API_BASE_URL  + cinProf);
    }

    updateProfModule(cinProf, codMod, profModule){
        return axios.put(DETAILProfMod_API_BASE_URL + '/' + cinProf + '/' + codMod, profModule);
    }

    deleteProfModule(cinProf, codModule){
        return axios.delete(DETAILProfMod_API_BASE_URL + '/' + cinProf + '/' + codModule);
    }


}
const professeurModuleService = new ProfesseurModuleService();
export default professeurModuleService;