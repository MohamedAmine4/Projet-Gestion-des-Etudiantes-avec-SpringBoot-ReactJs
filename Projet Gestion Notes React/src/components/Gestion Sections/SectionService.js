import axios from "axios"
const SECTION_API_URL ="http://localhost:8080/api/section/";

class SectionService {

getSection(){
  return axios.get(SECTION_API_URL);
}
createSection(codeSec){
  return axios.post(SECTION_API_URL,codeSec);
}
getSectionByCodeSec(codeSecId){
  return axios.get(SECTION_API_URL + codeSecId);

}
updateSection(codeSecId, codeSec){
  return axios.put(SECTION_API_URL + codeSec , codeSecId);
}

deleteSection(codeSec) {
  return axios.delete(SECTION_API_URL + codeSec);
}
}
const sectionService = new SectionService() ;
export default sectionService ;


