import axios from "axios"
const RESPONSABLE_API_URL ="http://localhost:8080/api/responsables/";

class ResponsableService {

getResponsable(){
  return axios.get(RESPONSABLE_API_URL);
}
createResponsable(responsable){
  return axios.post(RESPONSABLE_API_URL,responsable);
}
getResponsableById(responsableId){
  return axios.get(RESPONSABLE_API_URL + responsableId);

}
updateResponsable(responsable, responsableId){
  return axios.put(RESPONSABLE_API_URL + responsableId , responsable);
}

deleteRespo(RespoCIN){
  return axios.delete(RESPONSABLE_API_URL + '/' + RespoCIN);
}

}
const responsableService = new ResponsableService() ;
export default responsableService;


