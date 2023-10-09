import axios from "axios"
const FILIER_API_URL ="http://localhost:8080/api/filieres/";
// const FILIERNIVEAU_API_URL ="http://localhost:8080/api/filier/niveau/";

class FilierService {

getFilier(){
  return axios.get(FILIER_API_URL);
}
createFilier(filier){
  return axios.post(FILIER_API_URL,filier);
}
getFilierById(filierId){
  return axios.get(FILIER_API_URL +'codeFiliere/'+ filierId);

}
updateFilier(filier, filierId){
  return axios.put(FILIER_API_URL + filierId , filier);
}
getFilierNiveau(niveauId){
  return axios.get(FILIER_API_URL + niveauId);
}

deleteFiliere(codeFiliere){
  return axios.delete(FILIER_API_URL + '/' + codeFiliere);
}

getAllFiliereByCinRespo(cinRes){
  return axios.get(FILIER_API_URL + 'responsable/' + cinRes);
}

}
const filierService = new FilierService();
export default filierService;