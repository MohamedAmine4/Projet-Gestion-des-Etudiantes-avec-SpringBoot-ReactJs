import axios from "axios";

const PROFESSEUR_API_BASE_URL="http://localhost:8080/api/professeurs/";
const PROFESSEURModule_API_BASE_URL="http://localhost:8080/api/detailsProfsModules/";

class ProfesseurService {

    getProfesseurs(){
        return axios.get(PROFESSEUR_API_BASE_URL);
    }

    createProfesseur(professeur) { 
        return axios.post(PROFESSEUR_API_BASE_URL, professeur);
    }

    getProfesseurById(professeurId){
        return axios.get(PROFESSEUR_API_BASE_URL + professeurId);
    }

    updateProfesseur(professeurId, professeur){
        return axios.put(PROFESSEUR_API_BASE_URL + '/' + professeurId , professeur);
    }

    deleteProfesseur(professeurId){
        return axios.delete(PROFESSEUR_API_BASE_URL + '/' + professeurId);
    }
// -------------------------------------------------------------------------------------
  
        getAllModulesByCINProf(professeurId){
            return axios.get(PROFESSEURModule_API_BASE_URL + professeurId);
        }



}
const professeurService = new ProfesseurService();
export default professeurService;