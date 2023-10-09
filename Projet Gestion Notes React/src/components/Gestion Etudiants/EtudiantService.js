import axios from "axios"
const ETUDIANT_API_URL ="http://localhost:8080/api/etudiants/";

class EtudiantService {

getEtudiant(){
  return axios.get(ETUDIANT_API_URL);
}
createEtudiant(etudiant){
  return axios.post(ETUDIANT_API_URL,etudiant);
}

getEtudiantById(etudiantId){
  return axios.get(ETUDIANT_API_URL + '/' + etudiantId);
}

updateEtudiant(etudiant, etudiantId){
  return axios.put(ETUDIANT_API_URL + etudiantId , etudiant);
}

// deleteEtudiant(etudiantId) {
//   const updatedEtudiant = {
//     statut: "Terminer" // Modification du statut de l'étudiant
//   };

//   return axios.put(ETUDIANT_API_URL + etudiantId, updatedEtudiant);
// }

deleteEtudiant(EtudCIN){
  return axios.delete(ETUDIANT_API_URL + '/' + EtudCIN);
}


}

const etudiantService = new EtudiantService();
export default etudiantService ;