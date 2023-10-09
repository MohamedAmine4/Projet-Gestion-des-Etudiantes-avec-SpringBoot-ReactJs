import axios from "axios";

const ETUDIANT_API_BASE_URL="http://localhost:8080/api/etudiants/";

class EtudiantService {

    getEtudiants(){
        return axios.get(ETUDIANT_API_BASE_URL);
    }

    createEtudiant(etudiant) {
        return axios.post(ETUDIANT_API_BASE_URL, etudiant);
    }

    getEtudiantById(etudiantId){
        return axios.get(ETUDIANT_API_BASE_URL + '/' + etudiantId);
    }

    updateEtudiant(etudiantId, etudiant){
        return axios.put(ETUDIANT_API_BASE_URL + '/' + etudiantId , etudiant);
    }

    deleteEtudiant(etudiantId){
        return axios.delete(ETUDIANT_API_BASE_URL + '/' + etudiantId);
    }


 // Récupérer tous les étudiants qui ont la même filière :
    getAllEtudiantsByCodeFil(codeFiliere){
        return axios.get("http://localhost:8080/api/etudiants/filiere/"  + codeFiliere);
    } 


}
const etudiantService = new EtudiantService();
export default etudiantService;