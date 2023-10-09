import axios from "axios"
const NIVEAU_API_URL ="http://localhost:8080/api/niveaux/";

class NiveauService {

getNiveau(){
  return axios.get(NIVEAU_API_URL);
}
createNiveau(niveau){
  return axios.post(NIVEAU_API_URL,niveau);
}
getNiveauById(niveauId){
  console.log(niveauId);
  return axios.get(NIVEAU_API_URL + niveauId);

}
updateNiveau(niveau, niveauId){
  return axios.put(NIVEAU_API_URL + niveauId , niveau);
}

deleteNiveau(codeNiveau){
  return axios.delete(NIVEAU_API_URL + '/' + codeNiveau);
}

}
const niveauService = new NiveauService() 
export default niveauService ;