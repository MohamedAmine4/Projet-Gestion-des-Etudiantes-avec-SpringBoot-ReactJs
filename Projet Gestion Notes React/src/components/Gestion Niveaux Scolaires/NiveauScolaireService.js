import axios from "axios"
const NIVEAUSCOLAIRE_API_URL ="http://localhost:8080/api/niveauxScolaires/";
// const NIVEAUSCOLAIRE_NIVEAU_API_URL ="http://localhost:8080/api/niveauxScolaires/niveau/";
class NiveauScolaireService {

getNiveauScolaire(){
  return axios.get(NIVEAUSCOLAIRE_API_URL);
}
createNiveauScolaire(niveauScolaire){
  return axios.post(NIVEAUSCOLAIRE_API_URL,niveauScolaire);
}
getNiveauScolaireById(niveauScolaireId){
  console.log(niveauScolaireId);
  return axios.get(NIVEAUSCOLAIRE_API_URL + niveauScolaireId);

}
updateNiveauScolaire(niveauScolaire, niveauScolaireId){
  return axios.put(NIVEAUSCOLAIRE_API_URL + niveauScolaireId ,niveauScolaire);
}

getNiveauScolaireByCodeFiliere(codeFiliere){
  return axios.get(NIVEAUSCOLAIRE_API_URL + 'scolaires/' + codeFiliere);
}

deleteNiveauScolaire(codNiveauSco){
  return axios.delete(NIVEAUSCOLAIRE_API_URL + '/' + codNiveauSco);
}

}

const niveauScolaireService = new NiveauScolaireService();
export default niveauScolaireService ;
