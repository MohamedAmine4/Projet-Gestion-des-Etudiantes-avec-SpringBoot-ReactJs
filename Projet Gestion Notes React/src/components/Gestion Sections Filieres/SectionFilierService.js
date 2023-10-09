import axios from "axios"
const SECTION_API_URL ="http://localhost:8080/api/sectionFilier/";

class SectionFilierService {

getSectionFilier(){
  return axios.get(SECTION_API_URL);
}
createSectionFilier(id){
  return axios.post(SECTION_API_URL,id);
}

getSectionFilierById(id){
  return axios.get(SECTION_API_URL + id);
}

updateSectionFilier(codeSecId, id){
  return axios.put(SECTION_API_URL + id , codeSecId);
}

// deleteSectionFilier(id) {
//   return axios.put(SECTION_API_URL + id);
// }

deleteSectionFilier(codeFil, codeSec) {
  return axios.delete(SECTION_API_URL + codeFil + '/' + codeSec);
}

getSectionsFilieresByDesignation(designat){
  return axios.get(SECTION_API_URL + 'designation/' + designat);  
}

getAllSectionsByCodeFiliere(codeFiliere){
  return axios.get(SECTION_API_URL + 'allSections/' + codeFiliere); 
}

}
const sectionFilierService = new SectionFilierService() ;
export default sectionFilierService ;


