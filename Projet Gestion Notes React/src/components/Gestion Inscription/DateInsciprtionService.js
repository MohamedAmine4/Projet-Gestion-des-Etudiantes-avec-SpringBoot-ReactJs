import axios from "axios"
const RESPONSABLE_API_URL ="http://localhost:8080/api/dateinscreption/";

class DateInscriptionService {

getDate(){
  return axios.get(RESPONSABLE_API_URL);
}
createDate(date){
  return axios.post(RESPONSABLE_API_URL,date);
}
getDateById(dateId){
  return axios.get(RESPONSABLE_API_URL + dateId);

}
updateDate(responsable, dateId){
  return axios.put(RESPONSABLE_API_URL + dateId , responsable);
}

deleteDateInscription(dateId) {
  return axios.delete(RESPONSABLE_API_URL + dateId);
}
}
const dateInscriptionService = new DateInscriptionService() ;
export default dateInscriptionService ; 


