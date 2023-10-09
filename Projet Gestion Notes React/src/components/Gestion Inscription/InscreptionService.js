import axios from "axios"
const ETUDIANT_API_URL ="http://localhost:8080/api/inscreption/";

class InscreptionService {

getInscreption(){
  return axios.get(ETUDIANT_API_URL);
}
createInscreption(etudiant){
  return axios.post(ETUDIANT_API_URL,etudiant);
}
getInscreptionById(etudiantId){
  console.log(etudiantId);
  return axios.get(ETUDIANT_API_URL + etudiantId);

}
updateInscreption(etudiant, etudiantId){
  return axios.put(ETUDIANT_API_URL + etudiantId , etudiant);
}

deleteInscreption(etudiantId) {
  const updatedEtudiant = {
    statut: "Terminer" // Modification du statut de l'étudiant
  };

  return axios.put(ETUDIANT_API_URL + etudiantId, updatedEtudiant);
}


}

const inscreptionService = new InscreptionService() ;
export default inscreptionService ;