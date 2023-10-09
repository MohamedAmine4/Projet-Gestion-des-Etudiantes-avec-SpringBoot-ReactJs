import axios from "axios";

const NIVEAU_API_BASE_URL="http://localhost:8080/api/niveaux/";
const FILIERE_API_BASE_URL="http://localhost:8080/api/filieres/";
const NIVEAUSCOLAIRE_API_BASE_URL="http://localhost:8080/api/niveauxScolaires/";
const MODULE_API_BASE_URL="http://localhost:8080/api/modules/";

class NiveauEtude {

//------------------------ Niveau : -----------------------------------------------------------------
    getNiveaux(){
        return axios.get(NIVEAU_API_BASE_URL);
    }
    getNiveauByCode(codeNiveau){
        return axios.get(NIVEAU_API_BASE_URL + '/' + codeNiveau);
    }
//------------------------ Filiere : -----------------------------------------------------------------
    getFilieres(){
        return axios.get(FILIERE_API_BASE_URL);
    }
    getFilieresByCodeNiveau(codeNiveau){
        return axios.get(FILIERE_API_BASE_URL + codeNiveau);
    }
//------------------------ Niveau Scolaire : ----------------------------------------------------------
    getNiveauxScolaires(){
        return axios.get(NIVEAUSCOLAIRE_API_BASE_URL);
    }
    getNiveauxScolairesByCodeFiliere(codeFiliere){
        return axios.get(NIVEAUSCOLAIRE_API_BASE_URL + 'niveau/' + codeFiliere);
    }
//------------------------ Module : -------------------------------------------------------------------
    getModules(){
        return axios.get(MODULE_API_BASE_URL);
    }
    getModulesByCodeNivSco(codeNivSco){
        return axios.get(MODULE_API_BASE_URL + '/' + codeNivSco);
    }


}
const niveauEtude = new NiveauEtude();
export default niveauEtude;